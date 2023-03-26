import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onIncrement }) => (
  <ul className={css.feedback}>
    <li>
      <button
        value="good"
        name="good"
        onClick={() => {
          onIncrement('good');
        }}
      >
        Good
      </button>
    </li>
    <li>
      <button
        value="bad"
        name="bad"
        onClick={() => {
          onIncrement('bad');
        }}
      >
        Bad
      </button>
    </li>
    <li>
      <button
        value="netural"
        name="neutral"
        onClick={() => {
          onIncrement('neutral');
        }}
      >
        Neutural
      </button>
    </li>
  </ul>
);

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};
