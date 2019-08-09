import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../actions/comments';
import './commentInput.css';

const CommentInput = props => {
        
    const [comment, setComment] = useState("");
    
    const handleInputChange = (event) => {
        event.persist();
        setComment(event.target.value);
      }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.addComment(comment)
    }

    return (

  <form onSubmit={handleOnSubmit} className="inputRoot">
    <textarea
      type="comment"
      name="comment"
      placeholder="Add a public comment"
      value={comment}
      onChange={handleInputChange}
    />
    <button type="submit">Submit</button>
  </form>
)};

CommentInput.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => (
    {
        addComment: (comment) => dispatch(addComment({comment: comment }))
    }
)

export default connect(undefined, mapDispatchToProps)(CommentInput);