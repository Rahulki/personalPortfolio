import ProjectCard from "../Components/ProjectCard";
import bartersHubImage from "../Images/bartershub.jpeg";
import creaturesComfortImage from "../Images/tablet_view.png";
import teamTrackImage from "../Images/Team track.jpeg"

const projects = [  {
                        id:1,
                        name:"Barter's Hub", organization:"Conestoga College", 
                        year:"2024", description:"Built full fledged market place application", 
                        imagePath:bartersHubImage,
                        link:"https://github.com/Rahulki/BartersHub.git"
                    },
                    {
                        id:2,
                        name:"Creature Comforts", organization:"Conestoga College", 
                        year:"2023", description:"A responsive site design purely based on HTML5 and CSS3", 
                        imagePath:creaturesComfortImage,
                        link:"https://github.com/bhuvaneshwari-sivasangaran/responsive-site-design"
                    },
                    {
                        id:3,
                        name:"Team Track", organization:"Conestoga College", 
                        year:"2023", description:"A MERN stack project to track employees of the Company", 
                        imagePath:teamTrackImage,
                        link:"https://github.com/Rahulki/TeamTrack"
                    }
                ]

const  Home = ()=>{
    return(
        <>
            <main className="mt-5">
                <section className="introduction d-flex flex-column align-items-center pt-5" id="introduction">
                <div className="MyImage rounded-circle"></div>
                <h1 className="black-gradient-h1 pt-3">Hi, I'm Rahul.</h1>
                <p className="mt-3"><i className="fa-solid fa-location-dot pr-3"></i>Kitchener, ON</p>
                <p className="mt-2 head-line">Recent web development 
                    graduate with experience at Reallocinfotech. Ready to create responsive, user-friendly websites.</p>
                </section>
                <section className="m-5" id="projects">
                    <div className="d-flex flex-column align-items-center">
                        {
                            projects.map(
                                (project)=>
                                {
                                    return <ProjectCard key={project.id} project={project} />
                                }
                            )
                        }
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home; 