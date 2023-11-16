// News.js

import React from 'react';
import NewsCard from './Newscard'; // Assuming both files are in the same directory
import './new.css';

function News() {
  // Example news data
  const newsData = [
    {
      imageUrl: 'https://3.bp.blogspot.com/--1I3RAMzduY/VyEQ9BLLM5I/AAAAAAAAVO4/-u-IuQZUZtIP7UZx1ZVvZpQL8BuE8Y02QCLcB/s640/open-kitchen-at-plant-matter-kitchen.jpg',
      title: 'News Title 1',
      category: 'CATEGORY 1',
      description: 'News Description 1',
    },
    {
      imageUrl: 'https://3.bp.blogspot.com/--1I3RAMzduY/VyEQ9BLLM5I/AAAAAAAAVO4/-u-IuQZUZtIP7UZx1ZVvZpQL8BuE8Y02QCLcB/s640/open-kitchen-at-plant-matter-kitchen.jpg',
      title: 'News Title 2',
      category: 'CATEGORY 2',
      description: 'News Description 2',
    },
    {
      imageUrl: 'https://3.bp.blogspot.com/--1I3RAMzduY/VyEQ9BLLM5I/AAAAAAAAVO4/-u-IuQZUZtIP7UZx1ZVvZpQL8BuE8Y02QCLcB/s640/open-kitchen-at-plant-matter-kitchen.jpg',
      title: 'News Title 3',
      category: 'CATEGORY 3',
      description: 'News Description 3',
    },
  ];

  return (
    <section className='newsEvent'>
      <header className='News-heading'>
        <h4>DON'T MISS</h4>
        <hr />
        <h1>Our News And Events</h1>
        <p>News of our restaurant</p>
      </header>
      <section className='Newsdisplay'>
        {newsData.map((newsItem, index) => (
          <NewsCard key={index} {...newsItem} />
        ))}
      </section>
      <footer className='Newsbutton'>
        <button>READ MORE</button>
      </footer>
    </section>
  );
}

export default News;
