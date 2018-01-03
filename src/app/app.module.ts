import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SecondpageComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
  
      {

        path:'authentication',
        component:AuthenticationComponent
     },

     {
      
              path:'secondpage',
              component:SecondpageComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
