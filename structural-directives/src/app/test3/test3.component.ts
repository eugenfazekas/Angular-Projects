import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test3',
  template: `<h2> Employee List</h2>
             <h3> {{errorMsg}} </h3>
            <ul *ngFor="let employee of employees">
              <li>{{employee.name}}</li>
            </ul>
  `,
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => 
      this.employees = data,
      error => this.errorMsg = error);
  }

}
