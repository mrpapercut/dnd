import StatBlock from './components/StatBlock.js';

import createElement from './util/createElement.js';
import {changeWallpaperRandomly} from './util/wallpaper.js';

import enemies from '../resources/enemies/enemies.js';

const [h2] = ['h2'].map(el => createElement(el));

class App {
    constructor(wrapper) {
        this.wrapper = wrapper;
    
        this.setupInitial();
    }
    
    setupInitial() {
        // Setup wallpaper
        changeWallpaperRandomly();
        window.setInterval(() => changeWallpaperRandomly(), 10 * 60 * 1000);

        const YuanTiPureblood = enemies['Yuan-ti Pureblood'];

        // const YuanTiPurebloodStats = new StatBlock(YuanTiPureblood);        
        // this.wrapper.appendChild(YuanTiPurebloodStats);

        // const GoblinStats = new StatBlock(enemies['Goblin']);
        // this.wrapper.appendChild(GoblinStats);

        const BugbearStats = new StatBlock(enemies['Bugbear']);
        this.wrapper.appendChild(BugbearStats);
    }

    addSession() {
        // Add a new session that contains the rest of the story
    }

    addNPC() {
        // Add NPCs, including race, stats, personality
    }

    addEnemy() {
        // Add Enemy from list or add new (and add to list)
        // Includes stats-block, personality, 
    }

    addSettlement() {
        // Add a new settlement that contains NPCs, buildings, names etc
    }

    addEncounter() {
        // Create a new encounter for every encounter
        // Add players, NPCs, monsters, ability to add/remove as well
        // Add location, backstory
        // Add initiative
        // Keep history of who hit who and with what damage (kill stats?)
    }
}

export default App;
