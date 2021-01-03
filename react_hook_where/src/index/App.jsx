import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Header from '../common/header'
import CityCom from './cityCom/'
import DateCom from './dateCom'
import HighSpeed from './highspeed'
import CitySeletor from '../common/citySeletor'
import { exchangeFromTo, showCitySelector, hideCitySelector } from './actions'
function App(props) {
  const {
    from,
    to,
    dispatch,
    isCitySelectorVisible
  } = props
  const onBack = useCallback(() => {
    window.history.back()
  }, [])
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="./query.html" className="form">
        <CityCom
          from={from}
          to={to}
          showCitySelector={(m) => { dispatch(showCitySelector(m)) }}
          exchangeFromTo={() => dispatch(exchangeFromTo())}
        />
      </form>
      <CitySeletor
        show={isCitySelectorVisible}
        onBack={() => dispatch(hideCitySelector())}
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
