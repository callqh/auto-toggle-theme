import * as vscode from "vscode";

const createStatusBarItem = (
  aligment: vscode.StatusBarAlignment = 2,
  flag: boolean | undefined
) => {
  const item = vscode.window.createStatusBarItem(aligment);
  item.text = flag ? "关闭" : "开启";
  item.command = flag ? "auto-toggle-theme.off" : "auto-toggle-theme.on";
  item.show();
  return item;
};
// 当插件被激活的时候会调用这个方法
export function activate(context: vscode.ExtensionContext) {
  const flag = vscode.workspace.getConfiguration("auto-toggle-theme");

  // 设置底部状态栏
  let item = createStatusBarItem(2, flag.get("status"));

  console.log();
  // 我们在这里需要注册一个该命令的监听事件
  let on = vscode.commands.registerCommand("auto-toggle-theme.on", () => {
    flag.update("status", true).then(() => {
      item.dispose();
      item = createStatusBarItem(2, flag.get("status"));
    });
  });
  let off = vscode.commands.registerCommand("auto-toggle-theme.off", () => {
    flag.update("status", false).then(() => {
      item.dispose();
      item = createStatusBarItem(2, flag.get("status"));
    });
  });
  // 存放注册的命令，这个数组中的事件，在插件被释放时也会被处理
  context.subscriptions.push(on);
}

/**
 * 插件被释放时执行
 */
export function deactivate() {
  console.log("插件已经释放");
}
