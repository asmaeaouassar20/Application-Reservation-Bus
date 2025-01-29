import { Component, OnInit } from '@angular/core';
import { Booking } from '../../model/model';

@Component({
  selector: 'app-my-bookings',
  imports: [],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent implements OnInit{

  myBookings:Booking[]=[];

  ngOnInit(): void {
      const userFromLocaSotarge=localStorage.getItem('currentUser');
      if(userFromLocaSotarge){
        const parseUser=JSON.parse(userFromLocaSotarge);
        this.myBookings=parseUser.bookings;
      }
  }
}
