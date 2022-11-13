import React ,{useReducer} from 'react'

const initalistate = 0;

const reducer = (state , action) => {
  if(action ==='increase'){
  return state + 1;
} else if(action ==='decrease') {
return state - 1;
} else{
return state;
}
};  

const Counter = () => {
  const [ count , dispatch ] = useReducer (reducer,initalistate);
  return (
    <div>
      <p>{count}</p>
      <button className='click' onClick = {()=>dispatch('increase') }>increase </button>
      <button className='click' onClick = {()=>dispatch('decrease')}>decrease </button>
    </div>
  );

};
export default Counter;