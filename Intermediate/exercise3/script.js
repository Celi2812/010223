let fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
a = fruits.split("");
a[5] = " \n ";
a[14] = " \n ";
a[19] = " \n ";
a[26] = " \n ";
a[31] = " \n ";
a[37] = " \n ";
a[44] = " \n ";
b = a.join("");
let c = b.split("  ");

document.write(c);