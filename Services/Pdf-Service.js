import fs from "fs";
import PDFDocument from "pdfkit";

export const buildPDF = (dataCallback, endCallback) => {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.fontSize(25).text("Say No To A Racism");
  doc.end();
};
