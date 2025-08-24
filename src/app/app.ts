import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NgForOf } from "../../node_modules/@angular/common/common_module.d";
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // protected readonly title = signal('demo-angular-standalone');

  // title: string = 'Demonstrating of event binding';
  // counter: number = 0;
  // inputData: string = 'JavaScript';

  // incrementCounter() {
  //   this.counter = this.counter + 1;
  //   console.log("Counter = " + this.counter);
  // }


  // setInputData(value: string) {
  //   this.inputData = value.toUpperCase();
  //   console.log("Input Data = " + this.inputData);
  // }




  title: string = "Demonstrating of Two-way binding";
  name: string = "Steve Jobs";
  location: string = "Bangalore";

  favouriteLanguage: string = "Java";
  favouriteColor: string = "Green";
  colors: string[] = ['Red', 'Green', 'Blue'];

  setUpperCaseLocation(locationData: string) {
    console.log(locationData);
    this.location = locationData.toUpperCase();
  }


}
