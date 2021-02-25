import * as vscode from 'vscode';

// 当插件被激活的时候会调用这个方法
export function activate(context: vscode.ExtensionContext) {
  console.log('插件被激活');

  // 这个命令在package.json文件中已经注册了
  // 我们在这里需要注册一个该命令的监听事件
  let disposable = vscode.commands.registerCommand('auto-toggle-theme.helloWorld', () => {
    // 当命令被执行的时候，这里的代码就会被执行

    // 向用户展示一个信息框
    vscode.window.showInformationMessage('Yep！成功啦!哈哈哈哈哈能监听到修改吗');
  });

  context.subscriptions.push(disposable);
}

/**
 * 插件被释放时执行
 */
export function deactivate() {
  console.log('插件已经释放');
}
