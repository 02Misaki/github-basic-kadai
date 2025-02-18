function getRandomPositiveInteger(max) {
  // maxが1未満の場合は例外を投げる
  if (max < 1) {
    throw new Error("最大値は1以上でなければなりません。");
  }

  // Math.random()は0以上1未満の浮動小数点数を返すので、
  // 1以上max以下の整数を作成するための計算を行う
  return Math.floor(Math.random() * max) + 1;
}

// 使用例
console.log(getRandomPositiveInteger(10)); // 1から10までのランダムな整数が出力されます
console.log(getRandomPositiveInteger(100)); // 1から100までのランダムな整数が出力されます