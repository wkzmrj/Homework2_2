// 设置阶乘函数
var n = parseInt(prompt('请输入任意数字'))；

function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= 1;
  }
  return result;
}

// 输出100~999的所有喇叭花数
for (i = 100; i <= 999; i++) {
  var i_str = i.toString();
  var a = Number(i_str[0]);
  var b = Number(i_str[1]);
  var c = Number(i_str[2]);
  if (factorial(1) + factorial(b) + factorial(c) == i ) {
    console.log(i);
  }
}
