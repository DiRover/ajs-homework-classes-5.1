import Magician from '../Magician';

test('create character Magician', () => {
    const expected = { name: 'Hattabich', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 };
    const received = new Magician('Hattabich', 'Magician', 100, 1, 10, 40);
    expect(received).toEqual(expected);
  });