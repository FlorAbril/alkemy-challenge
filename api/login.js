import axios from "axios";

export default async function handler(req, res) {
  const { email, password } = req.body;
  try {
    const response = await axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
		res.status(200).json(response.data);
  } catch (e) {
    res.status(400).json(e.response.data);
  }
}
