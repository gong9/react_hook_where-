import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Header from '../common/header'
import CityCom from './cityCom/'
import DateCom from './dateCom'
import HighSpeed from './highspeed'
import { exchangeFromTo } from './actions'
function App(props) {
  const {
    from,
    to,
    dispatch
  } = props
  const onBack = useCallback(() => {
    window.history.back()
  }, [])
  return (
    <div className="App">
      <Header title="火车票" onBack={onBack} />
      <CityCom
        from={from}
        to={to}
        // showCitySelector={showCitySelector}
        exchangeFromTo={() => dispatch(exchangeFromTo())}
      />
      {/* <DateCom />  */}
      {/* <HighSpeed /> */}

    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch }
  }
)(App);
