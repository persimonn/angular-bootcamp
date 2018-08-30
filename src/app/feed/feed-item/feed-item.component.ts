import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bc-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
