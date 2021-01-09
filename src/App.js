import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, signin, signout} from './actions'


function App() {

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signin())}>sign in </button>
      <button onClick={() => dispatch(signout())}>sign out</button>
      {isLogged ? <h3>Valuable Information</h3> : ''}
    </div>
  );
}

export default App;
