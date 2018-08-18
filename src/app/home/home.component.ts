import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myTemplate;

  constructor(http: Http) {

    http.get('../../assets/grafo.html')
      .pipe(map((html: any) => this.myTemplate = html._body)).subscribe(res => console.log(res));
  }


  ngOnInit() {
  }

}
