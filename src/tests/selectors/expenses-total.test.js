import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const emptyexpense = [];
    const sum = getExpensesTotal(emptyexpense);
    expect(sum).toBe(0);
});

test('should correctly add up a single expense', () => {
    const sum = getExpensesTotal([expenses[0]]);
    expect(sum).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const sum = getExpensesTotal(expenses);
    expect(sum).toBe(114195);
});