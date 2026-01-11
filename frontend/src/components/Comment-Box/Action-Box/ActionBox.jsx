import { ImageFile } from './Image-File/ImageFile.jsx';
import { ImageBtn } from './Image-Button/ImageBtn.jsx';
import { CommentBtn } from './Comment-Button/CommentBtn.jsx';

export const ActionBox = () => {
    return (
        <div className='action-box'>

            <ImageFile />

            <ImageBtn />

            <CommentBtn />
        </div>
    )
}