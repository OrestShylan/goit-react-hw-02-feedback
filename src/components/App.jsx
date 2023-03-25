import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // hendelClick(evt) {
  //   const { value } = evt.target;
  //   // this.setState({ [name]: value });
  //   this.setState(prevState => ({
  //     [value]: prevState[value] + 1,
  //   }));
  // }
  onIncrement = select => {
    this.setState(prevState => ({
      [select]: prevState[select] + 1,
    }));
  };
  render() {
    return (
      <>
        <FeedbackOptions onIncrement={this.onIncrement} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
