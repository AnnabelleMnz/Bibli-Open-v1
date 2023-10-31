import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private dataUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      map((data: any) => data.books)
    );
  }

}
