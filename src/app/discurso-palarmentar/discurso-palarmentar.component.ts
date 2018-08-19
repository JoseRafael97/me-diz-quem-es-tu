import { Component, OnInit, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discurso-palarmentar',
  templateUrl: './discurso-palarmentar.component.html',
  styleUrls: ['./discurso-palarmentar.component.css']
})

export class DiscursoPalarmentarComponent implements OnInit {


  listaDiscursos = [];

  nome: string;
  urlFoto: string;
  urlParlamentar: string;
  listaDeputadosOrige = [];


  constructor(http: Http, private appService: AppService, private route: ActivatedRoute
  ) {

    this.route.params.subscribe(params => {
      this.nome = params['nome'];
    });

    this.appService.getParlamentares().subscribe((data: any) => {
      this.listaDeputadosOrige = data;
      this.urlFoto = this.filterParlamentar(this.nome)[0].urlFoto;
    });
  }


  filterParlamentar(nome: string) {
    return this.listaDeputadosOrige.filter(parlamentar =>
      parlamentar.nome.indexOf(nome) === 0);
  }

  ngOnInit() {
  }

}
