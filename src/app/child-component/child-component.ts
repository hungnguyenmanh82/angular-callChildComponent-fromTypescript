import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.html',
  styleUrls: ['./child-component.scss']
})
export class ChildComponent implements OnInit {
  numberOfClick: number = 0;
  constructor() {}

  ngOnInit() {}

  // gọi hàm này từ Parent html
  countClick() {
    this.numberOfClick++;
  }

}
