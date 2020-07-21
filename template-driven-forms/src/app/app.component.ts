import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'] ;
  topicHasError = true;
  submitted = false;
  userModel = new User('','rob@text.com',555666554,'default','morning',true);
  errorMsg = '';

  constructor (private _enrollmentService :EnrollmentService) {

  }
 
  validateTopic(value){
    if(value == 'default') {
      this.topicHasError = true;
    }else {
      this.topicHasError = false;
    }
  }
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Succes!',data),
      error => this.errorMsg = error.statusText
      
    )
  }
}
