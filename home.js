import React from "react"

const Home = () => {
    return (
        <div className =' mt-14 pt-8'>
            {/* <h1 className ="sm:text-4xl text-2xl font-bold my-14 pt-8 text-gray-900"> 
                HERO SECTION
            </h1> */}
            
            <div className="flex ">
                <div className="flex-row">
                    <h1 className="text-5xl leading-snug tracking-wider font-bold mb-4 ">We Help You Double Your Chances Of Success In Entrepreneurship</h1>
                    <h1 className="text-xl tracking-wide leading-loose pb-6 pr-8">We believe that with the best education, mentoring, and support, everyone has the potential to run a great business.</h1>
                    <button className="bg-cyan-500 hover:bg-cyan-700 text-white text-xl font-bold py-4 px-8 rounded" >
                        Download Prospectus
                    </button>
                </div>
                <img src='/images/main.jpg' alt="Entrepreneur" className="w-1/2 rounded-lg  b-4 shadow-lg" />
            </div>
            <h1 className="text-5xl mt-10 mb-10 font-bold font-sans text-center">
            The Facts At A Glance About Entrepreneurship And Mentoring
            </h1>
            <div className=" grid grid-cols-3 gap-4  mb-20"> 
                <div className="border-2 border-gray-500 border-opacity-60 rounded-lg bg-white p-5 " >
                    <p className="text-cyan-600 font-sans font-bold text-6xl">60%</p>   
                    <p>of businesses fail within the first five years.</p>
                </div>
                <div className="border-2 border-gray-500 border-opacity-60 rounded-lg bg-white p-5" >
                    <p className="text-cyan-600 font-sans font-bold text-6xl">85%</p>   
                    <p>of entrepreneurs fail for the same three reasons.</p>
                </div>
                <div className="border-2 border-gray-500 border-opacity-60 rounded-lg bg-white p-5"  >
                    <p className="text-cyan-600 font-sans font-bold text-6xl">96%</p>   
                    <p>of entrepreneurs or business owners don’t want to go back to working for another company.</p>
                </div>
                <div className="border-2 border-gray-500 border-opacity-60 rounded-lg bg-white p-5"  >
                    <p className="text-cyan-600 font-sans font-bold text-6xl">100%</p>   
                    <p>Research has shown that mentored businesses are 100% more likely to survive past the five-year mark.</p>
                </div>
                <div className="border-2 border-gray-500 border-opacity-60 rounded-lg bg-white p-5"  >
                    <p className="text-cyan-600 font-sans font-bold text-6xl">92%</p>   
                    <p>of small business owners say that mentoring had a direct impact on their survival and growth.</p>
                </div>
                <div className="border-2 border-gray-500 border-opacity-60 rounded-lg bg-white p-5"  >
                    <p className="text-cyan-600 font-sans font-bold text-6xl">96%</p>   
                    <p>of successful start-ups agree that mentoring was critical to their success.</p>
                </div>
            </div>
            <div className="flex bg-white bg-opacity-40 rounded">
                <img src='/images/people.jpg' alt="Entrepreneur" className="w-1/2 rounded-lg  b-4 shadow-lg" />
                <div className="flex-row mx-6">
                        <h1 className="text-5xl leading-none tracking-wider font-bold mb-4 ">We’ve Helped Over 300,000 Entrepreneurs And Counting</h1>
                        <h1 className="text-sm tracking-wide pb-6 pr-8">The road to success in entrepreneurship throws up unique challenges not found in any other career path. You’re forced to wear many hats at once. Create and implement at speed, and challenge the status quo to find solutions to grow your business. </h1>
                        <h1 className="text-sm tracking-wide pb-6 pr-8">Entrepreneur Seminar helps you navigate your journey in entrepreneurship. Whether you want to start a new business or scale your existing one.</h1>
                        <h1 className="text-sm tracking-wide pb-6 pr-8">Through a combination of award-winning education programs and direct mentoring from leading entrepreneur Martin Warner, we’ve helped over 300,000 entrepreneurs start and grow their businesses. We know what it takes to build a successful business.</h1>
                        <h1 className="text-sm tracking-wide pb-6 pr-8">Now we want to help you do the same.</h1>      
                </div>
            </div>
            
        </div>
    )
}

export default Home