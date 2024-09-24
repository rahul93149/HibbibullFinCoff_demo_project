import { google } from 'googleapis';

export async function getSheet() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n');
  
  // Log private key to check formatting (for debugging)
  console.log(privateKey);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const sheets = await getSheet();

      const result = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: 'NewsLetters!A1', // Adjust this range accordingly
        valueInputOption: 'RAW',
        resource: {
          values: [
            [req.body.name, req.body.email, req.body.message], // Example data
          ],
        },
      });

      res.status(200).json({ data: result.data });
    } catch (error) {
      console.error('Error interacting with Google Sheets:', error);
      res.status(500).json({ error: 'Failed to add data to the sheet.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
