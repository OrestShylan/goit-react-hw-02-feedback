import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const positivePercentage =
      +((this.state.good / this.countTotalFeedback()) * 100).toFixed(2) || 0;

    return positivePercentage;
  }
  render() {
    return (
      <>
        <Section title={'Leave feedback !'}>
          <FeedbackOptions onIncrement={this.onIncrement} />
        </Section>
        <Section title={'Statistics'}>
          {this.state.good !== 0 ||
          this.state.neutral !== 0 ||
          this.state.bad !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback " />
          )}
        </Section>
      </>
    );
  }
}
