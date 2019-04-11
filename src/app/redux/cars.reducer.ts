import {Car} from '../car.model';
import {AddCar, CAR_ACTION} from "./cars.action";

const initialSTate = {
  cars: [
    new Car('Ford', 'some day', 'Focus', false, 1),
    new Car('Audi', 'some day2', 'A4', false, 2)
  ]
}

export function carsReducer(state = initialSTate, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    default:
      return state
  }
}
