# FarmConnect – Direct Farmer to Vendor Marketplace

FarmConnect is a full-stack web platform designed to empower farmers by enabling **direct crop selling to vendors**, eliminating middlemen and ensuring **transparent and fair pricing**.

The platform is inspired by real agricultural challenges faced by farmers in Maharashtra and follows a **government-portal style user interface** (similar to PM-KISAN and Aaple Sarkar) to ensure familiarity, simplicity, and ease of adoption.

---

##  Problem Statement

Farmers often face the following challenges:
- Dependence on middlemen (वापारी) while selling crops
- Lack of transparency in market prices
- Limited bargaining power and delayed payments
- Difficulty in directly reaching verified vendors

These issues result in **reduced profits for farmers** and inefficient agricultural trade.

---

##  Solution – FarmConnect

FarmConnect provides a **single transparent digital platform** that directly connects farmers and vendors, with administrative oversight to maintain authenticity.

### How it works:
- **Farmers** can view live crop prices published by vendors.
- **Vendors** can publish, edit, and delete crop buying prices.
- **Admin** verifies vendors to ensure trust and platform integrity.

This removes intermediaries and improves price discovery for farmers.

---

##  User Roles & Features

###  Farmer
- View live crop prices (Marathi default interface)
- See crop price, quantity, and vendor location
- Simple, mobile-friendly, read-only dashboard
- No complex actions required

###  Vendor
- Register and wait for admin approval
- Add, edit, and delete crop prices
- View only their own published crops
- Clear status feedback (Published / Deleted)

###  Admin
- Secure admin login (no public admin signup)
- Approve or reject vendor registrations
- Delete fake or inactive vendors
- Automatically remove crops when a vendor is deleted

---

##  Language Support
- 🇮🇳 Marathi (default – farmer-first approach)
- 🇬🇧 English (admin, jury, and technical users)
- Easy language toggle similar to government portals

---

##  Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Custom Marathi–English language handling
- CSS with government-portal inspired design

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT-based Authentication
- Role-based Access Control (RBAC)

### Deployment & Cloud
- Backend: **Render**
- Frontend: **Vercel**
- Database: **MongoDB Atlas**

---

##  Security Features
- JWT-based authentication
- Role-based route protection
- Admin account created once and signup disabled
- Vendor access restricted until admin approval

---

##  Live Application URLs

- **Frontend:** https://farmconnect-pied.vercel.app  
- **Backend API:** https://farmconnect-api-cqc0.onrender.com  

---

##  Demo Flow (For Jury / Review)
1. Farmer views live crop prices (Marathi interface)
2. Vendor publishes crop price
3. Admin approves vendor
4. Farmer sees updated crop prices
5. Vendor edits or deletes crop
6. Admin removes a fake vendor (auto crop cleanup)

---

##  Use Cases & Impact

FarmConnect can be adopted by:
- Farmer Producer Organizations (FPOs)
- Agricultural cooperatives
- Government-supported agri platforms
- Rural digital marketplaces

The platform promotes **fair trade, transparency, and farmer empowerment**.

---
