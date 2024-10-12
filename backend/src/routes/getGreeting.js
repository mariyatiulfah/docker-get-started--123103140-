const GREETING = 'ASSALAMU'ALAIKUM UKHTI';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
