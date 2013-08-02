function A() {
    console.log('A constructor');
}

A.prototype.a = function() {
  return 'a.a method';
};

A.a = function() {
  console.log('A.a static method');
};

function B() {
    console.log('B constructor');
}

B.prototype = Object.create(A.prototype);

B.prototype.constructor = B;

B.prototype.b = function() {
    return 'b.b method';
};

console.log(B);

var b = new B;

console.log('b instanceof A', b instanceof A);
console.log('b instanceof B', b instanceof B);
console.log('xxx', b.a());
console.log('xxx', b.b());