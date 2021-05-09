import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

import { UserDataService } from '../../services/user-data.service';
import { ResultMessageService } from '../../services/result-message.service';
import User from '../Model/User.model';
import Token from '../Model/Token.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  photoUrl: string;

  userBody: any;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private userService: UserDataService,
    private resultService: ResultMessageService
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
      console.log(this.user)
      

      this.userBody = {
        "name":this.user.name,
        "email": this.user.email,
        "photoUrl": this.user.photoUrl
      }

      console.log(this.userBody)
      this.userService.login(this.userBody).subscribe(
        (token: Token) => {
          localStorage.setItem('user', JSON.stringify(token));
          if (this.loggedIn) {
            this.router.navigate([
              'search',
              this.user.photoUrl,
              this.user.name,
              this.user.email,
            ]);
          }
        },
        (error) => {
          this.resultService.success(
            "Please use proper email address - This email doesn't have access to this functionality"
          );
        }
      );

      
    });
  }
}

/*this.userService.setUser(this.user).subscribe((response) => {
        console.log(response);
        console.log('user stored');
      });*/
