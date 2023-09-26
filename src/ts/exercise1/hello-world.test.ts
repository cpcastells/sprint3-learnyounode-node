import { execSync } from "child_process";

describe("Given a hello-world script", () => {
  describe("When it is executed", () => {
    test("Then it should log in to the console 'I love code", () => {
      const command = "npx ts-node src/ts/exercise1/hello-world.ts";

      const output = execSync(command).toString().trim();

      expect(output).toBe("I love code");
    });
  });
});
