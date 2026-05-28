import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
	vi.unstubAllEnvs();
	vi.resetModules();
	localStorage.clear();
});

describe("default self-hosted instance", () => {
	it("uses the Vite default Honcho URL when one is baked in", async () => {
		vi.stubEnv("VITE_DEFAULT_HONCHO_URL", "/honcho");
		const { loadConfig } = await import("@/lib/config");
		const config = loadConfig();
		expect(config?.baseUrl).toBe("/honcho");
	});
});
