import { ImageFile } from './ImageFile/ImageFile.jsx';
import { ImageBtn } from './ImageButton/ImageBtn.jsx';
import { CommentBtn } from './CommentButton/CommentBtn.jsx';

export const ActionBox = () => {
    return (
        <div className='action-box'>

            <ImageFile />

            <ImageBtn />

            <CommentBtn />
        </div>
    )
}