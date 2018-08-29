import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';
import { User } from './shared/DTO/user.model';

@Component({
  selector: 'bc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  user: User;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this.userService.user.subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        this.router.navigate(['auth/login']);
      }
    );
  }


}


