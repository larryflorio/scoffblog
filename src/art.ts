type PostWithArt = { data: { image?: string; kicker: string } };

const kickerArt: Record<string, string> = {
  'COURT NEWS': '/art/court-news.svg',
  'SCOFF FOCUS': '/art/scoff-focus.svg',
  'EMERGENCY DOCKET': '/art/emergency-docket.svg',
  'SCOFF OUTSIDE OPINIONS': '/art/outside-opinions.svg',
  'OUTSIDE OPINIONS': '/art/outside-opinions.svg',
  'OPINION ANALYSIS': '/art/opinion-analysis.svg',
};

export const artFor = (post: PostWithArt) => post.data.image ?? kickerArt[post.data.kicker] ?? '/art/default.svg';
