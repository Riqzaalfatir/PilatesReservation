import BookingForm from "./BookingForm"

type Props = {
  params: Promise<{
    id: string
  }>
  searchParams: Promise<{
    date?: string
    time?: string
    harga?: string
  }>
}

export default async function BookingDetailPage({
  params,
  searchParams,
}: Props) {
  const { id } = await params
  const { date, time, harga } = await searchParams

  return (
    <section className="max-w-6xl mx-auto px-6 py-35">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Booking Pilates
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Detail Booking
            </h1>
            <p className="text-sm text-slate-600 max-w-md mt-2">
              Silakan tinjau kembali detail sesi Pilates yang Anda pilih sebelum
              melanjutkan ke pengisian data diri. Pastikan jadwal dan waktu sudah sesuai.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6">
            <p className="text-xs uppercase tracking-wide text-slate-400 mb-4">
              Ringkasan Booking
            </p>

            <div className="space-y-4 text-sm">
              <DetailItem label="ID Schedule" value={id} />
              <DetailItem label="Tanggal" value={date} />
              <DetailItem label="Jam Mulai" value={time} />

              <DetailItem
                label="Harga"
                value={
                  harga
                    ? `Rp ${Number(harga).toLocaleString("id-ID")}`
                    : "-"
                }
                highlight
              />
            </div>

            <div className="border-t mt-6 pt-4 space-y-3 text-sm">
              <DetailItem label="Class" value="Pilates Intermediate" />
              <DetailItem label="Instruktor" value="Rina" />
              <DetailItem label="Durasi" value="55 Menit" />

              <p className="text-xs text-slate-500 leading-relaxed pt-2">
                Sesi Pilates ini dirancang untuk membantu meningkatkan fleksibilitas,
                kekuatan inti, serta keseimbangan tubuh Anda dengan pendampingan
                instruktur profesional dalam suasana yang nyaman dan terarah.
              </p>
            </div>
          </div>
        </div>

        <div className="md:sticky md:top-28 h-fit">
          <h2 className="text-xl font-bold mb-1">
            Data Diri Peserta
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Data ini digunakan untuk keperluan konfirmasi dan administrasi sesi Pilates Anda.
          </p>

          <BookingForm
            scheduleId={id}
            date={date || ""}
            time={time || ""}
            harga={harga || ""}
          />
        </div>

      </div>
    </section>
  )
}

function DetailItem({
  label,
  value,
  highlight,
}: {
  label: string
  value?: string
  highlight?: boolean
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-slate-500">{label}</span>
      <span
        className={`font-medium ${
          highlight
            ? "text-[#7A6F66] text-base font-semibold"
            : "text-slate-900"
        }`}
      >
        {value || "-"}
      </span>
    </div>
  )
}
