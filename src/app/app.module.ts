import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RowsAndSeatsComponent } from './components/rows-and-seats/rows-and-seats.component';
import { ModalComponent } from './components/modal/modal.component';
import { CellComponent } from './components/cell/cell.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    RowsAndSeatsComponent,
    ModalComponent,
    CellComponent,
    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
