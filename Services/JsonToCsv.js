import converter from "json-2-csv";
//import { json2csv } from "json-2-csv";

function JsonToCsv() {
  const csv = converter.json2csv(users);
  console.log(csv);
}
