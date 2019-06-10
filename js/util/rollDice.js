const rolldie = (sides, times, extra) => {
    // Get random die rolls
    const results = [...crypto.getRandomValues(new Uint8Array(times)).map(c => c % sides + 1)];

    // Calculate total sum
    results.push(results.reduce((a, b) => a + b));

    // Add extra to total
    results[results.length - 1] += extra;

    return results;
};

const rollDice = (roll = '', randomRoll = false) => {
    const [
        times, die, extra = 0
    ] = roll
        .match(/(\d+)d(\d+)([\+|\-]\d+)?/)
        .slice(1, 4)
        .map(n => parseInt(n, 10) || 0);

    if (randomRoll) {
        let total = 0;
        let rounds = 10;

        for (let i = 0; i < rounds; i++) {
            total += rolldie(die, times, extra).pop();
        }

        return Math.round(total / rounds);
    } else {
        return Math.floor((((die + 1) / 2) * times) + extra); 
    }
}

export default rollDice;
