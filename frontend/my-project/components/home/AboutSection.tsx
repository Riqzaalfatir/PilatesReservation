import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"

const fitur = [
  "Jadwal Fleksibel",
  "TimeSlot Terupdate",
  "Ruangan Nyaman",
  "Sistem Booking Sederhana",
  "Konfirmasi Cepat",
  "Tanpa Proses Rumit",
]

const AboutSection = () => {
  return (
    <section id="about" className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-20 sm:mb-30 md:mb-40 lg:mb-56">
          <div className="mb-20 md:mb-0">
            <div className="relative">
              <Image
                src="/about1.jpg"
                alt=""
                width={328}
                height={384}
                className="relative w-62 h-76 md:w-72 md:h-86 lg:w-82 lg:h-96 rounded-xl object-cover object-bottom-right"
              />
              <Image
                src="/about2.webp"
                alt=""
                width={368}
                height={288}
                className="absolute w-72 h-52 md:w-82 md:h-62 lg:w-92 lg:h-72 rounded-xl ml-18 -mt-40"
              />
            </div>
          </div>
          <div>
            <h3 className="text-[#7A6F66] text-xs mb-1">─── About Us</h3>
            <h2 className="text-[26px] leading-8 xl:leading-11 sm:text-3xl md:text-4xl font-bold mb-5">
              Solusi Booking Kelas Pilates
              <span className="block">yang Praktis dan Terjadwal</span>
            </h2>
            <p className="text-slate-800 text-sm mb-3">
                Kami adalah studio pilates yang menyediakan layanan pemesanan kelas secara online untuk memudahkan pelanggan dalam mengatur jadwal latihan. Melalui sistem booking ini, pengguna dapat memilih tanggal, timeslot, serta ruangan pilates yang tersedia tanpa perlu datang langsung ke studio.            </p>
            <p className="text-slate-800 text-sm mb-5">
                Dengan alur pemesanan yang sederhana dan transparan, kami berkomitmen memberikan pengalaman booking yang nyaman dan efisien, sehingga setiap sesi pilates dapat berjalan lebih teratur dan sesuai kebutuhan pelanggan.            </p>
            <button className="py-2 px-6 bg-[#7A6F66] text-white rounded-md">Selengkapnya</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="order-2 md:order-1">
            <h1 className="text-[26px] leading-8 sm:text-3xl sm:leading-none md:text-4xl font-bold mb-5">
              Studio Pilates Modern dengan Sistem Booking Online
            </h1>
            <p className="text-slate-800 text-sm mb-3 text-justify">
              Studio pilates kami hadir untuk mendukung gaya hidup sehat dengan menyediakan fasilitas latihan yang nyaman serta sistem reservasi yang mudah digunakan oleh siapa saja.
            </p>
            <p className="text-slate-800 text-sm mb-5 text-justify">
              Melalui platform ini, pelanggan dapat merencanakan jadwal latihan dengan lebih baik, menghindari bentrok jadwal, dan memastikan ketersediaan ruangan sebelum datang ke studio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 px-5 mb-5 text-sm">
              {fitur.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#7A6F66]" />
                  <h4>{item}</h4>
                </div>
              ))}
            </div>
            <button className="ml-2 w-full sm:w-auto py-2 sm:px-6 bg-[#7A6F66] text-white rounded-md">
              Hubungi Admin
            </button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/about1.jpg"
              alt=""
              width={560}
              height={320}
              className="w-100 h-60 sm:w-120 sm:h-66 lg:w-140 lg:h-80 rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
