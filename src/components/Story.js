import React from 'react';
import './story.css';

function Story() {
  return (
    <div className='story'>
      <div className='story-heading'>
        <h1>OUR STORY</h1>
        <hr id='story-hr'></hr>
        <h4>Welcome to Royal</h4>
        <p>In the heart of the bustling city, a quaint restaurant named "Savor Haven" emerged, becoming a culinary haven for locals. Founded by Chef Elena Rodriguez, Savor Haven blended her rich culinary heritage with a modern twist. The restaurant's warm ambiance, adorned with rustic decor and dim lighting, created an inviting atmosphere. Signature dishes like the "Sizzling Chimichurri Steak" and "Mango Tango Shrimp" quickly became the talk of the town, enticing food enthusiasts from afar.

Savor Haven's success was not just about the delectable cuisine; it was also a testament to the attentive staff and Chef Elena's commitment to quality. Regulars praised the personalized dining experience, where each visit felt like a journey through flavor. As word spread, the restaurant's popularity soared, solidifying Savor Haven as a culinary gem that celebrated both tradition and innovation in every bite.</p>
      </div>
      <div className='story-image'>
        <img id='story-img' src='https://th.bing.com/th/id/OIP.zjNFJgK1NBjCHf5EaiiCJAHaEd?pid=ImgDet&rs=1' alt='Restaurant Image'></img>
      </div>
    </div>
  );
}

export default Story;
