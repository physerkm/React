"use strict";

function addTwoNumbers(a, b) {
  // DON'T DO THIS
  a = 42;
  return a + b;
}

console.log(addTwoNumbers(1, 2));

function Navbar(props) {
  // DON'T DO THIS
  props.logoIcon = "some-other-icon.png";
}

<Navbar logoIcon="spatula.png" />;

/*

Props refers to the properties being passed into a component in order for it to work correctly,
similar to how a function receives parameters: "from above."
A component receiving "props" is not allowed to modify those props.
(i.e., they are "immutable".)

*/
