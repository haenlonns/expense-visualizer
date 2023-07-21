import { google } from "googleapis";
import authorize from "./authorize.js";
//async function pullExpenses(authClient, spreadsheetId) {
async function pullExpenses() {

  const authClient = await authorize();

  const sheets = google.sheets({ version: "v4", auth: authClient });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: "1maoXaJCKHVsMrNiQNJNtHK5OIYcuswgxmiqPSQWLe-k",
    range: "Expense Tracker!A2:H",
  });
  const rows = res.data.values;
  console.log(rows)
  rows.forEach((row) => {
    // Print columns A and E, which correspond to indices 0 and 4.
    console.log(`${row[2]}, ${row[4]}`);
  });
  return rows;
}

export default pullExpenses;
