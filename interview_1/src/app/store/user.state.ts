import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserModel } from '@lct/models/user.model';
import { User} from '@lct/store/user.actions';
import { ApiService } from '@lct/api/api.service';
import { map } from 'rxjs/operators';

export interface UserStateModel extends UserModel {
    company:{
        name:string
    }
}

type UserContext = StateContext<UserStateModel>;

@State<UserStateModel>({
    name: 'user',
    defaults: {
        id: -1,
        name: '',
        phone: '',
        username: '',
        email: '',
        company:{
            name: ''
        }
    }
})

@Injectable()
export class UserState {

    constructor(public apiService: ApiService) {}
 
    @Action(User.Init)
    public logout(ctx: UserContext, action: User.Init): void {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            id: -1,
            name: '',
            phone: '',
            username: '',
            email: '',
            company:{
                name: ''
            }
        })
    } 

    @Action(User.LoginState)
    public loginstate(ctx: UserContext, action: User.LoginState) {
        const state = ctx.getState();
        return this.apiService.get<UserStateModel[]>('/users').pipe(map(res => {
          let user = res.find(res => action.payload == res.email );
          user != undefined && user.email == action.payload ?  
           (ctx.setState({
              ...state,
              id:user.id,
              name: user.name,
              phone: user.phone,
              username: user.username,
              email: user.email,
              company: {
                   name:  user.company.name
                } 
                         })
                                       ) : null
            }))
    }
 
    @Selector()
    static loggedIn(state: UserStateModel) {
        return state;
    }
}   
