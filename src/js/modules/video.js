const video = () => {
  const playClassName = 'playing';
  const cardElems = {
    btn: document.querySelectorAll('[data-playShow]'),
    videoWrapper: document.querySelector('[data-videoShow]'),
    itemWrapper: document.querySelector('.card-page__img_main'),
  };

  const videoElems = {
    buttons: document.querySelectorAll('[data-play]'),
    video: document.querySelectorAll('[data-video]'),
  };

  for (const btn of cardElems.btn) {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      cardElems.videoWrapper.classList.toggle('show');
      cardElems.itemWrapper.classList.toggle('hidden');
    });
  }

  const playVideo = async (videoElem, playButton) => {
    try {
      await videoElem.play();
      playButton.classList.add(playClassName);
    } catch (err) {
      playButton.classList.remove(playClassName);
    }
  };

  const checkEventPlayer = (videoElem, playButton) => {
    videoElem.addEventListener('play', () => {
      playButton.classList.add(playClassName);
    });
    videoElem.addEventListener('pause', () => {
      playButton.classList.remove(playClassName);
    });

  };

  const player = () => {
    for (const btn of videoElems.buttons) {
      const elem = btn.closest('.blog__preview');
      const videoItem = elem.querySelector('.blog__video');
      btn.addEventListener('click', () => {
        if (!btn.classList.contains(playClassName)) {
          playVideo(videoItem, btn);
        }
      });
      checkEventPlayer(videoItem, btn);
    }
  };
  player();
};

export default video;
