import Bowman from '../Bowman';

test('create character Bowman', () => {
    const expected = { name: 'Bob', type: 'Magician', health: 100, level: 1, attack: 25, defence: 25 };
    const received = new Bowman('Bob', 'Magician', 100, 1, 25, 25);
    expect(received).toEqual(expected);
  });