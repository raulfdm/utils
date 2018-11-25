const simpleId = ({
  noUnderscore = false
}) => {
  const id = Math.random().toString(36).substr(2, 9);
  return `${!noUnderscore && '_'}${id}`;
};

export default simpleId;
