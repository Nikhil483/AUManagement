import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  photoUrl: string;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private userService: UserDataService
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user.photoUrl);

      if (this.loggedIn) {
        this.router.navigate([
          'search',
          this.user.photoUrl,
          this.user.name,
          this.user.email,
        ]);
      }
    });
  }
}

/*this.userService.setUser(this.user).subscribe((response) => {
        console.log(response);
        console.log('user stored');
      });*/
