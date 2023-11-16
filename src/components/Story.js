import React from 'react';
import './story.css';

function Story() {
  return (
    <div className='story'>
      <div className='story-heading'>
        <h1>OUR STORY</h1>
        <hr id='story-hr'></hr>
        <p>Hello, I am a restaurant.</p>
      </div>
      <div className='story-image'>
        <img id='story-img' src='https://th.bing.com/th/id/OIP.zjNFJgK1NBjCHf5EaiiCJAHaEd?pid=ImgDet&rs=1' alt='Restaurant Image'></img>
      </div>
    </div>
  );
}

export default Story;
