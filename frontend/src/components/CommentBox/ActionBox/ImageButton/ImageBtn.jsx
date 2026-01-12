import { useComment } from '../../context/useComment.js';
import icon from '../../../../assets/image-gallery-icon.png';

export const ImageBtn = () => {
    const { handleUploadImage } = useComment();
    
    return (
        <button className='image-btn' onClick={handleUploadImage}>
            <img 
                src={icon}
                alt="icon"
                className='image-btn-img'
            />
        </button>
    )
}