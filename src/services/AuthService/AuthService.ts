import {Service} from "@/services/Service";
import {AxiosResponse} from "axios";
import {IRegisterDto} from "@/services/AuthService/dtos/IRegisterDto";
import {AuthDataValidator} from "@/services/AuthService/helpers/AuthDataValidator";
import {ILoginDto} from "@/services/AuthService/dtos/ILoginDto";
import {apiPathsEnum} from "@/config/paths/ApiPathsEnum";
import errorCodesEnumObject from "@/config/dictionaries/errorCodesEnumObject";
import {UserService} from "@/services/UserService/UserService";
import {IForgotPasswordDto} from "@/services/AuthService/dtos/IForgotPasswordDto";
import {IResetPasswordDto} from "@/services/AuthService/dtos/IResetPasswordDto";

export class AuthService extends Service {
    private dataValidator:AuthDataValidator;
    private userService:UserService;
    public constructor() {
        super();
        this.initHttpClient();
        this.dataValidator = new AuthDataValidator();
        this.userService = new UserService();

    }
    public async login(loginData:ILoginDto,headers:any): Promise<any>{

        if(!this.dataValidator.beforeLoginValidate(loginData)) {
            console.error('invalid login records')
            return {message:errorCodesEnumObject[13], status:'', type:'error'};
        }

        const response: AxiosResponse<any> = await this.axiosInstance.post(apiPathsEnum.API_LOGIN,loginData,{headers});

        if(!this.dataValidator.wasLoginSuccessful(response)){
            return null;
        }

        if(!response.data && !response.data.token){
            return response.data ?? null;
        }

        /** zapisujemy token ze zwrotki z logowania do localstorage, skad jest przepisywany do headersa dla backendu, oraz sluzy
         *  do weryfikacji middleware */
        response.data && response.data.token ? localStorage.setItem("token", response.data.verificationToken) : null;
        response.data && response.data.typeUser ? localStorage.setItem("typeUser", response.data.typeUser) : 1;
        this.userService.setUserData(response.data);
        console.log("to jest typeUser:",localStorage.getItem('typeUser'));
        return response.data;
    }

    public async register(registrationData:IRegisterDto,headers:any): Promise<any>{

        if(!this.dataValidator.validateRegistation(registrationData)) {
            console.error('invalid registration records')
            return {message:errorCodesEnumObject[998], status:'', type:'error'};
        }

        const response: AxiosResponse<any> = await this.axiosInstance.post(apiPathsEnum.API_REGISTER, registrationData,{headers});
    
       
        return response.data;
    }
    public async verify(token: string): Promise<any>{

        const response: AxiosResponse<any> = await this.axiosInstance.get(apiPathsEnum.API_VERIFIY_USER + token);
        
       
        return response.data;
    }
    public async forgotPassword(forgotPasswordEmail: IForgotPasswordDto): Promise<any>{

        const response: AxiosResponse<any> = await this.axiosInstance.post(apiPathsEnum.API_FORGOT_PASSWORD, forgotPasswordEmail);
        
       
        return response.data;
    }
    public async resetPassword(resetPassword: IResetPasswordDto): Promise<any>{

        const response: AxiosResponse<any> = await this.axiosInstance.patch(apiPathsEnum.API_RESET_PASSWORD, resetPassword);
        
       
        return response.data;
    }

}