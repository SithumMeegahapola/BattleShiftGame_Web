import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarBoardComponent } from './war-board/war-board.component';

const routes: Routes = [
  {
    path: '',
    component : WarBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
