import React, { useState } from 'react'

interface FAQMap{
  question:string;
  answer:string;
}

const faqs : FAQMap[]= [
      { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
      { question: 'What is Tailwind CSS?', answer: 'Tailwind CSS is a utility-first CSS framework.'   
    },
    { question: 'What is Tailwind CSS1?', answer: 'Tailwind CSS is a utility-first CSS framework.'   
    },
    { question: 'What is Tailwind CSS2?', answer: 'Tailwind CSS is a utility-first CSS framework.'   
    },
];

const ItemFAQ=({question,answer}:FAQMap)=>{
  const [isOpen,setIsOpen]=useState(false);
    
  const toggleAnswer=()=>{
    setIsOpen(!isOpen);
  };

      return <div key={question} className='
      
      cursor-pointer space-y-4 mt-2 lg:mx-40 text-xl text-black hover:text-red-700 border-2 rounded-md p-2' onClick={toggleAnswer}>
      {question}
      {
      isOpen && (
        <p className='text-gray-600 mt-2'>{answer}</p>
      )
    }
  </div>

  }

const FAQ = () => {
   

    
  return (
    <div id='faq'>

      <div className='mt-10'>

          <div><p className=' font-bold lg:text-5xl text-4xl text-center'>Frequently Asked Questions (FAQs)</p></div>

          <div className='mt-5 px-3'>

                {faqs.map((item)=>(
                    <ItemFAQ {...item}/>
                ))}
              
          </div>
      </div>
    </div>
  )
}

export default FAQ