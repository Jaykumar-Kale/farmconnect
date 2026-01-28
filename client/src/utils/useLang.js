// client/src/utils/useLang.js

let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  en: {
    farmerDashboard: "Farmer Dashboard",
    vendorDashboard: "Vendor Dashboard",
    adminDashboard: "Admin Dashboard",

    crop: "Crop",
    price: "Price per Quintal",
    quantity: "Quantity (Quintal)",
    location: "Location",

    addCrop: "Add Crop Price",
    publish: "Publish",
    myCrops: "My Published Crops",

    search: "Search",
    vendors: "Vendors",
    approve: "Approve",
    delete: "Delete",
    deleteVendor: "Delete Vendor",

    noData: "No data available",
    noCrops: "No crops published yet",
  },

  mr: {
    farmerDashboard: "शेतकरी डॅशबोर्ड",
    vendorDashboard: "व्यापारी डॅशबोर्ड",
    adminDashboard: "प्रशासक डॅशबोर्ड",

    crop: "पीक",
    price: "दर (₹ प्रति क्विंटल)",
    quantity: "प्रमाण (क्विंटल)",
    location: "ठिकाण",

    addCrop: "पीक दर जोडा",
    publish: "प्रकाशित करा",
    myCrops: "माझे प्रकाशित दर",

    search: "शोधा",
    vendors: "व्यापारी",
    approve: "मान्यता द्या",
    delete: "हटवा",
    deleteVendor: "व्यापारी हटवा",

    noData: "माहिती उपलब्ध नाही",
    noCrops: "अद्याप कोणतेही दर प्रकाशित नाहीत",
  },
};

// translation function
export const t = (key) => {
  return translations[currentLang][key] || key;
};

// language toggle function (THIS FIXES YOUR ERROR)
export const toggleLang = () => {
  currentLang = currentLang === "en" ? "mr" : "en";
  localStorage.setItem("lang", currentLang);
  window.location.reload(); // simple & reliable
};
