import { expect, test } from 'vitest';
import { formatDate } from './index';
  
test('formatDate', () => {
  // Arrange / Given
  const date = new Date('2023-03-15T12:00:00Z');

  // Act / When
  const formatted = formatDate(date);

  // Assert / Then
  expect(formatted).toBe('15/3/2023');
});