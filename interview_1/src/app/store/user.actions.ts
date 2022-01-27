import { ApiService } from "@lct/api/api.service";

export namespace User {
    export class Initialize {
        public static readonly type: string = '[User] initialize';

        public constructor(public user: any) {}
    }

    export class LoginState {
        public static readonly type: string = '[User] LoginState';
    
        public constructor(public payload: string) {}
    }

    export class LogOut {
        public static readonly type: string = '[User] LogOut';
    
        public constructor() {}
    }
}





