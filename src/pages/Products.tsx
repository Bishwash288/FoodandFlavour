import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import flavoursCategory from "@/assets/flavours-category.jpg";
import coloursCategory from "@/assets/colours-category.jpg";
import bakeryCategory from "@/assets/bakery-category.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const Products = () => {
  // Auto-scrolling carousel
  const carouselImages = [heroBanner, flavoursCategory, coloursCategory, bakeryCategory];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const productCategories = [
    {
      id: "flavours",
      title: "Food Flavours",
      image: flavoursCategory,
      description: "Premium quality food flavouring essences for every creation",
      products: [
        "Vanilla Essence",
        "Chocolate Flavour",
        "Mango Essence",
        "Strawberry Flavour",
        "Butterscotch Essence",
        "Rose Essence",
        "Pineapple Flavour",
        "Banana Essence",
        "Orange Flavour",
        "Coconut Essence",
        "Coffee Flavour",
        "Almond Essence",
        "Cardamom Flavour",
        "Raspberry Essence",
        "Blueberry Flavour",
        "Cashew Essence",
        "Caramel Flavour",
        "Hazelnut Essence",
        "Paan Flavour",
        "Kesar (Saffron) Essence",
        "Lemon Flavour",
        "Apple Essence",
        "Grape Flavour",
        "Custard Essence",
        "Tutti Frutti Flavour"
      ]
    },
    {
      id: "colours",
      title: "Food Colours",
      image: coloursCategory,
      description: "Vibrant, safe, and certified food colours for stunning presentations",
      products: [
        "Ponceau 4R (Red)",
        "Tartrazine (Yellow)",
        "Sunset Yellow",
        "Brilliant Blue",
        "Apple Green",
        "Raspberry Red",
        "Chocolate Brown",
        "Orange Colour",
        "Pink Colour",
        "Purple Colour",
        "Lemon Yellow",
        "Forest Green",
        "Sky Blue",
        "Spray Powder Colourant (Gold)",
        "Spray Powder Colourant (Silver)",
        "Spray Powder Colourant (Various Colors)",
        "Lassi Colour",
        "Falooda Colour",
        "Liquid Food Colours (All Shades)",
        "Powder Food Colours (All Shades)"
      ]
    },
    {
      id: "bakery",
      title: "Bakery Ingredients",
      image: bakeryCategory,
      description: "Professional-grade ingredients for perfect baking results",
      products: [
        "Vanilla Cake Premix",
        "Chocolate Cake Premix",
        "Red Velvet Cake Premix",
        "Egg-Free Cake Premix",
        "Classic Bread Improver",
        "Ladi Pav (Bun) Bread Improver",
        "Cold Glaze (Neutral)",
        "Cold Glaze (Golden)",
        "Fondant Powder",
        "Spray Powder Colourant",
        "Baking Powder",
        "Custard Powder",
        "Icing Sugar",
        "Vanilla Sugar",
        "Cocoa Powder",
        "Gelatin Powder",
        "Cornflour",
        "Emulsifiers",
        "Cake Gel",
        "Vanilla Custard Powder",
        "Biscuit Premix",
        "Pizza Base Premix"
      ]
    },
    {
      id: "specialty",
      title: "Specialty Products",
      image: flavoursCategory,
      description: "Specialized ingredients for unique culinary creations",
      products: [
        "Ice Cream Stabilizer",
        "Ice Cream Emulsifier",
        "Softy Premix (Vanilla)",
        "Softy Premix (Chocolate)",
        "Softy Premix (Strawberry)",
        "Softy Premix (Mango)",
        "Pista Flavour Mix",
        "Ras Malai Mix",
        "Falooda Mix",
        "Kulfi Mix",
        "Gulab Jamun Mix",
        "Rabdi Mix",
        "Shrikhand Mix",
        "Paneer Mix",
        "Sweet Concentrate (Rose)",
        "Sweet Concentrate (Kewra)",
        "Sweet Concentrate (Orange)",
        "Beverage Powder Base",
        "Jelly Crystals (Various Flavours)"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header with Carousel */}
        <div className="text-center mb-16 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Our Flavourful Range
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive selection of food flavours, colours, and bakery ingredients 
              designed to elevate your culinary creations
            </p>
          </div>

          {/* Auto-Scrolling Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-float h-[400px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={carouselImages[currentImageIndex]}
                  alt={`Product showcase ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              
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
          </motion.div>
        </div>

        {/* Product Categories */}
        <div className="space-y-20">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-500">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <Card className="border-2 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Featured Products</CardTitle>
                    <CardDescription>
                      Available in various packaging sizes for retail and commercial use
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {category.products.map((product) => (
                        <div
                          key={product}
                          className="bg-muted/50 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 border border-border"
                        >
                          {product}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-3xl p-12 border-2 border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Need More Information?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our products, pricing, and bulk ordering options
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
