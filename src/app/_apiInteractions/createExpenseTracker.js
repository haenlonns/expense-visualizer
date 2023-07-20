const { google } = require("googleapis");
const authorize = require("./authorize");
const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");

async function createSpreadsheet(authClient) {
  const service = google.sheets({ version: "v4", auth: authClient });
  const resource = {
    properties: {
      title: "Expense Visualizer",
    },
  };

  try {
    const spreadsheet = await service.spreadsheets.create({
      resource,
      fields: "spreadsheetId",
    });
    console.log(`Spreadsheet ID: ${spreadsheet.data.spreadsheetId}`);
    return spreadsheet.data.spreadsheetId;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}

/**
 * Initializes a copy of the expense spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1maoXaJCKHVsMrNiQNJNtHK5OIYcuswgxmiqPSQWLe-k/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 * @return {string} Created spreadsheets ID
 */
async function createExpenseTracker() {
  const authClient = await authorize();
  const service = google.sheets({ version: "v4", auth: authClient });
  const destinationSpreadsheetId = await createSpreadsheet(authClient);

  const resource = {
    destinationSpreadsheetId,
  };

  const request = {
    spreadsheetId: "1maoXaJCKHVsMrNiQNJNtHK5OIYcuswgxmiqPSQWLe-k",
    sheetId: 0,
    resource,
  };

  try {
    const response = (await service.spreadsheets.sheets.copyTo(request)).data;
    // TODO: Change code below to process the `response` object:
    return destinationSpreadsheetId;
  } catch (err) {
    console.error(err);
  }
}

module.exports = createExpenseTracker;
