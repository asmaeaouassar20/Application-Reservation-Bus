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
    // Chargement des réservations de l'utilisateur depuis le localstorage
      const userFromLocaSotarge=localStorage.getItem('currentUser');
      if(userFromLocaSotarge){
        const parseUser=JSON.parse(userFromLocaSotarge);
        this.myBookings=parseUser.bookings || []; // si 'parseUser.bookings' est undefined ou null, alors this.myBookings prendra une valeur par défaut, qui est un taleau vide []
      }
  }
}
