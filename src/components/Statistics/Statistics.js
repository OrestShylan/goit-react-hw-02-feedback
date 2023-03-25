import css from './Statistics.module.css';
export const Statistics = ({ bad, good, neutral, total, positive }) => (
  <div>
    <ul className={css.stat}>
      <li> Good: {good}</li>
      <li>Bad: {bad}</li>
      <li>Netural: {neutral}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positive}%</li>
    </ul>
  </div>
);
