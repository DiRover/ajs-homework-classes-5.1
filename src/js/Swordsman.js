import Character from './Character'

export default function Swordsman(name, type, health, level, attack, defence){
    Character.call(this, name, type, health, level, attack, defence);
}

Swordsman.prototype = Object.create(Character.prototype);
Swordsman.prototype.constructor = Swordsman;