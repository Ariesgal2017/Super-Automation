class GenericDialog {
  constructor({
                id = "",
                html = null,
                buttons = [],
                message = "",
                title = "",
                width = 500,
                height = 500,
              }) {
    this.buttons = buttons;
    this.message = message;
    this.title = title;
    this.id = id;
    this.html = this._generateHTML(html);
    this.height = height;
    this.width = width;
    this.dialog = null;
  }

  _generateHTML(html) {
    if (html !== null) {
      return html;
    }

    let buttonsHTML = "";
    for (const button of this.buttons) {
      buttonsHTML += `<button ${button?.id ? `id=${button.id}` : ""}>${button.text}</button>`;
    }

    return `<div class="header">
        <div class="title">${this.title}</div>
         <button class="dialog-close">
              <img src="/katalon/images/SVG/close-icon.svg" alt="Close"/>
          </button>
    </div>
    <div class="content">
        <div class="message">
            ${this.message}
        </div>
    </div>
    <div class="footer">
        ${buttonsHTML}
    </div>`
  }

  async render() {
    const self = this;
    this.dialog = $(`<div id=${this.id}></div>`)
      .html(this.html)
      .dialog({
        autoOpen: true,
        dialogClass: 'newStyleDialog',
        resizable: true,
        height: `${this.height}`,
        width: `${this.width}`,
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

    $(this.dialog).find(".dialog-close").click(()=>{
      this.close();
    })
  }

  async close(){
    this.dialog.find("div.ui-dialog-content").dialog('destroy').remove()
  }

}

export { GenericDialog }