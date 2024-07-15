import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItem';
import { NgForOf } from '@angular/common';
import { EventService } from './../shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items! : WishItem[];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) =>{
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data : any)=>{
      this.items = data;
    })
  }

  filter (item: WishItem):boolean {
    return !item.isComplete;
  }
}