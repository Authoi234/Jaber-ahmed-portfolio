import React from 'react';
import { FaEnvelope, FaMessage, FaPhone } from 'react-icons/fa6';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ly6tql4', 'template_otl03xj', e.target, 'Um3sbTEnBfqsNdevb')
            .then((result) => {
                console.log(result.text);
                result.text === 'OK' && toast.success('Form submitted successfully!');
                e.target.reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <div id='contact-us' className='mt-40 mb-40'>
            <form onSubmit={handleSubmit} className='text-start ml-3 pl-6 mt-5'>
                <div className='pl-6'>
                    <span className='border my-3 px-3 py-1 rounded-full inline-flex items-center' data-aos="fade-up"> <FaEnvelope className='mr-3'></FaEnvelope> CONTACT US</span>
                </div>

                <div className="pl-6" data-aos="fade-up">
                    <h1 className="text-7xl text-white my-10">Let's Work <span className="text-green-400">Together!</span></h1>
                    <h3 className="my-3 text-3xl font-medium text-white">jaber.ahmed4770@gmail.com</h3>
                </div>
                <div className="lg:flex lg:justify-center lg:items-center">
                    <label className="form-control w-full lg:max-w-md mx-5">
                        <div className="label">
                            <span className="label-text text-white text-lg">FULL NAME</span>
                        </div>
                        <label className="input input-bordered w-full max-w-lg input-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" placeholder="Enter Your Name" name='name' className="w-full input input-ghost" required />
                        </label>
                    </label>
                    <label className="form-control w-full lg:max-w-md mx-5">
                        <div className="label">
                            <span className="label-text text-white text-lg">EMAIL</span>
                        </div>
                        <label className="input input-bordered w-full max-w-lg input-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7 mr-2 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" placeholder="Enter Your Email" name='email' className="w-full input input-ghost" required />
                        </label>
                    </label>
                </div>
                <div className="lg:flex lg:justify-center lg:items-center my-2">
                    <label className="form-control w-full lg:max-w-md mx-5">
                        <div className="label">
                            <span className="label-text text-white text-lg">PHONE</span>
                        </div>
                        <label className="input input-bordered w-full max-w-lg input-lg flex items-center">
                            <FaPhone className='mr-3'></FaPhone>
                            <input type="number" placeholder="Enter Your Phone" name='phone' className="w-full input input-ghost" required />
                        </label>
                    </label>
                    <label className="form-control w-full lg:max-w-md mx-5">
                        <div className="label">
                            <span className="label-text text-white text-lg">PACKAGE</span>
                        </div>
                        <label className="input input-bordered w-full max-w-lg input-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7 mr-2 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <select name='option' className="select select-ghost select-lg w-full max-w-xs" required>
                                <option value='package1'>Package 1</option>
                                <option value='package2'>Package 2</option>
                                <option value='customPackage'>Custom Plan</option>
                            </select>
                        </label>
                    </label>
                </div>
                <div className='w-full my-3 px-10'>
                    <label className="form-control w-full mx-5">
                        <div className="label">
                            <span className="label-text text-white text-lg">YOUR BUDGET (OPTIONAL)</span>
                        </div>
                        <label className="input input-bordered w-full input-lg flex items-center">
                            <span className="mr-3 text-xl">$</span>
                            <input type="number" placeholder="Enter Your Budget" className="w-full input input-ghost" />
                        </label>
                    </label>
                    <label className="form-control w-full mx-3 my-5">
                        <div className="label">
                            <span className="label-text text-white text-lg">MESSAGE</span>
                        </div>
                        <label className="textarea textarea-bordered w-full textarea-lg flex items-center">
                            <FaMessage className='mr-3'></FaMessage>
                            <textarea placeholder="Enter your message" name='message' className="textarea textarea-ghost textarea-lg w-full" ></textarea>
                        </label>
                    </label>
                    <label className="form-control w-full mx-3 my-5">
                        <div className="label">
                            <span className="label-text text-white text-lg">ADD AND ATTACKMENT (OPTIONAL)</span>
                        </div>
                        <input type='file' className="file-input file-input-bordered file-input-lg w-full" ></input>
                    </label>
                </div>

                <div className="text-start ml-10 my-10"><button type='submit' className='btn btn-success btn-outline btn-lg'>Send Message</button></div>
            </form>
        </div>
    );
};

export default ContactUs;