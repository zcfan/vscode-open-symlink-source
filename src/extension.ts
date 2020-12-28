import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "openSymlinkSource" is now active!');

	let disposable = vscode.commands.registerCommand('open-symlink-source.openSymlinkSource', () => {
		var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.fileName || '';
		fs.realpath(currentlyOpenTabfilePath, undefined, (err, resolvedPath) => {
			if (err) { throw err; };
			vscode.window.showInformationMessage(resolvedPath);
			let uri = vscode.Uri.file(resolvedPath);
			vscode.commands.executeCommand('vscode.open', uri);
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
