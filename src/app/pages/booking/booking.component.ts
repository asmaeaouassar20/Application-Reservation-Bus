import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../service/master.service';
import { DatePipe } from '@angular/common';
import { setActiveConsumer } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
import { Booking, LoginUser, Schedule } from '../../model/model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-booking',
  imports: [FormsModule,RouterLink],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

  scheduleId:number=0;
  scheduleList:Schedule[]=[];
  numberOfBookedSeats:number=0;
  currentUserBooking:Schedule={
     "fromLocation":{locationId: 0,locationName: "" ,code: ""},
      "toLocation":{locationId: 0,locationName: "" ,code: ""},
      "travelDate":"",
      "arrivalDate" :"",
      "vendorName":"",
      "totalSeats":0,
      "availableSeats":0,
      "price" : 0
  };

  parsedCurrentUser: LoginUser ={
    email : '',
    password : '',
    userName : '',
    bookings:[]
  }
  allSchedules:Schedule[]=[]



  selectedScheduleDetails:any;

  seatArray : number[] =[];
  bookedSeatsArray:number[]=[];

  userSelectedSeatArray : any[]=[];
  ngOnInit(): void {
      const userFromLocaSotarge=localStorage.getItem('currentUser');
      if(userFromLocaSotarge){
        this.parsedCurrentUser=JSON.parse(userFromLocaSotarge);
      }
      this.allSchedules=this.masterService.getListSchedule();
  }

  constructor(private activatedRoute:ActivatedRoute,private masterService:MasterService){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.scheduleId=res.id;
      this.scheduleList=masterService.getListSchedule();
      // this.getScheduleDetailsById();
      // this.getBookedSeats();
    })
  }

 


  book(schedule:Schedule){
    if(this.numberOfBookedSeats==0){
      alert('Aucune place réservée!!');
      return;
    }
    const n=this.allSchedules[this.scheduleId].availableSeats;
    if(this.numberOfBookedSeats>n){
      alert('Le nombre de place disponible est : '+n);
      return;
    }
    this.currentUserBooking=schedule;
    let booking:Booking={
      "schedule":this.currentUserBooking,
      "numberOfBookedSeats":this.numberOfBookedSeats
    };
    this.parsedCurrentUser.bookings.push(booking);
    localStorage.setItem('currentUser',JSON.stringify(this.parsedCurrentUser));
    this.masterService.editAvailableSeats(this.scheduleId,this.numberOfBookedSeats);
    alert(this.parsedCurrentUser.userName+'! vous avez réservé '+booking.numberOfBookedSeats+' avec succès');
  }
}
