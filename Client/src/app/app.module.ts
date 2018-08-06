import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { ProjectModule } from './components/project/project.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TicketCreateModule } from './components/ticket-create/ticket-create.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCreateModule } from './components/project-create/project-create.module';
import { TicketModule } from './components/ticket/ticket.module';
import { TicketEditModule } from './components/ticket-edit/ticket-edit.module';
import { DragulaModule } from 'ng2-dragula';
import { ServerErrorModule } from './shared/components/server-error/server-error.module';
import { ServerErrorService } from './shared/services/server-error.service';
import { MenuModule } from './shared/components/menu/menu.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    ProjectModule,
    TicketCreateModule,
    ProjectCreateModule,
    Ng4LoadingSpinnerModule,
    FormsModule,
    HttpClientModule,
    TicketModule,
    TicketEditModule,
    ServerErrorModule,
    MenuModule,
    DragulaModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [ElectronService, ServerErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
