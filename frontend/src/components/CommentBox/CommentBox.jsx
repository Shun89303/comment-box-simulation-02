import { TextInput } from './TextInput/TextInput.jsx';
import { ActionBox } from './ActionBox/ActionBox.jsx';
import { CommentProvider } from './context/CommentProvider.jsx';

export const CommentBox = () => {

    return (
        <div className='comment-box'>
            <CommentProvider>
                <TextInput />
                <ActionBox />
            </CommentProvider>
        </div>
    )
}