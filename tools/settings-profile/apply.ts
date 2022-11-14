import { copyFile } from 'fs/promises';

async function execute(profileName: string = 'default') {
  const sourcePath = makeSettingsPath(profileName);
  const targetPath = makeSettingsPath();

  await copyFile(sourcePath, targetPath);

  console.info(`Copied the file "${sourcePath}" into the path "${targetPath}"`);
  console.log(`Successfully applied VSCode settings for the profile "${profileName}"`);
}

function executeHelp() {
  console.log('Usage: settings_profile apply [PROFILE_NAME]');
}

function makeSettingsPath(profileName?: string | undefined) {
  return profileName !== undefined
    ? `./.vscode/settings.${profileName}.json`
    : `./.vscode/settings.json`;
}

export const applyApi = {
  execute,
  executeHelp,
};
