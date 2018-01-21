import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatCardModule,MatInputModule,MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatCardModule,MatInputModule,MatProgressSpinnerModule],
  exports: [MatButtonModule,MatToolbarModule,MatCardModule,MatInputModule,MatProgressSpinnerModule],
})
export class AppMaterialModule { }
