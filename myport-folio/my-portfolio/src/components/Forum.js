import React, { useState } from 'react';

const Forum = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    const newQuestion = { id: Date.now(), question };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div>
      <h2>Q&A Forum</h2>
      <textarea placeholder="Ask a question..." />
      <button onClick={() => addQuestion(document.querySelector('textarea').value)}>
        Ask
      </button>
      <div>
        {questions.map(q => (
          <div key={q.id}>
            <p>{q.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
