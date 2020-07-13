import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// selector: 'app-test',
//<html>
  //<app-test></app-test>
//</html>

// selector: '.app-test',
//<html>
  //<div class="app-test">
//</html>

// selector: '[app-test]',
//<html>
  //<div app-test >
//</html>


//tutorial 4 Components

//template: '<div>Inline Template</div>',

//  styles: ['
// div {color:red;}
//']