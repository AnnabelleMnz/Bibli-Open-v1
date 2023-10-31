import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  selectedSearchType: string = ''; // Variable pour stocker le type de recherche sélectionné

  // Méthode pour traiter le changement de sélection
  onSearchTypeChange(type: string) {
    this.selectedSearchType = type;
  }
}
