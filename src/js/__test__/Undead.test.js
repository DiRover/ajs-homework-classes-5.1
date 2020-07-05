import Undead from '../Undead';

test('create character Undead', () => {
    const expected = { name: 'Stinky', type: 'Magician', health: 100, level: 1, attack: 25, defence: 25 };
    const received = new Undead('Stinky', 'Magician', 100, 1, 25, 25);
    expect(received).toEqual(expected);
  });