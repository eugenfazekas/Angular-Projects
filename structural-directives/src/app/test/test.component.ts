import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-test',
 // template: '<h2 *ngIf="displayName; else elseBlock">CodeEvalution</h2>  <ng-template #elseBlock><h2>Name is hidden</h2></ng-template>' ,
 //template:'<div *ngIf="displayName; then thenBlock; else elseBlock" ></div><ng-template #thenBlock><h2>CodeEvolution</h2></ng-template> <ng-template #elseBlock><h2>Hidden</h2></ng-template>', 
 //template: `<div [ngSwitch]="color"> \
             // <div *ngSwitchCase="'red'">You picked red color </div> 
             // <div *ngSwitchCase="'blue'">You picked red blue </div> 
             // <div *ngSwitchCase="'green'">You picked red green </div> 
             // <div *ngSwitchDefault>Pick Again</div> 
           // </div>`,
          //template:`<div *ngFor="let color of colors; index as i"> //first as i = true,false ; odd as o = false,true
          //  <h2>{{'1'+(i+1)}} {{color}}</h2>
         // </div>`,    
template: `<h2>{{"Hello " + name}}</h2>
            <button (click)="fireEvent()"> Send Event</button>`,
 styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 // @Input() public parentData;
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  displayName = false;
  public colors = ["red","blue","green","yellow"];
  public color = 'orange';
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent() {
    this.childEvent.emit('Hey CodeEvolution');
  }
}
  