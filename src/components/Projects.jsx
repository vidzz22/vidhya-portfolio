export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-12">Selected Projects</h3>

      <div className="space-y-10">

        <div className="border p-6 rounded-lg hover:shadow-sm transition">
          <h4 className="font-semibold text-lg">House Price Prediction</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Built regression model using Scikit-learn to predict housing prices.
            Performed feature engineering and cross-validation.
          </p>
          <a
            href="https://github.com/vidzz22"
            className="underline text-sm mt-3 inline-block"
          >
            View on GitHub
          </a>
        </div>

        <div className="border p-6 rounded-lg hover:shadow-sm transition">
          <h4 className="font-semibold text-lg">Customer Churn Analysis</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Exploratory data analysis and classification modeling to predict churn.
          </p>
          <a
            href="https://github.com/vidzz22"
            className="underline text-sm mt-3 inline-block"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}