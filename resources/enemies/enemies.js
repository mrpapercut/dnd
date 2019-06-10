export default {
    'Goblin': {
        name: 'Goblin',
        size: 'small',
        race: 'humanoid (goblinoid)',
        alignment: 'neutral evil',
        armorClass: 15,
        hitpoints: '2d6',
        speed: 30,
        abilityScores: {
            str: 8,
            dex: 14,
            con: 10,
            int: 10,
            wis: 8,
            cha: 8
        },
        skills: 'Stealth +6',
        senses: [
            'darkvision 60ft.',
            'passive perception 9'
        ],
        languages: [
            'Common',
            'Goblin'
        ],
        challenge: 0.25,
        feats: {
            'Nimble escape': 'The goblin can take the Disengage or Hide action as a bonus action on each of its turns'
        },
        actions: {
            'Scimitar': 'Melee Weapon Attack: +4 to hit, reach 5ft., one target. Hit: 1d6+2 piercing damage',
            'Shortbow': 'Ranged Weapon Attack: +4 to hit, reach 80/320ft., one target. Hit: 1d6+2 piercing damage'
        },
        extraInfo: 'Goblins are black-hearted, gather in overwhelming numbers, and crave power, which they abuse'
    },
    'Bugbear': {
        name: 'Bugbear',
        size: 'medium',
        race: 'humanoid (goblinoid)',
        alignment: 'chaotic evil',
        armorClass: 16,
        hitpoints: '5d8+5',
        speed: 30,
        abilityScores: {
            str: 15,
            dex: 14,
            con: 13,
            int: 8,
            wis: 11,
            cha: 9
        },
        skills: [
            'Stealth +6',
            'Survival +2'
        ],
        senses: [
            'darkvision 60ft.',
            'passive perception 10'
        ],
        languages: [
            'Common',
            'Goblin'
        ],
        challenge: 1,
        feats: {
            'Brute': 'When the bugbear hits with a melee weapon attack, the attack deals one extra die of the weapon\'s damage to the target.',
            'Surprise attack': 'If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 2d6 damage from the attack'
        },
        actions: {
            Morningstar: 'Melee Weapon Attack: +4 to hit, reach 5ft., one target. Hit: 2d8+2 piercing damage',
            Javelin: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5ft. or range 30/120ft., one target. Hit: 1d6+2 piercing damage (range), 2d6+2 piercing damage (melee)'
        },
        extraInfo: 'Bugbears are cruel and unruly humanoids that live to bully the weak and dislike being bossed around. Despite their intimidating builds, bugbears move with surprising stealth and are fond of setting ambushes'
    },
    'Yuan-ti Pureblood': {
        name: 'Yuan-ti Pureblood',
        size: 'medium',
        race: 'humanoid (yuan-ti)',
        alignment: 'neutral evil',
        armorClass: 11,
        hitpoints: '9d8',
        speed: 30,
        abilityScores: {
            str: 11,
            dex: 12,
            con: 11,
            int: 13,
            wis: 12,
            cha: 14
        },
        skills: [
            'Deception +6',
            'Perception +3',
            'Stealth +3'
        ],
        damageImmunities: 'poison',
        conditionImmunities: 'poisoned',
        senses: [
            'darkvision 60ft.',
            'passive perception 13'
        ],
        languages: [
            'Abyssal',
            'Common',
            'Draconic'
        ],
        challenge: 1,
        feats: {
            'Innate Spellcasting': 'The yuan-ti\'s spellcasting ability is Charisma (spell save DC 12). The yuan-ti can innately cast the following spells, requiring no material components:\nAt will: animal friendship (snakes only)\n3/day each: poison spray, suggestion',
            'Magic Resistance': 'The yuan-ti has advantage on saving throws against spells and other magical effects.'
        },
        actions: {
            'Multiattack': 'The yuan-ti makes two melee attacks.',
            'Scimitar': 'Melee Weapon Attack: +3 to hit, reach 5ft., one target. Hit: 1d6+1 slashing damage.',
            'Shortbow': 'Ranged Weapon Attack: +3 to hit, range 80/300ft., one target. Hit: 1d6+1 piercing damage plus 2d6 poison damage.'
        }
    }
}
