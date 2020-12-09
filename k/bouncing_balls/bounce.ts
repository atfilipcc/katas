export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= window || h <= 0 || bounce <= 0 || bounce >= 1) return -1;
  let bounces = 0;
  let height = h;
    while (height > window) {
      bounces++;
      height = height * bounce;
      if (height > window) bounces++
    }
    return bounces;
  }


console.log(bouncingBall(3.0, 0.66, 1.5))
console.log(bouncingBall(30.0, 0.66, 1.5))
console.log(bouncingBall(30, 0.75, 1.5))
console.log(bouncingBall(300000000000000000000000000000000000000000000000000000000, 0.25, 150))
console.log(bouncingBall(4, 0.25, 1))
console.log(bouncingBall(40, 1, 10))
