import uuid from 'uuid';
import moment from 'moment';

//ADD_EXPENSE

export const addComment = (
    { userId = '', userName = 'Anonymous', comment = '', userPic = 'https://i2.wp.com/www.refreshmarketing.co.uk/wp-content/uploads/2014/10/linked-in-profile-anonymous.jpg', likes = 0 } = {}
    ) => ({
    type: 'ADD_COMMENT',
    comment: {
        id: uuid(),
        dateTime: moment().format("MM ddd, YYYY hh:mm:ss a"),
        userId,
        userName,
        comment,
        userPic,
        likes
    }
})

//REMOVE_EXPENSE

export const removeComment = (
    id = {}
) => (
    {
    type: 'REMOVE_COMMENT',
    comment: {
        id
    }
})

//EDIT_EXPENSE

export const editComment = (id, updates) => {
    return (
    
    {
        type: 'EDIT_COMMENT',
        id,
        updates
    }
);}