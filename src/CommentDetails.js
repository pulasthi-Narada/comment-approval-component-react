import React from 'react';

const commentDetails = (props) => {
  
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.user.img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.user.username}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
        <div className="actions">
          <a href="/" className="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default commentDetails;
