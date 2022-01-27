import { Component } from '@angular/core';
import { UserModel } from '@lct/models/user.model';
import { UserState } from '@lct/store/user.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'limelight-coding-test',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class BodyComponent {

    public constructor( ) {

    }
}
