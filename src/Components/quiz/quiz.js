import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../../Assets/src_sounds_play.mp3";
import correct from "../../Assets/src_sounds_correct.mp3";
import wrong from "../../Assets/src_sounds_wrong.mp3";
import { Card, Button } from 'react-bootstrap';
import './Quiz.css';

const Quiz = ({ data, setTime, setQuestionNumber, questionNumber, setGameOver }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [classname, setClassname] = useState(null);
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassname("answer active");
    delay(3000, () => {
      setClassname(a.correct ? "answer correct" : "answer wrong");
    });
    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          if (questionNumber === data.length) {
            setGameOver(true); //game over when last question is answered
          } else {
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
          }
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTime(true); //game over on wrong answer
        });
      }
    });
  };

  return (
    <Card className="quiz flex-grow-1 d-flex flex-column">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="question flex-shrink-0">{question?.question}</Card.Title>
        <div className="answers flex-grow-1 d-flex flex-column justify-content-center">
          {question?.answers.map((a) => (
            <Button
              key={a.text}
              className={selectedAnswer === a ? classname : "answer"}
              onClick={() => handleClick(a)}
              variant="outline-primary"
            >
              {a.text}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Quiz;
