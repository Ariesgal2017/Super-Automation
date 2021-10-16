function mappingKRTestCommandsToScriptCommands(KRCommands){
  const ret = [];
  const regex = /^\${GlobalVariable\./g
  for (let index=0; index<KRCommands.length; index++) {
    let commandName = KRCommands[index].name;
    let commandTarget = KRCommands[index].defaultTarget;
    let commandValue = KRCommands[index].value;

    if (regex.test(commandTarget)){
      commandTarget = convertGlobalVariableToKSFormat(commandTarget);
    }
    if (regex.test(commandValue)){
      commandValue = convertGlobalVariableToKSFormat(commandValue);
    }
    ret.push(new Command(commandName, commandTarget, commandValue));
  }
  return ret;
}

const convertGlobalVariableToKSFormat = (value) => {
  return value.replace(/-/g, "_").replace(/ /g, '_');
}

function addGlobalVariable(KRTestCase){
  const regex = /^\${GlobalVariable\./g
  for (const command of KRTestCase.commands) {
    if (regex.test(command.defaultTarget)){
      const variable = convertGlobalVariableToKSFormat(command.defaultTarget.replace("${", "").replace("}",""));
      addDeclaredVar(variable);
    }
    if (regex.test(command.value)){
      const variable = convertGlobalVariableToKSFormat(command.value.replace("${", "").replace("}",""));
      addDeclaredVar(variable);
    }
  }

}

const generateKatalonStudioScript = async (KRTestCase) => {
  window.declaredVars = null;
  window.katalonStudioStoredVars = {};
  window.katalonStudioStoreCSVFile = {};

  addGlobalVariable(KRTestCase);
  const commands = mappingKRTestCommandsToScriptCommands(KRTestCase.commands);
  const scriptTestCase = new TestCase(KRTestCase.name);
  scriptTestCase.commands = commands;
  scriptTestCase.formatLocal(KRTestCase.name).header = "";
  scriptTestCase.formatLocal(KRTestCase.name).footer = "";
  const result = format(scriptTestCase, name);
  return result;
}

export { generateKatalonStudioScript, convertGlobalVariableToKSFormat }