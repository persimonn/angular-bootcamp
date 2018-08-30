import { Component, OnInit } from '@angular/core';
import { FeedItem } from '../../shared/DTO/feeditem.model';
import { FeedService } from '../../shared/services/feed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  item: FeedItem;

  constructor(private feedService: FeedService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getPost();
  }

  private getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.feedService.getPost(id).subscribe(
      (response) => {
        this.item = response.payload;
      });
  }
}

