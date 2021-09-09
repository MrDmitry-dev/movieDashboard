import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() savedTime = 11;
  closeResult = '';
  intervals: string[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.createIntervals();
  }

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

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
