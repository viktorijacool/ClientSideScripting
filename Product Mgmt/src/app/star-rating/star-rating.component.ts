import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {

  @Input()
  rating: number = 0;

  @Output()
  notify: EventEmitter<number> = new EventEmitter();  
  
  starWidth: number = 120;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = 24 * this.rating;
  }

  ngOnInit(): void {
    console.log("Provided rating: " + this.rating);
  }

  onClick(): void {
    console.log("From star rating: clicked!");
    this.notify.emit(this.rating);
  }

}
