import { useComment } from '../../context/useComment.js';

export const ImageFile = () => {
    const { handleFileChange, fileInputRef } = useComment();

    return (
        <input 
            id='imageFile' 
            type="file" 
            accept='image/*' 
            hidden 
            onChange={handleFileChange}
            ref={fileInputRef}
        />
    )
}