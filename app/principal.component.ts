import { Component } from '@angular/core'
import { FilhoUmComponent } from './filhoUm.component';
import { FilhoDoisComponent } from './filhoDoisComponent';
import { MinhaImagem } from './minhaImagem';
import { IdentificacaoForm01 } from './identificacaoForm01';

@Component({
    selector: 'teste-app',
    template: `
        <h1>Learn Angular 2</h1>
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
        <filho-dois param1="Parametro passado do principalcomponent para o filhoDoisComponent" [param2]="segundos"></filho-dois>
        <minha-imagem url='https://upload.wikimedia.org/wikipedia/pt/thumb/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png/120px-Esporte_Clube_Vit%C3%B3ria_logo.png' (meuClick)="exibirAlerta()"></minha-imagem>
        <identificacao-form01><identificacao-form01>
        `,
    directives: [FilhoUmComponent, FilhoDoisComponent, MinhaImagem, IdentificacaoForm01]
})

export /**
 * Classe PrincipalComponent
 */
class PrincipalComponent {

    nome: string = 'Adelmo'; 
    sobrenome: string;  
    esportes: string[] // ou [string]
    totalKites: number = 0;
    segundos: number = 1;

    public static log(): void {
        console.log('primeiro log');
    }

    constructor() {
        this.sobrenome = 'Freitas';
        this.esportes = ['futebol', 'kitesurf'];
        setInterval(
            ()=>this.segundos++, 1000
        );
    }

    adicionarKite() {
        console.log('adicionarKites');
        
        this.totalKites++;
    }

    exibirAlerta() {      
        alert('Imagem clicada!!!');
    }
}

PrincipalComponent.log();