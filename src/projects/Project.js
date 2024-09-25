import "./projects.css";
import github from '../logos/github.png'
const Project = ({ image, alt, title, live, git }) => {
  return (
    <div className="project-container">
      <div className='project'>
        <a href={live}><img src={image} alt={alt} className='project-image'></img></a>
        <div className="project-text">
          <h3 className='project-name'>{title}</h3>
          <a href={git}><img src={github} className='project-icon' alt="github logo"></img></a>
        </div>
      </div>
    </div>
  );
};

export default Project;