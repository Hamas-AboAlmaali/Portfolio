import * as React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';




const About = () => {
    return (
        <section className='about-me'>
        <div>
            <h1 style={{width: "200px"}}>About me</h1>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
                culpa illum nulla cum ipsum nam fugiat. Dicta exercitationem similique
                incidunt nulla recusandae, omnis, sequi, odio expedita assumenda
                officia iste architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
                culpa illum nulla cum ipsum nam fugiat. Dicta exercitationem similique
                incidunt nulla recusandae, omnis, sequi, odio expedita assumenda
                officia iste architecto.
            </p>
            <Button variant="contained" endIcon={<DownloadIcon />}> <a href="Hamas.pdf" download>Download REsume</a></Button>
        </div>
        </section>
    );
};

export default About;
