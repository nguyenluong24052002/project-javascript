document.write('<table border="1" width="800" cellspacing="0" cellpadding="0">')
        
for (let i = 1; i <= 10; i++) {
    document.write('<tr>')

    for (let y = 2; y <= 10; y++) {
        document.write('<td>')
        document.write(`${y} x ${i} = ${i * y}`)
        document.write('</td>')
    }

    document.write('</tr>')
}

document.write('</table>')
 