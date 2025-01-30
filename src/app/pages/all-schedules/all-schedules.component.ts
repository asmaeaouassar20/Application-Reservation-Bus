import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Schedule } from '../../model/model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-schedules',
  imports: [RouterLink],
  templateUrl: './all-schedules.component.html',
  styleUrl: './all-schedules.component.css'
})
export class AllSchedulesComponent implements OnInit{

  masterSrvice=inject(MasterService);
  allSchedules:Schedule[]=[];


  ngOnInit(): void {
      this.allSchedules=this.masterSrvice.getListSchedule();
  }

}
