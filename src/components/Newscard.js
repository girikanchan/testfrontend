// NewsCard.js

import React from 'react';

function NewsCard({ imageUrl, title, category, description }) {
  return (
    <article className='Newscard'>
      <img src={imageUrl} alt={`News Image - ${title}`} />
      <h3>{title}</h3>
      <h5>{category}</h5>
      <p>{description}</p>
    </article>
  );
}

export default NewsCard;
