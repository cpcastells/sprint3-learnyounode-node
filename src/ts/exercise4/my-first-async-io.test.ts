import { execSync } from "child_process";

describe("Given a my-first-async-io script", () => {
  describe("When it is executed with a path of a text file which contains 3 lines", () => {
    test("Then it should log the number of lines in that file", () => {
      const expectedLines = "3";
      const command =
        "npx ts-node ./src/ts/exercise4/my-first-async-io.ts ./src/ts/exercise4/test.txt";

      const output = execSync(command).toString().trim();

      expect(output).toBe(expectedLines);
    });
  });
});
