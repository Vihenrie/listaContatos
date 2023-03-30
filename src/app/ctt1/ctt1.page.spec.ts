import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ctt1Page } from './ctt1.page';

describe('Ctt1Page', () => {
  let component: Ctt1Page;
  let fixture: ComponentFixture<Ctt1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ctt1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
