import React from 'react'

const AboutDevTeam = () => {
  const aboutUsTitle:string= "About Us"
  return (
    <div id='about-us'>

      <div className='text-5xl font-bold leading-tight text-center text-primary mt-5 mb-2.5'>
          {aboutUsTitle.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className={index % 2 ? 'text-primary' : 'text-border'}
                    >
                      {word}{' '}
                    </span>
                  ))}
      </div>

      <div className='lg:mx-16  mr-4 ml-4 lg:text-justify text-center text-2xl '>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi asperiores in voluptatum, itaque porro, tenetur natus pariatur impedit totam exercitationem, temporibus obcaecati inventore quas? Veritatis magnam voluptates commodi molestias deserunt voluptate iure earum voluptatum, neque numquam amet odio fuga at quisquam esse officiis, itaque quaerat ad quo ipsa! Doloribus quas architecto amet expedita neque atque, fugit, eligendi ut est id, hic veniam odit accusantium in reprehenderit praesentium excepturi debitis illum quaerat rem quidem ab? Qui accusantium temporibus officia corporis voluptas molestiae commodi assumenda ex suscipit libero, rem quam similique quos saepe aliquid praesentium animi recusandae. Placeat reprehenderit laudantium beatae numquam.</p>
        </div>
    </div>
  )
}

export default AboutDevTeam