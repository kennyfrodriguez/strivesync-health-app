# Health Questions Feature

## Overview
A comprehensive AI health questions page that provides instant answers to 60+ pre-formulated health questions, covering all features claimed on the home page.

## What Was Added

### New Page: `/health-questions`
Location: `app/health-questions/page.tsx`

A fully functional page featuring:
- **12 Health Categories** with 5 questions each (60 total questions)
- **One-Click AI Interaction** - Each button directly sends a question to ChatGPT
- **Real-time AI Responses** - Powered by the existing OpenAI integration
- **Beautiful UI** - Gradient-colored category cards with icons
- **Medical Disclaimer** - Prominent warning about proper medical consultation

### Categories Covered

1. **Symptom Assessment** - Questions about common symptoms (headaches, chest pain, fever, etc.)
2. **Vital Signs Monitoring** - Heart rate, blood pressure, temperature questions
3. **Medication Guidance** - Drug interactions, side effects, safety
4. **Wellness & Prevention** - Heart health, immune system, diet, sleep
5. **Fitness & Activity** - Exercise routines, workout safety, training tips
6. **Mental Health & Sleep** - Stress management, anxiety, sleep quality
7. **Family Care** - Vaccinations, chronic illness care, pediatric health
8. **Women's Health** - Menstrual health, pregnancy, menopause
9. **Pediatric Health** - Child development, infant care, childhood illnesses
10. **Emergency Situations** - Heart attack signs, stroke symptoms, choking
11. **Chronic Conditions** - Diabetes, hypertension, asthma management
12. **Preventive Care** - Cancer screenings, health habits, disease prevention

### Home Page Updates

1. **Announcement Banner** - Eye-catching gradient banner at the top promoting the new feature
2. **Updated Hero Section** - New primary CTA button "Ask AI Health Questions"
3. **Featured Card** - Highlighted feature card in the features section with "NEW" badge
4. **Enhanced Navigation** - Multiple entry points to the new page

## How It Works

1. User clicks any question button
2. The question is sent directly to the OpenAI API via the existing `/api/medical-advice` endpoint
3. AI processes the question using GPT-4
4. Response displays in real-time with:
   - Medical assessment tools (urgency levels, recommendations)
   - Emergency checks (urgency scores, emergency advice)
   - Formatted, easy-to-read responses

## Technical Details

### API Integration
- Uses the existing `useChat` hook from `@ai-sdk/react`
- Connects to `/api/medical-advice` route
- Supports streaming responses
- Includes medical assessment and emergency check tools

### UI Components
- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Color-coded categories with gradient backgrounds
- Icon system using Lucide React icons
- Loading states and disabled states for buttons
- Scrollable response area

### Accessibility
- Proper heading hierarchy
- ARIA labels and semantic HTML
- Keyboard navigation support
- High contrast text and buttons

## Requirements

### To Use AI Features
You need a valid OpenAI API key in your `.env.local`:

```bash
OPENAI_API_KEY=sk-your-actual-key-here
```

### Dependencies
All required dependencies are already installed:
- `@ai-sdk/react` - AI SDK for React
- `@ai-sdk/openai` - OpenAI provider
- `ai` - Vercel AI SDK core
- All UI components from shadcn/ui

## Access Points

Users can access the health questions page from:
1. **Home Page Hero** - "Ask AI Health Questions" button
2. **Announcement Banner** - "Try it now →" link at the top
3. **Features Section** - Featured card with "Try Now →" button
4. **Direct URL** - `/health-questions`
5. **Medical Advice Page** - Can navigate between full consultation and quick questions

## Future Enhancements

Potential improvements:
- Add favorite/bookmark questions
- Question history and previous responses
- Filter questions by category
- Search functionality for questions
- Custom question input (already available in `/medical-advice`)
- Export responses as PDF
- Share responses via email

## Medical Disclaimer

⚠️ **Important**: This AI provides general health information only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for medical decisions. Call 911 for emergencies.

## Testing

To test the feature:
1. Ensure the dev server is running: `npm run dev`
2. Visit http://localhost:3000
3. Click "Ask AI Health Questions" button or navigate to http://localhost:3000/health-questions
4. Click any question button to see AI response
5. Note: AI responses require a valid OpenAI API key

## Files Modified/Created

### Created:
- `app/health-questions/page.tsx` - Main health questions page

### Modified:
- `app/page.tsx` - Added announcement banner, updated hero CTAs, featured card
- `.env.local` - Created with placeholder for OpenAI API key

### Existing (Used):
- `app/api/medical-advice/route.ts` - Existing API endpoint
- `components/ui/*` - shadcn/ui components

