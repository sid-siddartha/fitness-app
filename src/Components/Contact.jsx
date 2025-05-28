import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Contact form data:', data);
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-8 border-2 border-white flex flex-row bg-[#121212]">
          <div className="w-full md:w-1/2">
            <div className=" bg-[#121212] p-8 ">
              <h3 className="text-2xl font-semibold mb-4 text-tech-blue">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have a question or want to work together? Feel free to contact me using the form or through the contact information provided.
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon="email"
                  label="Email"
                  value="manikanta@example.com"
                  href="mailto:manikanta@example.com"
                />
                <ContactInfo
                  icon="phone"
                  label="Phone"
                  value="+1 (234) 567-890"
                  href="tel:+1234567890"
                />
                <ContactInfo
                  icon="location"
                  label="Location"
                  value="Hyderabad, India"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#121212] p-8">
              <h3 className="text-2xl font-semibold mb-6 text-tech-purple bg-[#121212]"> Send Me a Message</h3>

              <FormInput
                label="Name"
                id="name"
                type="text"
                placeholder="Your name"
                register={register("name", { required: "Name is required" })}
                error={errors.name?.message}
              />

              <FormInput
                label="Email"
                id="email"
                type="email"
                placeholder="Your email"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                error={errors.email?.message}
              />

              <FormInput
                label="Subject"
                id="subject"
                type="text"
                placeholder="Subject"
                register={register("subject", { required: "Subject is required" })}
                error={errors.subject?.message}
              />

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 focus:ring-tech-blue focus:border-tech-blue ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  placeholder="Your message"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-md hover:opacity-90 transition-opacity disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Info Item Component
const ContactInfo = ({ icon, label, value, href }) => {
  const icons = {
    email: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    phone: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
    location: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  };

  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icons[icon]}
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</h4>
        {href ? (
          <a href={href} className="text-tech-blue hover:underline">{value}</a>
        ) : (
          <p className="text-tech-blue">{value}</p>
        )}
      </div>
    </div>
  );
};

// Reusable Form Input Component
const FormInput = ({ label, id, type, placeholder, register, error }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
      className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 focus:ring-tech-blue focus:border-tech-blue ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default Contact;
