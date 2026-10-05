const STORAGE_KEY = "multiFileTestName";

const jsButton = document.getElementById("jsButton");
const saveButton = document.getElementById("saveButton");
const readButton = document.getElementById("readButton");

const nameInput = document.getElementById("nameInput");

const jsResult = document.getElementById("jsResult");
const storageResult = document.getElementById("storageResult");
const swResult = document.getElementById("swResult");

// JavaScript test
jsButton.addEventListener("click", function () {

jsResult.textContent =
"JavaScript is working ✓";

});

// Save LocalStorage
saveButton.addEventListener("click", function () {

const name = nameInput.value.trim();

if (!name) {

storageResult.textContent =
  "Enter a name first.";

return;

}

localStorage.setItem(STORAGE_KEY, name);

storageResult.textContent =
"Saved ✓";

});

// Read LocalStorage
readButton.addEventListener("click", function () {

const name =
localStorage.getItem(STORAGE_KEY);

if (name) {

storageResult.textContent =
  "Stored name: " + name + " ✓";

} else {

storageResult.textContent =
  "No saved name found.";

}

});

// Service Worker
if ("serviceWorker" in navigator) {

window.addEventListener("load", async function () {

try {

  const registration =
    await navigator.serviceWorker.register(
      "service-worker.js"
    );

  if (registration) {

    swResult.textContent =
      "Service Worker registered ✓";

  }

} catch (error) {

  swResult.textContent =
    "Service Worker error: " +
    error.message;

}

});

} else {

swResult.textContent =
"Service Worker is not supported.";

}
