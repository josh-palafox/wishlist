import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/modules/wishItem';
import { OutletContext } from '@angular/router';
import events from '../../shared/services/EventService';

@Component({
	selector: 'wish-list-item',
	templateUrl: './wish-list-item.component.html',
	styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {
	@Input() wishText! : string;

	@Input() fulfilled! : boolean;
	@Output() fulfilledChange = new EventEmitter<boolean>();

	get cssClasses() {
	return {'strikeout text-muted': this.fulfilled};
	}
	constructor() {}

	ngOnInit(): void {
	}

	removeWish() {
	events.emit('removeWish', this.wishText);
	}

	toggleFulfilled() {
	this.fulfilled = !this.fulfilled;
	this.fulfilledChange.emit(this.fulfilled);
	}
}
