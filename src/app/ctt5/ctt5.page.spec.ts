import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ctt5Page } from './ctt5.page';

describe('Ctt5Page', () => {
  let component: Ctt5Page;
  let fixture: ComponentFixture<Ctt5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ctt5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
