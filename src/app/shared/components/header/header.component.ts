import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../DTO/user.model';
import { MatDialog } from '@angular/material';
import { CreatePostComponent } from '../create-post/create-post.component';

@Component({
  selector: 'bc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @Input() user: User;

  constructor(private userService: UserService,
  private dialog: MatDialog ) { }

  logout() {
    this.userService.logout();
  }

  createPost() {
    this.dialog.open(CreatePostComponent);
  }
}
