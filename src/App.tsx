import { motion, AnimatePresence, useInView } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Button({ className, variant = 'hero', size = 'lg', children, ...props }: any) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background cursor-pointer";
  
  const variants = {
    hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
    muted: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    forgive: "bg-rose text-white hover:bg-rose-deep shadow-lg hover:shadow-xl",
  };
  
  const sizes = {
    lg: "h-11 sm:h-14 px-8 text-base sm:text-lg",
  };
  
  return (
    <button className={cn(baseClasses, variants[variant as keyof typeof variants], sizes[size as keyof typeof sizes], className)} {...props}>
      {children}
    </button>
  );
}

const S = [
  "Dear Suku,",
  "I wanted to take a moment to express how much you truly mean to me, beyond anything physical.",
  "Every moment spent talking and sharing life with you is a treasure, and I cherish the emotional bond we share more than words can say.",
  "You bring so much light and joy into my life, and I am grateful for your presence and your genuine care every single day.",
  "I want you to know that I don't visit or value you just for sex, but for true love, companionship, and the deep connection we have.",
  "I care deeply about your feelings and happiness, just as I know you care for me, and that mutual support means everything to me.",
  "I know I haven't always been perfect, but I am committed to listening, learning, and growing right alongside you.",
  "Thank you for being patient with me and for showing me what true kindness, warmth, and real love look like.",
  "My goal is to always make you feel loved, special, and cherished for who you are inside and out, because you deserve the world.",
  "I love you more than you'll ever know."
];

const FN = [
  { id: "1", url: "/assets/rose-bouquet-CmX6kWyv.png", rotation: -4, caption: "Moments of Joy" },
  { id: "2", url: "/assets/cute-cat-sorry-CnLo6c4o.gif", rotation: 3, caption: "Beautiful Memories" },
  { id: "3", url: "/assets/crying-cat-CkSEnu3R.png", rotation: -2, caption: "Our Happy Place" },
  { id: "4", url: "/assets/rose-bouquet-CmX6kWyv.png", rotation: 5, caption: "Forever Together" }
];

function Memories() {
  return (
    <motion.div className="w-full max-w-4xl mx-auto" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
      <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-foreground text-center mb-6 sm:mb-8">Why you are my favorite person</h3>
      <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[450px] p-2 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-8 justify-center max-w-2xl mx-auto">
          {FN.map((n, r) => (
            <motion.div
              key={n.id}
              layout
              initial={{opacity:0, scale:0.8}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.3, delay:r*0.15}}
              className="polaroid group cursor-pointer mx-auto w-full max-w-[280px] sm:max-w-none"
              style={{ rotate: n.rotation }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            >
              <img src={n.url} alt={n.caption} className="w-full h-48 sm:h-56 object-cover rounded bg-muted" />
              <p className="font-script text-center mt-3 sm:mt-4 text-lg sm:text-xl text-foreground">{n.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FinalSurprise() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-3 sm:px-4 py-8 sm:py-12">
      <motion.div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl" animate={{scale:[1,1.2,1], opacity:[0.3,0.5,0.3]}} transition={{duration:4, repeat:Infinity}} />
      <motion.div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent/30 rounded-full blur-3xl" animate={{scale:[1.2,1,1.2], opacity:[0.4,0.6,0.4]}} transition={{duration:5, repeat:Infinity, delay:1}} />
      
      <motion.div className="relative z-10 text-center w-full max-w-4xl" initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:1}}>
        {[...Array(8)].map((_, t) => (
          <motion.span key={t} className="absolute hidden sm:block rounded-full bg-rose/40" style={{left:`${10+t*12}%`, top:`${t%2===0?-10:90}%`, width:"10px", height:"10px"}} animate={{y:[0,-20,0], scale:[1,1.2,1], opacity:[0.5,1,0.5]}} transition={{duration:3+t*0.5, repeat:Infinity}} />
        ))}
        
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-rose-deep mb-8">A Special Gift For You</h2>
        
        <motion.div 
          className="mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl relative bg-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5, rotate: { duration: 10, repeat: Infinity } }}
        >
          <img src="https://images.unsplash.com/photo-1681546898018-961e2a05c6fa?auto=format&fit=crop&q=80&w=800" alt="Biryani Plate" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.p className="text-xl sm:text-2xl mt-12 text-foreground font-medium" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.5}}>
          Order from Zomato and I will pay for it, I love you 😘
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState(1);
  const [isMad, setIsMad] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleScroll = (index: number) => {
    if (!visibleLines.includes(index)) {
      setVisibleLines(prev => [...prev, index]);
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-background min-h-screen font-sans text-foreground overflow-x-hidden relative">
      <audio ref={audioRef} src="/assets/background-music.mp3" loop />
      
      <button 
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 p-3 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:bg-secondary/80 transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        )}
      </button>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.section key="step1" className="min-h-screen flex flex-col items-center justify-center p-4" exit={{ opacity: 0 }}>
            <motion.div className="relative z-10 text-center max-w-2xl mx-auto px-4" variants={containerVariants} initial="initial" animate="animate">
              <div className="mb-8">
                <motion.img 
                  src={isMad ? "/assets/crying-cat-CkSEnu3R.png" : "/assets/cute-cat-sorry-CnLo6c4o.gif"} 
                  alt="Sorry cat" 
                  className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-6 sm:mb-8 rounded-2xl object-cover shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <motion.h1 variants={itemVariants} className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-3 sm:mb-4">
                Hey Suku...
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-rose-deep font-medium mb-3 sm:mb-4">
                I know you're upset with me.
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-8 sm:mb-10 text-base sm:text-lg md:text-xl px-2">
                And I know I messed up. Please hear me out.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center px-2">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" onClick={() => setStep(2)}>
                  Okay, go ahead...
                </Button>
                {!isMad && (
                  <Button variant="muted" size="lg" className="w-full sm:w-auto text-sm sm:text-base" onClick={() => setIsMad(true)}>
                    No, I'm still mad
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {step === 2 && (
          <motion.section key="step2" className="min-h-screen py-12 sm:py-16 px-3 sm:px-4 md:px-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.8}}>
              <div className="floral-border">
                <div className="p-5 sm:p-8 md:p-10 lg:p-12">
                  <motion.h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-foreground text-center mb-6 sm:mb-8 md:mb-10" initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>
                    From the Bottom of My Heart...
                  </motion.h2>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
                    {S.map((text, i) => (
                      <motion.p 
                        key={i}
                        className={`transition-all duration-700 ${i === 0 ? "font-script text-xl sm:text-2xl text-rose-deep" : ""}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {text}
                      </motion.p>
                    ))}
                  </div>
                  <motion.div className="flex justify-center mt-8 sm:mt-10 md:mt-12" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}>
                    <Button variant="hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg" onClick={() => setStep(3)}>
                      There's more...
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {step === 3 && (
          <motion.section key="step3" className="min-h-screen py-12 sm:py-16 px-3 sm:px-4 md:px-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="w-full max-w-5xl mx-auto">
              <motion.div className="text-center mb-8 sm:mb-10 md:mb-12" initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
                <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">Our Memories</h2>
                <p className="text-muted-foreground text-base sm:text-lg px-4">Look at all the beautiful moments we've shared...</p>
              </motion.div>
              
              <motion.div className="w-full" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:0.6}}>
                <Memories />
              </motion.div>
              
              <motion.div className="flex justify-center mt-12 sm:mt-14 md:mt-16 px-4" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.8}}>
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg" onClick={() => setStep(4)}>
                  One last thing...
                </Button>
              </motion.div>
            </div>
          </motion.section>
        )}

        {step === 4 && (
          <motion.section key="step4" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="w-full max-w-sm sm:max-w-md lg:max-w-lg text-center" variants={containerVariants} initial="initial" animate="animate">
              {showSurprise ? (
                <>
                  <motion.div className="relative mx-auto mb-4 sm:mb-6 w-44 sm:w-56 md:w-64 lg:w-72 rounded-2xl overflow-hidden bg-transparent" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{type:"spring", bounce:0.4}}>
                    <video src="/assets/bunny-bear-gift-D-FynrUA.mp4" autoPlay loop muted playsInline className="w-full h-auto mix-blend-multiply dark:mix-blend-screen opacity-90" />
                  </motion.div>
                  <motion.h2 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4" initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{type:"spring", bounce:0.5}}>
                    Thank you, Suku.
                  </motion.h2>
                  <motion.p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>
                    You're the best person in the world.
                  </motion.p>
                  <motion.p className="text-rose-deep font-script mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}>
                    I love you so much, Suku.
                  </motion.p>
                  <motion.p className="text-muted-foreground text-sm mb-6" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
                    — Yours forever, Suku.
                  </motion.p>
                  <motion.div className="px-4" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6}}>
                    <Button variant="hero" size="lg" className="w-full sm:w-auto text-base sm:text-lg" onClick={() => setStep(5)}>
                      Something special for you...
                    </Button>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.h2 variants={itemVariants} className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
                    Will you forgive me?
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 px-2">
                    I'm truly sorry, Suku.<br/>I also have a surprise for you.
                  </motion.p>
                  <motion.div variants={itemVariants} className="px-4">
                    <Button variant="forgive" className="w-full sm:w-auto text-base sm:text-lg px-8 py-3" onClick={() => setShowSurprise(true)}>
                      Yes, I forgive you
                    </Button>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.section>
        )}

        {step === 5 && (
          <motion.section key="step5" className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 py-12 sm:py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FinalSurprise />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

