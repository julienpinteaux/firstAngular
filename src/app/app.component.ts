import { Component } from '@angular/core';

class Personne{
	var nom : string;
	var prenom : string;
	var description : string;
	
	function Personne(nom,prenom,description){
		this.nom = nom;
		this.prenom = prenom;
		this.description = description;
	}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	title = 'my App';
	
	p1 = new Personne("Einsten","Albert","Albert Einstein (prononcé en allemand [ˈalbɐt ˈaɪnʃtaɪn] Prononciation du titre dans sa version originale Écouter) né le 14 mars 1879N 1 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton, dans le New Jersey, est un physicien théoricien. Il fut successivement allemand, apatride (1896), suisse (1901) et de double nationalité helvético-américaine (1940)1. Il fut le camarade d'études de Mileva Marić, puis, en première noce, son époux. Il fut le cousin d'Elsa Einstein, dont il fut, en seconde noce, l'époux.");
}
