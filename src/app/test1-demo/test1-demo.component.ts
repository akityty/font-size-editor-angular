import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test1-demo',
  templateUrl: './test1-demo.component.html',
  styleUrls: ['./test1-demo.component.css']
})
export class Test1DemoComponent implements OnInit {

  private a = 0;

  test(value) {
this.a = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
