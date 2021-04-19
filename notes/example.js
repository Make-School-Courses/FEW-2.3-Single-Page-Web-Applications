


// class Promise {
// 	then() {}
// }

// const p1 = { then: function() {} }
// const p2 = new Promise()
// const p3 = new Promise()

// p1.then()
// p2.then()
// p3.then()









const p = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve('>>> Success! <<<');
    // reject('--- Oops ---');
  }, 4000);

});

p.then( (message) => {
  console.log('Promise resolved successfully!');
  console.log(message);
} ).catch( (err) => {
  console.log('Promise rejected');
  console.log(err);
} );














