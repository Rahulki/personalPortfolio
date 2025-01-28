import arrowImage from "../Images/ArrowRight.png";

function ProjectCard({project}) {
    const {link,name,organization,year,imagePath, description} = project
    return (
        <>
            <a href={link} className="project-card w-inline-block">
                <div className="v-stack max-width">
                    <div className="v-space small"></div>
                    <h2>{name}</h2>
                    <div className="h-stack">
                        <p className="small-caps-subtitle">{organization}</p>
                        <div className="h-space-8px"></div>
                        <p className="small-caps-subtitle light">•</p>
                        <div className="h-space-8px"></div>
                        <p className="small-caps-subtitle">{year}</p>
                    </div>
                    <div className="v-space small"></div>
                    <p>{description}</p>
                    <div className="primary-button">
                        <div className="button-text">Read more</div>
                        <img src={arrowImage} alt="right arrow" className="button-icon" />
                    </div>
                </div>
                <img src={imagePath} loading="lazy"
                    alt="Preview of the redesigned suggested jobs carousels.." className="project-preview-image right-align" />
            </a>
        </>
    );
}

export default ProjectCard;