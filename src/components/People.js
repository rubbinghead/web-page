import React from 'react';
import img from '../images/projects/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import avatar from '../images/members/avt.jpeg';
import iu from '../images/members/iu.jpeg';


const People = () => {

    return (
        <div id="people" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">People</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={avatar} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Ryan Nguyen</h2>
                                </div>
    

                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={avatar} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Hoang Mike</h2>
                            
                                </div>
                            </div>
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={avatar} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Thoai Mida</h2>
                                </div>
                            </div>
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={avatar} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Dat Ngo Nghe</h2>
                                    <p className="text-md font-medium">
                                        We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.
                                    </p>
                                </div>
                            </div>
 
                                          
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default People;