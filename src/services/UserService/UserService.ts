import {Service} from "@/services/Service";

import {IUserDataDto} from "@/services/UserService/dtos/IUserDataDto";
import ifUserDataStorageContainsProperUserDto from "@/services/UserService/helpers/ifUserDataStorageContainsProperUserDto";
export class UserService extends Service{

    private storageKey = 'userData';
    

    public constructor() { super(); }
    public async getUserData(): Promise<IUserDataDto | null> {
        const userData = window.localStorage.getItem(this.storageKey);
        if( ! userData ) {
           this.refreshUserData();
        }
        if( ! ifUserDataStorageContainsProperUserDto(userData) ){
            this.refreshUserData();
        }

        return userData ? JSON.parse(userData) : null;
    }

    public setUserData(userData: IUserDataDto): void {
        window.localStorage.setItem(this.storageKey, JSON.stringify(userData));
    }

    /** funkcja do wywolywania, kiedy dane uzytkownika ulegna zmianie w bazie , oraz do odswiezania, jesli cache jest puste */
    public refreshUserData():void{
        console.log('refresh')
    }

    public clearUserData(): void {
        window.localStorage.removeItem(this.storageKey);
    }

}