import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  hendelClick(e) {
    console.log(e);
  }
  render() {
    return (
      <>
        <FeedbackOptions onClickBtn={this.hendelClick} />
        <Statistics
          good={this.state.good}
          netural={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
