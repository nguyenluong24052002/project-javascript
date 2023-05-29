let start = 100;
while (start >=1) {
    if (start % 2 == 0) {
        document.write(`<font color="red">${start}</br></font>`)
    }
    if (start % 2 != 0) {
        document.write(`<font color="green">${start}</br></font>`)
    }
    start--;
}