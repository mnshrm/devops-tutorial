const setDateOfTheWeek = () => {
  return new Date().toLocaleDateString("en-US", { dateStyle: "long" });
};

try {
  document.getElementById("date").innerText = setDateOfTheWeek();
} catch {}

module.exports = setDateOfTheWeek;
