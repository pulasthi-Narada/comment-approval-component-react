import React from 'react';
import ReactDOM from 'react-dom/client';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import { randUser, randFutureDate, randPhrase } from '@ngneat/falso';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          user={randUser()}
          date={randFutureDate().toString()}
          text={randPhrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          user={randUser()}
          date={randFutureDate().toString()}
          text={randPhrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          user={randUser()}
          date={randFutureDate().toString()}
          text={randPhrase()}
        />
      </ApprovalCard>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
