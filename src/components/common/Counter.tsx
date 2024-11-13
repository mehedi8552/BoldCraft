import CountUp from "react-countup";

const Counter = ({ ...props}) => {
  return (
    <CountUp start={0} end={props.value}>
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>
  );

};

export default Counter;
