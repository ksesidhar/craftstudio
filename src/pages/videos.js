import videos from "../data/video";
import VideoCard from "../components/VideoCard";

function Videos() {
  return (
    <div className="container">
      <h1>Book your slots</h1>
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default Videos;
