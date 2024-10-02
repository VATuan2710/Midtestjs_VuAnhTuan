function highlightKeyword(content, keyword) {
  const upperKey = keyword.toUpperCase();
  const solve = content
    .replace(`${keyword}`, `<strong>${keyword}</strong`)
    .replace(`${upperKey}`, `<strong>${upperKey}</strong`);
  console.log(solve);
}

highlightKeyword(
  "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?",
  "thú vị"
);
