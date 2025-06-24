# 🛒 Shopping List App

A simple and interactive web-based shopping list app where users can:

- ✅ Add items to the list  
- 🔍 Filter items in real-time  
- ❌ Remove individual items or clear the entire list  
- 💾 Persist their list using `localStorage`

---

## ✨ Features

- **Add Items:** Type in your item and click submit to add it to the list.
- **Filter Items:** Use the filter input to search through your list dynamically.
- **Delete Items:** Remove any item by clicking the ❌ button next to it.
- **Clear All:** Instantly remove all items from your list.
- **Persistent Storage:** All list items are saved in the browser's `localStorage` so they remain after page reloads.

---

## 🧱 Built With

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Browser `localStorage` API

---

## 📂 How It Works

1. On page load, items are fetched from `localStorage` and displayed.
2. Adding a new item updates the DOM and also stores the item in an array inside `localStorage`.
3. The filter input allows dynamic searching without reloading the page.
4. Removing an item updates both the DOM and the `localStorage` array.
5. Clicking “Clear All” wipes everything from both the UI and `localStorage`.


