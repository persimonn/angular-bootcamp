import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../DTO/user.model';

@Component({
  selector: 'bc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @Input() user: User;

  constructor(private userService: UserService ) { }

  logout() {
    this.userService.logout();
  }
}
