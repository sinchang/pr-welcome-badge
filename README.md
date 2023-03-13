# PR Welcome Badge

[![PR Welcome Badge](https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/sinchang/pr-welcome-badge)](https%3A%2F%2Fgithub.com%2Fsinchang%2Fpr-welcome-badge%2Fissues%3Fq%3Darchived%3Afalse%2Bis%3Aissue%2Bis%3Aopen%2Bsort%3Aupdated-desc%2Blabel%3A%22help%20wanted%22%2C%22good%20first%20issue%22)

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
