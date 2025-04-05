import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomProductService } from '@services/custom-product.service';

@Component({
  selector: 'app-product-parts',
  standalone: true,
  imports: [],
  templateUrl: './product-parts.component.html',
  styleUrls: ['./product-parts.component.css', '../main-user.component.css']
})
export class ProductPartsComponent {
constructor(
    public customProductService: CustomProductService,
    private route: ActivatedRoute,
     private router: Router,
  ){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      if (this.router.url.includes('/right-half')) {
        
      }else{
        // console.log('params', params);
        
      }
      // if (params['size']) {
      //   const sizeId = +params['size'];
      //   this.customProductService.custom.size = sizeId;
      //   this.updateActiveSize(sizeId);
      // }
    });
  }
}
