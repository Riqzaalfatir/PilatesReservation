"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type ClassDetail = {
  intro: string;
  overview: string;
  benefits: string[];
  whatYouDo: string[];
  equipments: string[];
  perfectFor: string[];
  conclusion: string;
  contact: string;
};

type Class = {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  image: string;
  shortDescription: string;
  detail: ClassDetail;
};

export default function ClassDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const [classData, setClassData] = useState<Class | null>(null);

  useEffect(() => {
    if (!slug) return;

    fetch("http://localhost:8080/api/classes")
      .then((res) => res.json())
      .then((data: Class[]) => {
        const selected = data.find((c) => c.slug === slug);
        if (!selected) return;

        setClassData({
          ...selected,
          detail: {
            intro: selected.detail?.intro ?? "",
            overview: selected.detail?.overview ?? "",
            benefits: selected.detail?.benefits ?? [],
            whatYouDo: selected.detail?.whatYouDo ?? [],
            equipments: selected.detail?.equipments ?? [],
            perfectFor: selected.detail?.perfectFor ?? [],
            conclusion: selected.detail?.conclusion ?? "",
            contact: selected.detail?.contact ?? "",
          },
        });
      })
      .catch(console.error);
  }, [slug]);

  if (!classData) {
    return (
      <p className="text-center mt-24 text-slate-500">
        Loading article...
      </p>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-30 space-y-14">

  <header className="space-y-4">
    <h1 className="text-4xl font-bold">{classData.title}</h1>
    <p className="text-slate-600">
      {classData.category} • {classData.duration} • {classData.level}
    </p>
    
<div className="relative w-full h-105 rounded-3xl overflow-hidden shadow-xl">
  <Image
    src={classData.image}
    alt={classData.title}
    fill
    className="object-cover object-center"
    priority
  />
</div>
    <p className="pt-3 text-lg font-bold text-slate-900">
      {classData.shortDescription}
    </p>
  </header>

  <section className="-mt-6 space-y-3">
    <h2 className="text-2xl font-semibold">Introduction</h2>
    <p className="text-slate-700 leading-relaxed text-justify px-1">
      {classData.detail.intro}
    </p>
  </section>

  <section className="space-y-3">
    <h2 className="text-2xl font-semibold">Class Overview</h2>
    <p className="text-slate-700 leading-relaxed text-justify px-1">
      {classData.detail.overview}
    </p>
  </section>

  <section className="space-y-4">
    <h2 className="text-2xl font-semibold">Key Benefits</h2>
    <ul className="space-y-2">
      {classData.detail.benefits.map((item) => (
        <li key={item} className="flex gap-3">
          <FaCheckCircle className="text-[#7A6F66] mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>

  <section className="space-y-4">
    <h2 className="text-2xl font-semibold">What You Will Do</h2>
    <ul className="list-disc list-inside space-y-2 text-slate-700">
      {classData.detail.whatYouDo.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>

  <section className="space-y-4">
    <h2 className="text-2xl font-semibold">Equipment Used</h2>
    <ul className="flex flex-wrap gap-2">
      {classData.detail.equipments.map((item) => (
        <span
          key={item}
          className="px-3 py-1 text-sm bg-slate-100 rounded-full"
        >
          {item}
        </span>
      ))}
    </ul>
  </section>

  <section className="space-y-4">
    <h2 className="text-2xl font-semibold">Perfect For</h2>
    <ul className="space-y-2">
      {classData.detail.perfectFor.map((item) => (
        <li key={item} className="flex gap-3">
          <FaCheckCircle className="text-[#7A6F66] mt-1" />
          {item}
        </li>
      ))}
    </ul>
  </section>

  <section className="space-y-3">
    <h2 className="text-2xl font-semibold">Conclusion</h2>
    <p className="text-slate-700 leading-relaxed px-1 text-justify">
      {classData.detail.conclusion}
    </p>
  </section>

  <section className="border-t pt-6">
    <p className="text-slate-700">
      Interested? Contact us at{" "}
      <span className="font-semibold">{classData.detail.contact}</span>
    </p>
  </section>
  <Link href="/">
  <button className="py-2 px-4 text-white bg-[#7A6F66] rounded-md text-xl font-semibold">← Kembali</button>
  </Link>

</article>

  );
}
