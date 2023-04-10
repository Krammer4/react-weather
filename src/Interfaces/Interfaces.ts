export interface IWeather{
    id: number,
    main:string,
    description:string,
}

export interface IMainWeather{
    temp:number,
    feels_like: number,
    humidity: number,
}

export interface IWindWeather{
    speed: number,

}



export interface IResponse{
    weather?: any,
    main?:IMainWeather,
    wind?: IWindWeather,
    timezone?:number,
}