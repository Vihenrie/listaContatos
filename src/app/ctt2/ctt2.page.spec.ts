import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ctt2Page } from './ctt2.page';

describe('Ctt2Page', () => {
  let component: Ctt2Page;
  let fixture: ComponentFixture<Ctt2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ctt2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
