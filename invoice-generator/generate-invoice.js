const ejs = require('ejs');
const fs = require('fs');
const {chromium} = require('playwright');
const path = require('path');

// Load invoice data from the JSON file
const invoiceData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'invoice-data.json'), 'utf8'));

(async () => {
    try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Generate unique timestamp

        // Render the EJS template to HTML
        const templatePath = path.join(__dirname, 'templates', 'invoice.ejs');
        const html = await ejs.renderFile(templatePath, invoiceData);

        // Launch a headless browser using Playwright
        const browser = await chromium.launch();
        const page = await browser.newPage();

        // Load the rendered HTML into the browser
        await page.setContent(html, {waitUntil: 'load'});

        // Generate the PDF and save it with a timestamped filename
        const pdfPath = `invoice-${timestamp}.pdf`;
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true
            // Additional parameters can be added here
        });

        await browser.close();
        console.log(`PDF successfully created at: ${pdfPath}`);
    } catch (error) {
        console.error('An error occurred while generating the invoice:', error);
    }
})();