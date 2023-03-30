import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ctt6Page } from './ctt6.page';

describe('Ctt6Page', () => {
  let component: Ctt6Page;
  let fixture: ComponentFixture<Ctt6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ctt6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
