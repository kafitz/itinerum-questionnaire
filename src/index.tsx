import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItinerumQuestionStack from './QuestionLayout';

ReactDOM.render(
  <React.StrictMode>
    <ItinerumQuestionStack questions={[]} />
  </React.StrictMode>,
  document.getElementById('root')
);
