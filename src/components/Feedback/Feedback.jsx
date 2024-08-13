import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad }) {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  );
}
