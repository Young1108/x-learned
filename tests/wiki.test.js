import { describe, it, expect } from 'vitest';
describe('wiki path', () => {
  it('joins prefix', () => {
    const prefix = 'raw/x-bookmarks';
    const file = 'elonmusk-123.md';
    expect(prefix + '/' + file).toBe('raw/x-bookmarks/elonmusk-123.md');
  });
});
