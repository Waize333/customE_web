# FrameWork for E-Custom-Websites Using Vite  

This framework is designed to create **custom single-page e-commerce websites** with React, Vite, Zustand for state management, and Firebase for backend integration.  

---

## 📂 Folder Structure Breakdown  

### **1️⃣ `/components` – Reusable UI Components**  
Contains reusable UI elements to keep the project modular and scalable.  

- **Navbar.jsx** → Navigation bar  
- **HeroSection.jsx** → Background image, logo, restaurant name  
- **CategorySlider.jsx** → Horizontal sliding categories  
- **CategoryList.jsx** → List of categories and their items  
- **MenuItem.jsx** → Displays a single menu item inside categories  
- **ItemCustomization.jsx** → Popup modal for item customization  
- **CartBadge.jsx** → Small floating cart icon with item count  
- **CartDrawer.jsx** → Sliding cart summary (opens when clicked)  
- **Footer.jsx** → Footer with links and contact details  
- **FloatingActions.jsx** → Floating buttons (cart, chat support, etc.)  

---

### **2️⃣ `/pages` – Main Application Pages**  
Contains full-page components that make up the SPA (Single Page Application).  

- **Home.jsx** → Landing page  
- **Product.jsx** → Product details page  
- **Cart.jsx** → Shopping cart page  
- **Checkout.jsx** → Checkout flow  

➡ **Navigation is handled using React Router**  

---

### **3️⃣ `/hooks` – Custom React Hooks**  
Stores custom hooks for managing app logic separately from UI components.  

- **useCart.js** → Manages shopping cart logic  
- **useAuth.js** → Handles Firebase authentication  
- **useFetchProducts.js** → Fetches product data from Firebase  

➡ Helps in **separating logic from UI** to keep code clean and maintainable.  

---

### **4️⃣ `/store` – Global State Management (Zustand)**  
Handles global state management using Zustand or Redux.  

- **cartStore.js** → Stores cart data globally  
- **userStore.js** → Stores user authentication state  

➡ Ensures **state is shared** between different components efficiently.  

---

### **5️⃣ `/utils` – Helper Functions**  
Stores utility functions to prevent repeating code across components.  

- **formatCurrency.js** → Converts numbers into price format  
- **validateEmail.js** → Validates user emails  
- **calculateDiscount.js** → Applies discounts dynamically  

➡ **Keeps business logic separate** from UI.  

---

### **6️⃣ `/assets` – Static Files**  
Stores images, icons, and other static assets.  

- **/images/** → Product images, banners  
- **/icons/** → SVG icons  

➡ Helps in **organizing media files** neatly.  

---

## **🛠 Technologies Used**  

-  **Vite** → Fast React framework  
-  **Tailwind CSS** → For styling  
-  **Firebase** → Backend authentication and database  
-  **Zustand** → Lightweight state management  
-  **React Router** → Client-side routing  

---

## ** How State Management Works (Zustand)**  

**cartStore.js - Global State Example**  

```js
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(i => i.id !== id) })),
  clearCart: () => set({ cart: [] }),
}));
