import { watch, copyFileSync } from "fs";
import path from "path";

const pluginFolder = path.resolve(
	"../Playground/.obsidian/plugins/canvas-element-link"
);
const vaultPaths = {
	mainjs: path.join(pluginFolder, "main.js"),
	styles: path.join(pluginFolder, "styles.css"),
	manifest: path.join(pluginFolder, "manifest.json"),
};

watch("main.js", (changeType, fileName) => {
	copyFileSync(fileName, vaultPaths.mainjs);
});
watch("styles.css", (changeType, fileName) => {
	copyFileSync(fileName, vaultPaths.styles);
});
watch("manifest.json", (changeType, fileName) => {
	copyFileSync(fileName, vaultPaths.manifest);
});
