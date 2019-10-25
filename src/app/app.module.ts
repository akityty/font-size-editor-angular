import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1DemoComponent } from './test1-demo/test1-demo.component';
import { Test3DemoComponent } from './test3-demo/test3-demo.component';
import {Test2DemoComponent} from './test2-demo/test2-demo.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    Test1DemoComponent,
    Test3DemoComponent,
    Test2DemoComponent,
    FontSizeEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
