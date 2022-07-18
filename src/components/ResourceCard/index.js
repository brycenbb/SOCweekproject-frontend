import Tag from "../../Assets/Tag.png";
import video from "../../Assets/video.png";
import image from "../../Assets/image.png";
import notes from "../../Assets/notes.png";
import star from "../../Assets/star.svg";
let resourceImage;

function ResourceCard(props) {
  if (props.tags.includes("video")) {
    resourceImage = video;
  } else if (props.tags.includes("image")) {
    resourceImage = image;
  } else if (props.tags.includes("article")) {
    resourceImage = notes;
  }

  return (
    <section className="resource-card">
      <div className="top-card">
        {" "}
        <img
          className="resource-image"
          src={resourceImage}
          alt="resource type logo"
        ></img>{" "}
        <a target="_blank" rel="noreferrer" className="title" href={props.link}>
          {props.link.slice(0, 30) + "..."}
        </a>
        <div
          id="rating"
          aria-label={`Rating for this resource is ${props.rating} stars out of 5`}
        >
          <p id="rating-text">{props.rating} </p>
          <img src={star} alt="rating star" id="rating-star"></img>
        </div>
      </div>

      <dl className="tags">
        {props.tags.map((tag, index) => {
          return (
            <li key={index}>
              <img alt="tag" className="image-tag" src={Tag}></img>
              {tag}
            </li>
          );
        })}
      </dl>
    </section>
  );
}

export default ResourceCard;
