This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Objects organization

```bash
// player object
{
    "id": 34,
    "name": "folan",
    "Age-Group": 3,
    "Rating": 3
}

// Team object
{
    "id": 2334,
    "name": "f1",
    "players": [24, 35, 68, 14],
    "match-played": {
        "won": 2,
        "tie": 0,
        "lose": 1
    }
}

// Event object
{
    "id": 26473,
    "name": "event1",
    "start-time": "13-7-2024 18:45",
    "end-time": "13-7-2024 21:45",
    "sport": "Volley Ball",
    "score-type": "points",
    "fields-number": 2,
    "players-number": 35,
    "max-team-player": 6,
    "total-coast": 600,
    "teams-number": 5,
    "matches-number": 15,
    "teams": [2334, 3583, 9830, 2234, 7384],
    "event-type": "league",
    "status": 2 // 0: not started, 1: on going, 2: done
}

// Match object
{
    "id": 24,
    "number": 3,
    "teams": {
        "first": 24,
        "second": 46
    },
    "scores": {
        "first": 24,
        "second": 18
    },
    "start-time": "18:45",
    "end-time": "20:45",
    "status": 1 // 0: not started, 1: on going, 2: done
}

// matches list
[24, 13, 22, 19, 16]

//
["out of the loop", "the wolf"]

// algorithms

// Ahmed
1. generateTeams()
2. generateEvent()tches().
3. generateMatches()
// Yousef
4. importPlayers()
5. exportPlayers()
6. removePlayer()
7. editPlayer()
```
