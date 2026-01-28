import { FaCheckCircle } from "react-icons/fa"
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa"
import ContactForm from "../card/ContactForm"

const Contact = () => {
  return (
    <div id="contact" className="py-16 sm:py-22 lg:py26">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          
          <div>
            <h2 className="text-3xl font-bold md:text-3xl lg:text-4xl mb-5">
              Booking & Konsultasi Testing PILATES
            </h2>

            <p className="text-sm text-slate-800 mb-3 text-justify">
              Testing PILATES hadir untuk membantu Anda mencapai tubuh yang lebih
              sehat, seimbang, dan kuat melalui latihan pilates yang aman dan
              terarah. Setiap sesi dirancang dengan pendekatan profesional sesuai
              kebutuhan dan kemampuan Anda.
            </p>

            <p className="text-sm text-slate-800 mb-5 text-justify">
              Baik untuk pemula maupun tingkat lanjutan, instruktur kami siap
              membimbing Anda dengan metode yang fokus pada postur, fleksibilitas,
              kekuatan inti, dan pemulihan tubuh.
            </p>

            <ul className="flex flex-col space-y-3 px-4 mb-5">
              <li className="flex text-sm font-semibold items-center gap-2 text-slate-900">
                <FaCheckCircle className="text-[#7A6F66]" />
                Instruktur berpengalaman & bersertifikasi
              </li>
              <li className="flex text-sm font-semibold items-center gap-2 text-slate-900">
                <FaCheckCircle className="text-[#7A6F66]" />
                Program latihan disesuaikan dengan kondisi tubuh
              </li>
              <li className="flex text-sm font-semibold items-center gap-2 text-slate-900">
                <FaCheckCircle className="text-[#7A6F66]" />
                Studio nyaman & jadwal fleksibel
              </li>
            </ul>

            <p className="text-sm text-slate-800 mb-5 text-justify">
              Silakan hubungi kami melalui form booking atau media sosial resmi
              untuk informasi jadwal, jenis kelas, dan sesi private pilates.
              Tim kami akan dengan senang hati membantu Anda.
            </p>

            <ul className="flex flex-col space-y-3 px-4 mb-5">
              <li className="flex text-sm font-semibold items-center gap-2 text-slate-900">
                <FaInstagram className="text-[#E1306C] text-xl" />
                @Testingpilates
              </li>
              <li className="flex text-sm font-semibold items-center gap-2 text-slate-900">
                <FaWhatsapp className="text-green-600 text-xl" />
                +62 8xx-xxxx-xxxx
              </li>
              <li className="flex text-sm font-semibold items-center gap-2 text-slate-900">
                <FaFacebook className="text-blue-700 text-xl" />
                Testing Pilates Studio
              </li>
            </ul>

            <p className="text-sm text-slate-800 mb-5 text-justify">
              Mulai perjalanan hidup sehat Anda bersama Testing PILATES.
              Booking sesi Anda hari ini dan rasakan manfaatnya.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
