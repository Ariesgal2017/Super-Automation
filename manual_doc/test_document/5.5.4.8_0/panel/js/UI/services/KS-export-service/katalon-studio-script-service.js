const loadKatalonStudioScripts = async () => {
  return new Promise(resolve => {
    const scriptNames = [
      'js/katalon/selenium-ide/formatCommandOnlyAdapter.js',
      'js/katalon/selenium-ide/remoteControl.js',
      "js/katalon/selenium-ide/format/java/java-rc.js",
      "js/katalon/selenium-ide/format/java/java-rc-junit4.js",
      "js/katalon/selenium-ide/format/java/java-rc-testng.js",
      "js/katalon/selenium-ide/format/java/java-backed-junit4.js",
      "js/katalon/selenium-ide/format/katalon/katalon.js"
    ];
    $("[id^=formatter-script-language-id-]").remove();
    let j = 0;
    for (let i = 0; i < scriptNames.length; i++) {
      const script = document.createElement('script');
      script.id = "formatter-script-language-id-katalon-" + i;
      script.src = scriptNames[i];
      script.async = false; // This is required for synchronous execution
      script.onload = function () {
        j++;
      }
      document.head.appendChild(script);
    }
    let interval = setInterval(
      function () {
        if (j === scriptNames.length) {
          clearInterval(interval);
          resolve();
        }
      },
      100
    );
  });
}

const unloadKatalonStudioScripts = async () => {
  $("[id^=formatter-script-language-id-]").remove();
  const script = document.createElement('script');
  script.id = "formatter-script-language-id-katalon";
  script.src = 'js/background/formatCommand.js';
  script.async = false; // This is required for synchronous execution
  document.head.appendChild(script);
}

export { loadKatalonStudioScripts, unloadKatalonStudioScripts }