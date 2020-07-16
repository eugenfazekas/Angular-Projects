import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  userLoggedIn = true;
  @ViewChild (ChildComponent) childComponent: ChildComponent;

  ngAfterViewInit() {
    this.childComponent.message = 'Message from parent component';
  }
}
