# BlockTix - Blockchain Ticketing Platform

A decentralized approach to event ticket management using Polygon blockchain and smart contracts.

## Project Overview

BlockTix is a modern ticketing platform that leverages blockchain technology to provide secure, transparent, and efficient ticket management for events. Built on the Polygon network, it enables users to purchase tickets as NFTs, eliminating fraud and providing verifiable ownership.

## Features

- **Blockchain Integration**: Connect your MetaMask wallet to interact with the Polygon network
- **Event Discovery**: Browse and search through various events
- **Secure Ticketing**: Purchase tickets as NFTs with transparent ownership
- **User Authentication**: Sign up and manage your account with Firebase
- **Responsive Design**: Beautiful UI that works across all devices
- **Smart Contract Integration**: Tickets are minted as NFTs on the Polygon network
- **Secure Transactions**: All purchases are handled through verified smart contracts
- **Real-time Updates**: Live ticket availability and transaction status
- **User Dashboard**: Manage your tickets, profile, and transaction history
- **Event Management**: For organizers to create and manage events
- **Secondary Market**: Securely transfer or resell tickets
- **Mobile Optimization**: Full functionality on all devices

## Technology Stack

### Frontend
- React 18 with Vite for fast development and optimized builds
- TypeScript for type safety and better developer experience
- Tailwind CSS for responsive and customizable styling
- Web3.js for blockchain integration
- Firebase Authentication for user management
- React Router DOM for client-side routing
- Lucide React for beautiful icons
- Framer Motion for smooth animations

### Backend
- Node.js with Express for robust API endpoints
- TypeScript for type-safe backend development
- Firebase Firestore for scalable database solutions
- JWT Authentication for secure API access
- Express Rate Limit for API protection
- CORS for secure cross-origin requests
- Environment configuration with dotenv

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- MetaMask browser extension
- Polygon Mumbai testnet configured in MetaMask
- Firebase account with Firestore and Authentication enabled

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/your-username/blocktix.git
cd blocktix
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Create a \`.env\` file based on \`.env.example\` and fill in your credentials:
\`\`\`env
# Firebase Configuration
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-auth-domain
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
FIREBASE_APP_ID=your-app-id

# JWT Secret
JWT_SECRET=your-jwt-secret

# API Configuration
PORT=3000
NODE_ENV=development

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173
\`\`\`

4. Start the development server
\`\`\`bash
npm run dev
\`\`\`

5. In a separate terminal, start the backend server
\`\`\`bash
npm run dev:server
\`\`\`

## Project Structure

\`\`\`
blocktix/
├── public/                # Static assets
├── src/                   # Frontend source code
│   ├── components/        # React components
│   │   ├── events/       # Event-related components
│   │   ├── home/         # Homepage components
│   │   ├── layout/       # Layout components
│   │   └── wallet/       # Wallet integration components
│   ├── contexts/         # React contexts
│   │   ├── AuthContext   # Firebase authentication
│   │   └── Web3Context   # Blockchain integration
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── types/            # TypeScript types
│   └── firebase/         # Firebase configuration
├── backend/              # Backend source code
│   └── server.ts         # Express server
├── .env.example          # Environment variables template
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
\`\`\`

## Key Features Implementation

### Blockchain Integration
- MetaMask wallet connection
- MATIC balance display
- NFT ticket minting
- Smart contract interaction

### User Authentication
- Email/password registration
- Social authentication
- JWT token management
- Protected routes

### Event Management
- Event creation and editing
- Ticket inventory management
- Real-time availability updates
- Event search and filtering

## API Endpoints

### Public Endpoints
- \`GET /events\`: Retrieve all events
- \`GET /events/:id\`: Get specific event details
- \`POST /signup\`: User registration
- \`POST /contact\`: Contact form submission

### Protected Endpoints
- \`GET /profile\`: Get user profile
- \`POST /events\`: Create new event (organizers only)
- \`PUT /events/:id\`: Update event details
- \`POST /tickets/purchase\`: Purchase tickets

## Development

### Running Tests
\`\`\`bash
npm run test
\`\`\`

### Code Linting
\`\`\`bash
npm run lint
\`\`\`

### Building for Production
\`\`\`bash
npm run build
\`\`\`

## Deployment

### Frontend Deployment
The frontend can be deployed to Vercel or Netlify:

1. Connect your repository to Vercel/Netlify
2. Configure build settings:
   - Build command: \`npm run build\`
   - Output directory: \`dist\`
   - Environment variables from \`.env\`

### Backend Deployment
The backend can be deployed to services like Heroku or Firebase Cloud Functions:

1. Configure environment variables
2. Set up database connections
3. Deploy the application

## Security Considerations

- All API endpoints are rate-limited
- JWT tokens for authentication
- Smart contract auditing
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

Please ensure your PR description clearly describes the changes and their motivation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please:
- Open an issue on GitHub
- Contact us through our support portal
- Join our Discord community

## Acknowledgments

- Polygon Network for blockchain infrastructure
- Firebase for backend services
- OpenZeppelin for smart contract templates
- Community contributors
