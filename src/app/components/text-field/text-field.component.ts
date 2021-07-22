import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})

export class TextFieldComponent implements OnInit {
  randomString:string = '';
  text = document.getElementById('textField');

  constructor() {
    this.getString();
  }

  ngOnInit(): void {
    const source = interval(3000);
    source.subscribe(() => this.getString())
  }

 getString(){
    this.randomString = '';
    while (this.randomString.length < 5) {
      this.randomString = btoa(Math.random().toString()).substr(10, 5);
    }
   this.whatStringCreated(this.randomString)
    return this.randomString;
  }

  whatStringCreated(randomString:string){
    if(this.randomString.includes('0')){
      this.containZero();
    }
    if(this.randomString === randomString.split("").reverse().join("")){
      this.isPalindrome();
    }

    if(this.randomString.match("^[0-9]*$")){
      this.isNumericString();
    }
  }

  containZero(): void{
    // this.text.className = '';
    console.log("0");
  }

  isPalindrome(): void{
    console.log("revert");
  }

  isNumericString(): void{
    console.log('123');
  }
}


