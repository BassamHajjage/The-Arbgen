import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { nanoid } from 'nanoid'

@Component({
  selector: 'app-front-hello-component',
  templateUrl: './front-hello-component.component.html',
  styleUrls: ['./front-hello-component.component.scss']
})
export class FrontHelloComponentComponent implements OnInit {

  code = new BehaviorSubject<string>("");

  constructor(
    // private clipboard: Clipboard
  ) {
    this.code.subscribe(val => {
      console.log("val: " + val)
      if (val.length === 0) {
      }
    })
  }

  ngOnInit(): void {
    this.createCode();
  }

  copyCode() {
    console.log("copied code: " + this.code.getValue());
    this.createCode();
  }
  createCode(config?: {}) {
    const newNanoid = nanoid(20);
    this.code.next(newNanoid);
  }
  isNumeric(num: any) {
    return !isNaN(num);
  }
  copyHeroName() {
    // this.clipboard.copy('Alphonso');
  }
}
