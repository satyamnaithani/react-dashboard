import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const Component1 = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default Component1