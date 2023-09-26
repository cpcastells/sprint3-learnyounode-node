import { execSync } from "child_process";

describe("Given a filtered-ls script file", () => {
  describe("When it is executed with a directory path and the text 'md'", () => {
    test("Then it should log the files with such extension", () => {
      const expectedResult = "test.md";
      const command =
        "npx ts-node ./src/ts/exercise5/filtered-ls.ts ./src/ts/exercise5/test md";

      const output = execSync(command).toString().trim();

      expect(output).toBe(expectedResult);
    });
  });

  describe("When it is executed with an invalid directory path", () => {
    test("Then it should log an error message", () => {
      const expectedError = "Error: ENOENT: no such file or directory";

      // Pass an invalid directory path to trigger an error
      const invalidPath = "./invalid-directory";
      const command = `npx ts-node ./src/ts/exercise5/filtered-ls.ts ${invalidPath} md`;

      try {
        execSync(command).toString().trim();
      } catch (error) {
        // Ensure the error message matches the expected error
        expect(error.message).toContain(expectedError);
      }
    });
  });
});
