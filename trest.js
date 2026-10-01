function slots(q, m1, m2, m3) {
  let x = 0;
  while (q > 0) {
    q -= 1;
    m1 += 1;
    x += 1;
    if (m1 === 35) {
      q -= 30;
      m1 = 0;
    }
    if (q > 0) {
      q -= 1;
      m2 += 1;
      x += 1;
      if (m2 === 100) {
        q += 60;
        m2 += 0;
      }
    }
    if (q > 0) {
      q -= 1;
      m3 += 1;
      x += 1;
      if (m3 === 10) {
        q += 9;
        m3 = 0;
      }
    }
  }
  return x
}
console.log("Martha plays ",slots(48, 3, 10, 4)," times ");
