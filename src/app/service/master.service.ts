import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constant/constant';
import { Booking, LocationObj, LoginUser, RegisterUser, ReturnLoginUser, Schedule } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // bookingsTab: Booking[] = []


  // ******** Locations  ********

  location1: LocationObj = {
    locationId: 1,
    locationName: "Fès",
    code: "30000"
  }
  location2: LocationObj =
    {
      locationId: 2,
      locationName: "Casa",
      code: "20020"
    }
    location3: LocationObj =
    {
      locationId: 3,
      locationName: "Agadir",
      code: "80000"
    }
    location4: LocationObj =
    {
      locationId: 4,
      locationName: "Marrakech",
      code: "40000"
    }
    location5: LocationObj =
    {
      locationId: 5,
      locationName: "Tanger",
      code: "90000"
    }

    locations: LocationObj[] = [
      this.location1,this.location2,this.location3,this.location4,this.location5
    ]


    listSchedules: Schedule[] = [
      {
        fromLocation: this.location1, // Fès
        toLocation: this.location2, // Casa
        travelDate: "2025-01-27",
        arrivalDate: "2025-01-28",
        vendorName: "CTM",
        totalSeats: 50,
        availableSeats: 40,
        price: 550
      },
      {
        fromLocation: this.location2, // Casa
        toLocation: this.location1, // Fès
        travelDate: "2025-01-30",
        arrivalDate: "2025-01-31",
        vendorName: "MarkoubMA",
        totalSeats: 40,
        availableSeats: 30,
        price: 400
      },
      {
        fromLocation: this.location1, // Fès
        toLocation: this.location3, // Agadir
        travelDate: "2025-01-29",
        arrivalDate: "2025-01-30",
        vendorName: "Fès-Agadir Express",
        totalSeats: 60,
        availableSeats: 55,
        price: 650
      },
      {
        fromLocation: this.location3, // Agadir
        toLocation: this.location1, // Fès
        travelDate: "2025-02-01",
        arrivalDate: "2025-02-02",
        vendorName: "AgadirConnect",
        totalSeats: 50,
        availableSeats: 45,
        price: 600
      },
      {
        fromLocation: this.location1, // Fès
        toLocation: this.location4, // Marrakech
        travelDate: "2025-02-03",
        arrivalDate: "2025-02-04",
        vendorName: "Atlas Travel",
        totalSeats: 55,
        availableSeats: 50,
        price: 800
      },
      {
        fromLocation: this.location4, // Marrakech
        toLocation: this.location1, // Fès
        travelDate: "2025-02-05",
        arrivalDate: "2025-02-06",
        vendorName: "MarrakechConnect",
        totalSeats: 45,
        availableSeats: 35,
        price: 750
      },
      {
        fromLocation: this.location1, // Fès
        toLocation: this.location5, // Tanger
        travelDate: "2025-02-07",
        arrivalDate: "2025-02-08",
        vendorName: "TangerExpress",
        totalSeats: 50,
        availableSeats: 50,
        price: 950
      },
      {
        fromLocation: this.location5, // Tanger
        toLocation: this.location1, // Fès
        travelDate: "2025-02-10",
        arrivalDate: "2025-02-11",
        vendorName: "TangerFast",
        totalSeats: 40,
        availableSeats: 30,
        price: 900
      },
      {
        fromLocation: this.location2, // Casa
        toLocation: this.location3, // Agadir
        travelDate: "2025-02-12",
        arrivalDate: "2025-02-13",
        vendorName: "Casa-Agadir Line",
        totalSeats: 50,
        availableSeats: 50,
        price: 700
      },
      {
        fromLocation: this.location3, // Agadir
        toLocation: this.location2, // Casa
        travelDate: "2025-02-15",
        arrivalDate: "2025-02-16",
        vendorName: "AgadirLink",
        totalSeats: 45,
        availableSeats: 40,
        price: 650
      },
      {
        fromLocation: this.location2, // Casa
        toLocation: this.location4, // Marrakech
        travelDate: "2025-02-17",
        arrivalDate: "2025-02-18",
        vendorName: "CasaMarrakech",
        totalSeats: 50,
        availableSeats: 40,
        price: 750
      },
      {
        fromLocation: this.location4, // Marrakech
        toLocation: this.location2, // Casa
        travelDate: "2025-02-20",
        arrivalDate: "2025-02-21",
        vendorName: "MarrakechLine",
        totalSeats: 55,
        availableSeats: 45,
        price: 720
      },
      {
        fromLocation: this.location2, // Casa
        toLocation: this.location5, // Tanger
        travelDate: "2025-02-22",
        arrivalDate: "2025-02-23",
        vendorName: "CasaTanger Line",
        totalSeats: 60,
        availableSeats: 50,
        price: 1000
      },
      {
        fromLocation: this.location5, // Tanger
        toLocation: this.location2, // Casa
        travelDate: "2025-02-25",
        arrivalDate: "2025-02-26",
        vendorName: "TangerExpress",
        totalSeats: 45,
        availableSeats: 35,
        price: 950
      },
      {
        fromLocation: this.location3, // Agadir
        toLocation: this.location4, // Marrakech
        travelDate: "2025-02-27",
        arrivalDate: "2025-02-28",
        vendorName: "AgadirMarrakech Express",
        totalSeats: 55,
        availableSeats: 50,
        price: 700
      },
      {
        fromLocation: this.location4, // Marrakech
        toLocation: this.location3, // Agadir
        travelDate: "2025-03-01",
        arrivalDate: "2025-03-02",
        vendorName: "MarrakechAgadir Link",
        totalSeats: 50,
        availableSeats: 45,
        price: 680
      },
      {
        fromLocation: this.location3, // Agadir
        toLocation: this.location5, // Tanger
        travelDate: "2025-03-03",
        arrivalDate: "2025-03-04",
        vendorName: "AgadirTanger Line",
        totalSeats: 60,
        availableSeats: 60,
        price: 950
      },
      {
        fromLocation: this.location5, // Tanger
        toLocation: this.location3, // Agadir
        travelDate: "2025-03-06",
        arrivalDate: "2025-03-07",
        vendorName: "TangerAgadir Express",
        totalSeats: 50,
        availableSeats: 40,
        price: 900
      },
      {
        fromLocation: this.location4, // Marrakech
        toLocation: this.location5, // Tanger
        travelDate: "2025-03-09",
        arrivalDate: "2025-03-10",
        vendorName: "MarrakechTanger Link",
        totalSeats: 45,
        availableSeats: 40,
        price: 800
      },
      {
        fromLocation: this.location5, // Tanger
        toLocation: this.location4, // Marrakech
        travelDate: "2025-03-12",
        arrivalDate: "2025-03-13",
        vendorName: "TangerMarrakech",
        totalSeats: 50,
        availableSeats: 45,
        price: 850
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
   },
   {
    userId:2,
    userName : "chocho",
    email : "achraf@gmail.com",
    fullName : "Achraf Pk",
    role : "user",
    createdDate : new Date(2001,1,12),
    password : "123"
   }
  ]


  // ***** serach  *****
 listSchedulesSearched : Schedule[]=[];



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

  onRegisterUser(newUser: RegisterUser) {
    this.usersTab.push(newUser);
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
