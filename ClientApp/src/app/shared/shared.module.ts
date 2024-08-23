import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    RouterLinkActive,
    ReactiveFormsModule,
    
  ],
  exports:[
    RouterLink,
    RouterModule,
    RouterLinkActive,
    ReactiveFormsModule]
})
export class SharedModule { }
