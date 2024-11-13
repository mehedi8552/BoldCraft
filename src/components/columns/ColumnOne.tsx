import Container from "../common/Container";

const ColumnOne = () => {
  return (
    <section className="py-24 lg:py:16 bg-slate-50">
      <Container>
        <div className=" mx-auto  space-y-8">
          {/* One Full */}
          <div className=" rounded-lg ">
            <h3 className="text-xl font-semibold mb-4 text-black">One Full</h3>
            <p className="text-gray-600 text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ColumnOne;
