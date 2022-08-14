module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironemnt: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
