import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FramePageComponent } from './pages/master/frame-page';
import { FormsModule } from '@angular/forms';
import { ConsultaComponent } from './consulta/consulta.component';
import { InvestimentoComponent } from './investimento/investimento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FramePageComponent,
    ConsultaComponent,
    InvestimentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
