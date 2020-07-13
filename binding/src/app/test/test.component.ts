import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
// template: '<h2>Welcome {{name}}</h2><h2>{{2+2}}</h2><h2>{{"Welcome " + name}}</h2> <h2>{{name.toUpperCase()}}</h2><h2>{{greetUser()}}</h2><h2>{{siteURL}}</h2>' ,
//template:'<input [id]="myId" type="text" value="John"> <input bind-disabled="isDisabled" id={{myId}} type="text" value="John">',
//template: '<h2>Welcome {{name}}</h2> <h2 class="text-success"> CodeEvolution</h2> <h2 [class]="successClass">CodeEvolution</h2><h2 [class.text-danger]="hasError">CodeEvolution</h2><h2 [ngClass]="messageClasses" >CodeEvolution</h2>',
//  template:'<h2 [style.color]="highlightcolor">Style Binding</h2><h2 [ngStyle]="titleStyles">Style Binding</h2>',
//template:'<button (click)="onClick()">Greet</button> {{greeting1}} <button (click)="onClick2($event)">Greet2</button>  ',  
//template:'<input #myInput type="text"> <button (click)="logMessage(myInput.value)" >Log</button>',
template: '<input [(ngModel)]="input" type="text"> {{input}}',
//styles: ['.text-success {color:green;} .text-danger { color:red; } .text-special { font-style: italic; }']
  styles:[]
})
export class TestComponent implements OnInit {
  public input= "";
  public name = 'John';
//public myId = 'testId';
//public isDisabled = false;
//public siteURL = window.location.href;
  public successClass = "text-success";
  public hasError = true;
  public highlightcolor = "orange";
 // public isSpecial = true;
  //public messageClasses = {
    //"text-success": !this.hasError,
   // "text-danger": this.hasError,
    //"text-special": this.isSpecial
  //}
  public greeting1 = "";
  public greeting2 = "";
  public titleStyles = {
    color:"blue", fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }
onClick() {
  console.log('Welcome to CodeEvolution');
  this.greeting1= 'Welcome To CodeEvolution1';
}

onClick2(event) {
  console.log(event);
  this.greeting1= event.type;
}

greetUser() {
  return "Hello " + this.name;
}

logMessage(value){
console.log(value);
}
}


 
