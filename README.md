# CineNest 🎬

A modern, feature-rich movie and TV show discovery platform built with React and Vite. Explore trending content, discover new favorites, and stream seamlessly with multiple server options.

![CineNest Banner](https://via.placeholder.com/800x200/1a1a1a/ffffff?text=CineNest+-+Your+Ultimate+Entertainment+Hub)

## 🌟 Features

### 🎯 Core Functionality
- **Advanced Discovery**: Browse trending, popular, top-rated, and upcoming movies and TV shows
- **Powerful Search**: Full-text search across movies and TV series with instant results
- **Smart Filtering**: Filter by genre, language, year, runtime, and rating
- **Infinite Scroll**: Seamless browsing with automatic content loading
- **Multi-Server Streaming**: Access content from 12+ embedded streaming providers

### 🎨 User Experience
- **Hero Carousel**: Auto-rotating featured content with smooth animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark UI with amber accents
- **Smooth Animations**: Framer Motion-powered transitions and interactions
- **Loading States**: Skeleton screens and progress indicators

### 📱 Pages & Components
- **Home**: Hero carousel with trending content rows
- **Movies**: Filterable movie grid with advanced search options
- **TV Shows**: Dedicated TV series discovery page
- **Watch**: Full media player with episodes, cast, reviews, and similar content
- **Search**: Comprehensive search with debounced queries

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router v7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library

### State Management
- **React Context** - Global state for media data
- **Custom Hooks** - Reusable logic for API calls and UI interactions

### API & Data
- **TMDB API** - Movie and TV show data
- **Axios** - HTTP client for API requests
- **12 Streaming Servers** - Multi-source video playback

### Development Tools
- **ESLint** - Code linting
- **Vite Dev Server** - Hot module replacement
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- TMDB API key (get one from [TMDB](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sh-Mustak/CineNest.git
   cd CineNest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
CineNest/
├── src/
│   ├── api/              # API configuration and services
│   ├── assets/           # Static assets
│   ├── components/       # Reusable UI components
│   │   ├── filters/      # Filtering components
│   │   ├── layout/       # Layout components
│   │   ├── movie/        # Movie-specific components
│   │   ├── moviesPage/   # Movies page components
│   │   ├── watch/        # Watch page components
│   │   └── Skeleton/     # Loading skeleton components
│   ├── context/          # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── services/         # Data fetching services
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   └── main.jsx          # App entry point
├── public/               # Public assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🎯 Key Components

### Hero Section
- Auto-rotating carousel with 3D card effects
- Touch and keyboard navigation
- Progress indicators

### Filtering System
- Genre selection with pill UI
- Year and runtime range sliders
- Language and rating filters
- Sort options (popularity, rating, date)

### Watch Page
- Multi-tab interface (Info, Episodes, Similar, Trailers, Reviews)
- 12-server video player selection
- Episode carousel for TV shows
- Cast details and movie metadata

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

CineNest integrates with The Movie Database (TMDB) API to fetch:
- Movie and TV show details
- Cast and crew information
- Reviews and ratings
- Trailers and images
- Similar content recommendations

## 📱 Responsive Design

- **Desktop**: Full hero carousel with 3D effects
- **Tablet**: Optimized layouts with touch interactions
- **Mobile**: Bottom navigation and mobile-friendly UI

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use meaningful commit messages
- Test on multiple devices
- Ensure responsive design
- Maintain code quality with ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing movie data
- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

## 📞 Contact

**Shahriar Mustak**
- GitHub: [@Sh-Mustak](https://github.com/Sh-Mustak)
- Project Link: [https://github.com/Sh-Mustak/CineNest](https://github.com/Sh-Mustak/CineNest)

---

**Enjoy exploring movies and TV shows with CineNest! 🍿**
