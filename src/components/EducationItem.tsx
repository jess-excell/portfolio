import type { Education } from "../types/Education";

interface props {
    education: Education
};

const item = ({education}: props) => <div>
    <h4 style={{fontWeight: 200, marginBottom: "5px"}}>{education.level}</h4>
    <ul>
        { education.achievements.map ((achievement) => <li key={achievement}>{achievement}</li>)}
    </ul>
</div>;

export default item;