import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private log(message: string){
    this.messageService.add('HeroService: ' + message);
  }

  private heroesUrl = 'api/heroes';

  getHero(id:number): Observable<Hero>{
    this.messageService.add(`Hero Service: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
