import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule }  from '@angular/common';
import { HttpModule } from '@angular/http';

import { TableService } from './table/table.service';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

const routes: Routes=[
  { path: 'form', component:FormComponent},
  { path: 'table', component:TableComponent},  
  ]


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),ReactiveFormsModule,
    FormsModule,HttpModule,HttpClientModule

  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
