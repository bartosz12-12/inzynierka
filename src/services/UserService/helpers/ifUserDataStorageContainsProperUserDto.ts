
import {IUserDataDto} from "@/services/UserService/dtos/IUserDataDto";
/* eslint-disable  @typescript-eslint/no-explicit-any */
const ifUserDataStorageContainsProperUserDto = (object: any): object is IUserDataDto => {
    try { object = JSON.parse(object); } catch (e) { return true; }
    if(object === null) object = {};
    return 'email' in object
        && 'name' in object
        && 'token' in object;
};
export default ifUserDataStorageContainsProperUserDto;