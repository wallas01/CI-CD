// App.test.tsx
import { render, screen } from "@testing-library/react";
import { App } from "./App"; // importa correttamente se export separato

test("renders hello world", () => {
  render(<App />);
  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});
