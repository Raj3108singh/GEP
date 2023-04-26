import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

describe("TodoFooter", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<TodoFooter numberOfIncompleteTasks={5} />);
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(<TodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });
});
