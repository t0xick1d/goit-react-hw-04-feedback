import { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

import style from './App.module.css';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);
  const [posProcent, setPosProcent] = useState(0);
  useEffect(() => {
    setPosProcent(Math.round((state.good * 100) / total));
  }, [total, state.good]);

  const addStatisticsFeedback = value => {
    const actualValue = value;
    setState(prevState => {
      return {
        ...prevState,
        [actualValue]: prevState[actualValue] + 1,
      };
    });
    setTotal(prevState => prevState + 1);
  };

  return (
    <div className={style.body}>
      <div className={style.component}>
        <h2>Please leave feedback</h2>
        <FeedbackOptions addStatisticsFeedback={addStatisticsFeedback} />
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={total}
              positivePercentage={posProcent}
            />
          ) : (
            <Notification message="No feedback given!!!" />
          )}
        </Section>
      </div>
    </div>
  );
}

export default App;
