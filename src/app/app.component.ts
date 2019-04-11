import { Component } from '@angular/core';
import {Car, Cars} from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ford', 'some day', 'Focus', false, 1),
    new Car('Audi', 'some day2', 'A4', false, 2)
  ];

  onAdd(car: Car) {
    this.cars.push(car)
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id)
  }
}
