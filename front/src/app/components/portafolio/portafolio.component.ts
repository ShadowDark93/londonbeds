import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Products } from 'src/app/models/products';
import { PortafolioService } from 'src/app/services/portafolio.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  products: Products[] = [];

  languaje: string='';

  constructor(
    private portfolio: PortafolioService,
    /* private detail: DetailComponent, */
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.portfolio.getAllProduction().subscribe(res => {
      res.forEach(el => {
        this.products.push(el);
      });
    });
  }

  redirectToDetail(id: any) {
    this.router.navigate([id]);
  }

}
