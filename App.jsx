import React from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [flashCard, setFlashCard] = React.useState([
    {
      question: "What is JSX?",
      choices: [
        "A syntax extension for JavaScript",
        "A new programming language"
      ],
      answer: "A syntax extension for JavaScript.",
      explanation: `JSX allows you to write HTML elements in JavaScript and place them in the DOM without createElement() or appendChild().`,
      flipped: false,
    },
    {
      question: "What are React components?",
      choices: [
        "Reusable building blocks in React",
        "CSS styles for React"
      ],
      answer: "Reusable building blocks in React.",
      explanation: `Components are like JavaScript functions that return HTML elements. They help break the UI into reusable, independent pieces.`,
      flipped: false,
    },
    {
      question: "What is the Virtual DOM?",
      choices: [
        "A lightweight copy of the real DOM",
        "A new type of physical DOM"
      ],
      answer: "A lightweight copy of the real DOM.",
      explanation: `The Virtual DOM allows React to make updates efficiently by comparing changes with a virtual representation before touching the real DOM.`,
      flipped: false,
    },
    {
      question: "What are props in React?",
      choices: [
        "Parameters passed to components",
        "A special type of state"
      ],
      answer: "Parameters passed to components.",
      explanation: `Props are used to pass data from a parent component to a child component. They are immutable and enhance reusability.`,
      flipped: false,
    },
    {
      question: "What is state in React?",
      choices: [
        "A built-in object to store data",
        "Global variables"
      ],
      answer: "A built-in object to store data.",
      explanation: `State allows components to manage their own data. When state changes, React re-renders the component.`,
      flipped: false,
    },
    {
      question: "What is the purpose of useEffect?",
      choices: [
        "To perform side effects in functional components",
        "To manage component styling"
      ],
      answer: "To perform side effects in functional components.",
      explanation: `useEffect is a React Hook that lets you synchronize a component with external systems, such as fetching data or updating the DOM.`,
      flipped: false,
    },
    {
      question: " functiona vs class components?",
      choices: [
        "Functional components are stateless, while class components can have state.",
        "Functional components are faster."
      ],
      answer: "Functional components are stateless, while class components can have state.",
      explanation: `Functional components became more powerful with hooks, while class components were used for managing state and lifecycle earlier.`,
      flipped: false,
    },
    {
      question: "What is a React Hook?",
      choices: [
        "Functions that let you use state and lifecycle in functional components",
        "A way to style components"
      ],
      answer: "Functions that let you use state and lifecycle in functional components.",
      explanation: `Hooks like useState and useEffect let functional components manage state and handle lifecycle methods.`,
      flipped: false,
    },
    {
      question: "What is React Context?",
      choices: [
        "A way to share data globally in React",
        "A debugging tool"
      ],
      answer: "A way to share data globally in React.",
      explanation: `Context provides a way to pass data through the component tree without manually passing props at every level.`,
      flipped: false,
    },
    {
      question: "What is React Router?",
      choices: [
        "A library for handling routing in React",
        "A database management system"
      ],
      answer: "A library for handling routing in React.",
      explanation: `React Router enables navigation between views of a React application, synchronizing the UI with the URL.`,
      flipped: false,
    },
  ]);
  

  const change = (index) => {
    setFlashCard((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, flipped: !card.flipped } : card
      )
    );
  };



  return (
    <div>
      <header>
        <img src="./images/react.svg" alt="React Logo" />
        <h1> Quick React Recap</h1>
        
      </header>

      <div className="ppp">💡 Click to get ans</div>
      
      <div className="container">


        {flashCard.map((card, index) => (

          
   

          <div
        
            key={nanoid()}
            // className={`flash-card  ${card.flipped ? "flipped" : ""}`}
            className={ card.flipped ? `flash-card flipped ` : `flash-card`}
            onClick={() => change(index)}
          >
            <div className="flash-card-inner">
              <div className="flash-card-front">
                <p className="question">{card.question}</p>
                <ol type="a">
                  {card.choices.map((choice) => (
                    <li key={nanoid()}>{choice}</li>
                  ))}
                </ol>
              </div>
              <div className="flash-card-back">
                <p className="answer">{card.answer}</p>
                <p>{card.explanation}</p>
              </div>
            </div>
          </div>
        ))}
   </div>

   <div className="ppp">🧑‍💻 <a href="linktr.ee/developedbyjk">@developedbyjk</a></div>
    </div>
  );
}
