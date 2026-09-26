import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.registerCommand("bluebook-check", {
    description: "Confirm that the teaching Extension loaded successfully",
    handler: async (_args, ctx) => {
      ctx.ui.notify(
        "The Buku Pi Extension has loaded; this command does not read or modify any files.",
        "info",
      );
    },
  });
}
