'use client'

import emailjs from '@emailjs/browser'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Flip, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function page() {
  const notify = () => {
    toast.success('Email was sent successflly!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: '',
      transition: Flip
    })
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs.sendForm(
      `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      e.currentTarget,
      `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
    )

    notify()

    e.currentTarget.reset()
  }

  return (
    <section className="mobile-container scrollbar-none md:space-y-10 md:container">
      <div className="pb-10 space-y-3">
        <h2 className="text-4xl font-semibold font-batman">Contact</h2>

        <div className="h-1 w-44 bg-white"></div>
      </div>

      <div className="flex flex-col justify-evenly gap-2 mb-8 md:mb-0 md:gap-5 md:flex md:flex-row">
        <div className="flex items-center gap-3">
          <p className="text-2xl text-white">
            <FaPhone />
          </p>

          <p>+55(51)99866-7327</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-3xl text-white">
            <MdEmail />
          </p>

          <p>yuri.diogo.az@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-2xl text-white">
            <FaLocationDot />
          </p>

          <p>RS / Brazil</p>
        </div>
      </div>

      <div>
        <form
          onSubmit={sendEmail}
          target="reset"
          className="space-y-3 md:space-y-5"
        >
          <div className="flex gap-2 md:gap-8">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="w-[50%] p-3 rounded-full bg-[#222222] contact-input"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-[50%] p-3 rounded-full bg-[#222222] contact-input"
            />
          </div>

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-full bg-[#222222] contact-input"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={7}
            required
            style={{ resize: 'none' }}
            className="w-full p-3 rounded-3xl bg-[#222222] contact-input"
          />

          <button
            type="submit"
            className="rounded-full p-3 px-20 text-black bg-white font-semibold transition-all animate-bounce hover:bg-slate-300"
          >
            Send
          </button>
        </form>

        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          progressClassName="toastProgress"
        />
      </div>
    </section>
  )
}
