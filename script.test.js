const reverse = require ('./script.js');

test('reverse str', () => {
    expect(reverse("asd")).toBe("dsa");
});