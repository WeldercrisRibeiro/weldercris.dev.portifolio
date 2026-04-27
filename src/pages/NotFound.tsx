import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { MoveLeft, Home, MessageSquare } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0b] overflow-hidden flex items-center justify-center font-sans p-6">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="stars-container absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-30 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Large Moon - Adjusted for mobile */}
      <div className="absolute 
        -left-20 md:-left-40 
        top-1/2 -translate-y-1/2 
        w-[450px] h-[450px] 
        sm:w-[600px] sm:h-[600px]
        md:w-[800px] md:h-[800px] 
        rounded-full bg-[#d1d1d1] 
        shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.2),0_0_100px_rgba(255,255,255,0.05)] 
        z-10 flex items-center justify-center md:justify-end 
        md:pr-40 overflow-hidden pointer-events-none"
      >
        {/* Craters */}
        <div className="absolute w-12 h-12 md:w-20 md:h-20 bg-[#c0c0c0] rounded-full top-20 left-40 opacity-40 shadow-inner"></div>
        <div className="absolute w-20 h-20 md:w-32 md:h-32 bg-[#c0c0c0] rounded-full bottom-40 left-60 opacity-30 shadow-inner"></div>
        <div className="absolute w-10 h-10 md:w-14 md:h-14 bg-[#c0c0c0] rounded-full top-1/2 left-20 opacity-50 shadow-inner"></div>
        
        {/* Content inside/on the moon */}
        <div className="relative z-20 text-slate-800 text-center md:text-right px-8 md:px-0 max-w-sm md:max-w-[400px] pointer-events-auto">
          <h1 className="text-7xl md:text-[180px] font-bold leading-none mb-2 md:mb-4 tracking-tighter">404</h1>
          <div className="space-y-2">
            <h2 className="text-xl md:text-4xl font-semibold opacity-90">Hmmm...</h2>
            <p className="text-xs md:text-lg opacity-70 leading-relaxed text-balance">
              Parece que um dos desenvolvedores caiu no sono ou esta página se perdeu no espaço.
            </p>
          </div>
          
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] text-white px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/20"
            >
              <Home className="w-4 h-4" />
              INÍCIO
            </Link>
            <Link 
              to="/#contato" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-slate-400 text-slate-700 px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-slate-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              CONTATO
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Astronaut - Adjusted position for mobile to avoid overlap */}
      <div className="absolute 
        right-4 top-1/4
        sm:right-10 md:right-40 md:top-1/3 
        z-20 animate-float pointer-events-none"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-20 h-20 sm:w-32 sm:h-32 md:w-56 md:h-56 drop-shadow-2xl opacity-80 md:opacity-100"
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
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>


  );
};

export default NotFound;

