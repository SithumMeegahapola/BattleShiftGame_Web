import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGameServiceService {
  private apiUrl = 'http://localhost:5052/BattleShipsContoller';

  constructor(private http: HttpClient) { }

  ClickFire(x: number, y: number): Observable<any> {
    let data = this.http.post(`${this.apiUrl}/fire`, { x, y }, { responseType: 'text' });
    console.log(data);
    return data;
  }

  MisileStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/misileStatus`);    
  }

  ResetGame(): Observable<any>  {
    return this.http.get(`${this.apiUrl}/resetGame`);
  }
}
