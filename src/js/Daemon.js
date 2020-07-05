import Character from './Character'

export default function Daemon(name, type, health, level, attack, defence){
    Character.call(this, name, type, health, level, attack, defence);
}

Daemon.prototype = Object.create(Character.prototype);
Daemon.prototype.constructor = Daemon;