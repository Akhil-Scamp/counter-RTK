import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { increase,decrease } from './Features/counter';
const Counter = () => {
    const {count} =  useSelector((store)=>store.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter</h1>
<button  onClick={()=>dispatch(increase())}>+</button>
       <h3>{count}</h3>
<button disabled ={count<=0}onClick={()=>dispatch(decrease())}>-</button>
</div>
  )
}

export default Counter