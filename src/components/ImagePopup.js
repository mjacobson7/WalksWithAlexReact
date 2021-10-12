import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImagePopup = ({
	onClose,
	selectedImage,
	onNavigate,
	hideLeftNav,
	hideRightNav,
}) => {
	const handleClick = (e) => {
		if (
			e.target.className !== 'popup__image' &&
			e.target.nodeName !== 'svg' &&
			e.target.nodeName !== 'path'
		) {
			onClose();
		}
	};

	return (
		<div
			className={`popup popup_type_image ${
				selectedImage && 'popup_is-opened'
			} `}
			onClick={handleClick}>
			<FontAwesomeIcon
				className={`popup__arrow ${hideLeftNav ? 'popup__arrow_hide' : ''}`}
				icon={faChevronLeft}
				onClick={() => onNavigate(selectedImage, 'left')}
			/>

			<div className='popup__content popup__content_content_image'>
				<button
					type='button'
					className='popup__close'
					onClick={handleClick}></button>
				<img
					alt={selectedImage?.name}
					className='popup__image'
					src={selectedImage?.link}
				/>
			</div>
			<FontAwesomeIcon
				className={`popup__arrow ${hideRightNav ? 'popup__arrow_hide' : ''}`}
				icon={faChevronRight}
				onClick={() => onNavigate(selectedImage, 'right')}
			/>
		</div>
	);
};

export default ImagePopup;
