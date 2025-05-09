// Denna animation har jag lånat och sedan modifierat från: https://codepen.io/wabeshew

import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className='wrap'>
      <div className='loading'>
        <div className='bounceball'></div>
        <div className='text'>LOADING</div>
      </div>
    </div>
  );
}

export default LoadingScreen;
