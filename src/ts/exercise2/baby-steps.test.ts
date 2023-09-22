import { execSync } from "child_process";

describe("Given a baby-steps script", () => {
  describe("When it is executed with numers 2, 3 and 4", () => {
    test("Then it should log the sum to the console", () => {
      const expectedSum = "9";
      const command = "npx ts-node ./src/ts/exercise2/baby-steps.ts 2 3 4";

      const output = execSync(command).toString().trim();

      expect(output).toBe(expectedSum);
    });
  });
});
