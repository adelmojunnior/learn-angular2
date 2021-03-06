import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Identificacao } from './identificacao';

//Template-driven form
@Component({
    selector: 'identificacao-form01',
    template: `
        <pre>{{ debug }}</pre>
        <h3>Ficha de identificação</h3>
        <form *ngIf="ativo" ngSubmit="onSubmit()" #identificacaoForm="ngForm">
            
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control"
                    name="nome" #inspecionar="ngModel" #spy
                    required 
                    [(ngModel)]="identificacao.nome">
                <div [hidden]="inspecionar.valid || inspecionar.pristine" class="alert alert-danger">
                    Campo nome obrigatório
                </div>    
                <br /><br />TODO remover: {{spy.className}}  
            </div>
            <br />

            <div class="form-group">
                <label for="sobrenome">Sobrenome</label>
                <input type="text" class="form-control" 
                    name="sobrenome" 
                    [(ngModel)]="identificacao.sobrenome">
            </div>

            <button type="button" class="btn btn-default" (click)="novaIdentificacao()">Novo</button>
            <button type="submit" class="btn btn-default" [disabled]="!identificacaoForm.form.valid">Submit</button>
        </form>
    `
})

export /**
 * IdentificacaoForm01
 */
class IdentificacaoForm01 {

    identificacao = new Identificacao(1, "Adelmo", "Freitas");
    
    submetido = false;

     // Reset the form with a new object AND restore 'pristine' class state
  // by toggling 'ativo' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
    ativo = true;

    novaIdentificacao() {
        this.identificacao = new Identificacao(2, '');
        this.ativo = false;
        setTimeout(() => this.ativo = true, 0);
    }

    onSubmit() { this.submetido = true; }

    get debug() {
        return JSON.stringify(this.identificacao);
    }


}