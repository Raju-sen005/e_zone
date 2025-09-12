import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoSection = () => {
  const [show, setShow] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const handleOpen = () => {
    setVideoSrc('https://www.youtube.com/embed/tvPnrfQCiCo?autoplay=1');
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setVideoSrc('');
  };

  return (
    <div className="video-section mt-100 overflow-hidden">
      <div
        className="overlay-furniture section-spacing"
        style={{
          background: `url(${process.env.PUBLIC_URL}/assets/img/video/video-furniture.jpg) no-repeat fixed center/cover`
        }}
      >
        <div className="container video-container">
          <div className="row">
            <div className="col-12">
              <div className="video-tools d-flex align-items-center justify-content-center">
                <div className="video-button-area">
                  <button
                    className="video-button border-0 bg-transparent"
                    onClick={handleOpen}
                    style={{ cursor: 'pointer' }}
                  >
                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21.5 12.134C22.1667 12.5189 22.1667 13.4811 21.5 13.866L2 25.1244C1.33333 25.5093 0.499999 25.0281 0.499999 24.2583L0.5 1.74167C0.5 0.971867 1.33333 0.490743 2 0.875643L21.5 12.134Z"
                        fill="#FEFEFE" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal size="xl" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body className="p-0">
          {videoSrc && (
            <div className="ratio ratio-16x9">
              <iframe
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoSection;
