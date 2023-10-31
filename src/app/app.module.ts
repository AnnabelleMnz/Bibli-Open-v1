import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    NavbarComponent,
    SearchbarComponent,
    ArticleComponent,
    HomePageComponent,
    ArticleDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
