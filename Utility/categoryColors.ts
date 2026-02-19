// Category Color Configuration
// Use this file to define consistent colors for different news categories

export const categoryColors = {
  // राजनीति - Politics
  politics: "#dc2626",      // red-600
  राजनीति: "#dc2626",
  
  // खेल - Sports
  sports: "#16a34a",        // green-600
  खेल: "#16a34a",
  
  // मनोरंजन - Entertainment
  entertainment: "#d946ef", // fuchsia-500
  मनोरंजन: "#d946ef",
  
  // व्यापार - Business
  business: "#2563eb",      // blue-600
  व्यापार: "#2563eb",
  
  // तकनीक - Technology
  technology: "#7c3aed",    // violet-600
  तकनीक: "#7c3aed",
  
  // स्वास्थ्य - Health
  health: "#059669",        // emerald-600
  स्वास्थ्य: "#059669",
  
  // शिक्षा - Education
  education: "#ea580c",     // orange-600
  शिक्षा: "#ea580c",
  
  // राष्ट्रीय - National
  national: "#ef4444",      // red-500
  राष्ट्रीय: "#ef4444",
  
  // अंतर्राष्ट्रीय - International
  international: "#0ea5e9", // sky-500
  अंतर्राष्ट्रीय: "#0ea5e9",
  
  // विज्ञान - Science
  science: "#8b5cf6",       // violet-500
  विज्ञान: "#8b5cf6",
  
  // अपराध - Crime
  crime: "#991b1b",         // red-800
  अपराध: "#991b1b",
  
  // मौसम - Weather
  weather: "#0284c7",       // sky-600
  मौसम: "#0284c7",
  
  // खेल समाचार - Sports News
  "sports news": "#16a34a",        // green-600
  "खेल समाचार": "#16a34a",
  
  // रंगीन पर्दा - Colorful Curtains (Entertainment)
  "colorful curtains": "#d946ef", // fuchsia-500
  "रंगीन पर्दा": "#d946ef",
  
  // ताज़ा हलचल - Breaking/Latest News
  "taaza halachal": "#ef4444",    // red-500
  "ताज़ा हलचल": "#ef4444",
  
  // कारोबार - Business
  कारोबार: "#2563eb",      // blue-600
  
  // Default fallback
  default: "#ef4444",       // red-500
};

// Helper function to get color for a category
export function getCategoryColor(category: string): string {
  const normalizedCategory = category.toLowerCase().trim();
  return categoryColors[normalizedCategory as keyof typeof categoryColors] || categoryColors.default;
}

// Tailwind class variants (for cases where you need Tailwind classes)
export const categoryColorClasses = {
  politics: "bg-red-600",
  sports: "bg-blue-600",
  entertainment: "bg-fuchsia-500",
  business: "bg-blue-600",
  technology: "bg-violet-600",
  health: "bg-emerald-600",
  education: "bg-orange-600",
  national: "bg-red-500",
  international: "bg-sky-500",
  science: "bg-violet-500",
  crime: "bg-red-800",
  weather: "bg-sky-600",
  default: "bg-red-500",
};