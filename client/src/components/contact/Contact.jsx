import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Aos from 'aos'
import 'aos/dist/aos.css'


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

  const handleForm = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const sendForm = await axios.post('/send', {
        name,
        email,
        message,
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContactStyle id='contact' data-aos="fade-up">
      <h1>Contact Me</h1>
      <p>Feel free to contact me any time. I will get back to you as soon as I can!</p>
      <form onSubmit={(e)=>handleForm(e)}>
        <input value={name} required onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        <input value={email} required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </ContactStyle>
  );
}

export default Contact




const ContactStyle = styled.div`
    display: grid;
    place-items: center;
    padding: 3rem;
    width: 70%;
    margin: auto;

    form{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 60%;
        gap: 2rem;

        input{
            padding:1rem;
            border: none;
            color: #333;
            border-bottom: 1px solid #CDC8C6;
            background-color: transparent;
            outline: none;
        }

        button{
            padding: 0.6rem 1rem;
            background-color: #333;
            color: #CDC8C6;
            border: none;
            font-weight: bolder;
            font-size: 1rem;
            cursor: pointer;
        }
    }


    @media screen and (max-width:800px){
        width: 90%;


        form{
            width: 80%;
        }
    }
`