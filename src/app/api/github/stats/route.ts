import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    stats: {
      name: 'Jesowin_',
      totalRepos: 4,
      totalStars: 0,
      totalForks: 0,
      totalIssues: 0,
      totalPRs: 0,
      totalPRsMerged: 0,
      mergedPRsPercentage: 0,
      totalWatchers: 0,
      totalReviews: 0,
      totalCommits: 145,
      totalDiscussionsStarted: 0,
      totalDiscussionsAnswered: 0,
      followers: 0,
      contributedTo: 1,
    },
  });
}
