# ✨ WORD MEANING EXTENSION

**A simple browser extension that allows users to select any word or sentence on a webpage and instantly view its meaning or a simplified version in a popup.**

The extension fetches definitions from the **Dictionary API** and supports **sentence simplification using Sapling AI**. It also includes **dark mode** support for better visibility.

---

## 🚀 Features

✅ **Instant Word Lookup** – Select any word on a webpage and see its meaning.  
✅ **Sentence Simplification** – Select a sentence to get an easier-to-understand version.  
✅ **Dictionary API Integration** – Fetches accurate definitions.  
✅ **Sapling AI Support** – Provides simplified versions of complex sentences.  
✅ **Dark Mode Support** – Adjusts text color for better readability.  
✅ **Easy Dismissal** – Click anywhere outside the popup to close it.  
✅ **Works on All Websites** – Seamless browsing experience.

---

## 🛠️ Installation

### 1️⃣ Fork & Clone the Repository

- **Fork** this repository to your GitHub account.
- **Clone** the forked repository to your local machine:

```bash
git clone https://github.com/rupesh-dev30/Word-Meaning-Extension.git
```

### 2️⃣ Load the Extension in Chrome

1. Open **Chrome** and go to `chrome://extensions/`.
2. Enable **Developer Mode** (top right corner).
3. Click **Load unpacked** and select the folder where this extension is located.

---

## 📌 How to Use

1️⃣ Select any word or sentence on a webpage.  
2️⃣ A **popup** will appear showing its meaning or simplified version.  
3️⃣ Click **outside the popup** to dismiss it.

---

## 🌇 Enable Sentence Simplification Feature

To use the **sentence simplification** feature, you need to set up your **Sapling AI API key**:

1. **Go to** [Sapling AI](https://sapling.ai/) and create an account.
2. **Get your API key** from the dashboard.
3. **Open** the `content.js` file in the extension folder.
4. **Find** the function `fetchSimplifiedText(sentence, x, y)`.
5. **Replace** `your-api-key-here` with your actual **Sapling AI API key**.

```javascript
body: JSON.stringify({
        text: sentence,
        key: "your-api-key-here", // Replace this with your actual API key
        variety: "informal_to_formal", 
      }),
```

6. **Save** the file and reload the extension in `chrome://extensions/`.

Now, you can select complex sentences and get simplified versions instantly!

---

## 🔧 Alternative Installation (Using .crx or .pem file)

* THIS IS OLD VERSION EXTENSION (v 1.01) which doesnt contain the sentence features

📌 **Method 1: Using .crx File**

- Download the `.crx` file : [Download Here](https://drive.google.com/drive/folders/1VovG-mo4fyWV6Jdeq8SjiTREAUnobAiN?usp=drive_link)
- Drag & drop it onto `chrome://extensions/`
- Confirm the installation.

📌 **Method 2: Using .pem File**

- Download the `.pem` file : [Download Here](https://drive.google.com/drive/folders/1VovG-mo4fyWV6Jdeq8SjiTREAUnobAiN?usp=drive_link)
- Open `chrome://extensions/`
- Click **Pack Extension**
- Select the extension folder & `.pem` file
- Install the generated `.crx` file

---

## 🛠️ Technologies Used

- **JavaScript** – Content scripts, event listeners
- **Manifest v3** – Chrome extension standard
- **Dictionary API** – Fetching word meanings
- **Sapling AI API** – Simplifying complex sentences
- **HTML & CSS** – Popup styling

---

## 🎮 Future Improvements

🌟 **Add pronunciation support**  
🌟 **Include synonyms & antonyms**  
🌟 **Save favorite words for later**  
🌟 **Enhance UI with animations**  
🌟 **Provide example sentences & source URLs**

---

## 🤝 Contributing

💡 Found a bug or have an idea? **Fork the repo, open issues, or submit a pull request!**

📝 **License**: This project is licensed under the **MIT License**.
