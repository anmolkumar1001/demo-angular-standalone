import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('demo-angular-standalone');

  title: string = 'Demonstrating of event binding';
  counter: number = 0;
  inputData: string = 'JavaScript';

  incrementCounter() {
    this.counter = this.counter + 1;
    console.log("Counter = " + this.counter);
  }

  setInputData(value: string) {
    this.inputData = value.toUpperCase();
    console.log("Input Data = " + this.inputData);
  }
}
