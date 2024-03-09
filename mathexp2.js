document.write('<center><h1 style="font-size: 50px; font-family: arial;">School Total Marks Obtained Marks Percentage</h1></center>');
var eng = 'English';
var math = 'Math';
var urdu = 'Urdu';

var engTotalMarks = 100;
var mathTotalMarks = 100;
var urduTotalMarks = 100;

var engObtMarks = +prompt("Enter you English Marks");
var mathObtMarks = +prompt("Enter you Math Marks");
var urduObtMarks = +prompt("Enter you Urdu Marks");

var engPercent = engObtMarks % engTotalMarks + '%';
var mathPercent = mathObtMarks % mathTotalMarks + '%';
var urduPercent = urduObtMarks % urduTotalMarks + '%';

document.write(`<center><table cellpadding="5px" style="text-align: center; padding: 30px; background: #000; color: #fff; font-size: 30px; font-family: arial;" cellspacing="10px">
    <tr style="background: #fff; color: #000;"><th>SUBJECT</th><th>TOTAL MARKS</th><th>OBTAINED MARKS</th><th>PERCENTAGE</th></tr>
    <tr><td>${eng}</td><td>${engTotalMarks}</td><td>${engObtMarks}</td><td>${engPercent}</td></tr>
    <tr><td>${math}</td><td>${mathTotalMarks}</td><td>${mathObtMarks}</td><td>${mathPercent}</td></tr>
    <tr><td>${urdu}</td><td>${urduTotalMarks}</td><td>${urduObtMarks}</td><td>${urduPercent}</td></tr>
</table></center>`)