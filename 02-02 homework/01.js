// <!-- 求1! + 2! + 3! + 4! + …… + n!的和 -->
var n = parseInt(prompt('请输入任意数字的阶乘'));

var sum = 0;
var sum2 = 1;
for (var i = 1; i <= n; i++) {
  sum2 = sum2 * i;
  sum = sum + sum2;
}
alert(sum);
