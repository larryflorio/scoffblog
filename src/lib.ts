export const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
export const fmtShort = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
export const byDate = <T extends { data: { date: Date } }>(a: T, b: T) => b.data.date.getTime() - a.data.date.getTime();
