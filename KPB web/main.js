(function () {

  var bv = new Bideo();
  bv.init({
    videoEl: document.querySelector('#background_video'),

    container: document.querySelector('body'),

    resize: true,


    isMobile: window.matchMedia('(max-width: 768px)').matches,

    pauseButton: document.querySelector('#pause'),


    src: [
      {
        src: 'night.mp4',
        type: 'video/mp4'
      },
      {
        src: 'night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());
