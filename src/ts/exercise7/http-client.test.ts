import { execSync } from "child_process";

describe("Given a http-client script,", () => {
  describe("When it is executed with a url http://www.example.com", () => {
    test("Then it should recieve 'Hello' in the response and log it", () => {
      const expectedLog = "Content:";
      const domain = "http://www.example.com";
      const command = `npx ts-node ./src/ts/exercise7/http-client.ts ${domain}`;

      const output = execSync(command).toString().trim();

      expect(output).toContain(expectedLog);
    });
  });
});
