import { loadKatalonStudioScripts } from "../../services/KS-export-service/katalon-studio-script-service.js";
import { KSExportDialog } from "../../view/KS-export/KS-export-dialog.js";

$(document).ready(function () {
  $("#export").click(function () {
    const dropdown = $("#export-open-dropdown");
    if ($(dropdown).css("display") === "block") {
      $(dropdown).css("display", "none")
    } else {
      $(dropdown).css("display", "block");
    }
  });

  $("#export-to-KS").click(async function () {
    await loadKatalonStudioScripts();
    const dialog = new KSExportDialog();
    await dialog.render();
  });
});

