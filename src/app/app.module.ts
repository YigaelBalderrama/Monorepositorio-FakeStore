import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { InterceptorService } from './services/interceptors/interceptor.service';
import { NxWelcomeComponent } from "./nx-welcome.component";
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';

const appRoutes :Routes = [
  { path :'home', component:AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    BarComponent,
    ListOfProductsComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
