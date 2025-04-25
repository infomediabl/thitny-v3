# B2B Quiz Application

A React-based quiz application for collecting business information and providing tailored recommendations.

## Features

- Single question per page interface
- Conditional questions based on previous answers
- Progress tracking
- Local result storage in JSON format
- Automatic redirection after completion

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

## Technologies Used

- React
- TypeScript
- NextUI
- File Saver

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/types` - TypeScript type definitions
  - `/data` - Quiz data and configuration

## Quiz Flow

1. Users answer questions about their business
2. Answers are saved locally as JSON
3. Upon completion, users are redirected to app.thitny.com 