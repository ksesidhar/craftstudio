import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <div className="card" style={{display:"flex",justifyContent:"space-between"}}>

    <div className="card" style={{border:0}}>
        
      <h3>{video.title}</h3>
      <p>Creator: {video.creator}</p>
      <p>Duration: {video.duration}</p>
      <p>₹{video.price}</p>

      <Link to={`/book/${video.id}`}>
        <button>Book Now</button>
      </Link>
    </div>
    <div >
        <img src={video.imgurl} alt={video.title} style={{height:'170px',borderRadius:'10px'}} />
    </div>
    </div>
  );
}

export default VideoCard;
