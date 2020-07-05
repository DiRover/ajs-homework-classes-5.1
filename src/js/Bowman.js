import Character from './Character';
export default function Bowman(name, type, health, level, attack, defence){
    Character.call(this, name, type, health, level, attack, defence);
}

Bowman.prototype = Object.create(Character.prototype);
Bowman.prototype.constructor = Bowman;