
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function NewGameCard({ game, direction, onSwipe }) {
   const navigate = useNavigate();
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      rotate: direction > 0 ? 2 : -2,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    },

    exit: (direction) => ({
      x: direction > 0 ? 700 : -700,
      opacity: 0,
      scale: 0.9,
      rotate: direction > 0 ? 8 : -8,
    }),
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 120) {
      onSwipe(1);
    } else if (info.offset.x < -120) {
      onSwipe(-1);
    }
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
        onClick={() => navigate(`/game/${game._id}`)}
      initial="enter"
      animate="center"
      exit="exit"

      // Faster animation
      transition={{
        x: {
          type: "spring",
          stiffness: 1200,
          damping: 40,
          mass: 0.5,
        },

        scale: {
          duration: 0.12,
          ease: "easeOut",
        },

        opacity: {
          duration: 0.1,
        },

        rotate: {
          duration: 0.15,
          ease: "easeOut",
        },
      }}

      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}

      whileDrag={{
        scale: 1.02,
        rotate: 1,
      }}

      className="
        absolute
        inset-0
        z-20
        h-[550px]
        w-full
        max-w-3xl
        mx-auto
        cursor-grab
        overflow-hidden
        rounded-3xl
        border
        border-slate-700
        bg-[#121126]
        shadow-[0_25px_80px_rgba(0,0,0,0.55)]
        active:cursor-grabbing
      "
    >
      {/* Image */}
      <img
        src={game.image}
        alt={game.title}
        draggable="false"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          select-none
          pointer-events-none
        "
      />

      {/* Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#05040f]
          via-[#080717]/75
          to-transparent
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-cyan-400
          "
        >
          Featured Release
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          {game.title}
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          {game.year}
        </p>

        {/* Genres */}
        <div className="mt-4 flex gap-2">
          {game.genres.map((genre) => (
            <span
              key={genre}
              className="
                rounded-md
                border
                border-cyan-400/30
                bg-cyan-400/10
                px-3
                py-1
                text-xs
                text-cyan-300
              "
            >
              {genre}
            </span>
          ))}
        </div>

        <p
          className="
            mt-5
            max-w-xl
            leading-7
            text-slate-300
          "
        >
          {game.description}
        </p>
      </div>
    </motion.div>
  );
}

export default NewGameCard;

