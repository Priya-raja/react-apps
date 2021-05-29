import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';
import Content from './components/Content';
import './App.css';
import styled from 'styled-components';
import Button from './components/Button';
import Icon from './components/Icon';


function App() {
const Section = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`
const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`
// const counter = useSelector(state => state.counter);
// const isLogged = useSelector(state => state.isLogged);
// const dispatch = useDispatch();
    return (
        <>
            {/* <h1>Counter {counter} </h1> */}
            {/* <button onClick= { () => dispatch( increment()) }> + </button>
            {/* <button onClick ={ () => dispatch(decrement())}> - </button> */}
            {/* {isLogged ? <h2> Hi Welcome </h2>: ""} */} 
            <h1> Progress Tracker</h1>
            <Section>
                <WeekdayTitle>M</WeekdayTitle>
            </Section>
            <Section>
                <WeekdayTitle>T</WeekdayTitle>
            </Section>
            <Section>
                <WeekdayTitle>W</WeekdayTitle>
            </Section>
            <Section>
                <WeekdayTitle>T</WeekdayTitle>
            </Section>
            <Section>
                <WeekdayTitle>F</WeekdayTitle>
            </Section>
            <Section>
                <WeekdayTitle>S</WeekdayTitle>
            </Section>
            <Button primary text="First Me"> </Button>
            <Button text="Second Me"> </Button>
            <Icon primary/>
            <Icon></Icon>

        </>
    )
}
export default App;