export interface LocationObj {
    locationId: number
    locationName: string
    code: string
}
 

export interface RegisterUser {
    userId:number;
    userName : string;
    email : string;
    fullName : string;
    role : string;
    createdDate : Date;
    password : string;
} 
export interface LoginUser{
    email : string;
    password : string;
    userName : string;
    bookings : Booking[]
}
export interface ReturnLoginUser{
    userRole:string;
    result:boolean;
    userName:string;
}



export interface Booking{
    schedule:Schedule;
    numberOfBookedSeats:number;
}

export interface Passenger{
    id:number;
    bookingId : number;
    name: string;
    age : number;
    gender : string;
    seatNumber : number;
}

export interface  Schedule {
    fromLocation:LocationObj,
    toLocation:LocationObj,
    travelDate:string,
    arrivalDate :string,
    vendorName:string,
    totalSeats:number,
    availableSeats:number;
    price : number
}

 