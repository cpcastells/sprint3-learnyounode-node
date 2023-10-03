import { execSync } from "child_process";

describe("Given a make-it-modular script file", () => {
  describe("When it is executed with a directory path and the text 'md'", () => {
    test("Then it should log the files with such extension", () => {
      const expectedResult = "test.md";
      const command =
        "node ./dist/exercise6/make-it-modular.js ./src/ts/exercise5/test md";

      const output = execSync(command).toString().trim();

      expect(output).toBe(expectedResult);
    });
  });

  describe("When it is executed with an invalid directory path", () => {
    test("Then it should log an error message", () => {
      const expectedError = "Error: ENOENT: no such file or directory";

      const invalidPath = "./invalid-directory";
      const command = `node ./dist/exercise6/make-it-modular.js ${invalidPath} md`;

      try {
        execSync(command).toString().trim();
      } catch (error) {
        expect(error.message).toContain(expectedError);
      }
    });
  });
});
