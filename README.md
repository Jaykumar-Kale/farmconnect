#  FarmConnect – Direct Farmer to Vendor Marketplace

FarmConnect is a full-stack web platform designed to empower farmers by enabling **direct crop selling to vendors**, eliminating middlemen and ensuring better price transparency.

The platform is inspired by real agricultural challenges faced by farmers in Maharashtra and follows a **government-portal style UI** (PM-KISAN / Aaple Sarkar) for ease of adoption.

---

##  Problem Statement

Farmers often:
- Rely on middlemen (वापारी) for selling crops
- Lack transparency in crop prices
- Depend on fertilizer shops without scientific guidance
- Face delayed or unfair pricing

---

##  Solution – FarmConnect

FarmConnect connects:
- **Farmers** → View live crop prices from vendors  
- **Vendors** → Publish crop buying prices  
- **Admin** → Approve vendors and maintain authenticity  

All stakeholders operate on a **single transparent platform**.

---

##  User Roles & Features

###  Farmer
- View crop prices (Marathi default)
- See vendor location & quantity
- No login complexity
- Simple, mobile-friendly UI

###  Vendor
- Register & wait for admin approval
- Add / edit / delete crop prices
- View own published crops
- Status feedback (Published / Deleted)

###  Admin
- Secure admin login (no public signup)
- Approve or reject vendors
- Delete fake / inactive vendors
- Auto-delete vendor crops on vendor removal

---

##  Language Support
- 🇮🇳 Marathi (default – farmer friendly)
- 🇬🇧 English (admin / jury use)
- Language toggle similar to government portals

---

##  Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Custom Marathi–English i18n
- CSS (Government-style UI)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Role-based Access Control

### Deployment
- Backend: **Render**
- Frontend: **Vercel**
- Database: **MongoDB Atlas**

---

##  Security Features
- JWT-based authentication
- Role-based route protection
- Admin signup disabled after setup
- Vendor approval required before access

---

##  Live URLs

- **Frontend:** https://farmconnect.vercel.app  
- **Backend API:** https://farmconnect-api-cqc0.onrender.com  

---

##  Demo Flow (For Jury)
1. Farmer views crop prices (Marathi UI)
2. Vendor adds crop price
3. Admin approves vendor
4. Farmer sees updated prices
5. Vendor edits / deletes crop
6. Admin removes fake vendor (auto crop cleanup)

---

##  Use Case
FarmConnect can be adopted by:
- Farmer Producer Organizations (FPOs)
- Agricultural cooperatives
- Government-backed agri initiatives
- Rural e-market platforms

---

