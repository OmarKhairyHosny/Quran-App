/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AyatSouraComponent } from './Ayat-Soura.component';

describe('AyatSouraComponent', () => {
  let component: AyatSouraComponent;
  let fixture: ComponentFixture<AyatSouraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyatSouraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyatSouraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
