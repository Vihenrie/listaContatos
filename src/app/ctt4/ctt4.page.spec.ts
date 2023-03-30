import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ctt4Page } from './ctt4.page';

describe('Ctt4Page', () => {
  let component: Ctt4Page;
  let fixture: ComponentFixture<Ctt4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ctt4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
