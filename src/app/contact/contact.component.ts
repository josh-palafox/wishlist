import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor() {}

  ngOnInit(): void{
  }

  senderNameControl = new FormControl('');
  senderEmailControl = new FormControl('');
   senderMessageControl = new FormControl('');

  submitForm() {
    if(this.senderNameControl.dirty) {
      alert('you changed the name field');
    }
  }

}
