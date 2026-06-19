const ageInput = document.getElementById("ageInput");
const checkAgeButton = document.getElementById("checkAgeButton");
const result = document.getElementById("result");

checkAgeButton.addEventListener("click", async () => {
  const age = ageInput.value;
  try {
    const response = await axios.post("https://agechecker-4m1l.onrender.com/check-age", { age });
    result.innerText = response.data.message;
  } catch (error) {
    console.error("Error:", error);
    result.innerText = "Could not connect to the server.";
  }
});
