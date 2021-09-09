import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rows-and-seats',
  templateUrl: './rows-and-seats.component.html',
  styleUrls: ['./rows-and-seats.component.css']
})
export class RowsAndSeatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initPlasec();
    // console.log(this.places);

  }

  quantity: number = 300;
  places: any = [];

  initPlasec(): void {
    let iterator: number = 0;

    while (iterator < this.quantity) {
      this.places.push({ id: iterator, busy: false, color: 'white', time: 0 });
      iterator++;
    }
  }

  changeStatus(place: any): void {
    // place.busy = !place.busy;
    console.log(place);
    place.color = 'green';
    
  }

  // onHover(place: any): void {
  //   console.log(place);
  // }

}
