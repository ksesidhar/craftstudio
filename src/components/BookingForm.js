import { useState } from "react";

function BookingForm({ video }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Booking Confirmed!\n${name} booked ${video.title} on ${date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingForm;
