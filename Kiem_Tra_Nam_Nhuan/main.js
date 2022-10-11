// nhập dữ liệu từ ban phím
let year = parseInt(prompt("Enter a year"));
// phân loại và hiển thị kết quả
if ((year % 4 == 0 && !(year % 100 == 0)) || (year % 100 == 0 && year % 400 == 0)) {
    alert(year + " is a leap year")
} else {
    alert(year + " is NOT a leap year")
}