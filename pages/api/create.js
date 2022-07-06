import axios from "axios";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const reply = await axios.post(`${process.env.BACKEND_PROTO}://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/url`, {
                url: req.body.url
            });

            res.status(200).json(reply.data);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json(null);
    }
}

export default handler;
