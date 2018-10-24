import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HttpClientModule }    from '@angular/common/http';
import { ShowCatsComponent } from './show-cats/show-cats.component';
import { AppRoutingModule } from './app-routing.module';   

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ShowCatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
