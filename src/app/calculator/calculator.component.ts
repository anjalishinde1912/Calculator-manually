import { Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public num1: any;
  public num2: any;
  public result: any;

  constructor() {
  }

  sum() {
    this.result = this.num1 + this.num2;
  }

   mul() {
    this.result = this.num1 * this.num2;
  }

  divi() {
    this.result = this.num1 / this.num2;
  }

  diff() {
    this.result = this.num1 - this.num2;
  }


}
