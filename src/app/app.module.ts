import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components PrimeNg
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Use of HTTP Cliente
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { CreateDetailComponent } from './core/feature/create-detail/create-detail.component';
import { DeleteDetailComponent } from './core/feature/delete-detail/delete-detail.component';
import { EditDetailComponent } from './core/feature/edit-detail/edit-detail.component';
import { ListDetailsComponent } from './core/feature/list-details/list-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateDetailComponent,
    DeleteDetailComponent,
    EditDetailComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
