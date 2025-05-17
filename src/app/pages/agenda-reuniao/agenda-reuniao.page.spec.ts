import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaReuniaoPage } from './agenda-reuniao.page';

describe('AgendaReuniaoPage', () => {
  let component: AgendaReuniaoPage;
  let fixture: ComponentFixture<AgendaReuniaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaReuniaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
