import _ from 'lodash';
import './assets/css/style.css';
import logo from './assets/imgs/logo.png';
import Data from './assets/xml/data.xml';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的div中。
  let myLogo = new Image();
  myLogo.src = logo;
  element.appendChild(myLogo);

  let iElem = document.createElement('i');
  iElem.innerHTML = '&#xe60f;';
  iElem.classList.add('iconfont');
  element.appendChild(iElem);

  let btn = document.createElement('button');
  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;
  element.appendChild(btn);

  console.log(Data);

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
