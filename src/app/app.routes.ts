import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { BookingComponent } from './pages/booking/booking.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { AllSchedulesComponent } from './pages/all-schedules/all-schedules.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'search',
        pathMatch:'full'
    },
    {
        path:'search',
        component:SearchComponent
    },
    {
        path:'booking/:id',
        component:BookingComponent
    },
    {
        path:'my-bookings',
        component:MyBookingsComponent
    },
    {
        path:'all-schedules',
        component:AllSchedulesComponent
    }
    
    
];
