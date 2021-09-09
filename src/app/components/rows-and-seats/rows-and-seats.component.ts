import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rows-and-seats',
  templateUrl: './rows-and-seats.component.html',
  styleUrls: ['./rows-and-seats.component.css']
})
export class RowsAndSeatsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.createIntervals();
    this.initPlasec();
  }

  
  closeResult = '';
  intervals: string[] = [];
  quantity: number = 300;
  places: any = [];

  initPlasec(): void { // Создаются пустые ячейки
    let iterator: number = 0;

    while (iterator < this.quantity) {
      this.places.push({ id: iterator, color: 'white', savedTime: '0' });
      iterator++;
    }

  }

  // Изменение стилей ячеек
  changeStatus(place: any): void {
    // console.log(place);
    place.color = 'green';
  }
  removeStatus(place: any): void {
    place.color = 'white'
  }


  updateTime(item: string | number, id: number, value: any) {
    this.places[id].savedTime = value.slice(0, -5);
  }


  // Заполнение выпадающего селектора
  createIntervals(): void {
    let iterator = 2;
    let min = 9;
    let max = 21;

    for (min; min <= max; min += iterator) {
      if (min < 10)
        this.intervals.push("0" + String(min));
      else
        this.intervals.push(String(min));
    }
  }


  // Базовые функции модального окна
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
