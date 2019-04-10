import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from '../car.model';
import * as moment from 'moment'

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.sass']
})
export class CarsFormComponent implements OnInit {

  carName: string = ''
  carModel: string= ''
  private id: number = 2
  @Output() addCar = new EventEmitter<Car>()

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    if (this.carModel === '' || this.carName === '') return

    this.id = ++this.id

    const car = new Car(
      this.carName,
      this.carModel,
      moment().format('DD.MM.YY'),
      false,
      this.id
    )

    this.addCar.emit(car)

    this.carName = ''
    this.carModel = ''
  }

  onLoad() {

  }

}
