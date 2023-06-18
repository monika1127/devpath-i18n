import axe from "axe-core";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("name", () => {
  test("should meet accessibility standards", async () => {
    // Configure axe
    const { container } = render(<App />);
    axe.configure({
      disableDeduplicate: true,
    });

    // Run axe accessibility tests
    const results = await axe.run(container);
    if (results.violations.length) console.log(results.violations);

    // Assert the test results
    expect(results.violations.length).toBe(0);
  });
});
