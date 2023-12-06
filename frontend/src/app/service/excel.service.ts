import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() {}

  exportToExcel(data: any[], fileName: string, sheetName: string, dataHeader?: Array<string>): void {
    const headers = Object.keys(data[0]);

    const values = data.map((obj) => headers.map((key) => obj[key]));

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([headers, ...values]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
