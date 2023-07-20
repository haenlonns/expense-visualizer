const { google } = require("googleapis");
const authorize = require("./authorize");

async function pullExpenses(authClient, spreadsheetId) {


    const sheets = google.sheets({ version: "v4", auth: authClient });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Expense Tracker!A2:H",
    });
    const rows = res.data.values;
    rows.forEach((row) => {
      // Print columns A and E, which correspond to indices 0 and 4.
      console.log(`${row[2]}, ${row[4]}`);
    });
    return rows;
  }

module.exports = pullExpenses;