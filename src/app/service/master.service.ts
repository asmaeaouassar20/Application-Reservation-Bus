import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constant/constant';
import { Booking, LocationObj, LoginUser, RegisterUser, ReturnLoginUser, Schedule } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  bookingsTab: Booking[] = []


  // ******** Locations  ********
  location1: LocationObj = {
    locationId: 1,
    locationName: "Fès",
    code: "50000"
  }
  location2: LocationObj =
    {
      locationId: 2,
      locationName: "Casa",
      code: "50020"
    }

  locations: LocationObj[] = [
    this.location1,this.location2
  ]

  listSchedules: Schedule[] = [
    {
      fromLocation: this.location1,
      toLocation: this.location2,
      travelDate: "2025-01-27",
      arrivalDate: "2025-01-28",
      vendorName: "CTM",
      totalSeats: 50,
      availableSeats:50,
      price:500
    },
    {
      fromLocation: this.location2,
      toLocation: this.location1,
      travelDate: "2025-01-27",
      arrivalDate:"2025-01-28",
      vendorName: "MarkoubMA",
      totalSeats: 40,
      availableSeats:40,
      price:200
    },
    {
      fromLocation: this.location1,
      toLocation: this.location2,
      travelDate: "2025-01-27",
      arrivalDate: "2025-01-28",
      vendorName: "CTM2",
      totalSeats: 50,
      availableSeats:50,
      price:500
    }
  ]

  // ******* users  *******
  usersTab: RegisterUser[] = [
   {
    userId:1,
    userName : "asouma",
    email : "asmae@gmail.com",
    fullName : "Asmae Aouassar",
    role : "admin",
    createdDate : new Date(2003,3,5),
    password : "123456"
   }
  ]


  // ***** serach  *****
 listSchedulesSearched : Schedule[]=[];


  constructor(private http: HttpClient) { }


  getLocations(): LocationObj[] {
    return this.locations;
  }

  searchBus(from: number, to: number, travelDate: string): Schedule[]{
    for(let schedule of this.listSchedules){
      if(schedule.fromLocation.locationId==from
        && schedule.toLocation.locationId==to
        && schedule.travelDate===travelDate
      ){
        this.listSchedulesSearched.push(schedule);
      }
    }
    return this.listSchedulesSearched;
  }
  getSearchedBus():Schedule[]{
    return this.listSchedulesSearched;
  }


  getScheduleById(id: number) {
    return this.http.get<any[]>(API_URL + "GetBusScheduleById?id=" + id);
  }


  getBookedSeats(id: number) {
    return this.http.get<any[]>(API_URL + " getBookedSeats?shceduleId=" + id);
  }

  onRegisterUser(newUser: RegisterUser) {
    this.usersTab.push(newUser);
  }

  onBooking(booking: Booking) {
    this.bookingsTab.push(booking);
  }

  onLogin(loginUser:LoginUser):ReturnLoginUser{
    const returnLoginUser:ReturnLoginUser={
      "userRole":"",
      "result":false,
      "userName":''
    };
    for(let user of this.usersTab){
      if(user.email===loginUser.email){
        returnLoginUser.result=true;
        returnLoginUser.userRole=user.role;
        returnLoginUser.userName=user.userName;
        return returnLoginUser;
      }
    }
    return returnLoginUser;
  }




  getListSchedule():Schedule[]{
    return this.listSchedules;
  }

  isExist(schedule:Schedule,schedules:Schedule[]):boolean{
    for(let s of schedules){
      if(s.fromLocation.locationName===schedule.fromLocation.locationName
        && s.toLocation.locationName===schedule.toLocation.locationName
        && s.travelDate===schedule.travelDate
        && s.arrivalDate===schedule.arrivalDate
        && s.vendorName===schedule.vendorName
        && s.totalSeats===schedule.totalSeats
        && s.availableSeats===schedule.availableSeats
        && s.price===schedule.price
      ){
        return true;
      }
    }
    return false;
  }


  editAvailableSeats(indexOfSchedule:number,numberOfBookedSeats:number){
    this.listSchedules[indexOfSchedule].availableSeats-=numberOfBookedSeats;
  }

}
