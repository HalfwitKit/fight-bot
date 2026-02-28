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

`${sender} won after ${user} forfeited mid-fight to grab snacks.`,
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

`${sender} won by throwing a random household object with pinpoint accuracy.`,
`${user} won by throwing a random household object with pinpoint accuracy.`,

`${sender} won by using the ultimate “procrastination” move: they did absolutely nothing until ${user} gave up.`,
`${user} won by using the ultimate “procrastination” move: they did absolutely nothing until ${sender} gave up.`,

`${sender} won by charming ${user} with compliments until they could not fight anymore.`,
`${user} won by charming ${sender} with compliments until they could not fight anymore.`,

`${sender} won after ${user} got distracted by their own dramatic backstory.`,
`${user} won after ${sender} got distracted by their own dramatic backstory.`,

`${sender} lost after challenging ${user} to a staring contest and blinking instantly.`,
`${user} lost after challenging ${sender} to a staring contest and blinking instantly.`,

`${sender} won by activating their secret move: aggressive jazz hands.`,
`${user} won by activating their secret move: aggressive jazz hands.`,

`${sender} lost when ${user} shouted “PLOT TWIST!” and rewrote the ending.`,
`${user} lost when ${sender} shouted “PLOT TWIST!” and rewrote the ending.`,

`${sender} won by summoning a swarm of mildly inconveniencing bees.`,
`${user} won by summoning a swarm of mildly inconveniencing bees.`,

`${sender} lost after ${user} used emotional damage.`,
`${user} lost after ${sender} used emotional damage.`,

`${sender} won by challenging ${user} to rock-paper-scissors and somehow picking “gun.”`,
`${user} won by challenging ${sender} to rock-paper-scissors and somehow picking “gun.”`,

`${sender} lost after pausing to explain their master plan in great detail to ${user}.`,
`${user} lost after pausing to explain their master plan in great detail to ${sender}.`,

`${sender} won by unleashing an interpretive dance battle that ${user} could not comprehend.`,
`${user} won by unleashing an interpretive dance battle that ${sender} could not comprehend.`,

`${sender} lost after ${user} hit them with a surprise math question.`,
`${user} lost after ${sender} hit them with a surprise math question.`,

`${sender} won by equipping legendary socks with +10 agility.`,
`${user} won by equipping legendary socks with +10 agility.`,

`${sender} won by yelling “FOR GLORY!” way louder than ${user}.`,
`${user} won by yelling “FOR GLORY!” way louder than ${sender}.`,

`${sender} won when ${user} accidentally muted themselves mid-battle.`,
`${user} won when ${sender} accidentally muted themselves mid-battle.`,

`${sender} lost after ${user} challenged them to a dance-off and hit the griddy.`,
`${user} lost after ${sender} challenged them to a dance-off and hit the griddy.`,

`${sender} won by deploying an army of rubber ducks.`,
`${user} won by deploying an army of rubber ducks.`,

`${sender} lost after ${user} countered with a perfectly timed dad joke.`,
`${user} lost after ${sender} countered with a perfectly timed dad joke.`,

`${sender} won after ${user} stopped to update their status mid-fight.`,
`${user} won after ${sender} stopped to update their status mid-fight.`,

`${sender} lost when ${user} pulled out a whiteboard and started explaining the rules.`,
`${user} lost when ${sender} pulled out a whiteboard and started explaining the rules.`,

`${sender} won by dramatically removing sunglasses that were not there.`,
`${user} won by dramatically removing sunglasses that were not there.`,

`${sender} lost after ${user} challenged them to “1v1 in the parking lot.”`,
`${user} lost after ${sender} challenged them to “1v1 in the parking lot.”`,

`${sender} won by pressing a big red button labeled “DO NOT PRESS.”`,
`${user} won by pressing a big red button labeled “DO NOT PRESS.”`,

`${sender} lost after ${user} used reverse psychology and it worked instantly.`,
`${user} lost after ${sender} used reverse psychology and it worked instantly.`,

`${sender} won by shouting “lag!” and freezing ${user} in place.`,
`${user} won by shouting “lag!” and freezing ${sender} in place.`,

`${sender} lost when ${user} summoned dramatic thunder sound effects.`,
`${user} lost when ${sender} summoned dramatic thunder sound effects.`,

`${sender} won after ${user} accepted a side quest mid-battle.`,
`${user} won after ${sender} accepted a side quest mid-battle.`,

`${sender} lost when ${user} pulled out the UNO reverse card.`,
`${user} lost when ${sender} pulled out the UNO reverse card.`,

`${sender} won by activating their ultimate ability: Main Character Energy.`,
`${user} won by activating their ultimate ability: Main Character Energy.`,

`${sender} lost after ${user} challenged them to a karaoke duel.`,
`${user} lost after ${sender} challenged them to a karaoke duel.`,

`${sender} won by confusing ${user} with overly detailed patch notes.`,
`${user} won by confusing ${sender} with overly detailed patch notes.`,

`${sender} lost when ${user} hit them with the “Are you sure?” prompt.`,
`${user} lost when ${sender} hit them with the “Are you sure?” prompt.`,

`${sender} won after ${user} rolled a natural 1.`,
`${user} won after ${sender} rolled a natural 1.`,

`${sender} lost when ${user} deployed the emergency snack stash.`,
`${user} lost when ${sender} deployed the emergency snack stash.`,

`${sender} won by speedrunning the entire fight.`,
`${user} won by speedrunning the entire fight.`,

`${sender} lost after ${user} paused the fight to read the terms and conditions.`,
`${user} lost after ${sender} paused the fight to read the terms and conditions.`,

`${sender} won by hitting ${user} with unexpected wholesome encouragement.`,
`${user} won by hitting ${sender} with unexpected wholesome encouragement.`,

`${sender} lost when ${user} activated cinematic slow motion.`,
`${user} lost when ${sender} activated cinematic slow motion.`,

`${sender} lost when ${user} blamed the fight on “stream delay.”`,
`${user} lost when ${sender} blamed the fight on “stream delay.”`,

`${sender} won by saying “Chat, watch this” and immediately proving ${user} wrong.`,
`${user} won by saying “Chat, watch this” and immediately proving ${sender} wrong.`,

`${sender} won when ${user} tabbed out to check Discord mid-battle.`,
`${user} won when ${sender} tabbed out to check Discord mid-battle.`,

`${sender} lost after ${user} accused them of getting carried by chat.`,
`${user} lost after ${sender} accused them of getting carried by chat.`,

`${sender} lost when ${user} said “skill issue” and refused to elaborate.`,
`${user} lost when ${sender} said “skill issue” and refused to elaborate.`,

`${sender} won after ${user} tried to adjust their mic settings mid-fight.`,
`${user} won after ${sender} tried to adjust their mic settings mid-fight.`,

`${sender} lost when ${user} turned on sub-only mode.`,
`${user} lost when ${sender} turned on sub-only mode.`,

`${sender} won by threatening to leak ${user}s old clips.`,
`${user} won by threatening to leak ${sender}s old clips.`,

`${sender} lost after ${user} said “clip that” and the pressure got to them.`,
`${user} lost after ${sender} said “clip that” and the pressure got to them.`,

`${sender} lost after ${user} asked chat to vote on the outcome.`,
`${user} lost after ${sender} asked chat to vote on the outcome.`,

`${sender} won by pretending the fight was scripted all along.`,
`${user} won by pretending the fight was scripted all along.`,

`${sender} won after ${user} accidentally showed their search history.`,
`${user} won after ${sender} accidentally showed their search history.`,

`${sender} lost when ${user} said “This is why youre hardstuck.”`,
`${user} lost when ${sender} said “This is why youre hardstuck.”`,

`${sender} won by pulling up the analytics mid-fight.`,
`${user} won by pulling up the analytics mid-fight.`,

`${sender} won after ${user} was suddenly challenged to a duel by a goose.`,
`${user} won after ${sender} was suddenly challenged to a duel by a goose.`,

`${sender} lost when ${user} opened a portal to a dimension made entirely of soup.`,
`${user} lost when ${sender} opened a portal to a dimension made entirely of soup.`,

`${sender} won by summoning a tax accountant at the worst possible moment.`,
`${user} won by summoning a tax accountant at the worst possible moment.`,

`${sender} lost after ${user} replaced the battlefield with a trampoline park.`,
`${user} lost after ${sender} replaced the battlefield with a trampoline park.`,

`${sender} won when ${user} was legally declared “too dramatic to continue.”`,
`${user} won when ${sender} was legally declared “too dramatic to continue.”`,

`${sender} lost after ${user} weaponized a kazoo solo.`,
`${user} lost after ${sender} weaponized a kazoo solo.`,

`${sender} won by transforming into a sentient loading screen.`,
`${user} won by transforming into a sentient loading screen.`,

`${sender} lost when ${user} activated microwave mode.`,
`${user} lost when ${sender} activated microwave mode.`,

`${sender} won after ${user} was abducted mid-fight by extremely polite aliens.`,
`${user} won after ${sender} was abducted mid-fight by extremely polite aliens.`,

`${sender} lost when ${user} revealed they were actually three raccoons in a hoodie.`,
`${user} lost when ${sender} revealed they were actually three raccoons in a hoodie.`,

`${sender} won after delivering a monologue so powerful that ${user} reconsidered their entire existence.`,
`${user} won after delivering a monologue so powerful that ${sender} reconsidered their entire existence.`,

`${sender} lost when the sky cracked open and a choir began narrating ${user}s victory in Latin.`,
`${user} lost when the sky cracked open and a choir began narrating ${sender}s victory in Latin.`,

`${sender} won by striking a pose so intense that time itself applauded.`,
`${user} won by striking a pose so intense that time itself applauded.`,

`${sender} lost after ${user} dramatically whispered “It was destiny” and the universe agreed.`,
`${user} lost after ${sender} dramatically whispered “It was destiny” and the universe agreed.`,

`${sender} won when a single tear rolled down their cheek and unlocked their final form.`,
`${user} won when a single tear rolled down their cheek and unlocked their final form.`,

`${sender} lost after ${user} declared this battle “a canon event.”`,
`${user} lost after ${sender} declared this battle “a canon event.”`,

`${sender} won by unleashing a speech about friendship that shattered ${user}s will to fight.`,
`${user} won by unleashing a speech about friendship that shattered ${sender}s will to fight.`,

`${sender} lost when ${user} dramatically removed their cloak and revealed an even more dramatic cloak underneath.`,
`${user} lost when ${sender} dramatically removed their cloak and revealed an even more dramatic cloak underneath.`,

`${sender} won after the battlefield exploded into slow-motion fireworks spelling their name.`,
`${user} won after the battlefield exploded into slow-motion fireworks spelling their name.`,

`${sender} lost when ${user} pointed to the horizon and said “This isnt even my final arc.”`,
`${user} lost when ${sender} pointed to the horizon and said “This isnt even my final arc.”`,

`${sender} won after shouting “I choose you!” and dramatically throwing a Poké Ball at ${user}.`,
`${user} won after shouting “I choose you!” and dramatically throwing a Poké Ball at ${sender}.`,

`${sender} lost after ${user}s friendship level maxed out mid-battle.`,
`${user} lost after ${sender}s friendship level maxed out mid-battle.`,

    ];

    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const message = `${sender} challenges ${user} to a fight. ${outcomes[randomIndex]}`;

    // Send plain text for StreamElements chat
    res.type('text/plain').send(message);
});

app.listen(port, () => {
    console.log(`Fight API running at http://localhost:${port}`);
});