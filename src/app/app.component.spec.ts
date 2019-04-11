/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { routes } from './app.routes';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a router outlet', () => {
  const de = fixture.debugElement.query(By.directive(RouterOutlet));

  expect(de).not.toBeNull();
  });

  it('should have a link to todos page', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const index = debugElements.findIndex(de => de.properties.href === '/todos');
    expect(index).toBeGreaterThan(-1);
  });
});
