import {Font} from 'tiles/font';
import {Effect} from 'effect';
import {Colour, rgb, rgba} from 'colour';
import {CharacterTile, SolidTile} from 'tiles/tile_types';

const IBM_BIOS = new Font("IBM-BIOS", 16, 1, -2);

export const TileDescription = {
    PlayerCharacter:    new CharacterTile('@', IBM_BIOS, Colour.White),
    Ground:             new CharacterTile('.', IBM_BIOS, '#2d8010', '#06310d'),
    StoneFloor:         new CharacterTile('.', IBM_BIOS, '#222222', '#444444'),
    WoodWall:           new CharacterTile('#', IBM_BIOS, '#332301', '#664602'),
    Window:             new CharacterTile('#', IBM_BIOS, '#ffffff', '#50e7d4'),
    ClosedWoodenDoor:   new CharacterTile('+', IBM_BIOS, '#332301'),
    OpenWoodenDoor:     new CharacterTile('-', IBM_BIOS, '#332301'),
    Tree:               new CharacterTile('&', IBM_BIOS, '#2d8010'),
    Water:              new CharacterTile('~', IBM_BIOS, '#2288cc', '#004488'),
    Rock:               new CharacterTile('*', IBM_BIOS, '#222222', '#444444'),
    Lamp:               new CharacterTile('£', IBM_BIOS, '#cccc00'),
    Unknown:            new SolidTile(Colour.Black),
    OutOfBounds:        new SolidTile(Colour.Black),
    NoTile:             new SolidTile('#ff0000'),
    Yellow:             new SolidTile('#ffff00', true, new Set([Effect.TransparencyLevels]))
};