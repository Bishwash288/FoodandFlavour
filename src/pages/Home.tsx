import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import flavoursCategory from "@/assets/flavours-category.jpg";
import coloursCategory from "@/assets/colours-category.jpg";
import bakeryCategory from "@/assets/bakery-category.jpg";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const images = document.querySelectorAll('.floating-image');
      
      images.forEach((img, index) => {
        const speed = index % 2 === 0 ? 0.5 : 0.3;
        const yPos = scrollY * speed;
        (img as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary-light/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Taste Innovation
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed max-w-3xl mx-auto">
              Bringing Colour, Flavour, and Delight to Every Creation
            </p>
            <div className="pt-4">
              <Link to="/products">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Floating Images */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Floating Images - Left Side */}
        <motion.img 
          src={flavoursCategory}
          alt="Flavours"
          className="floating-image absolute left-[-100px] top-20 w-64 h-64 object-cover rounded-full opacity-10 blur-sm pointer-events-none"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: -100, opacity: 0.1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.img 
          src={bakeryCategory}
          alt="Bakery"
          className="floating-image absolute left-[-80px] bottom-20 w-48 h-48 object-cover rounded-full opacity-10 blur-sm pointer-events-none"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: -80, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        />
        
        {/* Floating Images - Right Side */}
        <motion.img 
          src={coloursCategory}
          alt="Colours"
          className="floating-image absolute right-[-100px] top-40 w-56 h-56 object-cover rounded-full opacity-10 blur-sm pointer-events-none"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: -100, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                About Flomo Merchandise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-center"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
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
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Floating decoration */}
        <motion.img 
          src={coloursCategory}
          alt="Colours decoration"
          className="floating-image absolute right-[-120px] top-10 w-72 h-72 object-cover rounded-full opacity-10 blur-sm pointer-events-none"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: -120, opacity: 0.1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
                <Sparkles className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Premium Quality</h3>
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
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Trusted Brand</h3>
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
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Customer Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your success is our priority. We provide personalized support to help 
                you achieve the perfect results every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Creations?
            </h2>
            <p className="text-xl text-primary-foreground/95 mb-8 max-w-2xl mx-auto">
              Discover our complete range of food flavours, colours, and bakery ingredients
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
