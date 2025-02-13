import React, { useState } from 'react';

function MarksEntry({ userName }) {
  const [marks, setMarks] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: '',
  });

  const [submittedMarks, setSubmittedMarks] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setMarks({
      ...marks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(marks).some((mark) => mark === '')) {
      alert('Please enter marks for all subjects.');
      return;
    }

    setSubmittedMarks([
      ...submittedMarks,
      {
        subject1: marks.subject1,
        subject2: marks.subject2,
        subject3: marks.subject3,
        subject4: marks.subject4,
        subject5: marks.subject5,
      },
    ]);

    setMarks({
      subject1: '',
      subject2: '',
      subject3: '',
      subject4: '',
      subject5: '',
    });

    setIsSubmitted(true); // Set to true after marks are submitted
  };

  return (
    <div>
      <h2>Enter Marks</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subject 1:</label>
          <input
            type="number"
            name="subject1"
            value={marks.subject1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subject 2:</label>
          <input
            type="number"
            name="subject2"
            value={marks.subject2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subject 3:</label>
          <input
            type="number"
            name="subject3"
            value={marks.subject3}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subject 4:</label>
          <input
            type="number"
            name="subject4"
            value={marks.subject4}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subject 5:</label>
          <input
            type="number"
            name="subject5"
            value={marks.subject5}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <h3>
          Welcome, {userName}! Here are your submitted marks:
        </h3>
      )}

      {submittedMarks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Tamil</th>
              <th>English</th>
              <th>Maths</th>
              <th>Science</th>
              <th>Social</th>
            </tr>
          </thead>
          <tbody>
            {submittedMarks.map((entry, index) => (
              <tr key={index}>
                <td>{entry.subject1}</td>
                <td>{entry.subject2}</td>
                <td>{entry.subject3}</td>
                <td>{entry.subject4}</td>
                <td>{entry.subject5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MarksEntry;
