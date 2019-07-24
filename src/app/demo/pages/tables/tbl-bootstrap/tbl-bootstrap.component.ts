import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-tbl-bootstrap',
  templateUrl: './tbl-bootstrap.component.html',
  styleUrls: ['./tbl-bootstrap.component.scss']
})
export class TblBootstrapComponent implements OnInit {
  urlPhoto: string;
  isActive: boolean;
  test: boolean = true;

  counter: number;
  @ViewChild('myInput') myInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
    
    this.counter = 5;
    this.isActive = true;
  }

  myInputFunc() {
    console.log('6666666666666666666666666')
  }

  sendFunction() {
    console.log('7777777777777777777777777',this.myInput.nativeElement.value)
  }

}
