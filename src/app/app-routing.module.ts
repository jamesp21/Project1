import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCatsComponent }      from './show-cats/show-cats.component';
import { ToDoComponent }      from './to-do/to-do.component';

const myRoutes: Routes = [
  { path: 'cats', component: ShowCatsComponent },
  { path: 'todo', component: ToDoComponent }
 ];
 

@NgModule({
  imports: [
    RouterModule.forRoot(myRoutes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
