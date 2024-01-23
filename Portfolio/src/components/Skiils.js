import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = ()=>{
    
    const [myskills] = useState([
        {
            name: "HTMLffff",
            progress: 40
        },
        {
            name: "CSS",
            progress: 70
        },
        {
            name: "JavaScript",
            progress: 90
        },
        {
            name: "React",
            progress: 50
        },
        {
            name: "Photoshop",
            progress: 70
        },
    ])
    return(
        <section className="skills">
            <h1>Skills</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
                culpa illum nulla cum ipsum nam fugiat. Dicta exercitationem similique
                incidunt nulla recusandae, omnis, sequi, odio expedita assumenda
                officia iste architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
                culpa illum nulla cum ipsum nam fugiat. Dicta exercitationem similique
                incidunt nulla recusandae, omnis, sequi, odio expedita assumenda
            </p>

            <div className="focused-skills">
                <div>
                    <p className="my-focus">My Focus</p>
                    <ul>
                        <li>UI/UX Design</li>
                        <li>Responsive Design</li>
                        <li>Web Design</li>
                        <li>Mobile App Design</li>
                    </ul>
                </div>
                <div className='prog'>
                    <div>
                        {
                            myskills.map((item) => {
                                return(
                                    <div>
                                    {item.name} <ProgressBar variant="success" now={item.progress} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills