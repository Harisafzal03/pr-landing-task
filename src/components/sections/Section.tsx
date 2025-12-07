import React from "react"
import { SectionBlock } from "../../types/content"
import { Button } from "../ui/Button"

export const Section: React.FC<{ id?: string; data: SectionBlock; yellowTop?: boolean }> = ({ id, data, yellowTop }) => {
  return (
    <section id={id} className="relative">
      {yellowTop && <div className="absolute inset-x-0 top-0 h-10 bg-yellow-300 -z-10" />}
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-8">
        <div>
          {data.eyebrow && <div className="text-xs font-semibold tracking-wide text-slate-700 uppercase">{data.eyebrow}</div>}
          <h2 className="mt-2 text-2xl md:text-4xl font-bold text-slate-900">{data.title}</h2>
          <div className="mt-4 space-y-4">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-700">{p}</p>
            ))}
          </div>
          {data.ctas && (
            <div className="mt-6 flex gap-3">
              {data.ctas.map((cta) => (
                <a key={cta.label} href={cta.href}>
                  <Button variant={cta.variant}>{cta.label}</Button>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-start justify-center">
          {data.illustration && (
            <img src={data.illustration} alt="" className="max-w-[360px] w-full h-auto" />
          )}
        </div>
      </div>
    </section>
  )
}