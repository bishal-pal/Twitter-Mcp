# Twitter(X) Post - ChatGPT-like Interface for Twitter

A Next.js application that provides a ChatGPT-like interface for interacting with Twitter/X. This app connects to an MCP (Model Context Protocol) server to generate and post tweets through an intuitive chat interface.

## Features

- 🔐 **Authentication** - Secure user authentication using Better Auth with OAuth providers
- 💬 **ChatGPT-like Interface** - Interactive chat interface for Twitter interactions
- 🐦 **Twitter Integration** - Connect to Twitter/X API via MCP server
- 📊 **Dashboard** - User dashboard showing profile information and quick actions
- 🎨 **Modern UI** - Beautiful, responsive interface built with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn/bun)
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Twitter-Mcp
```

2. Copy environment file:
```bash
cd app
cp .env.example .env
```

3. Install dependencies:
```bash
cd app
pnpm install

cd ../mcp-server
pnpm install
```

4. Create a Twitter App:
   - Go to the [X Developer Portal](https://developer.x.com/en/portal/dashboard)
   - Create a new app to get your OAuth credentials
   - Note down your Client ID, Client Secret
   - Set your callback URL to `http://localhost:3000/api/auth/callback/twitter`

5. Set up environment variables:
Create a `.env` file in the `app` directory with the following variables:
```env
DATABASE_URL="your-postgres-connection-string"
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
TWITTER_CLIENT_ID="your-twitter-client-id"
TWITTER_CLIENT_SECRET="your-twitter-client-secret"
```

6. Run database migrations:
```bash
cd app
npx prisma migrate dev
```

7. Start the development server:
```bash
cd app
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Authentication**: [Better Auth](https://www.better-auth.com)
- **Database**: PostgreSQL with [Prisma](https://www.prisma.io)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Icons**: SVG custom icons
- **MCP Server**: Express.js for Twitter integration
