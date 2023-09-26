import { execSync } from "child_process";

describe("Given a my-first-io script", () => {
  describe("When it is executed with a path of a text file which contains 3 lines", () => {
    test("Then it should log the number of lines in that file", () => {
      const expectedLines = "3";
      const command =
        "npx ts-node ./src/ts/exercise3/my-first-io.ts ./src/ts/exercise3/test.txt";

      const output = execSync(command).toString().trim();

      expect(output).toBe(expectedLines);
    });
  });
});
