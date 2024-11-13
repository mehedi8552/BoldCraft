import "../../../node_modules/react-modal-video/scss/modal-video.scss";
// import Lottie from "lottie-react";
// import btn from "../../assets/PlayBtutton.json";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export const VideoBtn = ({ videoId }: { videoId: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 1, autoplay: 1 }}
          isOpen={isOpen}
          videoId={videoId}
          allowFullScreen
          onClose={() => setIsOpen(false)}
        />
        <button
          onClick={openModal}
          className="h-20 w-20 bg-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12 pl-2 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.75L15.75 12 5.25 18.25V5.75z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoBtn;

