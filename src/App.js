import React from 'react';
import './App.css';
import {connect} from "react-redux";

function App(props) {
    console.log(props);
  return (
    <div className="App">
        <p>product length {props.aaa.length}</p>
    </div>
  );
}

// subscribe : 스토어의 state를 props 매핑
const  mapStateToProps = (state) => ({
  //왼쪽은 props, 오른쪽은 store의 state
  aaa: state.productReducer,
  bbb: state.userReducer
});

//HoC, 커링 펑션
export default connect(mapStateToProps)(App);