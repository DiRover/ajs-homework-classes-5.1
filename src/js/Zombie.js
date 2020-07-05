import Character from './Character'

export default function Zombie(name, type, health, level, attack, defence){
    Character.call(this, name, type, health, level, attack, defence);
}

Zombie.prototype = Object.create(Character.prototype);
Zombie.prototype.constructor = Zombie;