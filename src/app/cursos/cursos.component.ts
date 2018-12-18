import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(public cursosService: CursosService) {
    this.nomePortal = 'craftlife.com.br';

    this.cursos = this.cursosService.getCursos();
   }

  ngOnInit() {
  }

}
