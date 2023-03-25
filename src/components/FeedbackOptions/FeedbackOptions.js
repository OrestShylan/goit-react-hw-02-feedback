export const FeedbackOptions = ({ onClickBtn }) => (
  <ul>
    <li>
      <button onClick={() => onClickBtn('good')}> Good </button>
    </li>
    <li>
      <button onClick={() => onClickBtn('bad')}> Bad </button>
    </li>
    <li>
      <button onClick={() => onClickBtn('netural')}> Neutural </button>
    </li>
  </ul>
);
