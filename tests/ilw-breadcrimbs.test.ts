import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-breadcrumbs";

const content = html`
    <ilw-breadcrumbs>
        <a href="/">Home</a>
        <a href="/academics">Academics</a>
        <a href="/academics/undergraduate">Undergraduate programs</a>
        <span>Degree programs</span>
    </ilw-breadcrumbs>
`;

test("renders slotted items with links", async () => {
    const screen = render(content);
    const element = screen.getByText("Academics");
    await expect.element(element).toBeInTheDocument();
});

test("renders slotted list items", async () => {
    let screen = render(content);
    const element = screen.getByText("Degree programs");
    await expect.element(element).toBeInTheDocument();
});
