import Tag from "../../Assets/Tag.png";
import video from "../../Assets/video.png";
import image from "../../Assets/image.png";
import notes from "../../Assets/notes.png";
import star from "../../Assets/star.svg";
let images;

function ResourceCard(props) {

  if (props.tags.includes('video')) {
    images = video;
  } else if (props.tags.includes("image")) {
    images = image;
  } else if (props.tags.includes("article")) {
    images = notes;
  }

  return (
    <section className="resourceCard">
      <div className="topCard">
        {" "}
        <img
          className="resourceImage"
          src={images}
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
              <img alt="tag" className="imageTag" src={Tag}></img>
              {tag}
            </li>
          );
        })}
      </dl>
    </section>
  );
}

export default ResourceCard;
