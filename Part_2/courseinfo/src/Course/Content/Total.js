const Total = ({ parts }) => {
  return (
    <b>
      A total of {parts.reduce((sum, part) => (sum += part.exercises), 0)}{" "}
      exercises.
    </b>
  );
};

export default Total;
