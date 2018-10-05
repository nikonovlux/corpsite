import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SptestComponent } from './sptest.component';

describe('SptestComponent', () => {
  let component: SptestComponent;
  let fixture: ComponentFixture<SptestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SptestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
