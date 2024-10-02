import axios from 'axios';

export default async function handler(req, res) {
  const { placeId } = req.query; // Pass the placeId through the query parameter
  const apiKey = process.env.GOOGLE_PLACES_API_KEY; // Store your API key in an environment variable

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );

    const reviews = response.data.result.reviews;
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
