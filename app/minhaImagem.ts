import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'minha-imagem',
    template: `<div>
        <img [src]="url" width="100px" height="100px" (click)="clicar($e)">
        </div>
    `
})

export /**
 * MinhaImagem
 */
class MinhaImagem {
    @Input() url: String;
    @Output() meuClick = new EventEmitter<MouseEvent>();

    clicar(evento: MouseEvent) {
        this.meuClick.emit(evento);
    }
}