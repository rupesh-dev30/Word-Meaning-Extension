// console.log("Extension content script loaded!"); // Debugging log

document.addEventListener("mouseup", async (event) => {
    let selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        // console.log("User selected:", selectedText); // Debugging log

        if (event) {
            const x = event.clientX || 100;  // Ensure default value
            const y = event.clientY || 100;
            fetchMeaning(selectedText, x, y);
        } else {
            // console.warn("Event is undefined!"); // Debugging log
        }
    }
});

async function fetchMeaning(word, x, y) {
    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let data = await response.json();
        
        if (data && data.length > 0 && data[0].meanings) {
            let meaning = data[0].meanings[0].definitions[0].definition;
            // console.log("Fetched meaning:", meaning); // Debugging log

            showPopup(word, meaning, x, y);
        } else {
            showPopup("Sorry", "No meaning found!", x, y)
            console.log("No meaning found.");
        }
    } catch (error) {
        console.error("Error fetching meaning:", error);
    }
}

function showPopup(word, meaning, x, y) {
    let existingPopup = document.getElementById("word-meaning-popup");
    if (existingPopup) existingPopup.remove(); // Remove old popup

    let popup = document.createElement("div");
    popup.id = "word-meaning-popup";
    popup.innerHTML = `<strong>${word}:</strong> ${meaning}`;

    // Check for dark mode and adjust text color
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    popup.style.position = "fixed";
    popup.style.background = isDarkMode ? "#333" : "#fff";  // Dark mode background color
    popup.style.color = isDarkMode ? "#fff" : "#000";  // Dark mode text color (white on dark, black on light)
    popup.style.border = "1px solid #ccc";
    popup.style.padding = "10px";
    popup.style.top = `${y + 10}px`;
    popup.style.left = `${x + 10}px`;
    popup.style.zIndex = "1000";
    popup.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";
    popup.style.borderRadius = "5px";

    document.body.appendChild(popup);

    // setTimeout(() => {
    //     popup.remove();
    // }, 5000);

    document.addEventListener("click", function closePopup(event) {
      if(!popup.contains(event.target)) {
        popup.remove();
        document.removeEventListener("click", closePopup);
      }
    })
}
