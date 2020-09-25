import math, { mul } from './math'; // export default 导出的不能用{ add } 来接收; export 必须需要用{}接收

import * as utils from './utils'; // export 必须需要用{}接收或者"* as urils"; 不能直接import utils from ...
// import { toLowerCase } from './utils';

const sayHello = () => {
  console.log('hello this is from bar....');
  console.log(math.add(50, 50));
  console.log(mul(9, 9));
  // eslint-disable-next-line
  console.log(utils.toLowerCase('HELLO CHINA'));
  // console.log(toLowerCase('HELLO WORLD'));
};

export default function bar() {
  sayHello();
}
