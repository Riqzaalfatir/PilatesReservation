import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 shadow-[0_8px_18px_rgba(0,0,0,0.16),0_32px_60px_rgba(0,0,0,0.28)]">
      <div className="max-w-7xl mx-auto px-6 pt-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:flex md:justify-between md:gap-0">

          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-slate-900">
              Testing PILATES
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
              Testing Pilates membantu Anda menemukan keseimbangan tubuh
              dan pikiran melalui sesi pilates profesional yang
              dirancang untuk semua level.
            </p>

            <div className="flex items-center gap-4 text-slate-700">
              <FaInstagram className="hover:text-[#7A6F66] cursor-pointer transition" />
              <FaTwitter className="hover:text-[#7A6F66] cursor-pointer transition" />
              <FaWhatsapp className="hover:text-[#7A6F66] cursor-pointer transition" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Program
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-[#7A6F66]" href="#">Beginner Pilates</a></li>
              <li><a className="hover:text-[#7A6F66]" href="#">Intermediate Class</a></li>
              <li><a className="hover:text-[#7A6F66]" href="#">Reformer Pilates</a></li>
              <li><a className="hover:text-[#7A6F66]" href="#">Stretch & Recovery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-[#7A6F66]" href="#">Booking Guide</a></li>
              <li><a className="hover:text-[#7A6F66]" href="#">Class Schedule</a></li>
              <li><a className="hover:text-[#7A6F66]" href="#">FAQ</a></li>
              <li><a className="hover:text-[#7A6F66]" href="#">Health Tips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-[#7A6F66]" href="#">About Us</a></li>
              <li><a className="hover:text-[#7A6F66]" href="#">Instructors</a></li>
              <li><a className="hover:text-[#7A6F66]" href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 my-10"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Testing Pilates.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#7A6F66]">Privacy Policy</a>
            <a href="#" className="hover:text-[#7A6F66]">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
