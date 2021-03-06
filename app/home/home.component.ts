import { Component } from '@angular/core';

@Component({
  selector: 'kt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'go-dictionary';
  private counter = 42;

  constructor() { }

  public getMessage() {
    return this.counter > 0 ?
      `${this.counter} taps left` :
      'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  }

  public onTap() {
    this.counter--;
  }
}
