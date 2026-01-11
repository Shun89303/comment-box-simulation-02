import { useComment } from "../../context/useComment.js";

export const CommentBtn = () => {
    const {handleComment} = useComment();
    
    return (
        <button className='comment-btn' onClick={handleComment}>
            Comment
        </button>
    )
}