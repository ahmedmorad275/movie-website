import { FaSquareFacebook } from 'react-icons/fa6'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoGithub } from 'react-icons/io5'

export default function Footer() {
  return (
    <footer className="my-8 mb-3.5 p-2 md:p-3">
      <div className="mx-auto max-w-7xl space-y-4 text-center">
        <div
          id="contact"
          className="social flex justify-center gap-4.5 text-2xl"
        >
          <a
            className="cursor-pointer transition-all duration-200 hover:scale-110"
            href="https://www.fb.com/ahmedmorad22"
            target="_blank"
          >
            <FaSquareFacebook />
          </a>
          <a
            className="cursor-pointer transition-all duration-200 hover:scale-110"
            href="https://wa.me/+201017168338"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
          <a
            className="cursor-pointer transition-all duration-200 hover:scale-110"
            href="https://www.linkedin.com/in/ahmedmorad27"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="cursor-pointer transition-all duration-200 hover:scale-110"
            href="https://github.com/ahmedmorad275"
            target="_blank"
          >
            <IoLogoGithub />
          </a>
        </div>
        {/* Policy */}
        <div className="policy flex justify-center gap-5">
          <a
            className="text-base font-semibold text-gray-900 transition-colors duration-300 hover:text-gray-800"
            href="#"
          >
            Conditions of Use
          </a>
          <a
            className="text-base font-semibold text-gray-900 transition-colors duration-300 hover:text-gray-800"
            href="#"
          >
            Privacy & Policy
          </a>
          <a
            className="text-base font-semibold text-gray-900 transition-colors duration-300 hover:text-gray-800"
            href="#"
          >
            Press Room
          </a>
        </div>
        <div className="rights">
          <p className="text-sm text-gray-500">
            2025 AMG Cinema by Ahmed Morad
          </p>
        </div>
      </div>
    </footer>
  )
}
