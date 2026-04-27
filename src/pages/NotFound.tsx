import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { MoveLeft, Home, MessageSquare } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0b] overflow-hidden flex items-center justify-center font-sans">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars-container absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-30 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Large Moon on the left */}
      <div className="absolute -left-20 md:-left-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-[#d1d1d1] shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.2),0_0_100px_rgba(255,255,255,0.05)] z-10 flex items-center justify-end pr-10 md:pr-40 overflow-hidden">
        {/* Craters */}
        <div className="absolute w-20 h-20 bg-[#c0c0c0] rounded-full top-20 left-40 opacity-40 shadow-inner"></div>
        <div className="absolute w-32 h-32 bg-[#c0c0c0] rounded-full bottom-40 left-60 opacity-30 shadow-inner"></div>
        <div className="absolute w-14 h-14 bg-[#c0c0c0] rounded-full top-1/2 left-20 opacity-50 shadow-inner"></div>
        <div className="absolute w-10 h-10 bg-[#c0c0c0] rounded-full top-1/4 left-1/3 opacity-40 shadow-inner"></div>
        
        {/* Content inside/on the moon */}
        <div className="relative z-20 text-slate-800 text-right max-w-[200px] md:max-w-[400px]">
          <h1 className="text-8xl md:text-[180px] font-bold leading-none mb-4 tracking-tighter">404</h1>
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-semibold opacity-90">Hmmm...</h2>
            <p className="text-sm md:text-lg opacity-70 leading-relaxed text-balance">
              Parece que um dos desenvolvedores caiu no sono ou esta página se perdeu no espaço.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-[#f97316] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/20"
            >
              <Home className="w-4 h-4" />
              INÍCIO
            </Link>
            <Link 
              to="/#contato" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-slate-400 text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              CONTATO
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Astronaut on the right */}
      <div className="absolute right-10 md:right-40 top-1/3 z-20 animate-float">
        <svg
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-32 md:w-56 md:h-56 drop-shadow-2xl"
        >
          {/* Astronaut simplified SVG */}
          <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" fill="#f8fafc" stroke="#334155" strokeWidth="0.5" />
          <rect x="9" y="5" width="6" height="4" rx="1" fill="#1e293b" />
          <path d="M7 14h10v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4z" fill="#f8fafc" stroke="#334155" strokeWidth="0.5" />
          <path d="M7 14l-3 5" stroke="#f8fafc" strokeWidth="2" />
          <path d="M17 14l3 5" stroke="#f8fafc" strokeWidth="2" />
          <path d="M9 20v2" stroke="#f8fafc" strokeWidth="2" />
          <path d="M15 20v2" stroke="#f8fafc" strokeWidth="2" />
          {/* Tether */}
          <path d="M10 14c-2 2-6 2-10 8" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" className="opacity-40" />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;

