import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {
    path:'add-user',
    component:UserAddComponent,
    pathMatch:'full'
  },
  {
    path:'all-user',
    component:AllUserComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
