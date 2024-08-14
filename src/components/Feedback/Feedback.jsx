import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, positive }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bbad: {bad}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
