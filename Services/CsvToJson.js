import parse from "csv-parse";
import fs from "fs";
function CsvToJson() {
  const parser = parse({ columns: true }, (error, record) => {
    console.log(record);
  });
  fs.createReadStream("./sample.csv").pipe(parser);
}
