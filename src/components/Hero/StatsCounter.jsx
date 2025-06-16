

const StatsCounter = () => {
  return (
      <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          {[
            { value: "50+", label: "Students" },
            { value: "98%", label: "Satisfaction" },
            { value: "30+", label: "Projects" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg"
            >
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
  )
}

export default StatsCounter
