// import React, { useRef } from 'react';

import About from '../components/About';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import Product from '../components/Product';
import PreSignUpForm from '../components/PreSignUpForm';
import PreOrderForm from '../components/PreOrderForm';
import AboutDevTeam from '../components/AboutDevTeam';
import FAQ from '../components/FAQ';
import GetInTouchPage from '../components/GetInTouchPage';
import MainHeroImage from '../components/MainHeroImage';

const App = () => {
    const buyEarlyTitle: string = "Want to Buy early ?";


    return (
        <div className={`bg-background  gap-y-16 overflow-hidden `}>
            <div className={`relative bg-background `}>
                <div className="max-w-7xl  mx-auto">
                    <div
                        className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
                    >
                        <Header />
                        <MainHero />
                    </div>
                </div>
                <MainHeroImage />
            </div>
            <Canvas />
            <LazyShow>
                <>
                    <Product />
                    <Canvas />
                </>
            </LazyShow>

            <LazyShow>
                <section id='pre-order' className=''>
                    <div className='mt-10 text-5xl font-bold text-center text-primary  mb-10'>
                        {buyEarlyTitle.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={index % 2 ? 'text-primary' : 'text-border'}
                            >
                                {word}{' '}
                            </span>
                        ))}
                    </div>


                    <div

                        className='lg:flex lg:flex-wrap lg:items-center lg:justify-evenly text-black '

                    >
                        {/* form for preSignUp */}

                        <div>
                            <PreSignUpForm />
                        </div>

                        <div className='mt-10'></div>
                        {/* form for pre-order  */}
                        <div>
                            <PreOrderForm />
                        </div>
                    </div>
                </section>
            </LazyShow>




            <LazyShow>
                <>
                    <Features />
                    <Canvas />
                </>
            </LazyShow>

            <LazyShow>
                <>
                    <AboutDevTeam />
                    <Canvas />
                </>
            </LazyShow>

            {/* <LazyShow>
        <Pricing />
      </LazyShow> */}


            <LazyShow>
                <>
                    <section id='team'>
                        <GetInTouchPage />
                        <Canvas />
                    </section>

                </>

            </LazyShow>

            <LazyShow>

                <>
                    <FAQ />
                </>

            </LazyShow>
            <LazyShow>
                <>
                    <Canvas />
                    <About />
                </>
            </LazyShow>
        </div>
    );
};

export default App;
