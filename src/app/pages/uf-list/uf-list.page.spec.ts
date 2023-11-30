import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UfListPage } from './uf-list.page';

describe('UfListPage', () => {
  let component: UfListPage;
  let fixture: ComponentFixture<UfListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UfListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
