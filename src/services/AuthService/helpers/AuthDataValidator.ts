import {ILoginDto} from "@/services/AuthService/dtos/ILoginDto";
// import {LocalStorageManager} from "@/core/localStorage/LocalStorageManager";
import {AxiosResponse} from "axios";
import ITokenResponseDto from "@/services/AuthService/dtos/ITokenResponseDto";
import validator from 'validator';

export class AuthDataValidator {
   // protected localStorageManager: LocalStorageManager;
    public constructor() {
        // this.localStorageManager = new LocalStorageManager();
    }
    public beforeLoginValidate(loginData:ILoginDto):boolean {
        const isInstanceOfILoginDto = (object: any) : object is ILoginDto  => { return 'email' in object && 'password' in object; }
        if(!isInstanceOfILoginDto(loginData)){ return false; }
        if(!validator.isEmail(loginData.email)){
            console.error("Invalid email address")
            return false;
        }
        return true;
    }
    public wasLoginSuccessful(apiResponse:AxiosResponse<ITokenResponseDto>):boolean {
        if(typeof apiResponse === 'undefined'){
            return false;
        }
        if(apiResponse.status !== 200 ){
            console.error('Request failure, line 30 - AuthDataValidator')
        }
        const isInstanceOfITokenResponseDto = (object: any) : object is ITokenResponseDto  => { return 'token' in object; }

        if(!isInstanceOfITokenResponseDto(apiResponse.data)){
            console.error('apiResponse is not an instance of token object');
        }
        return true;
    }

}