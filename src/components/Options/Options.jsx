import css from "./Options.module.css";

export default function Options({ onLeaveFeedback }) {
  return (
    <div className={css.con}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
    </div>
  );
}
