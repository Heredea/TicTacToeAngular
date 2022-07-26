import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [ BoardComponent]
    });
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verify component variable before ngOnInit', () => {
    expect(component.squares).toBe([]);
    expect(component.xIsNext).toBe(false);
    expect(component.winner).toBe("");
  });

  it('Verify component variable after ngOnInit', () => {
    let matchingArray = Array(9).fill(null);
    component.ngOnInit();
    expect(component.squares).toBe(matchingArray);
    expect(component.xIsNext).toBe(true);
    expect(component.winner).toBe(null);
  });

  it('Verify return values of get player()', () => {
    component.xIsNext = true;
    expect(component.player).toBe('X');
    component.xIsNext = false;
    expect(component.player).toBe('O');
  });

  it('Verify return values of get player()', () => {
    component.xIsNext = true;
    expect(component.player).toBe('X');
    component.xIsNext = false;
    expect(component.player).toBe('O');
  });

  it('Verify return values of calculateWinner()', () => {
    let winnCombination = [
      ['X','O','O'],
      ['O','X','X'],
      ['X','O','X'],
    ];

    let loseCombination = [
      ['X','O',''],
      ['O','O','X'],
      ['X','O','X'],
    ];

    component.squares = winnCombination;

    expect(component.calculateWinner()).toBe('X');

    component.squares = loseCombination;

    expect(component.calculateWinner()).toBe('O');
  });

  it('Verify return values of get player()', () => {
    component.ngOnInit();
    let boardPosition: number = 3;
    component.makeMove(boardPosition);
    expect(component.squares[boardPosition]).toBe('X');
    expect(component.xIsNext).toBe(false);
    expect(component.winner).toBe(null);
  });

});
