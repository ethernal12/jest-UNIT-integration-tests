const { generateText, checkAndGenerate, validateInput } = require('./util');


test('should output name and age', () => {

    const test = generateText('danijel', 40);

    expect(test).toBe('danijel (40 years old)');

    const test2 = generateText('irena', 38);

    expect(test2).toBe('irena (38 years old)');
});

test('should generate valid text-output', () => {

    const text  = checkAndGenerate('danijel',40);

    expect(text).toBe('danijel (40 years old)');
});

test('should validate name input', () => {

    const validateText  = validateInput('dani', true, true);

    expect(validateText).toBe(true);

});
test('should validate age input', () => {

    const validateNumber  = validateInput(23, false, true);

    expect(validateNumber).toBe(true);
});