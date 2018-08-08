// must use EACMScript 6
import _ from 'lodash';
import './style.css'; // 导入 style.css
import Icon from './icon.png';

function component () {

  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.classList.add('hello'); // 添加 style.css 中的 hello 样式；

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
