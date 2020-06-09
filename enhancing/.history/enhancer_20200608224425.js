module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let repaired = {...item, durability : 100}
  return repaired;
}

function get(item) {
  return { ...item };
}
