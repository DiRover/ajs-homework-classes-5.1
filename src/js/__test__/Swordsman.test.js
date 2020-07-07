import Swordsman from '../Swordsman';

test('create character Swordsman', () => {
    const expected = { name: 'Dog with sword', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10 };
    const received = new Swordsman('Dog with sword', 'Swordsman', 100, 1, 40, 10);
    expect(received).toEqual(expected);
  });