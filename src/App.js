import { useState } from "react";

const questions = [
  {
    id: 1,
    que: "What language is React based on?",
    ans: "Javascript",
  },
  {
    id: 2,
    que: "What are the building blocks of React apps?",
    ans: "Components",
  },
  {
    id: 3,
    que: "How to pass data from parent to child components?",
    ans: "Props",
  },
  {
    id: 4,
    que: "What's the name of the syntax we use to describe UI in React?",
    ans: "JSX",
  
  },
  {
    id: 5,
    que: "How to give components memory?",
    ans: "State",
    
  },
  {
    id: 6,
    que: "What do we call an input element that is completely synchronised with state?",
    ans: "Controlled Elements",

  },
];

export default function App() {
  return (
    <div className="app">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div className="cardlist">
      {questions.map((question) => (
        <div onClick={() => {selectedId === question.id ? setSelectedId(0) : setSelectedId(question.id) }} className={selectedId === question.id ? "card ans" : "card que"}>
        <span>{selectedId === question.id ? question.ans : question.que}</span>
      </div>
      ))}
    </div>
  );
}

