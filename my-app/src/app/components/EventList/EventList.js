import React, { useState } from 'react';
import EventCard from './EventCard';
import Filter from '../Filter/Filter';
import styles from './EventList.module.css';

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
export default function EventList() {
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
  console.log('applyFilters:', applyFilters);

  return (
    <div className={styles.container}>
      <h2>Upcoming Meetups</h2>
      <Filter onFilterChange={applyFilters} />
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            icon={event.icon}
            title={event.title}
            date={event.date}
            location={event.location}
            bgColor={'#f0f0f0'}
          />
        ))
      ) : (
        <p>No events found matching your filters.</p>
      )}
    </div>
  );
};

