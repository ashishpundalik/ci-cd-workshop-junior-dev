const feature1 = require("./feature1");

describe('Feature 1', () => {
  it('should register a name', () => {
    expect(feature1.registerName({})).toEqual("Nat");
  });
});
