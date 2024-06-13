import { mergeConfig } from "vitest/config";
import sharedConfig from "../../vitest.shared.mjs";

export default mergeConfig(
  sharedConfig,
  {
    test: {
      globalSetup: [
        "./vitest.setup.mts"
      ]
    }
  }
);
