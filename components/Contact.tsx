'use client'
import {motion} from "framer-motion"
import Link from "next/link"
import { useRef, useState } from 'react';
import { LuMail, LuFacebook, LuInstagram, LuGithub, LuLinkedin, LuSend } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";


 
export default function Contact() {
  const [contactType, setContactType] = useState<string>("message");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });
 
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setStatus({ type: 'loading', message: 'Sending...' });
 
  //   try {
  //     const formData = new FormData(e.currentTarget);
  //     const data = {
  //       name: formData.get('name'),
  //       email: formData.get('email'),
  //       message: formData.get('message'),
  //     };
 
  //     const res = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
 
  //     if (!res.ok) {
  //       throw new Error('Failed to send message');
  //     }
 
  //     setStatus({ type: 'success', message: 'Message sent successfully!' });
  //     formRef.current?.reset();
  //   } catch (error) {
  //     setStatus({
  //       type: 'error',
  //       message: 'Failed to send message. Please try again.'
  //     });
  //   }
  // };
 
  return (
    <section id="contact" className="flex flex-col mb-[10rem] w-full items-center justify-center"> 
      <h1 className="text-2xl md:text-3xl font-medium">
        <span className="border-b-2 border-blue-500">Let&apos;s</span>{" "} Connect
      </h1>
      <p className="text-gray-400 text-md text-center mx-w-[30rem] mt-3 px-6 md:px-4">Ready to bring your ideas to life? I&apos;m here to help you build something amazing.</p>
      <div className="mt-[5rem] flex items-center justify-between gap-1 p-1 rounded-full border-1 border-gray-800">
        <button onClick={() => setContactType("message")} 
        className={`px-4 py-3 bg-gradient-to-br from-gray-900 to-blue-700 text-sm rounded-full cursor-pointer
          ${contactType === 'online' ? 'bg-none' : 'custom-gradient'}
        `}>
          Send a Message
        </button>
        <button onClick={() => setContactType("online")} 
        className={`px-4 py-3 bg-gradient-to-br from-gray-900 to-blue-700 text-sm rounded-full cursor-pointer
          ${contactType === 'message' ? 'bg-none' : 'custom-gradient'}
        `}>
          Find Me online
        </button>
      </div>

      {contactType === "message" ? (
        <motion.form ref={formRef}  
          initial={{opacity: 0, y: "100px"}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        className="max-w-[35rem] w-[95%] md:w-[75%] gap-6 flex flex-col  mt-[3rem] p-6 bg-gray-900 border-1 border-gray-800 rounded-2xl hover:border-blue-400/50 transition-all duration-200">
        <h2 className="mb-5 text-xl font-semibold">Drop Me a Line</h2>
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="w-full">
            <label htmlFor="name" className="text-gray-300 font-medium text-sm mb-2">Name</label>
            <input id="name" name="name" type="text" required className="w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full" placeholder="Your full name"  />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-gray-300 font-medium text-sm mb-2">Email</label>
            <input id="email" name="email" type="email" required className="w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full" placeholder="youremail@example.com" />
          </div>
          <div className="w-full">
            <label htmlFor="subject" className="text-gray-300 font-medium text-sm mb-2">Subject</label>
            <input id="subject" name="subject" type="subject" required className="w-full px-3 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full" placeholder="What is this about?" />
          </div>
        </div>
  
        <div  className="w-full">
          <label htmlFor="message" className="text-gray-300 font-medium text-sm mb-2">Message</label>
          <textarea id="message" name="message" required rows={4} className="w-full max-h-[350px] h-[150px] px-3 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full" placeholder="Tell me about your project, ideas, or your message..." />
        </div>
  
        <button type="submit" disabled={status.type === 'loading'} className="w-full bg-blue-600 text-white py-2 px-4 flex items-center justify-center rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
          <LuSend className="mr-3" /> 
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
         
        {status.message && (
          <p
            className={`text-sm ${
              status.type === 'error'
                ? 'text-red-500'
                : status.type === 'success'
                ? 'text-green-500'
                : 'text-gray-500'
            }`}
          >
            {status.message}
          </p>
        )}
      </motion.form>
      ) : contactType === "online" && (
      <motion.div 
        initial={{opacity: 0, y: "100px"}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      className="w-full max-w-[70rem] mt-[5rem] flex items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-18 lg:px-18 gap-6">
        {/* Email */}
        <Link href="mailto:salihuadamu4678@gmail.com" target="_blank">
          <div className="w-full p-5 rounded-2xl flex flex-col bg-gradient-to-br from-cyan-500/20 to-cyan-300/20 hover:from-cyan-500/40 hover:to-cyan-300/40 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/40 hover:mt-[-6px]">
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 rounded-xl">
              <LuMail className="text-[2rem]" />
            </div>
            <h1 className="mt-5 font-medium text-lg">Email Me</h1>
            <p className="mt-2 text-gray-300 ">salihuadamu4678@gmail.com</p>
          </div>
        </Link>
        {/* Facebook */}
        <Link href="https://facebook.com/gentlemanwebdev" target="_blank">
          <div className="w-full p-5 rounded-2xl flex flex-col bg-gradient-to-br from-blue-500/20 to-blue-300/20 hover:from-blue-500/40 hover:to-blue-300/40 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/40 hover:mt-[-6px]">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-xl">
              <LuFacebook className="text-[2rem]" />
            </div>
            <h1 className="mt-5 font-medium text-lg">Facebook</h1>
            <p className="mt-2 text-gray-300 ">@gentlemanwebdev</p>
          </div>
        </Link>
        {/* Instagram */}
        <Link href="https://instagram.com/gentlemanwebdev" target="_blank">
          <div className="w-full p-5 rounded-2xl flex flex-col bg-gradient-to-br from-pink-500/20 to-pink-300/20 hover:from-pink-500/40 hover:to-pink-300/40 transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/40 hover:mt-[-6px]">
            <div className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-xl">
              <LuInstagram className="text-[2rem]" />
            </div>
            <h1 className="mt-5 font-medium text-lg">Instagram</h1>
            <p className="mt-2 text-gray-300 ">@gentlemanwebdev</p>
          </div>
        </Link>
        {/* LinkedIn */}
        <Link href="https://linkedin.com/in/salihu-adamu-3b9b97290" target="_blank">
          <div className="w-full p-5 rounded-2xl flex flex-col bg-gradient-to-br from-blue-500/20 to-blue-300/20 hover:from-blue-500/40 hover:to-blue-300/40 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/40 hover:mt-[-6px]">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-xl">
              <LuLinkedin className="text-[2rem]" />
            </div>
            <h1 className="mt-5 font-medium text-lg">LinkedIn</h1>
            <p className="mt-2 text-gray-300 ">@salihu-adamu-3b9b97290</p>
          </div>
        </Link>
        {/* Github */}
        <Link href="https://github.com/gentlehacks" target="_blank">
          <div className="w-full p-5 rounded-2xl flex flex-col bg-gradient-to-br from-gray-800/20 to-gray-600/20 hover:from-gray-800/40 hover:to-gray-600/40 transition-all duration-200 hover:shadow-lg hover:shadow-gray-500/40 hover:mt-[-6px]">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl">
              <LuGithub className="text-[2rem]" />
            </div>
            <h1 className="mt-5 font-medium text-lg">Github</h1>
            <p className="mt-2 text-gray-300 ">@gentlehacks</p>
          </div>
        </Link>
        {/* Twitter */}
        <Link href="https://x.com/gentlemanwebdev?s=21" target="_blank">
          <div className="w-full p-5 rounded-2xl flex flex-col bg-gradient-to-br from-gray-800/20 to-gray-600/20 hover:from-gray-800/40 hover:to-gray-600/40 transition-all duration-200 hover:shadow-lg hover:shadow-gray-500/40 hover:mt-[-6px]">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl">
              <FaXTwitter className="text-[2rem]" />
            </div>
            <h1 className="mt-5 font-medium text-lg">X/Twitter</h1>
            <p className="mt-2 text-gray-300 ">@gentlemanwebdev</p>
          </div>
        </Link>
        
      </motion.div>
      )}
      
    </section>
    
  );
}