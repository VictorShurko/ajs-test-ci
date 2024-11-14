import userStatus from '../app.js';

test('user health healthy test', () => {
    expect(userStatus({
        name: 'Маг', health: 90
    })).toBe('healthy');
});

test('user health wounded test', () => {
    expect(userStatus({
        name: 'Маг', health: 50
    })).toBe('wounded');
});

test('user health critical test', () => {
    expect(userStatus({
        name: 'Маг', health: 15
    })).toBe('critical');
});