
# 🎭 Playwright PDF Examples

Welcome to the **Playwright PDF Examples** repository! Here, you'll find practical examples of how to generate
high-quality PDFs using Playwright. 

---

## ✨ First Example: Invoice Generator

<div>
    <img src="https://img.shields.io/badge/playwright-%23111111.svg?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright Badge">
    <img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge">
    <img src="https://img.shields.io/badge/EJS-%23000000.svg?style=for-the-badge&logo=javascript&logoColor=white" alt="EJS Badge">
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge">
</div>

The **Invoice Generator** demonstrates how to create a fully functional, high-quality invoice PDF using Playwright, Node.js, and EJS. By combining these, you can generate dynamic, customizable PDFs from HTML templates with ease.


### 🎨 Example Output

Here’s a sneak peek at the invoice you’ll generate:

<img src="https://img.pdfbolt.com/invoice-example.png" width="600px" alt="Invoice example generated using Playwright">


### 📂 Repository Structure

```plaintext
invoice-generator/
├── data/                     // Directory for data files
│   └── invoice-data.json     // JSON file for invoice data
├── templates/                // Directory for HTML templates
│   └── invoice.ejs           // EJS template for the invoice
├── generate-invoice.js       // Main script for generating PDFs
└── package.json              // Project configuration file
```

### 🚀 How to Run the Example

#### 1️⃣ Clone the Repository

```plaintext
git clone https://github.com/pdfbolt/playwright-examples.git
```

#### 2️⃣ Navigate to the Invoice Generator Directory

```plaintext
cd invoice-generator
```

#### 3️⃣ Install Dependencies

Ensure you have Node.js installed, then install the necessary dependencies:

```plaintext
npm install
```

#### 4️⃣ Run the Invoice Generator Script

```plaintext
node generate-invoice.js
```

#### 5️⃣ View the Output

After running the script, find the generated PDF in your project directory:

```plaintext
invoice-<timestamp>.pdf
```

### 📖 Learn More: Full Tutorial

For a detailed walkthrough of this example, check out the accompanying article:
[How to Generate PDFs in 2025](https://pdfbolt.com/blog/how-to-generate-pdfs-in-2025)

---

**Good Luck and Happy PDFing! 🚀**