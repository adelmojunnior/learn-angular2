"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var filhoUm_component_1 = require('./filhoUm.component');
var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.nome = 'Adelmo';
        this.totalKites = 0;
        this.sobrenome = 'Freitas';
        this.esportes = ['futebol', 'kitesurf'];
    }
    PrincipalComponent.log = function () {
        console.log('primeiro log');
    };
    PrincipalComponent.prototype.adicionarKite = function () {
        console.log('adicionarKites');
        this.totalKites++;
    };
    PrincipalComponent = __decorate([
        core_1.Component({
            selector: 'teste-app',
            template: "\n        <h1>Minha aplica\u00E7\u00E3o angular 2</h1>\n        <input [value]=\"'Ol\u00E1 ' + nome\">  <!-- Exemplo binding properties-->\n\n        <p>Nome: {{nome}}</p> <!-- Exemplo template variable-->\n        <p>Sobrenome: {{sobrenome}}</p>\n        <p>\n            Esportes favoritos: <small *ngFor=\"let esporte of esportes\">{{esporte}}&nbsp;&nbsp;</small>\n        </p>\n        <p>\n            Quantidade de kites: {{totalKites}}&nbsp;&nbsp;\n            <button (click)=\"adicionarKite()\">Adicioanr kites</button><!-- Exemplo events-->\n        </p>\n        <filho-um></filho-um>\n        ",
            directives: [filhoUm_component_1.FilhoUmComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());
exports.PrincipalComponent = PrincipalComponent;
PrincipalComponent.log();
//# sourceMappingURL=principal.component.js.map