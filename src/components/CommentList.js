import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentListItem from './CommentListItem';
import CommentInput from './CommentInput';
import sortComments from '../selectors/selector';
import './commentList.css';

const CommentList = (props) => {

  const commentListItems = props.comment.map(comment => (
    <CommentListItem {...comment} key={comment.id}/>
  ));

  

  return (
    <div className="cardContainer">
      <CommentInput />
      {console.log(props.comment)}
      { props.comment && commentListItems }
    </div>
  );
};

CommentList.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.shape({
    userName: PropTypes.string,
    userId: PropTypes.string,
    comment: PropTypes.string,
    id: PropTypes.string,
    dateTime: PropTypes.string
  })),
};

const mapStatetoProps = (state) => {
    return {
        comment: sortComments([...state])
    }
}

export default connect(mapStatetoProps)(CommentList);