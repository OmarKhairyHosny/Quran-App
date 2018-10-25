/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuranListComponent } from './Quran-list.component';

describe('QuranListComponent', () => {
  let component: QuranListComponent;
  let fixture: ComponentFixture<QuranListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuranListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuranListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
