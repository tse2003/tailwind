import React from 'react';

export function Experience() {
    return (
        <div className="bg-gray-50 mx-auto px-4 py-8">
            <div className="text-center">
                <button className="bg-gray-200 text-black py-2 px-4 rounded-full mt-7">
                    Experience
                </button>
                <p className="text-gray-600 mt-3">
                    Here is a quick summary of my most recent experiences:
                </p>
            </div>
            <div className='lg:flex shadow-md gap-5 lg:w-[65%] m-auto mt-5 bg-white'>
                <div className='mt-3'>
                    <p className='text-green-600 font-bold text-2xl ml-5'>upwork</p>
                </div>
                <div className='ml-5 order-2 relative mt-3'>
                    <p className='text-gray-600'>Nov 2021 - Present</p>
                </div>
                <div className='ml-5 order-1 relative mt-3'>
                    <h1 className='font-bold'>Sr.Frontend Developer</h1>
                    <ul className='list-disc ml-5 text-gray-600 mt-2'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
                {/* <div className='ml-5 order-2 relative'>
                    <p className='text-gray-600'>Nov 2021 - Present</p>
                </div> */}
            </div>



            <div className='lg:flex shadow-md gap-5 lg:w-[65%] m-auto mt-5 bg-white'>
                <div className='mt-3'>
                    <p className='text-green-600 font-bold text-2xl ml-5'>upwork</p>
                </div>
                <div className='ml-5 order-2 relative mt-3'>
                    <p className='text-gray-600'>Jul 2017 - Oct 2021</p>
                </div>
                <div className='ml-5 order-1 relative mt-3'>
                    <h1 className='font-bold'>Team Lead</h1>
                    <ul className='list-disc ml-5 text-gray-600 mt-2'>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
                {/* <div className='ml-5 order-2 relative'>
                    <p className='text-gray-600'>Nov 2021 - Present</p>
                </div> */}
            </div>



            <div className='lg:flex shadow-md gap-5 lg:w-[65%] m-auto mt-5 bg-white'>
                <div className='mt-3'>
                    <p className='text-green-600 font-bold text-2xl ml-5'>upwork</p>
                </div>
                <div className='ml-5 order-2 relative mt-3'>
                    <p className='text-gray-600'>Dec 2015 - May 2017</p>
                </div>
                <div className='ml-5 order-1 relative mt-3'>
                    <h1 className='font-bold'>Full Stack Developer</h1>
                    <ul className='list-disc ml-5 text-gray-600 mt-2'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>

                </div>
                {/* <div className='ml-5 order-2 relative'>
                    <p className='text-gray-600'>Nov 2021 - Present</p>
                </div> */}
            </div>
        </div>
    );
}
