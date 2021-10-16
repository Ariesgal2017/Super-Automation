import { GenericDialog } from "../dialog/generic-dialog.js";
import {
  loadKatalonStudioScripts,
  unloadKatalonStudioScripts
} from "../../services/KS-export-service/katalon-studio-script-service.js";
import { generateKatalonStudioProjectZipFile } from "../../services/KS-export-service/generate-katalon-studio-project-zip-file.js";
import { renderDataFileTree } from "./render-data-file-tree.js";
import { renderTestSuiteTree } from "./render-test-suite-tree.js";
/*
import { renderProfileTree } from "./render-profile-tree.js";
*/
import { displayProgressBar } from "./display-progress-bar.js";
import { UserChoice } from "../../models/KR-export/user-choice.js";
import { trackingSegment } from "../../services/tracking-service/segment-tracking-service.js";

class KSExportDialog extends GenericDialog {
  constructor() {
    const htmlString = `<div class="header">
        <div class="title">Export to Katalon Studio</div>
         <button class="dialog-close" id="export-KS-close">
              <img src="/katalon/images/SVG/close-icon.svg"/>
          </button>
    </div>
    <div class="content">
        <div id="export-to-KS-message">The following test artifacts will be collected to a folder that can be opened with Katalon Studio as a functional project.</div>
        <div id="export-to-KS-warning">
            <img src="/katalon/images/SVG/export-warning-icon.svg" />
            <span>Some selected test cases contain unsupported commands</span>
        </div>
        <div id="export-to-KS-main-panel">
            <div id="export-to-KS-tree" >
                <div id="export-to-KS-test-suites">
                    <div class="header">
                        <div id="export-to-KS-test-suites-dropdown" class="dropdown">
                            <img src="/katalon/images/SVG/dropdown-arrow-off.svg">
                        </div>
                         <span>Test suites</span>
                    </div>
                    <div id="export-to-KS-test-suite-list"></div>
                </div>
                <div id="export-to-KS-data">
                    <div class="header">
                        <div id="export-to-KS-data-dropdown" class="dropdown">
                            <img src="/katalon/images/SVG/dropdown-arrow-off.svg">
                        </div>
                        <span>Data files</span>
                    </div>
                    <div id="export-to-KS-data-list"></div>
                </div>
            </div>
            <div id="export-to-KS-preview-panel">
                <div id="export-to-KS-test-case-preview-other">Preview for this artifact is not available</div>
                <div id="export-to-KS-test-case-preview-panel">
                    <div class="tab-panel">
                        <div class="tab" id="export-to-KS-preview-KR-tab">Katalon Recorder</div>
                        <div class="tab selected" id="export-to-KS-preview-KS-tab">Katalon Studio</div>
                    </div>
                    <div id="export-to-KS-KR-preview">
                        <table id="export-to-KS-command-grid" class="tablesorter" cellspacing="0">
                          <thead class="fixed">
                          <tr>
                            <th style="width: 23%">Command</th>
                            <th style="width: 52%">Target</th>
                            <th style="width: 25%">Value</th>
                          </tr>
                          </thead>
                          <tbody id="export-to-KS-records-grid">
                              
                          </tbody>
                        </table>
                    </div>
                    <div id="export-to-KS-KS-preview">
                        <textarea id="export-to-KS-script" class="txt-script">scripts</textarea>    
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="footer">
        <div id="export-progress">
            <progress id="export-progress-bar" value="32" max="100"></progress> 
            <span id="export-progress-bar-label">32%</span>
            <div id="export-progress-bar-message">5 test artifact are being export</div>
        </div>
        <button id="export-to-KS-cancel">Cancel</button>
        <button id="export-to-KS-export" class="disable">Export</button>
    </div>`;
    super({
      id: "export-to-KS-dialog",
      html: htmlString,
      height: $(window).height(),
      width: $(window).width(),
    });
    this.userChoice = new UserChoice();
  }

  async render() {
    await loadKatalonStudioScripts();
    await super.render();
    await this.attachEvent();
    await Promise.all([renderDataFileTree(this.userChoice),
      renderTestSuiteTree(this.userChoice),
      /*renderProfileTree(this.userChoice)*/]);
  }

  async attachEvent() {
    const self = this;

    $("#export-to-KS-preview-KR-tab").click(async function (event) {
      $("#export-to-KS-preview-KR-tab").addClass("selected");
      $("#export-to-KS-preview-KS-tab").removeClass("selected");
      $("#export-to-KS-KS-preview").css("display", "none");
      $("#export-to-KS-KR-preview").css("display", "block");

    });

    $("#export-to-KS-preview-KS-tab").click(async function (event) {
      $("#export-to-KS-preview-KR-tab").removeClass("selected");
      $("#export-to-KS-preview-KS-tab").addClass("selected");
      $("#export-to-KS-KS-preview").css("display", "block");
      $("#export-to-KS-KR-preview").css("display", "none");
      $("#export-to-KS-KS-preview").find(".CodeMirror-sizer")[0].scrollIntoView({block: "end"})
      const $textarea = $("#export-to-KS-script");
      const codeMirror = $textarea.data('cm');
      if (codeMirror) {
        codeMirror.refresh();
      }
    });

    $("#export-to-KS-cancel").click(async function () {
      await self.close();
    });

    $("#export-to-KS-export").click(async function () {
      if ($(this).hasClass("disable")){
        return;
      }
      const projectTitle = "KR Exported Studio Project";
      const zipFile = await generateKatalonStudioProjectZipFile(self.userChoice, projectTitle);
      const blob = await zipFile.generateAsync({ type: "blob" });
      await displayProgressBar(self.userChoice);
      saveAs(blob, `${projectTitle}.zip`);
      trackingSegment("kru_export_to_ks", {
        num_test_suites: self.userChoice.testSuites.length,
        num_test_cases: await self.userChoice.getTestCaseCount(),
        num_data_files: self.userChoice.dataFiles.length,
        num_profiles: self.userChoice.profiles.length
      })

    });

    $("#export-to-KS-profiles-dropdown").click(function(event) {
      const image = $(this).find("img");
      const src = $(image).attr("src");
      if (src.includes("off")) {
        $(image).attr("src", "/katalon/images/SVG/dropdown-arrow-on.svg");
        $("#export-to-KS-profiles-list").css("display", "block");
      } else {
        $(image).attr("src", "/katalon/images/SVG/dropdown-arrow-off.svg");
        $("#export-to-KS-profiles-list").css("display", "none");
      }
    });

    $("#export-to-KS-test-suites-dropdown").click(function(event){
      const image = $(this).find("img");
      const src = $(image).attr("src");
      if (src.includes("off")) {
        $(image).attr("src", "/katalon/images/SVG/dropdown-arrow-on.svg");
        $("#export-to-KS-test-suite-list").css("display", "block");
      } else {
        $(image).attr("src", "/katalon/images/SVG/dropdown-arrow-off.svg");
        $("#export-to-KS-test-suite-list").css("display", "none");
      }
    });
    $("#export-to-KS-data-dropdown").click(function(event){
      const image = $(this).find("img");
      const src = $(image).attr("src");
      if (src.includes("off")) {
        $(image).attr("src", "/katalon/images/SVG/dropdown-arrow-on.svg");
        $("#export-to-KS-data-list").css("display", "block");
      } else {
        $(image).attr("src", "/katalon/images/SVG/dropdown-arrow-off.svg");
        $("#export-to-KS-data-list").css("display", "none");
      }
    })
  }

  async close() {
    await super.close();
    await unloadKatalonStudioScripts();
  }

}

export { KSExportDialog }