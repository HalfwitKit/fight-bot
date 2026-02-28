const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Capitalize usernames nicely (first letter uppercase, rest lowercase)
function formatUsername(name) {
    if (!name) return '';
    // Remove leading @ and any .message
    name = name.replace(/^@/, '').replace(/\.message$/, '');
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

app.get('/fight', (req, res) => {
    let sender = formatUsername(req.query.sender);
    let user = formatUsername(req.query.user);

    if (!sender || !user) return res.status(400).send('Missing sender or user');

    const outcomes = [
        `${sender} won by landing a surprise uppercut that sent ${user} into next week.`,
        `${user} won by landing a surprise uppercut that sent ${sender} into next week.`,
        `${sender} won after dodging everything and finishing with a dramatic spinning kick.`,
        `${user} won after dodging everything and finishing with a dramatic spinning kick.`,
        `${sender} won by distracting ${user} and hitting them with the ultimate combo attack.`,
        `${user} won by distracting ${sender} and hitting them with the ultimate combo attack.`,
        `${sender} won by summoning pure gamer rage and unleashing a one-hit KO.`,
        `${user} won by summoning pure gamer rage and unleashing a one-hit KO.`,
        `${sender} won after ${user} tripped over absolutely nothing.`,
        `${user} won after ${sender} tripped over absolutely nothing.`,
        `${sender} won by throwing pocket sand and going for the finishing move.`,
        `${user} won by throwing pocket sand and going for the finishing move.`,
        `${sender} won in a slap fight that escalated way too quickly.`,
        `${user} won in a slap fight that escalated way too quickly.`,
        `${sender} won by critical hit! It was super effective.`,
        `${user} won by critical hit! It was super effective.`,
        `${sender} won after their opponent forfeited mid-fight to grab snacks.`,
        `${user} won after ${sender} forfeited mid-fight to grab snacks.`,
        `${sender} won by accidentally summoning a squirrel army that overwhelmed ${user}.`,
        `${user} won by accidentally summoning a squirrel army that overwhelmed ${sender}.`,
        `${sender} won after tripping ${user} with an invisible banana peel.`,
        `${user} won after tripping ${sender} with an invisible banana peel.`,
        `${sender} won by yelling so loud it caused ${user}s eardrums to surrender.`,
        `${user} won by yelling so loud it caused ${sender}s eardrums to surrender.`,
        `${sender} won after using a secret technique called “Dance Like Nobodys Watching.”`,
        `${user} won after using a secret technique called “Dance Like Nobodys Watching.”`,
        `${sender} won by confusing ${user} with an elaborate puppet show mid-fight.`,
        `${user} won by confusing ${sender} with an elaborate puppet show mid-fight.`,
        `${sender} lost after slipping on ${user}s own confidence.`,
        `${user} lost after slipping on ${sender}s own confidence.`,
        `${sender} won by throwing a random household object with pinpoint accuracy.`,
        `${user} won by throwing a random household object with pinpoint accuracy.`,
        `${sender} won by using the ultimate “procrastination” move: they did absolutely nothing until ${user} gave up.`,
        `${user} won by using the ultimate “procrastination” move: they did absolutely nothing until ${sender} gave up.`,
        `${sender} won by charming ${user} with compliments until they could not fight anymore.`,
        `${user} won by charming ${sender} with compliments until they could not fight anymore.`
    ];

    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const message = `${sender} challenges ${user} to a fight. ${outcomes[randomIndex]}`;

    // Send plain text for StreamElements chat
    res.type('text/plain').send(message);
});

app.listen(port, () => {
    console.log(`Fight API running at http://localhost:${port}`);
});