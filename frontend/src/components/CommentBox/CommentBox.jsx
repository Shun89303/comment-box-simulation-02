import { TextInput } from './TextInput/TextInput.jsx';
import { ActionBox } from './ActionBox/ActionBox.jsx';

export const CommentBox = () => {

    return (
        <div className='comment-box'>
            <TextInput />
            <ActionBox />
        </div>
    )
}