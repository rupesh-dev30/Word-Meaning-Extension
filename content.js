document.addEventListener("mouseup", async (event) => {
  let selectedText = window.getSelection().toString().trim();

  if (selectedText.length > 0) {
    const x = event.clientX || 100;
    const y = event.clientY || 100;

    if (selectedText.split(" ").length === 1) {
      // single
      fetchMeaning(selectedText, x, y);
    } else {
      // sentence
      fetchSimplifiedText(selectedText, x, y);
    }
  }
});

async function fetchMeaning(word, x, y) {
  try {
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let data = await response.json();

    if (data && Array.isArray(data) && data.length > 0 && data[0].meanings) {
      let meaning = data[0].meanings[0].definitions[0].definition;
    //   console.log(meaning);
      showPopup(word, meaning, x, y);
    } else {
      fetchSimplifiedText(word, x, y);
    }
  } catch (error) {
    showPopup("Error", "Failed to fetch meaning.", x, y);
  }
}

async function fetchSimplifiedText(sentence, x, y) {
  try {
    let response = await fetch("https://api.sapling.ai/api/v1/rephrase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: sentence,
        key: "ENTER YOUR API KEY", // https://sapling.ai/       
        variety: "informal_to_formal",
      }),
    });

    let data = await response.json();

    // console.log("API Response:", data);

    if (data && data.results && data.results.length > 0) {
      let simplifiedText = data.results[0].replacement;
      showPopup("meaning", simplifiedText, x, y);
    }
  } catch (error) {
    showPopup("Error", "Failed to simplify sentence.", x, y);
  }
}

function showPopup(title, text, x, y) {
  let existingPopup = document.getElementById("word-meaning-popup");
  if (existingPopup) existingPopup.remove();

  let popup = document.createElement("div");
  popup.id = "word-meaning-popup";
  popup.innerHTML = `<strong>${title}:</strong> ${text}`;

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
    popup.style.position = "fixed";
    popup.style.background = isDarkMode ? "#333" : "#fff";
    popup.style.color = isDarkMode ? "#fff" : "#000";
    popup.style.border = "1px solid #ccc";
    popup.style.padding = "10px";
    popup.style.top = `${y + 10}px`;
    popup.style.left = `${x + 10}px`;
    popup.style.zIndex = "1000";
    popup.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";
    popup.style.borderRadius = "5px";

  document.body.appendChild(popup);

  document.addEventListener("click", function closePopup(event) {
    if (!popup.contains(event.target)) {
      popup.remove();
      document.removeEventListener("click", closePopup);
    }
  });
}
