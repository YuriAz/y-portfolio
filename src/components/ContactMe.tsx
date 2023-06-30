'use client'

import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { PageInfo } from '../../typings'
import emailjs from '@emailjs/browser'
import { Flip, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  pageInfo: PageInfo
}

export default function ContactMe({ pageInfo }: Props) {
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
    <div className="h-screen relative flex flex-col text-center mx-auto px-10 justify-evenly items-center md:text-left md:flex-row dark:text-dark">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-basic text-2xl dark:text-dark">
        Contact
      </h3>

      <div className="flex flex-col items-center space-y-8 mt-20">
        <h4 className="text-xl w-80 font-semibold text-center mt-20 sm:text-2xl sm:w-full md:text-4xl">
          I got just what you need.{' '}
          <span className="decoration-primary/50 underline dark:decoration-dark/50">
            Lets Talk.
          </span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-primary h-5 w-5 animate-pulse sm:h-7 sm:w-7" />
            <p className="text-lg sm:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-primary h-5 w-5 animate-pulse sm:h-7 sm:w-7" />
            <p className="text-lg sm:text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapIcon className="text-primary h-5 w-5 animate-pulse sm:h-7 sm:w-7" />
            <p className="text-lg sm:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          target="reset"
          className="flex flex-col space-y-2 mx-auto w-80 sm:w-fit z-20"
        >
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-row">
            <input
              name="name"
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              name="email"
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
            required
          />

          <button
            type="submit"
            className="bg-primary py-3 px-10 rounded-md text-lg text-black font-bold dark:text-primary dark:bg-dark"
          >
            Submit
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

      <div className="w-full h-[300px] absolute left-0 top-[36%] bg-primary/10 -skew-y-[10deg] dark:bg-dark/60" />
    </div>
  )
}
