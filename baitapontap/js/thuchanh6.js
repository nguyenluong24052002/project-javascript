const H = 20;
for (let i = 1; i <= H; i++) {
    for (let k = H; k > i; k--) {
        document.write ("&nbsp;&nbsp");
    }
    for(let j = 1; j <= i * 2 - 1; j++) {
        if (i == 1 || i == H || j == 1 || j == i * 2 -1) {
            document.write ("*");
        }else {
            document.write ("&nbsp;&nbsp");
        }

    }
    document.write ("<br/>");
}
