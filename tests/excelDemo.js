const ExcelJs = require('exceljs');
//const { test, expect } = require('@playwright/test');
 
async function excelTest() {  
    let output = {row: -1, col: -1} ;
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/wasee/Desktop/test1.xlsx")
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => 
        {
        row.eachCell((cell, colNumber) => 
            {{
            if (cell.value === "Mango") {
                output.row = rowNumber;
                output.col = colNumber;
                console.log(`Row ${rowNumber}, Column ${colNumber}: ${cell.value}`);
            }   
        }})
    });
    
const cellAddress = worksheet.getCell(output.row,output.col);
//console.log(cellAddress);
cellAddress.value = "Kiwi";
await workbook.xlsx.writeFile("C:/Users/wasee/Desktop/test1.xlsx");

}

excelTest();
