
function generateCode() {
  const number = document.getElementById('number').value;
  if (!number) return alert("Please enter a number.");
  const code = btoa(number + Date.now());
  document.getElementById('result').innerText = "Pairing Code: " + code;
  document.getElementById('copyBtn').style.display = 'inline-block';
}
function copyCode() {
  const text = document.getElementById('result').innerText.split(": ")[1];
  navigator.clipboard.writeText(text).then(() => {
    alert("Code copied to clipboard!");
  });
}
function toggleAudio() {
  const audio = document.getElementById("bg-audio");
  audio.muted = !audio.muted;
}
