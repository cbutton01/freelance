import { Component, OnInit } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
