
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
      "<rootDir>/src/setuptests.ts"
    ],
    moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/utils/fileMock.ts",
    "\\.(css|less|scss|bpmn|xml)$": "identity-obj-proxy",
  },
};
