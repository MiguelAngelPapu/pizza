import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-choose-toppings-product',
  templateUrl: './choose-toppings-product.component.html',
  styleUrls: ['./choose-toppings-product.component.css', '../main-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseToppingsProductComponent implements OnInit {
  public selectedIds: number[] = [];

  constructor(
    public customProductService: CustomProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    
    
  }

  ngOnInit(): void {
   
    setTimeout(() => {
      this.route.parent?.params.subscribe(params => {
        this.selectedIds = params['choose']?.split(',').map(Number) || [];
        this.updateSelections();
        this.customProductService.createProductService.localStorage = this.customProductService.custom;
      });
    }, 200);
  }

  toggleSelection(chooseId: number, event: Event): void {
    event.preventDefault();
    this.selectedIds = this.selectedIds.includes(chooseId)
      ? this.selectedIds.filter(id => id !== chooseId)
      : [...this.selectedIds, chooseId];
    this.updateSelections();
    this.navigateWithSelections();
  }

  private updateSelections(): void {
    const view = this.customProductService.customViews as 'left-half' | 'right-half';
    this.customProductService.custom[view].choose = [...this.selectedIds];
    this.customProductService.chooseToppingsService.chooses.forEach(choose => {
      choose.active = this.selectedIds.includes(choose.id);
    });
    this.cdr.markForCheck();
  }

  private navigateWithSelections(): void {
    const view = this.customProductService.customViews as 'left-half' | 'right-half';
    this.router.navigate([`/${view}`, { 
      sauce: this.customProductService.custom[view].sauce,
      choose: this.selectedIds.join(',') 
    }]).catch(() => {
      console.error('Navigation error');
    });
  }
}
