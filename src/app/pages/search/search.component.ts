import { Component , inject , OnInit} from '@angular/core';
import { MasterService } from '../../service/master.service';
import { LocationObj, Schedule } from '../../model/model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  imports: [FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  locations : LocationObj[]=[];
  masterService=inject(MasterService);
  scheduleList:Schedule[]=[]; //lorsqu'on clique sur le bouton 'search'
  allSchedules:Schedule[]=[];

  // Object that we are going to bind to HTML
  searchObj : any = {
    fromLocation:0,
    toLocation:0,
    travelDate:''
  }

  ngOnInit(): void {
      this.getAllLocations();
      this.getAllSchedules();
  }

  getAllLocations(){
    this.locations=this.masterService.getLocations();
  }

  getAllSchedules(){
    this.allSchedules=this.masterService.getListSchedule();
  }

  onSearch(){
    const {fromLocation,toLocation,travelDate}=this.searchObj;
    this.scheduleList=this.masterService.searchBus(fromLocation,toLocation,travelDate);
 
  }
  isIncludedInScheduleList(schedule:Schedule): boolean{
    return this.masterService.isExist(schedule,this.scheduleList);
  }

}
