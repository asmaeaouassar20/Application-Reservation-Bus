import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../service/master.service';
import { FormsModule } from '@angular/forms';
import { Booking, LoginUser, Schedule } from '../../model/model';
import { RouterLink ,Router} from '@angular/router';


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
  router=inject(Router);
  isSomoneConnected=false;


  constructor(private activatedRoute:ActivatedRoute,private masterService:MasterService){
    // Récupération de l'ID du planning à partir des paramètres de l'URL
    this.activatedRoute.params.subscribe((res:any)=>{
      this.scheduleId=res.id;
      this.scheduleList=masterService.getListSchedule();
    })
  }


  ngOnInit(): void {
    // Chargement de l'utilisateur actuel depuis le localStorage
      const userFromLocaSotarge=localStorage.getItem('currentUser');
      if(userFromLocaSotarge){
        this.isSomoneConnected=true;
        this.parsedCurrentUser=JSON.parse(userFromLocaSotarge);
      }

    // Récupération de tous les plannings disponibles  
      this.allSchedules=this.masterService.getListSchedule();
  }

 
/**
 * Permet de réserver des places pour un planning donné
 * @param schedule Planning sélectionné
 * @returns 
 */
  book(schedule:Schedule){
    if(this.isSomoneConnected){
      if(this.numberOfBookedSeats==0){
        alert('Aucune place réservée!!');
        return;
      }
  
      const n=this.allSchedules[this.scheduleId].availableSeats;
      if(this.numberOfBookedSeats>n){
        alert(`Le nombre de place disponible est : ${n}`);
        return;
      }
  
      // Mise à jour de la réservation de l'utilisateur
      this.currentUserBooking=schedule;
      let booking:Booking={
        schedule:this.currentUserBooking,
        numberOfBookedSeats:this.numberOfBookedSeats
      };
  
      this.parsedCurrentUser.bookings.push(booking);
      localStorage.setItem('currentUser',JSON.stringify(this.parsedCurrentUser));
  
      // Mise à jour du nombre de places disponibles dans le service
      this.masterService.editAvailableSeats(this.scheduleId,this.numberOfBookedSeats);
      
      if(booking.numberOfBookedSeats==1){
        alert(`${this.parsedCurrentUser.userName}+! vous avez réservé ${booking.numberOfBookedSeats} place avec succès`);
      }else{
        alert(`${this.parsedCurrentUser.userName}+! vous avez réservé ${booking.numberOfBookedSeats} places avec succès`);
      }
    }else{
      alert("Connectez vous!!")
    }
    this.router.navigate(['/search']);
  }
}
