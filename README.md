# Business Quiz Application

A comprehensive quiz application for business owners to analyze their online presence and receive tailored recommendations.

## Features

- Multi-step quiz with progress tracking
- Different question types (text, single choice, multiple choice, textarea)
- Conditional questions based on previous answers
- Session management
- Webhook integration for data collection
- Modern UI with NextUI components
- Responsive design

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- NextUI
- React Query
- React Hook Form

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
quiz/
├── src/
│   ├── components/
│   │   ├── Quiz.tsx
│   │   └── Question.tsx
│   ├── types/
│   │   └── quiz.ts
│   ├── data/
│   │   └── quiz.json
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_WEBHOOK_URL=your_webhook_url
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
