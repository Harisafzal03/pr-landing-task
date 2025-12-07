import React from "react"
import { HeroContent } from "../../types/content"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"

export const Hero: React.FC<{ data: HeroContent }> = ({ data }) => {
  return (
    <section id="hero" className="relative">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-yellow-300 -z-10" />
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            {data.eyebrow && <div className="text-xs font-semibold tracking-wide text-slate-700 uppercase">{data.eyebrow}</div>}
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-slate-900">
              {data.title}
            </h1>
            {data.subtitle && <p className="mt-3 text-lg text-slate-700">{data.subtitle}</p>}
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
          <div className="relative">
            <Card className="p-6 md:p-8">
              {data.form?.title && <h3 className="text-xl font-bold text-slate-900">{data.form.title}</h3>}
              {data.form?.description && <p className="mt-1 text-sm text-slate-600">{data.form.description}</p>}
              <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
                {data.form?.fields.map((f) => (
                  <div key={f.name} className="space-y-2">
                    <label htmlFor={f.name} className="text-sm font-medium text-slate-700">{f.label}</label>
                    {f.type === "select" ? (
                      <select id={f.name} name={f.name} required={f.required} className="w-full rounded-md border border-gray-300 px-3 py-2">
                        <option value="">Select...</option>
                        {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    ) : f.type === "textarea" ? (
                      <textarea id={f.name} name={f.name} required={f.required} placeholder={f.placeholder} className="w-full rounded-md border border-gray-300 px-3 py-2" />
                    ) : (
                      <input id={f.name} name={f.name} type={f.type} required={f.required} placeholder={f.placeholder} className="w-full rounded-md border border-gray-300 px-3 py-2" />
                    )}
                  </div>
                ))}
                <Button type="submit" variant="primary" full>{data.form?.submitLabel ?? "Submit"}</Button>
                {data.form?.disclaimer && <p className="text-xs text-slate-500">{data.form.disclaimer}</p>}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}