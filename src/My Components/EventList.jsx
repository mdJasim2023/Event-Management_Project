import React, { useState } from "react";
import events from "./data";

const EventList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  return (
    <div className="container mt-4 eventlist">
      <h2 className="mb-4 text-center text-light">Upcoming Events</h2>
      
      {!selectedEvent ? (
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">
                    <strong>Date:</strong> {event.date} <br />
                    <strong>Time:</strong> {event.time} <br />
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="card-text">{event.description}</p>
                  <button className="btn btn-primary" onClick={() => setSelectedEvent(event)}> View Details </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card shadow p-4">
          <button className="btn btn-secondary mb-3" onClick={() => setSelectedEvent(null)}> ← Back to Events</button>
          <h3>{selectedEvent.title}</h3>
          <p>
            <strong>Date:</strong> {selectedEvent.date} <br />
            <strong>Time:</strong> {selectedEvent.time} <br />
            <strong>Location:</strong> {selectedEvent.location}
          </p>
          <p>{selectedEvent.fullDescription}</p>
          <h5>Organizer Details</h5>
          <p>
            <strong>Organizer:</strong> {selectedEvent.organizer} <br />
            <strong>Contact:</strong> {selectedEvent.contact}
          </p>
          <button className="btn btn-success">Register for Event</button>
        </div>
      )}
    </div>
  );
};

export default EventList;
