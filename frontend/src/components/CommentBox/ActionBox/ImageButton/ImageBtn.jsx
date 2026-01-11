import icon from '../../../../assets/image-gallery-icon.png';

export const ImageBtn = () => {
    return (
        <button className='image-btn'>
            <img 
                src={icon}
                alt="icon"
                className='image-btn-img'
            />
        </button>
    )
}