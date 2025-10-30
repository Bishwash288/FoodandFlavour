import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import flavoursCategory from "@/assets/flavours-category.jpg";
import coloursCategory from "@/assets/colours-category.jpg";
import bakeryCategory from "@/assets/bakery-category.jpg";
import CookieConsent from "@/components/CookieConsent";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const leftImageX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const rightImageX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const centerScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Auto-scrolling carousel
  const carouselImages = [heroBanner, flavoursCategory, coloursCategory, bakeryCategory];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section with Animated Background */}
      <section 
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Animated Background Images - Brighter */}
        <motion.div 
          style={{ x: leftImageX }}
          className="absolute left-0 top-0 w-1/3 h-full opacity-50 z-0"
        >
          <img 
            src={flavoursCategory} 
            alt="Flavours decoration" 
            className="w-full h-full object-cover brightness-110"
          />
        </motion.div>
        
        <motion.div 
          style={{ x: rightImageX }}
          className="absolute right-0 top-0 w-1/3 h-full opacity-50 z-0"
        >
          <img 
            src={coloursCategory} 
            alt="Colours decoration" 
            className="w-full h-full object-cover brightness-110"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />
        
        <div className="relative z-10 container mx-auto px-4 py-32">
          <motion.div 
            style={{ opacity: textOpacity }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight"
            >
              Taste Innovation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Bringing Colour, Flavour, and Delight to Every Creation
            </motion.p>
          </motion.div>
          
          {/* Center Auto-Scrolling Carousel */}
          <motion.div
            style={{ scale: centerScale }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20"
          >
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-float h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={carouselImages[currentImageIndex]}
                    alt={`Carousel image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-primary w-8"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Section - Modern Animated Cards */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Our Product Range
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                image: flavoursCategory,
                title: "Flavours",
                description: "Premium food flavoring solutions",
                delay: 0
              },
              {
                image: coloursCategory,
                title: "Colours",
                description: "Vibrant and safe food coloring",
                delay: 0.2
              },
              {
                image: bakeryCategory,
                title: "Bakery",
                description: "Essential bakery ingredients",
                delay: 0.4
              }
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: product.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-float hover:shadow-strong transition-all duration-500 bg-card">
                  <div className="aspect-[4/5] overflow-hidden">
                    <motion.img 
                      src={product.image} 
                      alt={`${product.title} category`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {product.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {product.description}
                    </motion.p>
                  </motion.div>
                  
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary rounded-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-muted/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                About Flomo Merchandise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* CEO Section - Animated from Left */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-2xl blur-xl" />
                  <div className="relative bg-card p-8 rounded-2xl shadow-float border-2 border-primary/20">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                        FL
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">Leadership</h3>
                        <p className="text-sm text-primary font-semibold">Founded with Vision</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Under visionary leadership, Flomo Merchandise has grown into a trusted name 
                          in the food ingredients industry, bringing innovation and quality to every product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Company Description */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Flomo Merchandise specializes in quality food flavours, colours, and bakery 
                  ingredients that redefine taste and creativity. We take pride in providing 
                  superior products that help bakers, chefs, and food manufacturers create 
                  exceptional culinary experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to excellence ensures that every product meets the highest 
                  standards of quality, helping you transform ordinary recipes into extraordinary 
                  creations that delight every palate.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-2xl shadow-float hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 border-border group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source and supply only the finest food flavours, colours, and bakery 
                ingredients that meet international quality standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-2xl shadow-float hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 border-border group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Trusted Brand</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on a foundation of trust and reliability, we've become a preferred 
                partner for food businesses across the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-2xl shadow-float hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 border-border group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Customer Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your success is our priority. We provide personalized support to help 
                you achieve the perfect results every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Ready to Transform Your Creations?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our complete range of food flavours, colours, and bakery ingredients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 border-2 hover:bg-card transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <CookieConsent />
    </div>
  );
};

export default Home;
