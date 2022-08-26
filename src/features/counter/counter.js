import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increate, decreament, increatementByAmout} from './couterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <h1>Counter:</h1>
            <span style={{fontSize: '30px', display:'flex', alignItems:'center'}}>{count}</span>
            <button onClick={()=>{
                dispatch(increate())
            }}>Add</button>
            <button onClick={()=>{
                dispatch(decreament())
            }}>Reduce</button>
            <button onClick={()=>{
                dispatch(increatementByAmout(5))
            }}>Add Any Amount</button>
        </div>
    )
}
export default Counter