const calcAbilityScoreModifier = stat => {
    const modifier = Math.floor((parseInt(stat, 10) - 10) / 2);

    return modifier >= 0 ? `+${modifier}` : modifier;
}

export default calcAbilityScoreModifier;
