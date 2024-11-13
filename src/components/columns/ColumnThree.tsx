import Container from "../common/Container";

const ColumnThree = () => {
  return (
    <section className="py-24 lg:py:16 ">
      <Container>
        <div className="container mx-auto px-4 space-y-8">
          {/* One Third */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className=" p-6 rounded-lg shadow-lg hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-black">One Third</h3>
                <p className="text-gray-600 text-base">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomized words which don't look
                  even slightly believable.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ColumnThree;
