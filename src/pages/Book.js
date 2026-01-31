import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import videos from "../data/video";

function Book() {
  const { id } = useParams();
  const video = videos.find(v => v.id === parseInt(id));

  return (
    <div>
      <h2>Booking: {video.title}</h2>
      <BookingForm video={video} />
    </div>
  );
}

export default Book;
