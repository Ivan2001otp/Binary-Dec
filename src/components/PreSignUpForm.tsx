import React, { useState } from 'react'

interface PreSignUpFormState{
  name:string;
  email:string;
  feedback:string;
  errors:{
    name?:string;
    email?:string;
    feedback?:string;
  };
}



const PreSignUpForm = () => {

  const [formData,setFormData] = useState<PreSignUpFormState>({
    name:"",
    email:"",
    feedback:"",
    errors:{
     name:"",
     email:"",
     feedback:"",
    },
  });



  //Functions used for validating input...
  const validateName=(value:string)=>{
    if(value.length<3){
      return 'Min length allowed is 3 !';
    }else if(value.length>100){
      return 'Max length allowed is 100 !';
    }
    else if(value.length==0){
      return 'Name required !';
    }
    console.log("name required!");
    return '';
  }

  //later i will add regex check for a valid email pattern
  const validateEmail=(value:string)=>{
    if(value.length==0){
      return 'Email requried !';
    }
    return '';
  }

  const validateFeedback=(value : string)=>{
   if(value.length!=0){
    if(value.length>256){
      return 'Max length allowed is 256 !';
    }
   }
    
    return '';
  }
  
  //This function is invoked during onChange event of textbox
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    console.log(`onchange->${event.target.name}-${event.target.value}`);

    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.value,
    }),);
  }



 

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    
    event.preventDefault();
    console.log(formData);

    let nameSubmit:string = formData.name;
    let emailSubmit:string = formData.email;
    let feedbackSubmit:string = formData.feedback;


    const validationErrors = {
      nameError:validateName(nameSubmit),
      emailError:validateEmail(emailSubmit),
      feedbackError:validateFeedback(feedbackSubmit),
    };
    
    if(Object.values(validationErrors).some(error=>error!=='')){
      setFormData({...formData,errors:{name:validationErrors.nameError,email:validationErrors.emailError,feedback:validationErrors.feedbackError}},);
      return;
    }

    alert(`${nameSubmit} +  ${emailSubmit} + ${feedbackSubmit}`);
  };

  return (
    <div 
    //  className='pre-sign-up-card'
    className='w-96 bg-blue-900 border-red-400 border-4 rounded-xl mx-auto p-8 relative transition-transform duration-500 hover:scale-110 hover:bg-gray-800'
    >
          <div>
            <p className='text-center text-3xl font-medium text-white mb-3'>Pre-Sign Up</p>
          </div>
          <form
          onSubmit={handleSubmit}
          className="space-y-4 md:px-4 md:py-4">
            <div>
              <label htmlFor="name"
              className="block text-sm font-medium text-white hover:text-yellow-300 ">Name</label>
             
              <input   
              type="text" 
              id="name" 
              placeholder='Anki' 
              min={3}   
              onChange={handleInputChange}
              maxLength={100} 
              value={formData.name}
              required
              name="name"
               className={`mt-1 block w-full border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2
              ${formData.errors.name ? 'border-red-500':''}
              `} 
              // className='mt-1 block w-full border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
            />

              {/* showing validation error of namefield */}
              {formData.errors.name?.length!=0 && (<p className='text-red-500'>{formData.errors.name}</p>)}
            </div>

            <div>
              <label htmlFor="email"  className="block text-sm font-medium text-white hover:text-yellow-300">Email</label>
              <input 
              type="email" 
              id="email" 
              placeholder='anki231@pro.com' 
              name="email" 
              onChange={handleInputChange}
              value={formData.email}
              required 
              className={`mt-1 block w-full border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2
                ${formData.errors.email ? 'border-red-500':''}
                `} 
              />

              {formData.errors.email?.length!=0 && (<p className='text-red-500'>{formData.errors.email}</p>)}


            </div>
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-white hover:text-yellow-300">Your Feedback</label>
              <textarea 
              id="feedback" 
              placeholder='Write the feedback here...' 
              maxLength={256} 
              name="feedback" 
              rows={4} 
              value={formData.feedback}
              onChange={handleInputChange}
              // className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              className={`mt-1 block w-full border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2
                ${formData.errors.feedback ? 'border-red-500':''}
                `} 
              ></textarea>

                {formData.errors.feedback?.length!=0 && (<p className='text-red-500'>{formData.errors.feedback}</p>)}

            </div>

            <div className='flex justify-center'>
              <button type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-black">
                Submit
              </button>
            </div>

          </form>

    </div>
)
}

export default PreSignUpForm