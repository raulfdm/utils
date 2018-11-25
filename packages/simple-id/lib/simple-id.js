// https://gist.github.com/gordonbrander/2230317
const simpleId = ({ noUnderscore = false }) => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  const id = Math.random()
    .toString(36)
    .substr(2, 9);

  return `${!noUnderscore && '_'}${id}`;
};

export default simpleId;