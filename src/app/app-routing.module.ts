import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './header/about/about.component';
import { ContactComponent } from './header/contact/contact.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'',redirectTo:"/converter",pathMatch:"full"},
  {path:'header',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'converter', component:ConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
