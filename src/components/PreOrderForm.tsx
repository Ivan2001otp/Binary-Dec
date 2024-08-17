import React from 'react'

const PreOrderForm = () => {
  return (
    <div  className='pre-sign-up-card'>
          <div>
            <p className='text-center text-3xl font-medium text-white mb-3'>Buy Early</p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white hover:text-yellow-300 ">Name</label>
              <input type="text" placeholder='David Ian' id="name" min={3} maxLength={100} name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" />
            </div>
            <div>
              <label htmlFor="email"  className="block text-sm font-medium text-white hover:text-yellow-300">Email</label>
              <input type="email" placeholder='david123@mypro.com' id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" />
            </div>
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-white hover:text-yellow-300">Anything you need to let us know</label>
              <textarea id="feedback" placeholder='Here you go...' maxLength={256} name="feedback" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2" required></textarea>
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Pre-Order
              </button>
            </div>
          </form>

    </div>
  
)
}

export default PreOrderForm