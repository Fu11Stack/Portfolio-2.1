import React, {useRef, lazy} from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { lightTheme, mediaQueries } from "./Themes";
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticlesComponent")
);

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
  padding: 1rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1;

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



  
  return (

  <Box
  key="skills"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { duration: 1 } }}
  exit={{ opacity: 0, transition: { duration: 0.5 } }}
  > 
   
       
        
         <form  onSubmit={sendEmail}>
         <Main>
         <label>Name</label>
         <input  type="text" name="user_name" size="50" />
         
         <label>Email</label>
         
         <input type="email" name="user_email" size="50" />
         
         <label>Message</label>
         
         <textarea name="message"  rows="8" cols="55"/>
         
         <input type="submit" value="Send" />
         </Main>
         </form>
        
        
       
       
   <SocialIcons theme="light" />
   <LogoComponent theme="light" />
   <PowerButton />
  </Box>
  );
};


