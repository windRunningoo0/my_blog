import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  imports: [
    FormsModule,
    MatSliderModule,
    MatDividerModule,
    MatDialogModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatRippleModule
  ],
  exports: [
    MatSliderModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatRippleModule
  ]
})
export class SharedModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
 }
