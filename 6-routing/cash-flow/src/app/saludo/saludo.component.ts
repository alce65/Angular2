import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  amigo: string = "desconocido";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let parametros$ = this.activatedRoute.params;
    this.activatedRoute.params.subscribe(parametros => {
      this.amigo = parametros['amigo'] || 'anónimo';
    });
  }

}
