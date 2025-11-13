import { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
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
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}
