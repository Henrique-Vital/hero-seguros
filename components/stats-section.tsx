export function StatsSection() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: "+1.7 milhão",
              label: "De clientes segurados"
            },
            {
              number: "+120 mil",
              label: "Bilhetes emitidos por mês"
            },
            {
              number: "+4 mil",
              label: "Agências venderam nosso Seguro Viagem"
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-purple-900/30 rounded-lg p-6 text-center backdrop-blur-sm"
            >
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

