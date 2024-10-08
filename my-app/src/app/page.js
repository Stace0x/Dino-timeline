'use client'
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter/Filter";

const events = [
  {
    id: 1,
    icon: '🏆',
    title: 'Saturday Kickabout',
    date: '2024-09-28',
    time: 'morning',
    location: 'Local Park',
    distance: 5,
    age: '11-12',
  },
  {
    id: 2,
    icon: '👥',
    title: 'Sunday Skills Session',
    date: '2024-09-29',
    time: 'afternoon',
    location: 'Local Park',
    distance: 10,
    age: '7-10',
  },
  {
    id: 3,
    icon: '⚽',
    title: 'After-school Football',
    date: '2024-09-30',
    time: 'afternoon',
    location: 'School Grounds',
    distance: 20,
    age: 'Under 7',
  },
];

export default function Home () {
  const [filteredEvents, setFilteredEvents] = useState(events);

  const applyFilters = (filters) => {
    let filtered = events;

    // Filter by distance
    if (filters.distance) {
      filtered = filtered.filter(
        (event) => event.distance <= parseInt(filters.distance)
      );
    }

    // Filter by time
    if (filters.time) {
      filtered = filtered.filter((event) => event.time === filters.time);
    }

    // Filter by date
    if (filters.date) {
      filtered = filtered.filter((event) => event.date === filters.date);
    }

    // Filter by age
    if (filters.age) {
      filtered = filtered.filter((event) => event.age === filters.age);
    }

    setFilteredEvents(filtered);
  };
  console.log(filteredEvents);

  return (
    <div>
      <h2>Upcoming Meetups</h2>
      <Filter onFilterChange={applyFilters} />
    </div>
  );


  // Dummy data for cards
  const cardData = [
    { id: 1, title: "Card 1", description: "Description for card 1" },
    { id: 2, title: "Card 2", description: "Description for card 2" },
    { id: 3, title: "Card 3", description: "Description for card 3" },
    { id: 4, title: "Card 4", description: "Description for card 4" },
    { id: 5, title: "Card 5", description: "Description for card 5" },
    // { id: 6, title: "Card 6", description: "Description for card 6" },
    // { id: 7, title: "Card 7", description: "Description for card 7" },
    // { id: 8, title: "Card 8", description: "Description for card 8" },
    // { id: 9, title: "Card 9", description: "Description for card 9" },
    // { id: 10, title: "Card 10", description: "Description for card 10" }
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>Dinos</h1>
      </header>

      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            <li>Home</li>
            <li>time periods</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </aside>

        <div className="content">
          {/* Hero Section */}
          <section className="hero">
            <h2>Welcome to our history</h2>
            <p>Discover amazing facts on many Dinos</p>
          </section>

          {/* Scrollable Cards Carousel */}
          <section className="carousel">
            <div className="carousel-inner">
              {cardData.map((card) => (
                <div key={card.id} className="carousel-item">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Filter />

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};