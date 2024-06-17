import { useEffect, useMemo, useState } from "react";
import Quiz from "../quiz/quiz";
import Timer from "../Timer/Timer";

const GameUI = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [time, setTime] = useState(false);
  const [earned, setEarned] = useState("₹0");

  const data = [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        {
          text: "<script>",
          correct: true,
        },
        {
          text: "<scripting>",
          correct: false,
        },
        {
          text: "<js>",
          correct: false,
        },
        {
          text: "<javascript>",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p> ",
      answers: [
        {
          text: 'document.getElement("p").innerHTML = "Hello World!";',
          correct: false,
        },
        {
          text: '#demo.innerHTML = "Hello World!";',
          correct: false,
        },
        {
          text: 'document.getElementById("demo").innerHTML = "Hello World!";',
          correct: true,
        },
        {
          text: 'document.getElementByName("p").innerHTML = "Hello World!";',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Where is the correct place to insert a JavaScript?",
      answers: [
        {
          text: "The <body> section ",
          correct: false,
        },
        {
          text: "The <head> section",
          correct: false,
        },
        {
          text: "Both the <head> section and the <body> section are correct ",
          correct: true,
        },
        {
          text: "<meta>",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        'What is the correct syntax for referring to an external script called "xxx.js"?',
      answers: [
        {
          text: '<script href="xxx.js">',
          correct: false,
        },
        {
          text: '<script src="xxx.js">  ',
          correct: true,
        },
        {
          text: '<script name="xxx.js">',
          correct: false,
        },
        {
          text: '<link rel="xxx.js"',
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: 'How do you write "Hello World" in an alert box?',
      answers: [
        {
          text: 'alertBox("Hello World");',
          correct: false,
        },
        {
          text: 'msgBox("Hello World");',
          correct: false,
        },
        {
          text: 'msg("Hello World");',
          correct: false,
        },
        {
          text: 'alert("Hello World"); ',
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "How do you create a function in JavaScript?",
      answers: [
        {
          text: "function myFunction()  ",
          correct: true,
        },
        {
          text: "function = myFunction() ",
          correct: false,
        },
        {
          text: "function:myFunction()",
          correct: false,
        },
        {
          text: "create function()",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "How to write an IF statement in JavaScript?",
      answers: [
        {
          text: "if i == 5 then",
          correct: false,
        },
        {
          text: "if i = 5 then",
          correct: false,
        },
        {
          text: "if (i == 5) ",
          correct: true,
        },
        {
          text: "if i = 5",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      answers: [
        {
          text: "if i =! 5 then",
          correct: false,
        },
        {
          text: "if i <> 5",
          correct: false,
        },
        {
          text: "if (i != 5)  ",
          correct: true,
        },
        {
          text: "if (i <> 5)",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "How does a FOR loop start?",
      answers: [
        {
          text: "for (i <= 5; i++)",
          correct: false,
        },
        {
          text: "for (i = 0; i <= 5)",
          correct: false,
        },
        {
          text: "for i = 1 to 5",
          correct: false,
        },
        {
          text: "for (i = 0; i <= 5; i++)",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "What is the correct way to write a JavaScript array?",
      answers: [
        {
          text: 'var colors = ["red", "green", "blue"]  ',
          correct: true,
        },
        {
          text: 'var colors = "red", "green", "blue"',
          correct: false,
        },
        {
          text: 'var colors = (1:"red", 2:"green", 3:"blue")',
          correct: false,
        },
        {
          text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "How do you round the number 7.25, to the nearest integer?",
      answers: [
        {
          text: "round(7.25)",
          correct: false,
        },
        {
          text: "Math.round(7.25)  ",
          correct: true,
        },
        {
          text: "Math.rnd(7.25)",
          correct: false,
        },
        {
          text: "rnd(7.25)",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "How can you detect the client's browser name?",
      answers: [
        {
          text: "browser.name",
          correct: false,
        },
        {
          text: "client.navName",
          correct: false,
        },
        {
          text: "navigator.appName",
          correct: true,
        },
        {
          text: "client.detect",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which event occurs when the user clicks on an HTML element?",
      answers: [
        {
          text: "onclick",
          correct: true,
        },
        {
          text: "onchange",
          correct: false,
        },
        {
          text: "onmouseover",
          correct: false,
        },
        {
          text: "onmouseclick",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What will the following code return: Boolean(10 > 9)",
      answers: [
        {
          text: "false",
          correct: false,
        },
        {
          text: "NaN",
          correct: false,
        },
        {
          text: "error",
          correct: false,
        },
        {
          text: "true",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "How do you find the number with the highest value of x and y?",
      answers: [
        {
          text: "Math.ceil(x, y)",
          correct: false,
        },
        {
          text: "Math.max(x, y)",
          correct: true,
        },
        {
          text: "top(x, y)",
          correct: false,
        },
        {
          text: "ceil(x, y)",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () => [
      { id: 15, amount: "₹1,00,00,000" },
      { id: 14, amount: "₹50,00,000" },
      { id: 13, amount: "₹25,00,000" },
      { id: 12, amount: "₹12,50,000" },
      { id: 11, amount: "₹6,40,000" },
      { id: 10, amount: "₹3,20,000" },
      { id: 9, amount: "₹1,60,000" },
      { id: 8, amount: "₹80,000" },
      { id: 7, amount: "₹40,000" },
      { id: 6, amount: "₹20,000" },
      { id: 5, amount: "₹10,000" },
      { id: 4, amount: "₹5,000" },
      { id: 3, amount: "₹3,000" },
      { id: 2, amount: "₹2,000" },
      { id: 1, amount: "₹1,000" },
    ],
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <>
      <div className="app">
        <div className="main">
          {time ? (
            <h1 className="end">You earned: {earned} </h1>
          ) : (
            <div className="top">
              <div className="timer">
                <Timer setTime={setTime} questionNumber={questionNumber} />
              </div>
            </div>
          )}

          <div className="bottom">
            <Quiz
              data={data}
              setTime={setTime}
              setQuestionNumber={setQuestionNumber}
              questionNumber={questionNumber}
            />
          </div>
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li
                key={m.id}
                className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default GameUI;
