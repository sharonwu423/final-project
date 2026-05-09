const themeButton = document.querySelector("#themeButton");
const revealButton = document.querySelector("#revealButton");
const revealText = document.querySelector("#revealText");
const answerButtons = document.querySelectorAll(".answer");
const quizResult = document.querySelector("#quizResult");

function switchVisualTheme() {
  document.body.classList.toggle("dark-mode");
}

function revealPeacemakingExample() {
  revealText.textContent =
    "Example: In peacemaking, conflict can decrease when opposing groups work toward a shared goal. Cooperation changes the social situation from competition to interdependence, which can reduce hostility and encourage trust.";

  revealText.style.backgroundColor = "#f6dee8";
  revealText.style.padding = "1rem";
  revealText.style.borderRadius = "18px";
}

function checkQuizAnswer(event) {
  const isCorrect = event.target.dataset.correct === "true";

  if (isCorrect) {
    quizResult.textContent =
      "Correct. This scenario connects to aggression because angry comments can increase arousal, intensify hostility, and make aggressive responses seem more acceptable in a group context.";
  } else {
    quizResult.textContent =
      "Not quite. This situation is best explained by aggression and social influence, because the online environment increases hostility rather than attraction, intimacy, or helping behavior.";
  }

  quizResult.style.fontSize = "1.15rem";
  quizResult.style.fontWeight = "600";
}

if (themeButton) {
  themeButton.addEventListener("click", switchVisualTheme);
}

if (revealButton) {
  revealButton.addEventListener("click", revealPeacemakingExample);
}

answerButtons.forEach(function(button) {
  button.addEventListener("click", checkQuizAnswer);
});