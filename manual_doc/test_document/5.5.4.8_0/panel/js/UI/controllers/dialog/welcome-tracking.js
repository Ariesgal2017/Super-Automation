let htmlWhatsnews = `
    <div class="header">
        <div class="title">Katalon Recorder 5.5.4.8</div>
    </div>
    <div class="content">
        <div class="message">
            <ul>
            <li><b>New shiny things</b><ul>
                    <li><b>Supported</b> more commands (if/else, conditionals, runScript, captureEntirePageScreenshot, getEval, selectWindow, setTimeout) for generating tests to Selenium frameworks.</li>
                </ul>
            </li>
        </ul>
        </div>
    </div>
    <div class="footer">
        <button id="whats-news-release-note">Release note</button>
        <button id="whats-news-close">Close</button>
    </div>
`;

function displayWhatsNewDialog() {
  let newsDialog = $("<div id='whatsNews'></div>")
    .html(htmlWhatsnews)
    .dialog({
      title: `Everything is up to date`,
      resizable: true,
      autoOpen: true,
      dialogClass: 'newStyleDialog',
      height: "auto",
      width: "500",
      modal: true,
      open: function() {
        $(this.parentElement.childNodes[0]).css("display", "block");
      }
    });
  $("#whats-news-release-note").click(() => {
    window.open(
      "https://docs.katalon.com/katalon-recorder/docs/release-notes.html"
    );
  });
  $("#whats-news-close").click(() => {
    newsDialog.remove();
  })
}

$(document).ready(function(){
  browser.storage.local.get("tracking").then(function (result) {
    if (result.tracking) {
      if (result.tracking.isUpdated
        && (result.tracking.hasShownWhatsNewDialog === undefined
          || result.tracking.hasShownWhatsNewDialog === false )) {
          displayWhatsNewDialog();
          result.tracking.hasShownWhatsNewDialog = true;
          browser.storage.local.set(result);
        }
    }
  });
});
