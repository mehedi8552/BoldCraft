import Container from "../common/Container";

const ColumnFour = () => {
  return (
    <section className="py-24 lg:py:16 ">
      <Container>
        <div className="container mx-auto space-y-8">
          {/* One Third Colored */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-md shadow-lg hover:shadow-2xl bg-cyan-900 text-white ">
              <h3 className="text-xl font-semibold mb-4">One Third</h3>
              <p className="text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomized words which don't look even
                slightly believable.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-lg hover:shadow-2xl bg-red-600 text-white">
              <h3 className="text-xl font-semibold mb-4">One Third</h3>
              <p className="text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomized words which don't look even
                slightly believable.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-lg hover:shadow-2xl bg-purple-700 text-white">
              <h3 className="text-xl font-semibold mb-4">One Third</h3>
              <p className="text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomized words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
        </div>
        </Container>
    </section>
  );
};

export default ColumnFour;
