const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Hero2.jpeg')" }}>
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-black/30"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h1 className="text-[26px]  md:text-4xl lg:text-5xl font-bold mb-6 leading-8 md:leading-none">
              Booking Kelas Pilates Jadi Lebih Mudah dan Terjadwal
            </h1>
            <p className="text-slate-100 text-xs md:text-sm mb-5">
              Nikmati kemudahan dalam memesan sesi pilates tanpa ribet. Melalui aplikasi ini, Anda dapat memilih tanggal latihan, melihat timeslot yang tersedia, serta menentukan ruangan pilates yang sesuai dengan kebutuhan Anda. Semua proses pemesanan dirancang sederhana dan efisien.
            </p>
          </div>
           <div className="flex justify-center items-center space-x-9 mt-6 font-bold">
              <button className="py-2 px-6 border text-white rounded-lg text-xs md:text-md">Pilihan Jadwal</button>
              <button className="py-2 px-6 border  rounded-lg bg-white text-black text-xs md:text-md">Booking Sekarang</button>
           </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
