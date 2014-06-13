var math = require('../math');
// console.log("init");
exports.index = function(request, response) {
  console.log(arguments);
  if (request.query.fibonum) {
    response.render('fibonacci', {
      title: "Calculate Fibonacci numbers",
      fibonum: request.query.fibonum,
      fiboval: math.fibonacci(request.query.fibonum)
    });
  } else {
    console.log("render");
    response.render('fibonacci', {
      title: "Calculate Fibonacci numbers",
      fiboval: undefined
    });
  }
  console.log("fin");
};