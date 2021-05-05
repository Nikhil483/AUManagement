import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserDataService } from '../../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;

  photoUrl: string;
  name: string;
  email: string;
  user = {};

  validatingForm: FormGroup;
  searchForm: any;
  searchParams: {
    Jlocation: string[];
    skill: string[];
    HiringManager: string[];
    Department: string[];
    experience: string[];
    startDate: Date;
    endDate: Date;
  };

  constructor(
    private userService: UserDataService,
    private _Activatedroute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
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
  }

  applyFilter(keyword: string) {
    this.dataSource.filter = keyword.trim().toLowerCase();
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

  editOppurtunity() {
    this.router.navigate(['edit', this.email]);
  }

  deleteOppurtunity() {
    alert("delete logic not written")
  }

  myAccount() {
    alert('Account not Implmented');
  }

  signOut(): void {
    this.router.navigate([''], { replaceUrl: true });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    position: 11,
    name: 'Nen',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];
