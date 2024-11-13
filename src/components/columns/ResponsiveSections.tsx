import Container from "../common/Container";


const ResponsiveSections = () => {
  return (
    <Container>
    <section className="py-8">
      <div className="container mx-auto px-4 space-y-8">

        {/* One Full */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">One Full</h3>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat.
          </p>
        </div>

        {/* One Half */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">One Half</h3>
            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">One Half</h3>
            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
            </p>
          </div>
        </div>

        {/* One Third */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">One Third</h3>
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
              </p>
            </div>
          ))}
        </div>

        {/* One Third Colored */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-md bg-red-500 text-white">
            <h3 className="text-xl font-semibold mb-4">One Third</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-blue-800 text-white">
            <h3 className="text-xl font-semibold mb-4">One Third</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-purple-700 text-white">
            <h3 className="text-xl font-semibold mb-4">One Third</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.</p>
          </div>
        </div>

      </div>
    </section>
    </Container>
  );
};

export default ResponsiveSections;
