import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Aside1Component } from './aside1/aside1.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    MainComponent,
    HeaderComponent,
    ReactiveComponent,
    TemplateFormComponent,
    Aside1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
