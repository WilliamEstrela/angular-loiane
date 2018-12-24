import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

url = 'https://loiane.com';
urlImagem = 'http://lorempixel.com/400/200/nature';
nome = 'abc';
valorAtual  = '';
valorSalvo = '';
isMouseOver = false;

onKeyUp(evento) {
  this.valorAtual = evento;
}

onMouseOuverOut() {
  this.isMouseOver = !this.isMouseOver;
}

salvarValor(valor) {
  this.valorSalvo = valor;
}

getValor() {
  return 1;
}


botaoClicado() {
  alert('Botao clicado!');
}
  constructor() { }

  ngOnInit() {
  }

}
