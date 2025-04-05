import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

interface Topping {
  id: number;
  name: string;
  active?: boolean;
}

@Component({
  selector: 'app-choose-toppings-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './choose-toppings-product.component.html',
  styleUrls: ['./choose-toppings-product.component.css', '../main-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseToppingsProductComponent implements OnInit {
  /** Listado de toppings disponibles */
  public chooses: Topping[] = [
    { id: 1, name: 'Pineapple', active: true },
    { id: 2, name: 'Jalapenos' },
    { id: 3, name: 'Sweet Corn' },
    { id: 4, name: 'Pepperoni' },
    { id: 5, name: 'Red Onions'},
    { id: 6, name: 'Anchovies', active: true },
    { id: 7, name: 'Ground Beef' },
    { id: 8, name: 'Chicken Tikka', active: false },
    { id: 9, name: 'Mushroom'},
    { id: 10, name: 'Tuna' }
  ];

  /** IDs de los toppings seleccionados */
  public selectedIds: number[] = [];
  
  constructor(
    public customProductService: CustomProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }
  
  /**
   * Inicializa el componente y carga las selecciones previas
   */
  ngOnInit(): void {
    this.loadSelectedToppingsFromParams();
  }
  
  /**
   * Carga los toppings seleccionados desde los parámetros de URL
   */
  private loadSelectedToppingsFromParams(): void {
    this.route.parent?.params.subscribe(params => {
      if (params['choose']) {
        this.selectedIds = params['choose'].split(',').map(Number);
        this.customProductService.custom['left-half'].choose = [...this.selectedIds];
        this.updateActiveChooses();
        this.cdr.markForCheck();
      }
    });
  }
  
  /**
   * Actualiza el estado visual de los toppings según las selecciones
   */
  private updateActiveChooses(): void {
    this.chooses.forEach(choose => {
      choose.active = this.selectedIds.includes(choose.id);
    });
  }
  
  /**
   * Maneja la selección/deselección de un topping
   * @param chooseId ID del topping seleccionado
   * @param event Evento del click
   */
  toggleSelection(chooseId: number, event: Event): void {
    event.preventDefault();
    
    // Toggle de selección usando técnicas de inmutabilidad
    const index = this.selectedIds.indexOf(chooseId);
    if (index > -1) {
      this.selectedIds = [...this.selectedIds.slice(0, index), ...this.selectedIds.slice(index + 1)];
    } else {
      this.selectedIds = [...this.selectedIds, chooseId];
    }
    
    // Actualizar UI y servicio
    this.updateActiveChooses();
    this.customProductService.custom['left-half'].choose = [...this.selectedIds];
    this.cdr.markForCheck();
    
    // Navegar con las selecciones actualizadas
    this.confirmSelection();
  }
  
  /**
   * Navega a la siguiente ruta con los parámetros actualizados
   */
  confirmSelection(): void {
    const chooseStr = this.selectedIds.join(',');
    
    this.router.navigate([
      '/create-pizza',
      {
        size: this.customProductService.custom.size,
        crust: this.customProductService.custom.crust,
        topping: this.customProductService.custom.topping
      },
      'left-half',
      {
        sauce: this.customProductService.custom['left-half'].sauce,
        choose: chooseStr
      }
    ]).then(success => {
      if (!success) {
        console.error('Error en la navegación');
      }
    });
  }
}