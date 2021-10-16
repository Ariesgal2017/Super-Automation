const checkAndDisplayUnsupportedCommandsWarning = async (userChoice) => {
  const numOfUnsupportedTestCases = await userChoice.getNumUnsupportedTestCase();
  const message = `${numOfUnsupportedTestCases} selected Test Case contain incompatible commands`
  if (numOfUnsupportedTestCases > 0) {
    $("#export-to-KS-warning").css("display", "flex").find("span").html(message);
  } else {
    $("#export-to-KS-warning").css("display", "none");
  }
}

export { checkAndDisplayUnsupportedCommandsWarning }