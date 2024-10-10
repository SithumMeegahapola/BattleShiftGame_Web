import { Component } from '@angular/core';
import { ApiGameServiceService } from '../api-game-service.service';

@Component({
  selector: 'app-war-board',
  templateUrl: './war-board.component.html',
  styleUrls: ['./war-board.component.scss']
})
export class WarBoardComponent {
  grid: any[][] = [];
  status: string = ''
  notification: string =''

  constructor(private _ApiGameServiceService: ApiGameServiceService) {
    this.grid = Array.from({ length: 10 }, () => Array(10).fill(''));
  }

  ngOnInit(): void {
    this.getGameState();
  }

  getGameState(): void {
    this._ApiGameServiceService.MisileStatus().subscribe(
      {
        next: (response) => {
          this.grid = response;

          let filteredGrid = this.grid.filter(x=> x.find(cell => cell == "DT" || cell == "BS"));
          this.notification = filteredGrid.length == 0 ? 'All ships sunked...!' : ''
        },
        error: (error) => {
          console.error('Error fetching game state:', error);
        }
      }
    );
  }

  onCellClick(x: number, y: number): void {
    this._ApiGameServiceService.ClickFire(x, y).subscribe(
      {
        next: (result: any) => {
          this.status = result
          this.getGameState();
        },
        error: (error) => {
          console.error('Error fire:', error);
        }
      }

    );
  }

  getCellDisplay(x: number, y: number): string {
    switch (this.grid[x][y]) {
      case 'H': return '💥';  // Hit
      case 'M': return '💧';  // Miss
      default: return '🌊';   // Water / Empty
    }
  }

  ResetGame() {
    this._ApiGameServiceService.ResetGame().subscribe(
      {
        next: () => {
          this.getGameState();
        },
        error: (error) => {
          console.error('Error fire:', error);
        }
      }
    );
  }
}

