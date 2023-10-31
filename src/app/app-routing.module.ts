import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [
  // ajouter route avec l'id a terme
  { path: '', component:HomePageComponent },
  { path: 'list', component:ArticleComponent },
  { path: 'article', component: ArticleDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
