import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

const Component2 = () => {
  const iceCream = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {iceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
    </div>
  )
}

export default Component2;