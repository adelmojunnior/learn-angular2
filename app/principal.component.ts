import { Component } from '@angular/core'
import { FilhoUmComponent } from './filhoUm.component';

@Component({
    selector: 'teste-app',
    template: `
        <h1>Minha aplicação angular 2</h1>
        <input [value]="'Olá ' + nome">  <!-- Exemplo binding properties-->

        <p>Nome: {{nome}}</p> <!-- Exemplo template variable-->
        <p>Sobrenome: {{sobrenome}}</p>
        <p>
            Esportes favoritos: <small *ngFor="let esporte of esportes">{{esporte}}&nbsp;&nbsp;</small>
        </p>
        <p>
            Quantidade de kites: {{totalKites}}&nbsp;&nbsp;
            <button (click)="adicionarKite()">Adicioanr kites</button><!-- Exemplo events-->
        </p>
        <filho-um></filho-um>
        `,
    directives: [FilhoUmComponent]
})

export /**
 * Classe PrincipalComponent
 */
class PrincipalComponent {

    nome: string = 'Adelmo'; 
    sobrenome: string;  
    esportes: string[] // ou [string]
    totalKites: number = 0;

    public static log(): void {
        console.log('primeiro log');
    }

    constructor() {
        this.sobrenome = 'Freitas';
        this.esportes = ['futebol', 'kitesurf']
    }

    adicionarKite() {
        console.log('adicionarKites');
        
        this.totalKites++;
    }
}

PrincipalComponent.log();