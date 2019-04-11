import {Car} from '../car.model';

const initialSTate = {
  cars: [
    new Car('Ford', 'some day', 'Focus', false, 1),
    new Car('Audi', 'some day2', 'A4', false, 2)
  ]
}

export function carsReducer(state = initialSTate, action) {

}
