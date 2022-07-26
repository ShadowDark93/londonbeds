import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IndexComponent } from './components/products/index/index.component';
import { DiscountComponent } from './components/discount/discount.component';
import { DetailComponent } from './components/portafolio/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    InicioComponent,
    NosotrosComponent,
    PortafolioComponent,
    WhyUsComponent,
    TiendasComponent,
    ContactoComponent,
    IndexComponent,
    DiscountComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
