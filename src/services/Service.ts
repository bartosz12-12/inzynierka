import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import {apiPathsEnum} from "@/config/paths/ApiPathsEnum";
import errorCodesEnumObject from "@/config/dictionaries/errorCodesEnumObject";
import alertError from "@/core/alerts/alertError";
import alertSuccess from "@/core/alerts/alertSuccess";
import alertDelete from "@/core/alerts/alertDelete";
import {translatedErrors} from "@/config/translates/errors";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export abstract class Service {
    protected axiosInstance!: AxiosInstance;
    public state?:any;
    protected initHttpClient(Form?:boolean,URL?:string) : void {
        this.axiosInstance = axios.create({
            baseURL : URL ?? apiPathsEnum.BASE_API_URL,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token') ?? '',
                'Content-Type': `${Form === true ? 'application/x-www-form-urlencoded' : 'application/json'}`
            },
        });

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                if (response.config.method === 'post' || response.config.method === 'patch' ) {
                    if(this.state !==  '__&__no_log')
                    alertSuccess(this.state ?? 'Success', response.config.method === 'patch');
                }
                if(response.config.method === 'delete'){
                    if(this.state !==  '__&__no_log')
                    alertDelete(this.state ?? 'Deleted');
                }
                return response;
            },
            (error: AxiosError) => {
                if(this.state === '__error_&_no_log') {
                        // if(error?.response?.status === 404){
                        //     return Promise.resolve(error)
                        // }

                    return;
                }
                const errResp:any = error.response?.data;
                let errText = '';
                if(errResp.errors){
                    errText = '';
                    Object.values(errResp.errors).forEach(e =>{
                        errText= errText + e + '<br/>'
                    })
                }
                if(errorCodesEnumObject[error.response?.data as number]){
                    errText= errorCodesEnumObject[error.response?.data as number] ?? error.response?.data ?? null
                    if(translatedErrors){
                        if(translatedErrors[errorCodesEnumObject[error.response?.data as number]]){
                            errText = translatedErrors[errorCodesEnumObject[error.response?.data as number]] ?? error.response?.data ?? null
                        }
                    }
                }
                console.log(errText ,'errtext')
                if(errText &&  errText.length > 0 && errText!=='') {
                    alertError(errText ?? 'Warn');
                }else{
                    alertError(error?.response?.data ?? 'Warn');
                }

                if(error.response && error.response.data) {
                    console.error(errorCodesEnumObject[error.response?.data as number]);
                    return {data:{message:errorCodesEnumObject[error.response?.data as number] ?? error.response , status:'', type:'error'}};
                }
                console.error('Response alertError: ', error.code ?? null, error.status ?? null);
                return null;
            }
        );
    }





}