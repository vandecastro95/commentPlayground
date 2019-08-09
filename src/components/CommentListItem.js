import React from 'react';
import PropTypes from 'prop-types';
import './commentListItem.css';
import img from './like.png';

function CommentListItem({ userId, userName, comment, userPic }) {

  return (
    <div className="card">
          <div className="imageContainer">
            <img src={userPic} alt={userName} className="img-responsive" height="80px" width="80px"/>
          </div>

          <div className="cardContent">
            <h3>
            {userName}
            </h3>
            <p>
            {comment}
            </p>
          </div>
    </div>
  );
}

CommentListItem.propTypes = {
    userName: PropTypes.string,
    userId: PropTypes.string,
    comment: PropTypes.string,
    id: PropTypes.string,
    dateTime: PropTypes.string
};

export default CommentListItem;