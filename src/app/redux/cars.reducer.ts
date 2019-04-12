import {Car} from '../car.model';
import {CAR_ACTION, CarsAction} from "./cars.action";

const initialSTate = {
  cars: [
    new Car('Ford', 'some day', 'Focus', false, 1),
    new Car('Audi', 'some day2', 'A4', false, 2)
  ]
}

export function carsReducer(state = initialSTate, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      }
    default:
      return state
  }
}
