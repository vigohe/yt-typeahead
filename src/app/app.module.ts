import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SearchService} from './search.service';

import {AppComponent} from './app.component';
import {CovalentJsonFormatterModule, CovalentLayoutModule, CovalentSearchModule, CovalentStepsModule} from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';
import {MdCardModule, MdIconModule, MdProgressBarModule, MdTabsModule, MdToolbarModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentSearchModule,
    BrowserAnimationsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    CovalentJsonFormatterModule,
    MdProgressBarModule,
    MdTabsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
