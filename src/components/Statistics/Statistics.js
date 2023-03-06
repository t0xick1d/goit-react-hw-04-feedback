import React from 'react';
import PropTypes from 'prop-types';

import style from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <>
      <p className={style.paragraf}>Goood: {good}</p>
      <p className={style.paragraf}>Neutral: {neutral}</p>
      <p className={style.paragraf}>Bad: {bad}</p>
      <p className={style.paragraf}>Total: {total}</p>
      <p className={style.paragraf}>Positive feedback: {positivePercentage}%</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
