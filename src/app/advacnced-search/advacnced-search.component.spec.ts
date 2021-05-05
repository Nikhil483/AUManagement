import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvacncedSearchComponent } from './advacnced-search.component';

describe('AdvacncedSearchComponent', () => {
  let component: AdvacncedSearchComponent;
  let fixture: ComponentFixture<AdvacncedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvacncedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvacncedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
