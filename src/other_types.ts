export function ternary(a: number) {
  a = a <= 0 ? -a : a;
  console.log("ternary", a);
  return a;
}

export function defaultArg(a: number = 3) {
  return ternary(a);
}

export function binaryExp(a: number) {
	return a > 3 && ternary(a)
}

export function complexBinaryExp(a: number) {
	return a > 3 && a < 10 && ternary(a)
}

export function nestBinaryExp(a: number) {
	return a > 3 && (a < 10 && ternary(a))
}
