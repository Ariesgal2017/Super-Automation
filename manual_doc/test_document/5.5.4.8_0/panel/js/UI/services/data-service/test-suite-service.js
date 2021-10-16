import { TestSuite } from "../../models/test-model/test-suite.js";


/**
 * delete all TestSuite in in-memory data object and return the deleted TestCase object
 */
function deleteAllTestSuite(){
    return KRData.removeAllTestSuites();
}

/**
 * delete TestSuite in in-memory data object and return the deleted TestCase object
 * @param {string} testSuiteID - TestSuite's id
 * @returns {TestSuite} - delete TestCase object
 */
function deleteTestSuite(testSuiteID) {
    if (testSuiteID === undefined || testSuiteID === null) {
        throw "Null or undefined testSuiteID"
    }
    return KRData.removeTestSuite(testSuiteID);

}

/**
 * create a new TestSuite object and save it into in-memory data object
 * @param {string} title - TestSuite's name
 * @returns {TestSuite}
 */
const createTestSuite = (title = "Untitled Test Suite") => {
    title = title !== null ? title : "Untitled Test Suite";
    const testSuite = new TestSuite(title);
    KRData.testSuites.push(testSuite);
    return testSuite;
}


/**
 * add new TestSuite object to in-memory data object
 * @param {TestSuite} testSuite
 * @returns {string} sideex-id go with that TestSuite
 */
const addTestSuite = (testSuite) => {
    if (testSuite === undefined || testSuite === null) {
        throw "Null or undefined test suite";
    }
    KRData.testSuites.push(testSuite);
}

const getTestSuiteCount = () => {
    return KRData.getTestSuiteCount();
}

const getTextSuiteByIndex = (index) => {
    return KRData.testSuites[index];
}

const findTestSuiteById = (testSuiteID) => {
    return KRData.testSuites.find(testSuite => testSuite.id === testSuiteID);
}

const getAllTestSuites = () => {
    return KRData.testSuites;
}

const findTestSuiteIndexByID = (testSuiteID) => {
    return KRData.testSuites.findIndex(testSuite => testSuite.id === testSuiteID);
}

const insertNewTestSuiteAtIndex = (index, testSuite) => {
    KRData.testSuites.splice(index, 0, testSuite);
}

export {
    createTestSuite,
    deleteTestSuite,
    addTestSuite,
    getTestSuiteCount,
    getTextSuiteByIndex,
    findTestSuiteById,
    getAllTestSuites,
    findTestSuiteIndexByID,
    insertNewTestSuiteAtIndex,
    deleteAllTestSuite
}