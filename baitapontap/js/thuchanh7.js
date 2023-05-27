const phicodinh = 25000;
let phutgoi = 40;
if (phutgoi > 200){
    document.write (`phi phai tra là: ${(phutgoi - 200) * 200 + 150 * 400 + 50 * 600}`)
}else if (phutgoi > 150 && phutgoi<200) {
    document.write (`phi phai tra là: ${phutgoi * 400 + 50 * 600}`)
}else if (phutgoi > 50 && phutgoi<150) {
    document.write (`phi phai tra là: ${phutgoi * 600}`)
}else {
    document.write (`phi phai tra là: ${phicodinh}`)
}
