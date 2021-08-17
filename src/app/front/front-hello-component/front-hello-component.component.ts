import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-front-hello-component',
  templateUrl: './front-hello-component.component.html',
  styleUrls: ['./front-hello-component.component.scss']
})
export class FrontHelloComponentComponent implements OnInit {

  code = new BehaviorSubject<string>("");
  sequence = "CTCCTATAACGAACTTCGACATGGCAAAATCCCCCCCTCGCGACTTCTAGAGAAGAAGAGTACTGACTTGAGCGCTCCCAGCACTTCAGCCAAGGAAGTTACCAATTTCTTGTTTCCGAATGACACGCGTCTCCTTGCGGGTAAATCGCCGACCGCAGAACTTACGAGCCAGGGGAAACAGTAAGGCCTAATTAGGTAAAGGGAGTAAGTGCTCGAACGGTTCAGTTGTAACCATATACTTACGCTGGATCTTCTCCGGCGAATTTTTACCGTCACCAACTACGAGATTTGAGGTAAACCAAATGAGCACATAGTGGCGCTATCCGACTATTTCCAAATTGTAACATATCGTTCCATGAAGGCCAGAGTTACTTACCGGCCCTTTCCATGCGCGCGCCATACCCTCCTAGTTCCCCGGTTATCTCTCCGAGGAGAGAGTGAGCGATCCTCCGTTAACATATTGTTACCAATGACGTAGCTATGTATTTTGCACAGGTAGCCAACGGGTTTCACATTTCACAGATAGTGGGGATCCCGGCAAAGGGCGTATATTTGCGGTCCAACATAGGCGTAAACTACGATGGCACCTACTCAGACGCAGCTCGTGCGGCGTAAATAACGTACTCATCCCAACTGATTCTCGGCAATCTACGGAGCGACATGATTATCAACAGCTGTCTAGCAGTTCTAATCTTTTGCCATGGTCGTAAAAGCCTCCAAGAGATTGATCATACCTATCGGCACAGAAGTGACACGACGCCGATGGGTAGCGGACTTTAGGTCAACCACAGTTCGGTAGGGGACAGGCCCTGCGGCGTACATCACTTTGTATGTGCAACGTGCCCAAGTGGCGCCAGGCAAGACTCAGCTGGTTCCTGTGTTAGCTCGAGGCTAGGCATGACAGCTCTTTGAACATGGGCTGGGGGCCTCGAACGGTCGAGAAGCCCATAGTACCTCGGATACCAAGTTGCGCAGGCTATAGCTTGAAGCTGTACTATTT";
  sequenceLength = this.sequence.length;

  constructor(
  ) {
    this.code.subscribe(val => {
      const randomStart = Math.floor((Math.random()*this.sequenceLength) + 1);
      console.log(randomStart);
      const uh124 = this.sequence.substring(randomStart, randomStart + 4);
      console.log("Val: " + uh124 + "-" + val);
    })
  }

  ngOnInit(): void {
    this.createCode();
    console.log(this.randomString(10))
    console.log(this.sequenceLength)
  }
  randomString(length: number) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  copyCode() {
    console.log("copied code: " + this.code.getValue());
    this.createCode();
  }
  createCode(config?: {}) {
    const newNanoid = this.randomString(7);
    this.code.next(newNanoid);
  }
  isNumeric(num: any) {
    return !isNaN(num);
  }
  copyHeroName() {
    // this.clipboard.copy('Alphonso');
  }
}
