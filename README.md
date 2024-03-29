# PR Welcome Badge

[![PR Welcome Badge](https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/sinchang/pr-welcome-badge)](https://github.com/sinchang/pr-welcome-badge/issues?q=archived:false+is:issue+is:open+sort:updated-desc+label%3A%22help%20wanted%22%2C%22good%20first%20issue%22)

Display the count of issues that are contribution-friendly, i.e., those that have labels such as "help wanted" or "good first issue".

## Usage

The badge URL format is `https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/${repo}`

E.g. https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/fastify/help

### How to generate a markdown badge

#### Online

Check out https://pr-welcome-badge.vercel.app

#### Manual

First of all, go to the API https://pr-welcome-badge.vercel.app/api/badge/${repo} to see the `issuesUrl`,

Then use the below snippet to link the badge to the `issuesUrl`.

[![PR Welcome Badge](https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/fastify/help)](https://github.com/fastify/help/issues?q=archived:false+is:issue+is:open+sort:updated-desc+label:%22help%20wanted%22,%22good%20first%20issue%22)

```
[![PR Welcome Badge](https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/${repo})](${issuesUrl})
```
