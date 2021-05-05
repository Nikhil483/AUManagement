import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserDataService } from '../../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  photoUrl: string;
  name: string;
  email: string;
  user = {};

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserDataService,
    private _Activatedroute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.photoUrl = params.get('photoUrl');
      this.name = params.get('name');
      this.email = params.get('email');
      this.user = {"photoUrl" : this.photoUrl, "name" : this.name, "email": this.email}
    });
  }

  signOut(): void {
    this.router.navigate([''], { replaceUrl: true });
  }
}
