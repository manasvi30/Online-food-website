import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='appdownload' id="appdownload">
        <p>For a better experience, download<br />Tomato App</p>
        <div className='appdownload-platforms'>
            <img src={assets.play_store} alt="Download from Play Store" />
            <img src={assets.app_store} alt="Download from App Store" />
        </div>
    </div>
  );
}

export default AppDownload;
