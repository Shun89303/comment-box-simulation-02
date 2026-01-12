import { useComment } from '../context/useComment.js';

export const TextInput = () => {

    const {text, setText, image} = useComment();
    return (
        <div>
            <textarea value={text} className='text-input' onChange={(e) => setText(e.target.value)}/>
            { image && (
                <div style={{ width: "100px", height: "100px"}}>
                    <img 
                        src={URL.createObjectURL(image)} 
                        alt="preview" 
                        style={{ width: "100%", height: "100%", objectFit: "cover", paddingLeft: "2px"}}
                    />
                </div>
            )}
        </div>   
    )
}