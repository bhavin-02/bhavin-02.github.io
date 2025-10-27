import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-purple-900/50 to-neutral-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Glowing 404 */}
        <div className="relative mb-12">
          <div className="text-[8rem] md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text leading-none animate-pulse">
            404
          </div>
          <div className="absolute inset-0 text-[8rem] md:text-[12rem] font-bold text-cyan-400/10 blur-3xl">
            404
          </div>
        </div>

        {/* Elegant message */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-spin" />
            <span className="text-cyan-400 font-medium">Lost in Space</span>
            <Sparkles className="w-6 h-6 text-pink-400 animate-spin" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Page Not Found
          </h1>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            The page you're looking for has drifted into the digital void.
            <br className="hidden md:block" />
            Let's navigate you back to familiar territory.
          </p>
        </div>

        {/* Aesthetic buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Return Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="group flex items-center justify-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Subtle footer */}
        <p className="text-gray-500 mt-12 text-sm">
          "Not all who wander are lost, but this page definitely is."
        </p>
      </div>
    </div>
  );
}
