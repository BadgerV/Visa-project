import expandButton from '../../asset/add--icon.png'
import retractButton from '../../asset/collapse--icon.png'
import { FAQQuestion, FAQAnswer, FAQSContainer, FAQSHeader, QuestionsContainer, FAQButton } from "./FAQStyle"

import { useEffect, useState } from "react";

const FAQS = () => {
  const faqs = [
    {
      question: 'What is React?',
      answer:
        'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.'
    },
    {
      question: 'What is JSX?',
      answer:
        'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to create and manipulate HTML elements in your React components.'
    },
    {
      question: 'What is CSS?',
      answer:
        'CSS is a style sheet language that is used to describe the look and formatting of a document written in HTML or XML. It allows you to style and layout HTML elements on a webpage.'
    }
  ];

  function FAQ(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [imgSrc, setImgSrc] = useState(expandButton)

    useEffect(() => {
      {isExpanded ? setImgSrc(retractButton) : setImgSrc(expandButton)}
    }, [isExpanded])
  
    return (
      <QuestionsContainer className="faq">

        <div className="questionAndAnswer">
          <FAQQuestion>{props.question}</FAQQuestion>
          {isExpanded && <FAQAnswer>{props.answer}</FAQAnswer>}
        </div>
        
        <FAQButton src = {imgSrc} onClick={() => setIsExpanded(!isExpanded)} />
          
        
      </QuestionsContainer>
    );

   
  }
  return (
    <FAQSContainer>
      <FAQSHeader>Frequently Asked Questions</FAQSHeader>
      {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
      
      ))}
    </FAQSContainer>
  )
}

export default FAQS