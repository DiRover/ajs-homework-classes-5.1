import Daemon from '../Daemon';

test('create character Daemon', () => {
    const expected = { name: 'Hellscream', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 };
    const received = new Daemon('Hellscream', 'Magician', 100, 1, 10, 40);
    expect(received).toEqual(expected);
  });