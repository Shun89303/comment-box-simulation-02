import { TextInput } from './Text-Input/TextInput.jsx';
import { ActionBox } from './Action-Box/ActionBox.jsx';

export const CommentBox = () => {
    return (
        <div className='comment-box'>

            <TextInput />

            <ActionBox />

        </div>
    )
}