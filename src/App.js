import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
    console.log(props);
  return (
    <div className="App">
        <p>product length {props.aaa.length}</p>
        <p>{props.user}</p>
        <p></p>
        <button onClick={()=> props.ccc('jane')}>액션 테스트</button>
    </div>
  );
}

// subscribe : 스토어의 state를 props 매핑
const  mapStateToProps = (state) => ({
  //왼쪽은 props, 오른쪽은 store의 state
  aaa: state.productReducer,
  bbb: state.userReducer
});

// dispatch : {액션을 디스패치하는} 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
   // 왼쪽은 props, 오른쪽은 펑션
    ccc : (name) => dispatch(updateUser(name))
});


//HoC, 커링 펑션
export default connect(mapStateToProps, mapActionToProps)(App);