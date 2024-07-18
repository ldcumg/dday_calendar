// 배경음 실행 관련
document.addEventListener('DOMContentLoaded', function() {
  const soundElement = document.querySelector('.sound');
  const stopElement = document.querySelector('.stop');
  const bgm = document.querySelector('.bgm');

  soundElement.addEventListener('click', function() {
    bgm.play();
  });

  stopElement.addEventListener('click', function() {
    bgm.pause();
    bgm.currentTime = 0;
  });
});