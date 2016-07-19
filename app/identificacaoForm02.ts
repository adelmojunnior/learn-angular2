import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'identificacaoForm02',
    templateUrl: 'app/identificacaoForm02.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})

//nome: { rotulo: 'Nome', ordem: 5, tipoControle: 'string', obrigatorio: true, valor: '', valor_padrao: '', validadores: { min: 3, max: 10, tamanho: 50} },
export class FieldFormBase<T>{

    tipoControle: string;
    rotulo: string;
    valor: T;
    ordem: number;
    obrigatorio: boolean;

    constructor(options: {
        tipoControle?: string,
        rotulo?: string,
        valor?: T,
        ordem?: number,
        obrigatorio?: boolean
    } = {}) {
        this.tipoControle = options.tipoControle || '';
        this.rotulo = options.rotulo || '';
        this.valor = options.valor;
        this.ordem = options.ordem === undefined ? 1 : options.ordem;
        this.obrigatorio = !!options.obrigatorio;
    }
}

export class TextboxForm extends FieldFormBase<string> {
  tipoControle = 'textbox';
  tipo: string;

  constructor(options: {} = {}) {
    super(options);
    this.tipo = options['tipo'] || '';
  }
}

export /**
 * IdentificacaoForm02
 */
class IdentificacaoForm02 {

    identificacaoForm02: any;

    contribuinte = {
        nome: { rotulo: 'Nome', ordem: 5, tipoControle: 'string', obrigatorio: true, valor: '', valor_padrao: '', validadores: { min: 3, max: 10, tamanho: 50} },
        sobrenome: { rotulo: 'Sobrenome', ordem: 10, tipoControle: 'string', obrigatorio: false, valor: '', valor_padrao: '', validadores: { min: 3, max: 5, tamanho: 50} }
    }

    constructor(private formBuilder: FormBuilder) {
      
        this.identificacaoForm02 = this.formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', [Validators.required]],
            'profile': ['', [Validators.required, Validators.minLength(10)]]
        });
    }
/*
    constructor() {

        

        //nome: new FormControl(),
        //sobrenome: new FormControl()

        this.identificacaoForm02 = new FormGroup({
            
        })            

        
    }*/
}