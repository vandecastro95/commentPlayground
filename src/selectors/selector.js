export default (comment) => (
    
    comment.sort((a,b) => {
            return a.dateTime < b.dateTime ? 1 : -1; 
        }
    )
)