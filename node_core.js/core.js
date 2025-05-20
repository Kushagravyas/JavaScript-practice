
// | Module   | Use Case                       |
// | -------- | ------------------------------ |
// | `fs`     | File system (read/write files) |
// | `http`   | Create web servers             |
// | `os`     | Get OS-level info              |
// | `path`   | Work with file paths           |
// | `events` | Handle custom events           |

// const add = require('./math');

//   console.log(add(5,10));

const {add , sub , mult , div} = require('./math');

console.log(add(5 , 10));

console.log(sub(50 , 10));

console.log(mult(5 , 10));

console.log(div(50 , 10));


