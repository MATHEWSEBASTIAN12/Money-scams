window.onload = () => {
  const beep = document.getElementById("beep");
  beep.play();

  // Voice (safe wording)
  const msg = new SpeechSynthesisUtterance(
    "Rupees Two thousand five hundred debited from your bank account.Your phone is hacked.Verify with your bank."
  );
  speechSynthesis.speak(msg);

  // Fake delay screen → reveal truth
  setTimeout(() => {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").classList.remove("hidden");
  }, 3000);
};

function showPopup() {
  alert("ON CLOSING THIS WEBSITE YOUR PHONE DETAILS WILL BE HACKED.");
}
function startDemo() {
  document.getElementById("startScreen").style.display = "none";

  const beep = document.getElementById("beep");
  beep.play();

  const msg = new SpeechSynthesisUtterance(
    "YOUR PHONE IS UNDER THREAT, CONTACT THE BANK IMMEDIATELY TO AVOID FURTHER LOSS OF MONEY."
  );
  speechSynthesis.speak(msg);

  document.getElementById("screen1").style.display = "block";

  setTimeout(() => {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").classList.remove("hidden");
  }, 3000);
}
