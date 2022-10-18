# PR Welcome Badge

Dispay the contribution friendly issue's (which label includes `help wanted` or `good first issue`) count.

## Usage

badge url format is `https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/${repo}`

E.g. https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/fastify/help

### How to generate markdown badge

First of all, go to the API https://pr-welcome-badge.vercel.app/api/badge/${repo} to see the `issuesUrl`, 

Then use the below snippet to link the badge to the `issuesUrl`.

[![PR Welcome Badge](https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/fastify/help)](https://github.com/fastify/help/issues?q=archived:false+is:issue+is:open+sort:updated-desc+label:%22help%20wanted%22,%22good%20first%20issue%22)

```
[![PR Welcome Badge](https://badgen.net/https/pr-welcome-badge.vercel.app/api/badge/fastify/help)](https://github.com/fastify/help/issues?q=archived:false+is:issue+is:open+sort:updated-desc+label:%22help%20wanted%22,%22good%20first%20issue%22)
```
