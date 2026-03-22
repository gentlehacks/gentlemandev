'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { useRef, useState } from 'react';
import { LuMail, LuGithub, LuLinkedin, LuSend, LuLink, LuTwitter } from "react-icons/lu";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";



export default function Contact() {
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
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">Get In Touch</h1>
      <p className="text-gray-400 text-center mt-6 px-6 max-w-[40rem] text-md md:text-lg font-medium">
        Have a project in mind or just want to chat? I&apos;m always open to new ideas and collaborations. Let&apos;s create something amazing together.
      </p>
      <motion.div initial={{ width: 0 }} whileInView={{ width: 105 }} transition={{ duration: 0.8 }} className="h-2 bg-blue-600 rounded-full mt-6" />

      <div className="mt-[8rem] flex flex-col md:flex-row justify-between w-full px-4 md:px-12 lg:px-22 gap-12">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <Link href="mailto:salihuadamu4678@gmail.com" className="flex flex-col items-center justify-center p-8 bg-gray-800 w-full rounded-2xl border border-gray-700/50 shadow-lg shadow-gray-800/50 hover:shadow-gray-700/30 hover:mt-[-0.5rem] transition-all duration-200">
              <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-gray-700">
                <LuMail size={25} className="text-blue-600" />
              </div>
              <h3 className="text-gray-100 font-medium text-[1.2rem] mt-4">Email</h3>
              <p className="font-medium text-md text-gray-300 mt-3">salihuadamu4678@gmail.com</p>
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/message/Q47NMIZFTT72M1" className="flex flex-col items-center justify-center p-8 bg-gray-800 w-full rounded-2xl border border-gray-700/50 shadow-lg shadow-gray-800/50 hover:shadow-gray-700/30 hover:mt-[-0.5rem] transition-all duration-200">
              <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-gray-700">
                <FaWhatsapp size={25} className="text-blue-600" />
              </div>
              <h3 className="text-gray-100 font-medium text-[1.2rem] mt-4">WhatsApp</h3>
              <p className="font-medium text-md text-gray-300 text-center mt-3">{"https://wa.me/message/Q47NMIZFTT72M1"}</p>
            </Link>
          </div>
          <div className="w-full flex  items-center justify-between px-5 py-8 md:px-8 bg-gray-800 rounded-2xl border border-gray-700/50 shadow-lg shadow-gray-800/50 hover:shadow-gray-700/30  transition-all duration-200">
            <div className="flex items-center">
              <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-gray-700 border border-gray-600/50">
                <LuLink size={22} className="text-blue-500" />
              </div>

              <h2 className="font-medium text-md md:text-lg ml-2">Follow Me</h2>
            </div>
            <div className="flex items-center gap-4">
              <Link target="_blank" rel="noopener noreferrer" href="github.com/gentlehacks" className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-gray-700 hover:bg-black transition-all duration-200">
                <LuGithub size={20} />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="github.com/salihu-adamu-9" className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-all duration-200">
                <LuLinkedin size={20} />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="github.com/gentlemanwebdev" className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-all duration-200">
                <LuTwitter size={20} />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="github.com/gentlemandev" className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition-all duration-200">
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>
        </div>
        <motion.form ref={formRef}
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full gap-6 flex flex-col p-8 bg-gray-800/80 backdrop-filter backdrop-blur-md border-1 border-gray-700/50 rounded-3xl hover:border-blue-400/20 transition-all duration-200">
          <h2 className="mb-5 text-xl font-semibold text-gray-100">Drop Me a Line</h2>
          <div className="w-full flex flex-col gap-6 items-center">
            <div className="w-full flex flex-col">
              <label htmlFor="name" className="text-gray-300 font-medium text-sm mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="bg-[#101720] w-full px-6 py-4 border border-gray-800/80 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full" placeholder="Your Name" />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="email" className="text-gray-300 font-medium text-sm mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="bg-[#101720] w-full px-6 py-4 border border-gray-800/80 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full" placeholder="youremail@example.com" />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="message" className="text-gray-300 font-medium text-sm mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full min-h-[100px] max-h-[350px] h-[200px] px-3 py-2 text-lg border border-gray-800/80 rounded-xl bg-[#101720] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full" placeholder="Tell me about your project, ideas, or your message..." />
            </div>
          </div>



          <button type="submit" disabled={status.type === 'loading'} className="w-full bg-blue-600 font-medium text-white text-lg py-4 px-6 mt-4 flex items-center justify-center rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer">
            <LuSend className="mr-3" />
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <p
              className={`text-sm ${status.type === 'error'
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
      </div>

    </section>

  );
}