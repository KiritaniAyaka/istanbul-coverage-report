export default function (a: boolean) {

  fn();

  if (a) {

    console.log("1");

  } else {

    console.log("2");

  }

  fn();

  return a;
}

function fn() {
  console.log(123);
}
