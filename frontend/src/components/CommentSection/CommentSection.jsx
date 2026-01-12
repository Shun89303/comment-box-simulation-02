import { useComment } from '../CommentBox/context/useComment.js';

export const CommentSection = () => {
    const { preview } = useComment();
    return (
        <div className='comment-section-box'>
            { preview && preview.map((comment, index) => (
                <div key={index} className='comment'>
                    <p className='comment-text'>{ comment.text && (comment.text) }</p>
                    { comment.imagePath && (
                        <img className='comment-image' src={`/${comment.imagePath}`} alt="preview" />
                    )}
                </div>
            ))}
        </div>
    )
}