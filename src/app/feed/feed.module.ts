import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { FeedItemComponent } from './feed-item/feed-item.component';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule
  ],
  declarations: [FeedComponent, PostComponent, FeedItemComponent]
})
export class FeedModule { }
