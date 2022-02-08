export namespace User {

    export class Init {
        public static readonly type: string = '[User] Init';
    
        public constructor() {}
    }
    
    export class LoginState {
        public static readonly type: string = '[User] LoginState';
    
        public constructor(public payload: string) {}
    }
}





