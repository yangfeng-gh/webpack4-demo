import { cube } from './math';

function component() {
  let element = document.createElement('pre');
  element.innerHTML = ['hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');
  return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // 点击按钮，控制台仍在打印旧的 printMe 函数。因为按钮的 onclick 事件处理函数仍然绑定在旧的 printMe 函数上.
    // 为了让 HMR 正常工作，我们需要更新代码，使用 module.hot.accept 将其绑定到新的 printMe 函数上
    // printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}
