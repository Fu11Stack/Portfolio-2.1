import React, {useRef, lazy} from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { mediaQueries } from "./Themes";
import BigTitle from '../subComponents/BigTitle';
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));




const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`


  const Main = styled(motion.div)`
  border: 3px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: .5rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1;
  border-radius: 0 50px 0 50px;

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

export default function ContactUs ()  {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send('service_ipcow5c', 'template_6y39kme', form.current, 'Wu4CkMQ90aqWBkihF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const Send = styled.input`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Main}:hover & {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
  
  return (

  <Box
  variants={container}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { duration: 1.5 } }}
  exit={{ opacity: 0, transition: { duration: 0.5 } }}
  > 

        
        <form  onSubmit={sendEmail}>
        <Main
        initial={{ height: 250 }}
        animate={{ height: 500 }}
        transition={{ type: "spring", duration: 2.5, delay: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }} >
        <label>Name</label>
        <input  type="text" name="user_name" size="50" />
        
        <label>Email</label>
        
        <input type="email" name="user_email" size="50" />
        
        <label>Message</label>
        
        <textarea name="message"  rows="8" cols="55"/>
        
        <Send input type="submit" value="Send">
          
        </Send>

        </Main>
        </form>
        
        

    <SocialIcons theme="light" />
    <LogoComponent theme="light" />
    <PowerButton />
    <BigTitle text="Email" top="80%" right="30%" />
  </Box>
  );
};


