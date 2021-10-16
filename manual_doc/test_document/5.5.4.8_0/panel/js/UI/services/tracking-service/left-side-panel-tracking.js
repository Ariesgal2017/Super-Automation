function isObjectEmpty(obj) {
  return obj &&
    Object.keys(obj).length === 0 &&
    obj.constructor === Object
}

const getTrackingLeftSidePanelData = async () => {
  let data = await browser.storage.local.get("leftSidePanelTracking");
  if (isObjectEmpty(data)) {
    data = {
      saveTestCaseNum: 0
    }
    await browser.storage.local.set({
      "leftSidePanelTracking": {
        saveTestCaseNum: 0
      }
    });
    return data;
  }
  return data.leftSidePanelTracking;
}

async function trackingSaveTestCase() {
  const trackingData = await getTrackingLeftSidePanelData();
  trackingData.saveTestCaseNum += 1;
  await browser.storage.local.set({ "leftSidePanelTracking" : trackingData });
}

const setTrackingLeftSidePanelData = async (type, value) => {
  switch (type) {
    case "saveTestCase":
      await trackingSaveTestCase();
      break;
    default:
      throw `${type} is not supported`
  }
}

export { setTrackingLeftSidePanelData, getTrackingLeftSidePanelData }