import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { InvestimentoComponent } from './investimento/investimento.component';
import { FramePageComponent } from './pages/master/frame-page';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      {
        path: "consulta-usuario",
        component: ConsultaComponent
      },
      {
        path: 'simular-investimento',
        component: InvestimentoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }