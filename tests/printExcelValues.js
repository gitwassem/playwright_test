const ExcelJs = require('exceljs');
//const { test, expect } = require('@playwright/test');
 
async function excelPrint() {  
   
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:\\Users\\wasee\\Desktop\\test1.xlsx")
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => 
        {
        row.eachCell((cell, colNumber) => 
            {
                console.log(cell.value);
            })
        })
    }

excelPrint();
