import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = ()=>{
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
                        HTML <ProgressBar variant="success" now={40} />
                        CSS<ProgressBar variant="success" now={70} />
                        JavaScript<ProgressBar variant="success" now={90} />
                        React<ProgressBar variant="success" now={50} />
                        Photoshop<ProgressBar variant="success" now={70} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills