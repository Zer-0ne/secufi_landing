import { useState,useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

    const [isVisible, setIsVisible] = useState(false);
  
  // 1. State to control animation visibility

  useEffect(() => {
    // Client-side execution
    setIsVisible(true);
    

  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({
    name: "",
    email: "",
    message: "",
  })
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-[#16223e] via-[#232e4d] to-[#1a2540]">
      <div className={`w-full max-w-xl bg-white shadow-lg rounded-xl p-8  transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>

        <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#10d8c4] via-[#43e97b] to-[#ffab40] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient pb-4 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none text-black"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border text-black rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-gray-600">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full border text-black rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="px-10 py-5 bg-gradient-to-r from-[#43e97b] to-[#009966] rounded-full font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 glow-green shadow-xl"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}
