import { expect, test } from "@playwright/test";

test("hero finish controls switch image and accessible selection", async ({ page }) => {
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  const sage = page.getByRole("button", { name: "Show Sage finish" });
  await sage.click();
  await expect(sage).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("button", { name: "Show Graphite finish" })).toHaveAttribute("aria-pressed", "false");
  await expect(page.getByAltText("Sage electric motor scooter")).toHaveClass(/active/);
  await page.getByRole("button", { name: "Show Pearl finish" }).click();
  await expect(page.getByAltText("Pearl electric motor scooter")).toHaveClass(/active/);
});

test("model details carry the chosen model into the enquiry preview", async ({ page }) => {
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  const link = page.getByRole("link", { name: "Discover this ride", exact: false }).first();
  await link.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: "The city explorer" })).toBeVisible();
  await dialog.getByRole("button", { name: "Arrange a test ride" }).click();
  await expect(dialog.getByRole("heading", { name: "Let's get you riding." })).toBeVisible();
  await expect(dialog.getByRole("combobox")).toHaveValue("The city explorer");
  await expect(dialog).toContainText("enquiries are not submitted yet");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(link).toBeFocused();
});

test("support links open FAQs and legal dialogs work", async ({ page }) => {
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  await page.getByRole("link", { name: "Charging guide", exact: true }).click();
  await expect(page.locator("#charging")).toHaveAttribute("open", "");
  await page.getByRole("link", { name: "Service & warranty", exact: true }).click();
  await expect(page.locator("#warranty")).toHaveAttribute("open", "");
  await page.getByRole("link", { name: "Privacy policy", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Back to website" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("all standalone photos load and desktop layout fits", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  await page.evaluate(async () => {
    const images = [...document.images];
    images.forEach(image => image.loading = "eager");
    await Promise.all(images.map(image => image.decode()));
  });
  await expect(page.locator(".showroom-photo img")).toBeVisible();
  expect(await page.evaluate(() => [...document.images].every(image => image.naturalWidth > 0))).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(errors).toEqual([]);
  await page.screenshot({ path: "design/qa-desktop.png", fullPage: true });
});

test("mobile navigation, imagery and layout work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  const menu = page.getByRole("button", { name: "Open navigation" });
  await menu.click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Our scooters" }).click();
  await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.evaluate(async () => {
    const images = [...document.images];
    images.forEach(image => image.loading = "eager");
    await Promise.all(images.map(image => image.decode()));
  });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({ path: "design/qa-mobile.png", fullPage: true });
});



test("visit guide offers a clear next step", async ({ page }) => {
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  const journey = page.locator("#your-first-ride");
  await expect(journey.getByRole("heading", { name: "Your first ride, made simple." })).toBeVisible();
  await journey.getByRole("link", { name: "Arrange a test ride" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
});

test("scroll motion runs only when the visitor allows it", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  await page.evaluate(() => {
    const scene = document.querySelector(".lifestyle")!;
    const target = scene.getBoundingClientRect().top + scrollY - innerHeight * .2;
    window.scrollTo({ top: target, behavior: "instant" });
  });
  await expect.poll(() => page.evaluate(() =>
    parseFloat(document.documentElement.style.getPropertyValue("--page-progress")))).toBeGreaterThan(0);
  await expect.poll(() => page.locator(".lifestyle").evaluate(el =>
    el.style.getPropertyValue("--scene-shift"))).not.toBe("");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".lifestyle-image")).toHaveCSS("transform", "none");
});

test("tablet and wide desktop remain within the viewport", async ({ page }) => {
  for (const width of [768, 1024, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test("full-width header and section surfaces fit all responsive sizes", async ({ page }) => {
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  const widths = [320, 360, 375, 390, 414, 540, 600, 700, 701, 744, 768, 820, 900, 1024, 1100, 1280, 1440, 1920, 2560];
  for (const width of widths) {
    await page.setViewportSize({ width, height: width < 700 ? 844 : 1000 });
    await page.evaluate(() => window.scrollTo({ top: 1000, behavior: "instant" }));
    const metrics = await page.evaluate(() => {
      const header = document.querySelector(".header")!.getBoundingClientRect();
      const surfaces = [...document.querySelectorAll("main > section, .footer, .trust-strip")].map(element => {
        const rect = element.getBoundingClientRect();
        return { section: element.className, left: rect.left, right: rect.right };
      });
      return {
        viewport: innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        header: { left: header.left, right: header.right, top: header.top },
        surfaces,
        clippedText: [...document.querySelectorAll("h1,h2,h3,p,summary")].filter(element =>
          element.clientWidth > 0 && element.scrollWidth > element.clientWidth + 2
        ).map(element => element.textContent?.slice(0, 80)),
      };
    });
    expect(metrics.scrollWidth, "horizontal overflow at " + width).toBeLessThanOrEqual(width);
    expect(metrics.header.left, "header left at " + width).toBe(0);
    expect(metrics.header.right, "header right at " + width).toBe(width);
    expect(metrics.header.top, "sticky header position at " + width).toBe(0);
    for (const surface of metrics.surfaces) {
      expect(surface.left, surface.section + " left at " + width).toBe(0);
      expect(surface.right, surface.section + " right at " + width).toBe(width);
    }
    expect(metrics.clippedText, "clipped text at " + width).toEqual([]);
  }
});

test("phone landscape menu fits viewport and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 667, height: 375 });
  await page.goto("/");
  await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
  await page.getByRole("button", { name: "Open navigation" }).click();
  const nav = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(nav).toBeVisible();
  const bounds = await nav.boundingBox();
  expect(bounds!.x).toBe(0);
  expect(bounds!.width).toBe(667);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(375);
  await page.keyboard.press("Escape");
  await expect(nav).not.toBeVisible();
});

test("mobile lifestyle shows the whole photograph above the copy", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  for (const width of [320, 390, 600, 700]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    await page.locator(".hero-copy.animate").waitFor({ state: "attached" });
    await page.locator("#lifestyle").scrollIntoViewIfNeeded();
    const photo = page.locator(".lifestyle-image");
    await expect(photo).toHaveCSS("object-fit", "contain");
    await expect(photo).toHaveCSS("transform", "none");
    const media = await page.locator(".lifestyle-media").boundingBox();
    const copy = await page.locator(".lifestyle-copy").boundingBox();
    expect(media!.width).toBe(width);
    expect(media!.height / media!.width).toBeCloseTo(941 / 1672, 2);
    expect(copy!.y).toBeGreaterThanOrEqual(media!.y + media!.height - 1);
  }
});
