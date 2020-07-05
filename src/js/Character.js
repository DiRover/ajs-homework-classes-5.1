export default function Character(name, type, health, level, attack, defence) {
    if(typeof name === 'string' && name.length >= 2 && name.length <= 10) {
        this.name = name;
    } else {
        throw new Error('Name is not valid!');
    }
    if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
        this.type = type;
    } else {
        throw new Error('Type is not valid!');
    }
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence
}