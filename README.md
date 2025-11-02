# 🧠 Smart Contacts 📇  

Smart Contacts is a simple, elegant contact management web app that allows users to **add, view, delete, and restore contacts** — all displayed as visually pleasing tiles. It also includes a built-in **Recycle Bin** for accidentally deleted contacts.  

---

## 🚀 Live Demo  
👉 [Deployed on Vercel](https://smart-contacts-two.vercel.app/)   

---

## ⚙️ Features  

- ➕ **Add New Contacts:** Enter name, phone number, and email.  
- 🔍 **Search Contacts:** Instantly filter contacts by name or number.  
- 🗑️ **Soft Delete:** Contacts move to the Recycle Bin instead of permanent deletion.  
- 🔄 **Restore Contacts:** Easily bring back deleted contacts.  
- 🧱 **Tile Layout:** Contacts appear as neatly aligned tiles, 5 per row.  
- 🎨 **Responsive Design:** Built with TailwindCSS for smooth and modern styling.  

---

## 🧩 Tech Stack  

- **React.js** – Frontend framework  
- **Tailwind CSS** – Styling and responsive UI  
- **Vite** – Fast React development environment  

---

## 🧰 Installation and Setup  

To run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/god-Krico/Smart-Contacts.git

# 2. Move into the project directory
cd Smart-Contacts

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
# 5.Then open your browser and visit:  
👉 [http://localhost:5173]
```


## 🎨 Design Choices  

- Used **flexbox + grid** to ensure responsive alignment of contact tiles.  
- Adopted **TailwindCSS** for fast and clean styling.  
- Chose a **recycle bin system** to prevent accidental data loss.  
- Kept the UI **minimal and centered** for focus and clarity.  

---

## 📚 Libraries Used  

| Library | Purpose |
|----------|----------|
| **React** | Frontend framework |
| **TailwindCSS** | Styling and layout |
| **Vite** | Development and bundling tool |

---

## 🧠 Assumptions  

- Each contact is uniquely identified by an **id**.  
- No backend database — all data is managed **in memory** (frontend only).  
- Focused on **functionality and clean UI** rather than persistent storage.  

