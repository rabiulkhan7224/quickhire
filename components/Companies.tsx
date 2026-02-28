'use client'

export function Companies() {
  const companies = [
    { name: 'Vodafone', id: 1, image: '/Vodafone.png' },
    { name: 'Intel', id: 2 },
    { name: 'Tesla', id: 3 },
    { name: 'AMD', id: 4 },
    { name: 'Talkit', id: 5 },
  ]

  return (
    <section className="border-b border-border bg-background/50 py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-left text-sm text-muted-foreground">
          Companies we helped grow
        </p>
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company.id} className="flex items-center justify-center">
              <span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
