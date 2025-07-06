import ExperienceCard from "../cards/ExperienceCard"
import experience from "../../constants/experience";

const Experience = () => <section id="experience">
    <h2>Experience</h2>

    <div className="card-container">
        {experience.map(entry => <ExperienceCard key={entry.title} entry={entry}/>)}
    </div>
</section>;


export default Experience;