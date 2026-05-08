import React from 'react';
import { workoutSchedule } from '../data/workoutData';
import './../App.css';

const WorkoutMain = () => {
  return (
    <section className="workout-container">
      <div className="schedule-grid">
        {workoutSchedule.map((day) => (
          <div key={day.day} className="day-card">
            <div className="day-header">
              <span className="day-number">Day {day.day}</span>
              <h2>{day.name}</h2>
              <p className="session-count">
                {day.videos.length} {day.videos.length === 1 ? 'Session' : 'Sessions'}
              </p>
            </div>
            
            <div className="video-list">
              {day.videos.map((video, idx) => (
                <a 
                  key={idx} 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-item"
                >
                  <div className="thumbnail-container">
                    <img 
                      src={`/images/${video.image}`} 
                      alt={video.title} 
                      className="video-thumbnail"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Workout';
                      }}
                    />
                    <div className="play-overlay">
                      <svg viewBox="0 0 24 24" width="48" height="48">
                        <path fill="currentColor" d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="video-info">
                    <h3>{video.title || `Workout ${idx + 1}`}</h3>
                    <span>Watch Video</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkoutMain;