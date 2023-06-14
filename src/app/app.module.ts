import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeListComponent } from './node-list/node-list.component';
import { NodeFormComponent } from './node-form/node-form.component';
import { Neo4jService } from './neo4j.service';


import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NodeListComponent,
    NodeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [Neo4jService],
  bootstrap: [AppComponent]
})
export class AppModule { }
