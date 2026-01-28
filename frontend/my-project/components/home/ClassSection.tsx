"use client"

import { useEffect, useState } from "react"
import { ClassItem } from "../types/class"
import ClassCard from "../card/ClassCard"

export default function ClassesPage() {
  const [classes, setClasses] = useState<ClassItem[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/api/classes")
      .then(res => res.json())
      .then(data => setClasses(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="max-w-6xl mx-auto py-10 md:py-16 px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl  font-bold mb-2 md:mb-6 text-center mx-auto md:mx-0">Our Classes</h1>
          <p className="text-xs max-w-md md:text-right text-slate-700 text-center mx-auto md:mx-0">Pilih kelas yang sesuai dengan kebutuhan dan nikmati setiap sesi dengan bimbingan instruktur berpengalaman.</p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map(item => (
          <ClassCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
