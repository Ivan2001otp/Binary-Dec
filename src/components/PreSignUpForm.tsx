import React from 'react'

const PreSignUpForm = () => {
  return (
    <div  className='pre-sign-up-card'>
          <div>
            <p className='text-center text-3xl font-medium text-white mb-3'>Pre-Sign Up</p>
          </div>
          <form className="space-y-4 md:px-4 md:py-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white hover:text-yellow-300 ">Name</label>
              <input type="text" id="name" placeholder='Anki' min={3} maxLength={100} name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" />
            </div>
            <div>
              <label htmlFor="email"  className="block text-sm font-medium text-white hover:text-yellow-300">Email</label>
              <input type="email" id="email" placeholder='anki231@pro.com' name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" />
            </div>
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-white hover:text-yellow-300">Your Feedback</label>
              <textarea id="feedback" placeholder='Write the feedback here...' maxLength={256} name="feedback" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required></textarea>
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-black">
                Submit
              </button>
            </div>
          </form>

    </div>
)
}

export default PreSignUpForm