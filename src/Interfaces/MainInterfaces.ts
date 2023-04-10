import { IResponse } from "./Interfaces";

export interface IMainProps{
    city: string,
    isLoaded:boolean,
    weather?:IResponse,
    inputValue: string,
    counter: number,
    undefiendCity: boolean,
    headerValue: string,
    counterForImg: number,
}