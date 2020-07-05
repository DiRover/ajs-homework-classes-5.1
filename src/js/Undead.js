import Character from './Character'

export default function Undead(name, type, health, level, attack, defence){
    Character.call(this, name, type, health, level, attack, defence);
}

Undead.prototype = Object.create(Character.prototype);
Undead.prototype.constructor = Undead;