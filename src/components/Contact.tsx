import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import cv from '../assets/Hiruna_s_Resume_New.pdf';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(()=> {
      emailjs.init(import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY!);
    }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    console.log("Env vars:", {
      service: import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template: import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      public: import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });

    try {
      const response = await emailjs.send(
        import.meta.env.REACT_APP_EMAILJS_SERVICE_KEY!,
        import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        data,
        import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );

      console.log('✅ Email sent successfully!', response);
      e.currentTarget.reset();
    } catch (error) {
      console.error('❌ Failed to send email:', error);
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side - Contact Info + Social Icons */}
          <div>
            <h1 className="text-5xl font-bold mb-8">Contact Me</h1>
            
            <p className="flex items-center gap-4 text-xl mb-6">
              <span className="text-accent text-3xl">✉️</span>
              hirunahansidu123@gmail.com
            </p>
            
            <p className="flex items-center gap-4 text-xl mb-10">
              <span className="text-accent text-3xl">📞</span>
              (+94) 742721724
            </p>

            {/* === SOCIAL ICONS === */}
            <div className="flex gap-8 text-5xl">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-all hover:scale-110"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              
              <a
                href="https://www.linkedin.com/in/hiruna-fernando-152ba5325/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-all hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              
              <a
                href="https://github.com/Hiruna2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-all hover:scale-110"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            {/* Download CV Button */}
            <a
              href={cv}
              download
              className="mt-12 inline-block bg-accent hover:bg-red-600 px-10 py-4 rounded-full text-lg font-medium transition-all"
            >
              Download CV
            </a>
          </div>

          {/* Right Side - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-[#262626] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-[#262626] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full bg-[#262626] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Your Message"
              className="w-full bg-[#262626] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-accent resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-red-600 py-5 rounded-2xl font-medium text-xl transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-16 text-gray-500 text-sm">
          Copyright © Hiruna. All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Contact;