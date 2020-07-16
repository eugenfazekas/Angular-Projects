import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

 @Input('loggedIn') loggedIn: boolean;
  name = 'Vishwas';
 //private _loggedIn: boolean;
 message: string;

//  get loggedIn(): boolean {
//    return this._loggedIn;
//  }
//  @Input()
//  set loggedIn(value: boolean){
//   this._loggedIn = value;
//   if(value === true){
//     this.message = 'Welcome Back Vishwas';
//   }else{
//     this.message = 'Please log In;'
//   }
//  }
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if(loggedInValue.currentValue === true){
      this.message = 'Welcome Back Vishwas';
    }else{
      this.message = 'Please log In';
    }
  }
 greetVishwas(){
   alert('Hey Vishwas!');
 }
}
 