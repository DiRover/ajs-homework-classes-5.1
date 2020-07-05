import Zombie from '../Zombie';

test('create character Zombie', () => {
    const expected = { name: 'Brainlover', type: 'Magician', health: 100, level: 1, attack: 40, defence: 10 };
    const received = new Zombie('Brainlover', 'Magician', 100, 1, 40, 10);
    expect(received).toEqual(expected);
  });