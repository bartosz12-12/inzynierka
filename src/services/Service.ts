import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import {apiPathsEnum} from "@/config/paths/ApiPathsEnum";
import errorCodesEnumObject from "@/config/dictionaries/errorCodesEnumObject";
import alertError from "@/core/alerts/alertError";
import alertSuccess from "@/core/alerts/alertSuccess";
import alertDelete from "@/core/alerts/alertDelete";
export abstract class Service {
    protected axiosInstance!: AxiosInstance;
    
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
                    alertSuccess();
                }
                if(response.config.method === 'delete'){
                    alertDelete();
                }
                return response;
            },
            (error: AxiosError) => {
                alertError();
                if(error.response && error.response.data) {
                    console.error(errorCodesEnumObject[error.response?.data as number]);
                    return {data:{message:errorCodesEnumObject[error.response?.data as number] ?? null , status:'', type:'error'}};
                }
                console.error('Response alertError: ', error.code ?? null, error.status ?? null);
                return null;
            }
        );
    }





}