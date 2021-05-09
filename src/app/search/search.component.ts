import { Component, OnInit, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort } from '@angular/material/sort';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

import Oppurtunity from '../Model/Oppurtunity.model';

import { UserDataService } from '../../services/user-data.service';
import { CrudOppService } from '../../services/crud-opp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SearchComponent implements OnInit {
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  opps: MatTableDataSource<any>;
  columnsToDisplay = ['oppId', 'skill', 'hiringManager', 'department'];
  expandedElement: any | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  photoUrl: string;
  name: string;
  email: string;
  user = {};

  allOpurtunities: Oppurtunity[];

  private apiServerUrl = environment.BaseUrl;

  validatingForm: FormGroup;
  searchForm: any;
  searchParams: any;

  constructor(
    private userService: UserDataService,
    private _Activatedroute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private crudOppService: CrudOppService
  ) {
    this.searchForm = this.formBuilder.group({
      Jlocation: [''],
      skill: [''],
      HiringManager: [''],
      Department: [''],
      experience: [''],
      startDate: new Date(),
      endDate: new Date(),
    });
  }

  ngOnInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;

    this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.photoUrl = params.get('photourl');
      this.name = params.get('name');
      this.email = params.get('email');
      this.user = {
        photoUrl: this.photoUrl,
        name: this.name,
        email: this.email,
      };
      console.log(this.user);
    });
    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required),
    });

    this.getAllOppurtunities();
  }

  getAllOppurtunities() {
    this.crudOppService.getAllOppurtinities().subscribe(
      (response: Oppurtunity[]) => {
        console.log(response);
        this.opps = new MatTableDataSource(response);
        this.opps.sort = this.sort;
        this.opps.paginator = this.paginator;
        this.opps.filterPredicate = (data: any, filter) => {
          console.log(filter);
          const dataStr = JSON.stringify(data).toLowerCase();
          return dataStr.indexOf(filter) !== -1;
        };
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }

  /*ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }*/

  applyFilter(keyword: string) {
    this.opps.filter = keyword.trim().toLowerCase();
  }

  advancedSearch() {
    this.searchParams = {
      Jlocation: this.searchForm.value.Jlocation,
      skill: this.searchForm.value.skill,
      HiringManager: this.searchForm.value.HiringManager,
      Department: this.searchForm.value.Department,
      experience: this.searchForm.value.experience,
      startDate: this.searchForm.value.startDate,
      endDate: this.searchForm.value.endDate,
    };

    console.log('Seach params ', this.searchParams);
  }

  createOppurtunity() {
    this.router.navigate(['create', this.email]);
  }

  trends() {
    this.router.navigate(['trends', this.email]);
  }

  editOppurtunity(id) {
    this.router.navigate(['edit', this.email, id]);
  }

  deleteOppurtunity(id) {
    this.crudOppService.deleteOppurtunity(id).subscribe((res) => {
      console.log(res);
    });
  }

  myAccount() {
    alert('Account not Implmented');
  }

  signOut(): void {
    this.router.navigate([''], { replaceUrl: true });
  }
}

