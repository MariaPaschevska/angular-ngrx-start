import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {LoadCars} from './redux/cars.action';
import {Car} from './car.model';

@Injectable()

export class CarsService {

  static BASE_URL: string = 'http://localhost:3000/'

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  // loadCars(): void {
  //   this.http.get(CarsService.BASE_URL + 'cars')
  //     .map((response: Response) => response.json())
  //     .toPromise()
  //     .then((cars: Car[]) => {
  //       this.store.dispatch(new LoadCars(cars))
  //     })
  // }

  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
      .subscribe(
      (cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars))
      }
    )
  }
}