import Undead from '../Undead';

test('create character Undead', () => {
    const expected = { name: 'Stinky', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25 };
    const received = new Undead('Stinky', 'Undead', 100, 1, 25, 25);
    expect(received).toEqual(expected);
  });