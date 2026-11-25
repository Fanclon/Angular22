import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeSearch } from './episode-search';

describe('EpisodeSearch', () => {
  let component: EpisodeSearch;
  let fixture: ComponentFixture<EpisodeSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
