

module.exports = {
    createRobot: async (req, res) => {
        const db = req.app.get('db')
        const { uniqueNamesGenerator, adjectives, animals } = require('unique-names-generator');

        const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, animals] }); // big_donkey

        const shortName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals],
            length: 2
        });
        const type = 'fighter'
        const [robot] = await db.create_robot(randomName, type,)
        return res.status(200).send(robot)
    },
    readRobots: async (req, res) => {
        const db = req.app.get('db')
        const robots = await db.get_robots()
        res.status(200).send({ robots })
    }

}