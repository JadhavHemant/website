import React, { useRef } from 'react';
import axios from 'axios';
import logo from '../ProfileCom/ImageLogo/Company_Logo.png';

export default function ContactMe() {
  
   



  return (
    <>
    <div  className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div  className="container max-w-screen-lg mx-auto">
            <div>
               

                <div  className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div  className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div  className="text-gray-600">
                        <img src={logo} alt='logo'  className="w-[150px]" />
                        <p  className="text-gray-500 ">Contact Us</p>
                            <p>Please fill out all the fields.</p>
                        </div>

                        <div  className="lg:col-span-2">
                            <div  className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                                <div  className="md:col-span-2">
                                    <label >Student Name</label>
                                    <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                                </div>
                                <div  className="md:col-span-2">
                                    <label > className / Designation</label>
                                    <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                                </div>
                                <div  className="md:col-span-2">
                                    <label >Roll Number</label>
                                    <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                                </div>
                                <div  className="md:col-span-2">
                                    <label >Student Phone Number</label>
                                    <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                                </div>
                                <div  className="md:col-span-2">
                                    <label >Email</label>
                                    <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                </div>
                                <div  className="md:col-span-2">
                                    <label >College / Organization</label>
                                    <input type="text"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                </div>
                              
                                </div>
                                <br />
                                <div  className="md:col-span-5 text-right ">
                                    <div  className="inline-flex items-end gap-x-3">
                                        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => Addidea()}>Submit</button>
                                    </div>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}
