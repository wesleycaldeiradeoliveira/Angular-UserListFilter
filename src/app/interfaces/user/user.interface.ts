import { IAddress } from "./address.interface"
import { IStatus } from "./status.interface"

export interface IUser{

    name:string;
    email:string;
    password:string;
    age:string;
    address:IAddress;
    phone:string;
    active:boolean;
    function:string;
    dateRegister:string;
    status: IStatus;
}

