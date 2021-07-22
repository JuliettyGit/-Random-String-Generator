import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  randomString:string = '';

  constructor() { }

  ngOnInit(): void {
    this.getString();
  }

 getString(){
    this.randomString = '';
    while (this.randomString.length < 5) {
      this.randomString = btoa(Math.random().toString()).substr(10, 5);
    }
    return this.randomString;
  }

}


