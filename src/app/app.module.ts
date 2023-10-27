import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ImagencentroComponent } from './componentes/imagencentro/imagencentro.component';
import { NuestrostrabajosComponent } from './componentes/nuestrostrabajos/nuestrostrabajos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ImagencentroComponent,
    NuestrostrabajosComponent,
    NosotrosComponent,
    FooterComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
