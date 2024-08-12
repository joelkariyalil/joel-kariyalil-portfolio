import React, { useState } from 'react';

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to getform.io
    try {
      const res = await fetch('https://getform.io/f/bdryqllb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        }); // Clear form after successful submission
      } else {
        const errorData = await res.json();
        console.error('Error sending email:', errorData.error);
        alert('Error sending email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email.');
    }
  };

  return (
    <div className='border-b border-neutral-900 pb-12 lg:pb-20'>
      <div className='container mx-auto px-8'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-4xl font-bold tracking-tight text-white mb-11'>
            Contact Me
          </h2>
          <p className='max-w-xl text-lg text-gray-300'>
            Feel free to reach out with any questions or messages. I look forward to hearing from you!
          </p>
        </div>
        <div className='flex justify-center'>
          <form
            onSubmit={handleSubmit}
            className='w-full max-w-lg bg-neutral-900 p-8 rounded-lg border border-neutral-800 shadow-lg'
          >
            <div className='flex flex-col mb-4'>
              <label htmlFor='name' className='text-white mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='p-2 border border-neutral-700 rounded-md bg-neutral-800 text-white'
                required
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='email' className='text-white mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='p-2 border border-neutral-700 rounded-md bg-neutral-800 text-white'
                required
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='subject' className='text-white mb-2'>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='p-2 border border-neutral-700 rounded-md bg-neutral-800 text-white'
                required
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='message' className='text-white mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='4'
                className='p-2 border border-neutral-700 rounded-md bg-neutral-800 text-white'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
