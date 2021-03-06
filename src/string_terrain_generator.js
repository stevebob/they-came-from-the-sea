import {EntityPrototypes} from 'entity_prototypes';
import {Components} from 'components';
import {Level} from 'engine/level';
import {Config} from 'config';

export class StringTerrainGenerator {
    constructor(depth, stringArray, nextStringArray = null) {
        this.depth = depth;
        this.stringArray = stringArray;
        this.nextStringArray = nextStringArray;
        this.stairsFromAbove = null;
        this.aboveLevel = null;
    }

    addStairsFromAbove(stairs) {
        this.stairsFromAbove = stairs;
    }

    generate(level, ecsContext) {

        if (this.nextStringArray != null) {
            this.nextGenerator = new StringTerrainGenerator(this.depth + 1, this.nextStringArray)
            this.nextGenerator.aboveLevel = level;
            this.nextLevel = new Level(this.nextGenerator);
        }

        level.height = this.stringArray.length;
        level.width = this.stringArray[0].length;

        for (let i = 0; i < level.height; i++) {
            for (let j = 0; j < level.width; j++) {
                let ch = ' ';
                if (this.stringArray[i]) {
                    if (this.stringArray[i][j]) {
                        ch = this.stringArray[i][j];
                    }
                }
                this.addEntities(ecsContext, ch, j, i);
            }
        }
    }

    addEntities(ecs, character, x, y) {

        let add = (name) => {
            return ecs.emplaceEntity(EntityPrototypes[name](x, y));
        }

        switch (character) {
        case '@':
            add('PlayerCharacter');
            add('Ground');
            break;
        case '.':
            add('Ground');
            break;
        case '&':
            add('Tree');
            add('Ground');
            break;
        case '*':
            add('Rock');
            add('Ground');
            break;
        case '~':
            add('Water');
            break;
        case 'L':
            add('Lamp');
            add('StoneFloor');
            break;
        case 'G':
            add('GreenLamp');
            add('StoneFloor');
            break;
        case 'R':
            add('RedLamp');
            add('StoneFloor');
            break;
        case ',':
            add('StoneFloor');
            break;
        case '#':
            add('WoodWall');
            add('StoneFloor');
            break;
        case '%':
            add('Window');
            add('StoneFloor');
            break;
        case '+':
            add('ClosedWoodenDoor');
            add('StoneFloor');
            break;
        case 'X':
            add('LighthouseWall');
            add('LighthouseFloor');
            break;
        case 'x':
            add('LighthouseFloor');
            break;
        case 'J':
            add('LighthouseLamp');
            add('LighthouseFloor');
            break;
        case 'd':
            add('ClosedWoodenDoor');
            add('LighthouseFloor');
            break;
        case 'w':
            add('LighthouseWindow');
            add('LighthouseFloor');
            break;
        case 'p':
            add('PlasmaRound');
            add('Ground');
            break;
        }
    }
}
