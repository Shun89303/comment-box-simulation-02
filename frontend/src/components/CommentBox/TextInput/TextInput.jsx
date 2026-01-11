import { useComment } from '../context/useComment.js';

export const TextInput = () => {

    const {handleText} = useComment();
    return (
        <input className='text-input' type="text" onChange={handleText}/>
    )
}