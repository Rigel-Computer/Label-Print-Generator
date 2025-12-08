# Label Print Generator

A simple, browser-based tool for creating identical labels on DIN A4 sheets. No installation, no complex software – just upload images, optionally add captions, and print.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![AI-Augmented](https://img.shields.io/badge/development-AI--augmented-purple.svg)

## 🎯 Purpose

For the specific case when all labels on one sheet need to be identical – this tool provides a lean alternative to comprehensive desktop software like Avery Zweckform.

**Perfect for:**

-  Product labels (small manufacturers, Etsy sellers)
-  Gift tags (events, holidays)
-  Address labels (sender labels for letters/packages)
-  Event badges (meetups, workshops)
-  Inventory labels (office, workshop, warehouse)

## ✨ Features

-  **No Installation Required** – Runs entirely in the browser
-  **Up to 3 Images per Label** – Side by side with automatic 5mm spacing
-  **Optional Captions** – Individual caption per image (or leave blank)
-  **Automatic Layout** – 100% image height without text, 80/20 split with text
-  **Automatic Margin Calculation** – Enter label dimensions, margins are calculated automatically
-  **Print Preview** – Visual borders (not printed) show label boundaries
-  **Privacy-Focused** – All processing happens locally, no data leaves your device
-  **Cross-Browser Compatible** – Works on Chrome, Firefox, Safari, Edge

## 🚀 Quick Start

1. Open `index.html` in your browser
2. Enter your label dimensions (width, height, columns, rows)
3. Choose number of images per label (1, 2, or 3)
4. Upload images and optionally add captions
5. Click "Preview" and then "Print"

**That's it!**

## 📋 How It Works

### Step 1: Enter Label Dimensions

Find the specifications on your label package:

-  Width (mm)
-  Height (mm)
-  Columns
-  Rows

### Step 2: Upload Images

Choose 1-3 images per label. Upload fields appear based on your selection.

### Step 3: Optional Captions

Each image can have its own caption below it – or remain uncaptioned. Completely flexible.

### Step 4: Print

The tool automatically:

-  Calculates margins to center labels on A4 (210×297mm)
-  Arranges images with 5mm spacing
-  Adjusts layout (100% image or 80/20 split)
-  Generates print-ready preview

## 🛠️ Technical Details

**Technology Stack:**

-  Pure HTML, CSS, JavaScript
-  No frameworks, no dependencies
-  No server communication
-  Runs entirely client-side

**Architecture:**

-  `storage.js` – State management
-  `renderer.js` – Print layout calculation
-  `app.js` – UI logic
-  `fileHandler.js` – File upload handling

**Key Algorithm: Margin Calculation**

```javascript
calculateMargins() {
    const a4Width = 210;   // mm
    const a4Height = 297;  // mm

    const totalLabelsWidth = columns * labelWidth;
    const totalLabelsHeight = rows * labelHeight;

    const marginLR = (a4Width - totalLabelsWidth) / 2;
    const marginTB = (a4Height - totalLabelsHeight) / 2;

    return { left: marginLR, right: marginLR,
             top: marginTB, bottom: marginTB };
}
```

Result: Perfectly centered labels, regardless of format.

## 🎨 Layout Intelligence

The tool features dynamic layout adjustment:

-  **Without caption:** Image uses full label height (100%)
-  **With caption:** Automatic 80/20 split (80% image, 20% text)

This works individually per image. A label with three images can have different layouts for each:

-  Image 1: No text (100% height)
-  Image 2: With text (80/20 split)
-  Image 3: No text (100% height)

All automatic, no manual adjustment needed.

## ⚠️ Limitations (By Design)

This tool focuses on one specific use case:

-  ✅ All labels on the sheet are **identical**
-  ❌ No different content per label
-  ❌ No mail merge from databases
-  ❌ No template library
-  ❌ No complex multi-layer layouts

For these requirements, established desktop software remains the better choice.

## 📝 Use Case Examples

**Product Labels:**  
Logo + product photo + organic seal. Each element optionally captioned.

**Gift Tags:**  
Holiday motif + recipient name + decorative icon.

**Address Labels:**  
Company logo + name + website URL.

**Event Badges:**  
Company logo + event logo + attendee photo.

**Inventory Labels:**  
Category icon + item number + description.

## 🤝 Contributing

Contributions are welcome! This is an open-source project built on the KISS (Keep It Simple, Stupid) principle.

**Guidelines:**

-  Keep it simple – resist feature bloat
-  Maintain zero dependencies
-  Ensure cross-browser compatibility
-  Test thoroughly before submitting PRs

## 🧠 AI-Augmented Development

This project was built using AI-augmented development – leveraging generative AI as a tool for efficient software development. Both the code and documentation were created with AI assistance.

**Philosophy:**  
AI as a tool, not a replacement. The architecture, design decisions, and quality standards were human-defined; AI accelerated the implementation.

## 📄 License

MIT License – feel free to use, modify, and distribute.

## 💼 Professional Services

Need a custom solution tailored to your specific requirements?

**Rigel-Computer – Software & Design**

-  Custom web applications
-  Tool development
-  AI-augmented software solutions

→ [Get in touch](https://www.rigel-computer.com/kontakt)  
→ [LinkedIn](https://www.linkedin.com/in/christoph-schweres)

---

**Built with ❤️ and AI-augmented development**

---

Built with AI-augmented development

Provided by _Rigel-Computer – Software & Design_

Need professional AI solutions or custom tool development? → [Get in touch](https://www.rigel-computer.com/kontakt) | [LinkedIn](https://www.linkedin.com/in/christoph-schweres)
