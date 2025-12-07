import React from "react"
import { StatRow } from "../ui/StatRow"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"
import { PageContent } from "../../types/content"

export const Pricing: React.FC<{ data: PageContent["pricing"] }> = ({ data }) => {
  return (
    <section id="pricing" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {data.eyebrow && <div className="text-xs font-semibold tracking-wide text-slate-700 uppercase text-center">{data.eyebrow}</div>}
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 text-center">{data.title}</h2>
        {data.subtitle && <p className="mt-3 text-slate-700 text-center">{data.subtitle}</p>}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.tiers.map((tier) => (
            <Card key={tier.title} className={`p-6 ${tier.featured ? "ring-2 ring-yellow-300" : ""}`}>
              <div className="text-center">
                <div className="text-xl font-bold text-slate-900">{tier.title}</div>
                <div className="text-sm text-slate-600">{tier.subTitle}</div>
              </div>
              <div className="mt-6 space-y-2">
                {tier.stats.map((s) => <StatRow key={s.label} label={s.label} value={s.value} />)}
              </div>
              <div className="mt-6 text-center">
                <div className="text-2xl font-extrabold text-slate-900">{tier.price.amount}</div>
                <div className="text-xs text-slate-600">{tier.price.cadence}</div>
              </div>
              <div className="mt-6">
                {tier.ctas.map((cta) => (
                  <a key={cta.label} href={cta.href}>
                    <Button variant={cta.variant} full>{cta.label}</Button>
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
        {data.disclaimer && <p className="mt-8 text-center text-xs text-slate-500">{data.disclaimer}</p>}
      </div>
    </section>
  )
}