import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Footer = () => {
    return(
        <>
        <footer className="bg-dark text-white">
            <div>
                <p>GET IN TOUCH</p>
                <i class="fa-regular fa-envelope"></i> hamasahmed0@gmail <br/> 
                <i class="fa-solid fa-phone"></i> +20 114 680 0935
            </div>
            <div>
            <Button variant="contained" endIcon={<SendIcon />}> <a href='mailto: hamasahmed0@gmail.com'>Contact Me</a></Button>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/hamasahmed/'><i class="fa-brands fa-linkedin"> </i></a> 
                <a href='https://www.facebook.com/profile.php?id=100008280917510'><i class="fa-brands fa-facebook"> </i></a> 
                <a href='https://twitter.com/?lang=ar'><i class="fa-brands fa-twitter"> </i></a> 
                <p>Copyright &copy; 2019 KR</p>
            </div>
        </footer>
        </>
    )
}

export default Footer