import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {AddCar, DeleteCar, LoadCars, UpdateCar} from './redux/cars.action';
import {Car} from './car.model';
import {any} from "codelyzer/util/function";

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

  addCar(car: Car) {
    this.http.post(CarsService.BASE_URL + 'cars', car)
      .subscribe(
        (car: Car) => {
          this.store.dispatch(new AddCar(car))
        }
      )
  }

  deleteCar(car: Car) {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
      .subscribe(
        () => {
          this.store.dispatch(new DeleteCar(car))
        }
      )
  }

  updateCar(car: Car) {
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .subscribe(
        (car: Car) => {
          this.store.dispatch(new UpdateCar(car))
        }
      )
  }
}
