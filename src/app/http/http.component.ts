import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  URL = 'http://localhost:3000/api/personnes';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getPosts() {
   this.http.get(this.URL).subscribe(
     (response) => {
       console.log(response);
     },
     (error) => {
       console.log(error);
     },
     () => {
       console.log('end of data sendig');
     }
   );
  }
  sendData() {
   const person = {
     'cin' : 1234565,
     'nom' : 'gmcLoop',
     'prenom' : 'test',
     'age' : 25
   };
   this.http.post(this.URL, person).subscribe(
     (response) => {
       console.log(response);
     },
     (error) => {
       console.log(error);
     },
     () => {
       console.log('end of data sendig');
     }
   );
  }

}
