import React from 'react'

const GetInTouchPage = () => {
  const meetOurTeam:string = "Meet our Team";
  
  return (
    <div>
      <div 
      // className='flex justify-center gap-3 md:text-2xl flex-wrap text-5xl font-bold text-center'
      className='mt-10 text-center text-5xl font-bold'
      >
      {
      meetOurTeam.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index % 2 ? 'text-primary' : 'text-border'}
                >
                  {word}{' '}
                </span>
              ))}
      </div>

      <div 
        className='flex justify-evenly mt-4'
      > 
             <div className='text-center'>
                <div>
                  <img
                  className='border rounded-md'
                  alt='developer-member-1'
                  src='/assets/images/tejas-img.png' width={130} height={130}/>
                </div>

                <div className='lg:text-xl font-medium'>
                  Tejas Mondeeri
                </div>

                <div className='flex justify-center mt-2 '>
                  <a
                    href='https://www.linkedin.com/in/tejasmondeeri/'
                    className='no-underline transition-transform duration-400 hover:translate-y-3'
                  >
                    <img width={60} height={60} src='/assets/images/linkedin.png'/>
                  </a>
                </div>
             </div>

             <div className='text-center'>
                <div className='flex justify-center'>
                   <img
                   className='border rounded-md'
                  alt='developer-member-1'
                  src='/assets/images/ivan-img-1.png' width={130} height={130}/>
                </div>

                <div className='lg:text-xl font-medium'>
                 Immanuel Dsouza
                </div>

                <div className='flex justify-center mt-2'>
                  <a
                    className='no-underline transition-transform duration-400 hover:translate-y-3'

                    href='https://www.linkedin.com/in/immanuel-dsouza-b32505210/'
                  >
                    <img width={60} height={60} src='/assets/images/linkedin.png'/>
                  </a>
                </div>
             </div>
      </div>
    </div>
  )
}

export default GetInTouchPage