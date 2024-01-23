import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Header = () => {
    return(
        <header>
            <div className='header'>
                <h1> Hamas Abo Almaali </h1>
                <h2>Full Stack Developer</h2> <br/><br/>
                <Button variant="contained" endIcon={<SendIcon />}> <a href='mailto: hamasahmed0@gmail.com'>Contact Me</a></Button>
            </div>
        </header>
    )
}

export default Header