const Blogs = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Blogs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <div key={id} className="p-6 bg-white rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Sample Blog Title {id}
            </h3>
            <p className="text-gray-600 mb-4">
              This is a sample blog description. Replace this with real content.
            </p>
            <button className="text-green-600 hover:underline">
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;
