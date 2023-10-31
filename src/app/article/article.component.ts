import { Component } from '@angular/core';
import { ArticlesService } from '../service/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articles: any[] = []; // Tableau pour stocker les articles

  constructor(private articleService: ArticlesService,private router: Router) { }

  ngOnInit(): void {
    this.getArticles(); // Appel de la méthode pour récupérer les articles au chargement du composant
  }

  getArticles() {
    this.articleService.getAll().subscribe(
      (data: any[]) => {
        console.log(data); // Vérifiez si les données sont récupérées avec succès
        this.articles = data; // Assurez-vous que les données sont stockées dans 'articles'
      },
      (error) => {
        console.error('Erreur de récupération des articles :', error);
      }
    );
  }
  
  openArticleDetails() {
     this.router.navigate(['/article']);
  }
}
