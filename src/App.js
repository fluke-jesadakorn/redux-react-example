import React from 'react'
import Action from './actions'
import Counter from './components/counter'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter
          value={this.props.counter}
          onIncrement={() => this.props.increment()}
          onDecrement={() => this.props.decrement()}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: Action.INCREMENT, text: "INCREMENT Redux" }),
  decrement: () => dispatch({ type: Action.DECREMENT, text: "DECREMENT Redux" })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)