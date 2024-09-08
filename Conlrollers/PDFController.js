import { buildPDF } from "../Services/Pdf-Service.js";

export const PDFController = async (req, res, next) => {
  try {
    const stream = res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment;filename=invoice.pdf",
    });
    buildPDF(
      (chunk) => stream.write(chunk),
      () => stream.end()
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
