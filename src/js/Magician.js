import Character from './Character'

export default function Magician(name, type, health, level, attack, defence){
    Character.call(this, name, type, health, level, attack, defence);
}

Magician.prototype = Object.create(Character.prototype);
Magician.prototype.constructor = Magician;