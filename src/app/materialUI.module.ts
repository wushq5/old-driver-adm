import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  exports: [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
})
export class MyMaterialModule { }