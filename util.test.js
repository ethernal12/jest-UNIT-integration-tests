const { generateText, checkAndGenerate, validateInput } = require('./util');
const puppeteer = require('puppeteer');


describe('Integration testing', () => {
    test('should generate valid text-output', () => {

        const text = checkAndGenerate('danijel', 40);

        expect(text).toBe('danijel (40 years old)');
    });
});

describe('UNIT testing', () => {
    test('should validate name input', () => {

        const validateText = validateInput('dani', true, true);

        expect(validateText).toBe(true);

    });
    test('should validate age input', () => {

        const validateNumber = validateInput(23, false, true);

        expect(validateNumber).toBe(true);
    });
    test('should output name and age', () => {

        const test = generateText('danijel', 40);

        expect(test).toBe('danijel (40 years old)');

        const test2 = generateText('irena', 38);

        expect(test2).toBe('irena (38 years old)');
    });

});

describe('E2E testing', () => {
    test('should add name, age and expect list item content match', async () => {
        const browser = await puppeteer.launch({
            headless: true,
            slowMo: 80,
            args: ['--window-size=1920,1080']
        })
        const page = await browser.newPage();
        await page.goto('http://127.0.0.1:5500/index.html');
        await page.click('input#name');
        await page.type('input#name', 'danijel');
        await page.type('input#age', '40');
        await page.click('#btnAddUser');
        const finalText = await page.$eval('.user-item', el => el.textContent);
        expect(finalText).toBe('danijel (40 years old)');
    }, 10000);
});

