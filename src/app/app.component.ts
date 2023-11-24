import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-book';
  item: string = "recipes"
  onNavigate(event:string){
    this.item=event;
  }
}
