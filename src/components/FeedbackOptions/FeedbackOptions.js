import React from 'react';
import PropTypes from 'prop-types';

import style from './FeedbackOptions.module.css';

export default function ListButtons({ addStatisticsFeedback }) {
  const listButton = ['good', 'neutral', 'bad'];
  return (
    <ul className={style.list}>
      {listButton.map(item => {
        return (
          <li key={item} className={style.item}>
            <button
              className={style.button}
              onClick={() => {
                addStatisticsFeedback(item);
              }}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ListButtons.propTypes = {
  addStatisticsFeedback: PropTypes.func.isRequired,
};
