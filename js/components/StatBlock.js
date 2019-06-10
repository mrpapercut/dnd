import createElement from '../util/createElement.js';
import rollDice from '../util/rollDice.js';
import calcAbilityScoreModifier from '../util/calcAbilityScoreModifier.js';

const [div, h2, h3, span, hr, table, thead, tr, th, tbody, td] = 
    ['div', 'h2', 'h3', 'span', 'hr', 'table', 'thead', 'tr', 'th', 'tbody', 'td'].map(el => createElement(el));

class StatBlock {
    constructor(stats) {
        const {
            name,
            size,
            race,
            alignment,
            armorClass,
            hitpoints,
            speed,
            abilityScores,
            skills,
            damageImmunities,
            conditionImmunities,
            senses,
            languages,
            challenge,
            feats,
            actions,
            extraInfo
        } = stats;

        this.setName(name);
        this.setSize(size);
        this.setRace(race);
        this.setAlignment(alignment);
        this.setArmorClass(armorClass);
        this.setHitpoints(hitpoints);
        this.setSpeed(speed)
        this.setAbilityScores(abilityScores);
        this.setSkills(skills);
        this.setDamageImmunities(damageImmunities),
        this.setConditionImmunities(conditionImmunities),
        this.setSenses(senses);
        this.setLanguages(languages);
        this.setChallenge(challenge);
        this.setFeats(feats);
        this.setActions(actions);
        this.setExtraInfo(extraInfo);

        return this.render();
    }

    setName(name = '') {
        this.name = name;
    }

    setSize(size = 'Medium') {
        this.size = size;
    }

    setRace(race = 'humanoid') {
        this.race = race;
    }

    setAlignment(alignment = '') {
        this.alignment = alignment;
    }

    setArmorClass(ac = 10) {
        this.armorClass = ac;
    }

    setHitpoints(hitpoints = '') {
        this.hitpoints = hitpoints;
    }

    setSpeed(speed = 30) {
        this.speed = speed;
    }

    setAbilityScores(scores = {}) {
        this.abilityScores = {
            str: scores.str,
            dex: scores.dex,
            con: scores.con,
            int: scores.int,
            wis: scores.wis,
            cha: scores.cha
        };
    }

    setSkills(skills = []) {
        this.skills = Array.isArray(skills) ? skills : [skills];
    }

    setDamageImmunities(damageImmunities = []) {
        this.damageImmunities = Array.isArray(damageImmunities) ? damageImmunities : [damageImmunities];
    }

    setConditionImmunities(conditionImmunities = []) {
        this.conditionImmunities = Array.isArray(conditionImmunities) ? conditionImmunities : [conditionImmunities];
    }

    setSenses(senses = []) {
        this.senses = Array.isArray(senses) ? senses : [senses];
    }

    setLanguages(languages = []) {
        this.languages = Array.isArray(languages) ? languages : [languages];
    }

    setChallenge(challenge = 1) {
        this.challenge = challenge;
    }

    setFeats(feats = {}) {
        this.feats = feats;
    }

    setActions(actions = {}) {
        this.actions = actions;
    }

    setExtraInfo(info = '') {
        this.extraInfo = info;
    }

    render() {
        return div({
            className: 'statblock'
        },
            h2({
                className: 'title'
            }, this.name),
            span({
                className: 'subtitle'
            }, `${this.size} ${this.race}, ${this.alignment}`),
            hr(),
            `Armor Class: ${this.armorClass}`,
            `Hitpoints: ${rollDice(this.hitpoints)} (${this.hitpoints})`,
            `Speed: ${this.speed}ft.`,
            hr(),
            table({
                className: 'abilities'
            },
                thead({},
                    tr({},
                        th({}, 'STR'),    
                        th({}, 'DEX'),    
                        th({}, 'CON'),    
                        th({}, 'INT'),    
                        th({}, 'WIS'),    
                        th({}, 'CHA')    
                    )
                ),
                tbody({},
                    tr({},
                        td({}, `${this.abilityScores.str} (${calcAbilityScoreModifier(this.abilityScores.str)})`),    
                        td({}, `${this.abilityScores.dex} (${calcAbilityScoreModifier(this.abilityScores.dex)})`),    
                        td({}, `${this.abilityScores.con} (${calcAbilityScoreModifier(this.abilityScores.con)})`),    
                        td({}, `${this.abilityScores.int} (${calcAbilityScoreModifier(this.abilityScores.int)})`),    
                        td({}, `${this.abilityScores.wis} (${calcAbilityScoreModifier(this.abilityScores.wis)})`),    
                        td({}, `${this.abilityScores.cha} (${calcAbilityScoreModifier(this.abilityScores.cha)})`),    
                    )
                )
            ),
            hr(),
            this.skills.length > 0 ? `Skills: ${this.skills.join(', ')}` : null,
            this.damageImmunities.length > 0 ? `Damage Immunities: ${this.damageImmunities.join(', ')}` : null,
            this.conditionImmunities.length > 0 ? `Condition Immunities: ${this.conditionImmunities.join(', ')}` : null,
            this.senses.length > 0 ? `Senses: ${this.senses.join(', ')}` : null,
            this.languages.length > 0 ? `Languages: ${this.languages.join(', ')}` : 'Languages: none',
            `Challenge:  ${this.challenge}`,
            hr(),
            ...(Object.keys(this.feats).length > 0 ? Object.keys(this.feats).map(key => span({
                className: 'feat'
            }, `${key}: ${this.feats[key]}`)) : null),
            hr(),
            h3({}, 'Actions'),
            ...(Object.keys(this.actions).length > 0 ? Object.keys(this.actions).map(key => span({
                className: 'action'
            }, `${key}: ${this.actions[key]}`)) : null),
            hr(),
            this.extraInfo
        );
    }
}

export default StatBlock;
