import { generateUUID } from "../../services/helper-service/utils.js";

class OnBoardingDialog {
  constructor({
                id = generateUUID(),
                content = "",
                contentClass = "default",
                pageNum = 0,
                pageTotal = 0,
                attachEvent = function () {
                },
                onSkip,
                onNext,

              }) {
    this.id = id;
    this.content = content;
    this.contentClass = contentClass;
    this.pageNum = pageNum;
    this.pageTotal = pageTotal;
    this.attachEvent = attachEvent;
    this.onNext = onNext;
    this.onSkip = onSkip;
    this.html = this._generateHTML(content);
  }

  _generateHTML() {
    const nextButtonContent = this.pageNum === this.pageTotal ? "Get started" : "Next";
    const skipBtnClass = this.pageNum === 1 ? "" : "disabled";
    return `
    <div class="header"> </div>
    <div class="content ${this.contentClass}">
      ${this.content}
    </div>
    <div class="footer">
      <div class="progress-bar">
          <progress value="${this.pageNum}" max="${this.pageTotal}"></progress> 
          <span>${this.pageNum}/${this.pageTotal}</span>
      </div>
      <button class="skipBtn ${skipBtnClass}">Skip</button>
      <button class="nextBtn disabled">${nextButtonContent}</button>
    </div>`
  }

  async render() {
    const self = this;
    this.dialog = $(`<div id=${this.id}></div>`)
      .html(this.html)
      .dialog({
        autoOpen: true,
        dialogClass: 'onboadingDialog',
        resizable: true,
        height: 438,
        width: 600,
        modal: true,
        draggable: false,
        open: function () {
          $('.ui-widget-overlay').addClass("dim-overlay");
        },
        close: function () {
          self.close();
        }
      }).parent()
      .draggable();
    await this.attachDefaultEvent();
    await this.attachEvent();
  }

  async close() {
    this.dialog.find("div.ui-dialog-content").dialog('destroy').remove()
  }

  async attachDefaultEvent() {
    const self = this;
    $(this.dialog).find(".skipBtn").click(function () {
      if (self.onSkip === undefined) {
        self.close();
        return;
      }
      self.onSkip();
    });
    $(this.dialog).find(".nextBtn").click(function () {
      if ($(this).hasClass("disabled")) return;
      if (self.onNext === undefined) {
        self.close();
        return;
      }
      self.onNext();
    });
  }
}

export { OnBoardingDialog }


