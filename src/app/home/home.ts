// import { Component } from '@angular/core';

// import { FormsModule } from '@angular/forms';

// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './home.html',
//   styleUrl: './home.css'
// })
// export class Home {

//   title: string = 'Employees List';
//   nameFilter: string = '';
//   employees: any[] = [
//     {
//       "empId": 1,
//       "name": "Ram",
//       "location": "Bangalore"
//     },
//     {
//       "empId": 2,
//       "name": "Raj",
//       "location": "Chennai"
//     },
//     {
//       "empId": 3,
//       "name": "Vinay",
//       "location": "Pune"
//     }
//   ];

// }


import { Component, Input } from "@angular/core";

@Component({
  selector: "app-home",
  template: `<h2>Employee Name: {{ empName }}</h2>`
})

export class HomeComponent {
  
  // @Input decorator - to pass data from parent to child

  @Input() empName: string = ''; // parent will pass data here
}