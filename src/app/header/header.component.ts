import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() newItemEvent = new EventEmitter<string>()
  onSelect(data: string) {
    this.newItemEvent.emit(data)
  }
}
