import { connect } from 'react-redux'
import './App.css';

function App() {
  return (
    <div className="App">
      页面初始化
    </div>
  );
}

export default connect(
  function mapStateToProps(state) { },
  function mapDispatchToProps(dispatch) { }
)(App);
