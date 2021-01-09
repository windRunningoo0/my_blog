import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  imports: [
    MatSliderModule,
    MatDividerModule,
    MatDialogModule,
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatSliderModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule { }
