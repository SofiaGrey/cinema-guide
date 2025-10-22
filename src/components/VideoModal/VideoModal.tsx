import { useAppDispatch, useAppSelector } from '../../hooks';
import { setVideoOpen } from '../../store/slices';
import { setVideo } from '../../store/slices/videoSlice';
import { Modal } from '../Modal/Modal';

export const VideoModal = () => {
	const { isVideoOpen, video } = useAppSelector((state) => state.video);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(setVideoOpen(false));
		dispatch(setVideo(''));
	};

	return (
		<Modal
			cb={() => handleClick()}
			isOpen={isVideoOpen}
			wrapperClassName="max-w-80 sm:max-w-140 md:max-w-180 lg:max-w-210 xl:max-w-260 p-0 sm:p-0">
			<div className="w-full min-h-53 sm:min-h-80 md:min-h-110 lg:min-h-135">
				<iframe
					className="w-full min-h-53 sm:min-h-80 md:min-h-110 lg:min-h-135"
					src={`https://www.youtube.com/embed/${video}`}
					allow="autoplay; encrypted-media"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>
		</Modal>
	);
};
