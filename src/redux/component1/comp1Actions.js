import { BUY_CAKE } from './comp1Types';

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}
