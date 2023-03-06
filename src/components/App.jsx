import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

import style from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addStatisticsFeedback = value => {
    const actualValue = value;
    this.setState({ statisticActive: true });
    this.setState(prevState => {
      return { [actualValue]: prevState[actualValue] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      const { good, neutral, bad } = prevState;
      return { total: good + neutral + bad };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      const { total, good } = prevState;
      const posProcent = Math.round((good * 100) / total);
      return { positivePercentage: posProcent };
    });
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div className={style.body}>
        <div className={style.component}>
          <h2>Please leave feedback</h2>
          <FeedbackOptions addStatisticsFeedback={this.addStatisticsFeedback} />
          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="No feedback given!!!" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
