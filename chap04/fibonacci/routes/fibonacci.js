var math = require('../math');
exports.index = function(request, response) {
  if (request.query.fibonum) {
    response.render('fibonacci', {
      title: "Calculate Fibonacci numbers",
      fibonum: request.query.fibonum,
      fiboval: math.fibonacci(request.query.fibonum)
    });
  } else {
    response.render('fibonacci', {
      title: "Calculate Fibonacci numbers",
      fiboval: undefined
    });
  }
};