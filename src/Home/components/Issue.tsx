import React, { useState } from 'react';

const IssueTracker = () => {
  const [issues, setIssues] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setIssues([...issues, { text: inputValue, status: 'on process' }]);
      setInputValue('');
    }
  };

  const markAsDone = (index) => {
    const updatedIssues = issues.map((issue, i) => 
      i === index ? { ...issue, status: 'done' } : issue
    );
    setIssues(updatedIssues);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-5">Issue Tracker</h2>
      
      <div className="mb-4">
        {issues.map((issue, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded flex justify-between ${issue.status === 'done' ? 'bg-green-100' : 'bg-yellow-100'}`}
          >
            <span>{issue.text}</span>
            {issue.status === 'on process' && (
              <button
                className="bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => markAsDone(index)}
              >
                Mark as Done
              </button>
            )}
          </div>
        ))}
      </div>

      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Enter issue"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <button
        className="bg-blue-500 text-white p-2 w-full rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default IssueTracker;
