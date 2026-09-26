import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.registerCommand("bluebook-check", {
    description: "Memastikan Extension pengajaran berhasil dimuat",
    handler: async (_args, ctx) => {
      ctx.ui.notify(
        "Extension Buku Pi sudah dimuat; perintah ini tidak membaca atau mengubah file apa pun.",
        "info",
      );
    },
  });
}
