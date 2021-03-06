import { generateUUID } from "../../services/helper-service/utils.js";

class WizardDialog{
  constructor({
                id = generateUUID(),
                contentHtml = "",
                dialogClass = "",
                skipBtnContent = "Skip",
                nextBtnContent = "Next",
                backBtnContent = "Back",
                height = 500,
                width = 500,
                pageNum = 1,
                pageTotal = 1,
                onNext,
                onPrevious,
                onCancel,
              }){
    this.id = id;
    this.contentHtml = contentHtml;
    this.dialogClass = dialogClass;
    this.skipBtnContent = skipBtnContent;
    this.backBtnContent = backBtnContent
    this.nextBtnContent = nextBtnContent;
    this.height = height;
    this.width = width;
    this.pageNum = pageNum;
    this.pageTotal = pageTotal;
    this.onNext = onNext;
    this.onPrevious = onPrevious;
    this.onCancel = onCancel;
    this.html = this._generateHTML();
  }

  _generateHTML(){
    const HTML = `
      <div class="container">
        ${this.contentHtml}
      </div>
      <div class="footer">
        <div class="progress-bar">
            <progress value="${this.pageNum}" max="${this.pageTotal}"></progress> 
            <span>${this.pageNum}/${this.pageTotal}</span>
        </div>
        <button class="backBtn">${this.backBtnContent}</button>
        <button class="nextBtn">${this.nextBtnContent}</button>
        <button class="skipBtn">${this.skipBtnContent}</button>
      </div>
    `;
    return HTML;
  }

  async render(){
    const self = this;
    this.dialog = $(`<div id=${this.id}></div>`)
      .html(this.html)
      .dialog({
        autoOpen: true,
        classes: {
          "ui-dialog": `${this.dialogClass} wizardDialog`
        },
        resizable: true,
        height: this.height,
        width: this.width,
        modal: true,
        draggable: false,
        open: function () {
          $('.ui-widget-overlay').addClass("dim-overlay");
        },
        close: function () {
          self.cancel();
        }
      }).parent()
      .draggable();
    await this._attachEvent();
  }

  async _attachEvent(){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    const self = this;
    $(this.dialog).find(".backBtn").click(function (event){
      if ($(this).hasClass("disabled")) return;
      self.previous()
    });
    $(this.dialog).find(".nextBtn").click(function (event) {
      if ($(this).hasClass("disabled")) return;
      self.next();
    });
    $(this.dialog).find(".skipBtn").click(function (event){
      if ($(this).hasClass("disabled")) return;
      self.cancel();
    });
  }

  async cancel(){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    if (this.onCancel !== undefined){
      this.onCancel();
    }
    await this.close();
  }

  async close(){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    this.dialog.find("div.ui-dialog-content").dialog('destroy').remove();
  }

  async next(){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    if (this.onNext !== undefined){
      this.onNext();
    }
    await this.close();
  }

  async previous(){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    if (this.onPrevious !== undefined){
      this.onPrevious();
    }
    await this.close();
  }

  _setDisableButton(buttonSelector, isDisable){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    if (isDisable){
      $(this.dialog.find(buttonSelector)).addClass("disabled");
    } else {
      $(this.dialog.find(buttonSelector)).remove("disabled");
    }
  }

  setDisableBackButton(isDisable){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    this._setDisableButton(".backBtn", isDisable)
  }

  setDisableNextButton(isDisable){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    this._setDisableButton(".nextBtn", isDisable)
  }

  setDisableSkipButton(isDisable){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    this._setDisableButton(".skipBtn", isDisable)
  }

  _setHiddenButton(buttonSelector, isHidden){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    if (isHidden){
      $(this.dialog.find(buttonSelector)).css("display", "none");
    } else {
      $(this.dialog.find(buttonSelector)).css("display", "hidden");
    }
  }

  setHiddenBackButton(isHidden){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    this._setHiddenButton(".backBtn", isHidden);
  }

  setHiddenNextButton(isHidden){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    this._setHiddenButton(".nextBtn", isHidden);
  }

  setHiddenSkipButton(isHidden){
    if (this.dialog === undefined) throw new Error("Dialog has not been render yet");
    this._setHiddenButton(".skipBtn", isHidden);
  }

}

export { WizardDialog }