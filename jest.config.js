const { readdirSync, statSync } = require('fs'); // Do NOT convert to an `import` statement for Wallaby.js to work!

const isDebugModeEnabled = false; // Use for checking if it does not takes too much time (important for unit testing)

function displayPerformance(callback, operationMessage = undefined) {
  const startTime = performance.now();
  const callbackResult = callback();
  const endTime = performance.now();

  console.log(
    `The operation${operationMessage ? ` (${operationMessage}) ` : ' '}took ${
      endTime - startTime
    } milliseconds`,
  );

  return callbackResult;
}

function findJestConfigFiles() {
  const moduleDirectories = readdirSync('./modules');
  const possibleExtensions = ['js', 'ts', 'json', 'mjs', 'cjs'];

  return moduleDirectories
    .map((moduleDirectory) => {
      const possibleFilePaths = possibleExtensions.map(
        (extension) => `./modules/${moduleDirectory}/jest.config.${extension}`,
      );
      const foundFilePath = (function statPossibleFilePaths() {
        for (const filePath of possibleFilePaths) {
          try {
            statSync(filePath);
            return filePath;
          } catch (e) {}
        }
      })();
      return foundFilePath;
    })
    .filter((foundFilesPath) => !!foundFilesPath);
}

const projects = isDebugModeEnabled
  ? displayPerformance(findJestConfigFiles, 'finding Jest config files')
  : findJestConfigFiles();

module.exports = { projects };
