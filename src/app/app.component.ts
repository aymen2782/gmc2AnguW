import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GMC';
  name = 'aymen';
  elements = [1, 2 , 3 , 4];
  couleurDeApp = 'purple';
  show = true;
  showSonData(e) {
    console.log(e);
  }
  affichage() {
    this.show = !this.show;
  }
}

