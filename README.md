# StriveSync - AI Health Companion

A modern, AI-powered healthcare application built with Next.js that provides personalized medical advice, health monitoring, and wellness guidance.

## Features

- **AI Medical Advice**: Get instant, personalized medical guidance powered by advanced AI
- **Health Dashboard**: Comprehensive monitoring of vital signs, activity, and sleep patterns
- **Multi-Platform Support**: Responsive design for web, mobile, and smartwatch interfaces
- **Secure & Private**: Enterprise-grade security with HIPAA compliance considerations
- **Real-time Monitoring**: Track heart rate, blood pressure, temperature, and more
- **Emergency Detection**: Intelligent assessment of symptoms for emergency situations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS
- **AI Integration**: Vercel AI SDK with OpenAI
- **Charts**: Recharts for data visualization
- **TypeScript**: Full type safety
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- OpenAI API key (for AI medical advice feature)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd strivesync-health-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── medical-advice/ # AI medical advice endpoint
│   ├── dashboard/         # Health dashboard page
│   ├── medical-advice/    # AI consultation page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Additional styles
```

## Key Pages

- **Home (`/`)**: Landing page with feature overview and platform demos
- **Medical Advice (`/medical-advice`)**: AI-powered medical consultation interface
- **Dashboard (`/dashboard`)**: Comprehensive health monitoring dashboard

## Features Overview

### AI Medical Advice
- Symptom assessment with urgency level detection
- Emergency situation identification
- Personalized health recommendations
- Professional medical disclaimer and safety measures

### Health Dashboard
- Real-time vital signs monitoring
- Activity and fitness tracking
- Sleep pattern analysis
- Health trends and insights
- Medication reminders and alerts

### Multi-Platform Design
- Responsive web interface
- Mobile-optimized layouts
- Smartwatch interface mockups
- Cross-device data synchronization concepts

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file with:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

## Deployment

The app is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## Important Disclaimers

⚠️ **Medical Disclaimer**: This application is for demonstration purposes only. It is not intended to provide actual medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.

🔒 **Privacy**: In a production environment, ensure proper HIPAA compliance and data encryption for handling health information.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- AI powered by [Vercel AI SDK](https://sdk.vercel.ai/)
- Icons by [Lucide](https://lucide.dev/)