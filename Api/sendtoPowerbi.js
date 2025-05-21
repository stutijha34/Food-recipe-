export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const orderData = req.body;

  const powerBiUrl = process.env.POWERBI_STREAM_URL;

  try {
    const response = await fetch(powerBiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([orderData])  // Power BI expects an array
    });

    if (!response.ok) {
      throw new Error(`Power BI error: ${response.statusText}`);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Push failed:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
