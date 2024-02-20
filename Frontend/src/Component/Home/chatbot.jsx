import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#3C6255',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#3C6255',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

const steps = [
      {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi `{previousValue}`, nice to meet you!',
        trigger: '4',
      },
      {
        id: '4',
        message: 'what kind of help do you need ?',
        trigger: '5',
      },
      {
        id: '5',
        options: [
          { value: 1, label: 'Farmer', trigger: '6' },
          { value: 2, label: 'Wholesaler', trigger: '7' },
        ],
      },
      {
        id: '6',
        options:[
        { value: 1, label: 'Login', trigger: '6' },
        { value: 2, label: 'Registeration', trigger: '7' },
        ]
      },
      {
        id: '7',
        options:[
        { value: 1, label: 'Login', trigger: '7' },
        { value: 2, label: 'Registeration', trigger: '6' },
        ]
      }
  ];
const Chatbot =()=>{
    return(
        <>
       <ThemeProvider theme={theme}>
        <ChatBot steps={steps} floating={true}/>;
       </ThemeProvider>
        </>

    )
}
export default Chatbot;
