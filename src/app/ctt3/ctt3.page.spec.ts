import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ctt3Page } from './ctt3.page';

describe('Ctt3Page', () => {
  let component: Ctt3Page;
  let fixture: ComponentFixture<Ctt3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ctt3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
