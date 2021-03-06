const { events } = require('./data.json');

export default function hanlder(req, res) {
    const event = events.filter(event => event.slug === req.query.slug)

    if (req.method === 'GET') {
        res.status(200).json({ event })
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({
            error: `Methods ${req.method} not allowed`
        })
    }
}
