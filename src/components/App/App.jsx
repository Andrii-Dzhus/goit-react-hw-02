import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import { useState } from "react";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options onLeaveFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
