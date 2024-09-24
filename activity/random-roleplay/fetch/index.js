const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load the credentials
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SPREADSHEET_ID = '1gbNT6Ve6m_OJ77SRpfA211jmkHBUPwNLHfDvPNhCpu0'; // Your spreadsheet ID

const credentials = require(CREDENTIALS_PATH);
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Fetch data from Google Sheets
async function fetchSheetData() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'GMdash!A1:G32', // Adjust range to fetch the entire relevant sheet
  });
  return response.data.values || [];
}

// Save fetched data to CSV
async function saveToCSV(data) {
  const csvData = data.map(row => row.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, 'data.csv'), csvData);
}

// Parse CSV file and convert to JSON format
function parseCSVToJSON() {
  const csvFilePath = path.join(__dirname, 'data.csv');
  const players = [];
  const actions = [];

  // Read CSV file
  const csvData = fs.readFileSync(csvFilePath, 'utf-8').split('\n');

  // Parse player data
  const playerRows = csvData.slice(1, 7); // Grab rows for players
  for (let i = 0; i < 4; i++) {
    const playerColumns = playerRows.map(row => row.split(',')[i]);

    const player = {
      name: playerColumns[0] || '',
      health: parseInt(playerColumns[1], 10) || 0,
      currentAction: playerColumns[2] || '',
      actionTarget: playerColumns[3] || '',
      actionPoints: parseInt(playerColumns[4], 10) || 0,
      status: playerColumns[5] || '',
    };
    players.push(player);
  }

  // Parse actions data
  const actionRows = csvData.slice(1, 31); // Adjust to the correct range for actions
  actionRows.forEach(row => {
    const columns = row.split(',');
    if (columns[4] && columns[5] && columns[6]) { // Ensure no empty data
      actions.push({
        damage: columns[4] || '',
        player: columns[5] || '',
        action: columns[6] || '',
      });
    }
  });

  // Write JSON files
  fs.writeFileSync(path.join(__dirname, '../players.json'), JSON.stringify({ players }, null, 2));
  fs.writeFileSync(path.join(__dirname, '../actions.json'), JSON.stringify({ actions }, null, 2));
}

// Main function to update CSV and JSON files
async function updateCSVAndJSON() {
  try {
    const sheetData = await fetchSheetData();
    await saveToCSV(sheetData);
    parseCSVToJSON();
    console.log('CSV and JSON files updated successfully.');
  } catch (error) {
    console.error('Error updating files:', error);
  }
}

// Update files every second
setInterval(updateCSVAndJSON, 1000);

// Initial update
updateCSVAndJSON();