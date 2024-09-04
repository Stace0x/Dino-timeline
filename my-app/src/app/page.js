'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./page.css"; // Assume custom styles are here

// export default function Home () {
//   // Dummy data for cards
//   const cardData = [
//     { id: 1, title: "Card 1", description: "Description for card 1" },
//     { id: 2, title: "Card 2", description: "Description for card 2" },
//     { id: 3, title: "Card 3", description: "Description for card 3" },
//     { id: 4, title: "Card 4", description: "Description for card 4" },
//     { id: 5, title: "Card 5", description: "Description for card 5" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change card every 3 seconds
//     return () => clearInterval(interval);
//   }, [cardData.length]);

//   return (
//     <div className="app-container">
//       {/* Header */}
//       <header className="header">
//         <h1>My Website</h1>
//       </header>

//       <div className="main-content">
//         {/* Sidebar */}
//         <aside className="sidebar">
//           <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Services</li>
//             <li>Contact</li>
//           </ul>
//         </aside>

//         <div className="content">
//           {/* Hero Section */}
//           <section className="hero">
//             <h2>Welcome to Our Website</h2>
//             <p>Discover amazing content and services.</p>
//           </section>

//           {/* Cards Carousel */}
//           <section className="carousel">
//             <div className="carousel-inner">
//               {cardData.map((card, index) => (
//                 <div
//                   key={card.id}
//                   className={`carousel-item ${
//                     index === currentIndex ? "active" : ""
//                   }`}
//                 >
//                   <h3>{card.title}</h3>
//                   <p>{card.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2024 My Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

export default function Home () {
  // Dummy data for cards
  const cardData = [
    { id: 1, title: "Card 1", description: "Description for card 1" },
    { id: 2, title: "Card 2", description: "Description for card 2" },
    { id: 3, title: "Card 3", description: "Description for card 3" },
    { id: 4, title: "Card 4", description: "Description for card 4" },
    { id: 5, title: "Card 5", description: "Description for card 5" },
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
            <h2>Welcome to Our Website</h2>
            <p>Discover amazing content and services.</p>
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

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};