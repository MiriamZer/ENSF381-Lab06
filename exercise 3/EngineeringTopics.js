import React from 'react';

const topics = [
  { title: "Software Engineering", description: "Building innovative software solutions for the modern world." },
  { title: "Electrical Engineering", description: "Powering innovation in electronics and systems." },
  { title: "Mechanical Engineering", description: "Designing machines and systems that shape the future." },
  { title: "Chemical Engineering", description: "Advancing processes for a sustainable future." }
];

function EngineeringTopics() {
  return topics.map(function(topic) {
    return (
      <div key={topic.id}>
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
      </div>
    );
  });
}

export default EngineeringTopics;
