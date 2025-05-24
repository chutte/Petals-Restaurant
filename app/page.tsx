"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  Flower,
  Coffee,
  Bed,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

// Import data
import contactData from "@/data/contact.json";
import menuData from "@/data/menu.json";
import reviewsData from "@/data/reviews.json";
import servicesData from "@/data/services.json";

export default function PetalsRestaurant() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [partySize, setPartySize] = useState("");

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: {
      scale: 1.05,
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    whileTap: { scale: 0.95 },
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9d6af]/10 text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#912914]/10 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-3xl font-serif tracking-wider text-[#912914]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {contactData.restaurant.name}
          </motion.a>
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              "Home",
              "About",
              "Menu",
              "Gallery",
              "Reviews",
              "Reservations",
              "Location",
            ].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-[#912914] transition-colors duration-300 relative group"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                custom={index}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#912914]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-[#912914] text-white hover:bg-[#912914]/90 transition-all duration-300"
              onClick={() => window.open(contactData.links.uberEats, "_blank")}
            >
              Order on Uber Eats
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f9d6af]/20 to-white"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10"
          style={{ y, opacity }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        >
          <img
            src="/header.jpeg?height=1080&width=1920"
            alt="Beautiful restaurant interior with flowers"
            className="w-full h-full object-cover opacity-70"
          />
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-[#912914]/20 rounded-full"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-[#f9d6af]/40 rounded-full"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-[#912914]/30 rounded-full"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 2 }}
        />

        <div className="container mx-auto px-6 py-32 relative z-20">
          <div className="max-w-2xl">
            <motion.p
              className="text-xl font-serif mb-6 text-[#912914]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to
            </motion.p>
            <motion.h1
              className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight text-[#912914]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {contactData.restaurant.name}
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {contactData.restaurant.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-[#912914] text-white hover:bg-[#912914]/90 transition-all duration-300 group"
                >
                  View Menu
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#912914] text-[#912914] hover:bg-[#912914] hover:text-white transition-all duration-300"
                  onClick={() =>
                    window.open(contactData.links.uberEats, "_blank")
                  }
                >
                  Order on Uber Eats
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge
                variant="secondary"
                className="bg-[#912914]/10 text-[#912914] border-[#912914]/20"
              >
                Temporarily Closed - Available on Uber Eats
              </Badge>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Menu Section */}
      <MenuSection menuItems={menuData.categories} />

      {/* Gallery Section */}
      <GallerySection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Reservations Section */}
      <ReservationsSection
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        partySize={partySize}
        setPartySize={setPartySize}
      />

      {/* Location Section */}
      <LocationSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const iconMap = {
    Coffee: Coffee,
    Flower: Flower,
    Bed: Bed,
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-[#f9d6af]/5"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif font-bold mb-6 text-[#912914]">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Petals, we believe in creating moments of beauty and comfort. Our
            unique concept combines exceptional dining with floral artistry and
            hospitality.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white border-[#912914]/20 hover:border-[#912914]/40 hover:shadow-lg transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-12 w-12 text-[#912914] mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-serif mb-4 text-[#912914]">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function MenuSection({ menuItems }: { menuItems: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="menu"
      className="py-24 bg-gradient-to-b from-[#f9d6af]/5 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif font-bold mb-6 text-[#912914]">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our seasonal menu featuring fresh, locally-sourced
            ingredients and artistic presentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <motion.h3
                className="text-3xl font-serif text-[#912914] mb-8 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {category.category}
              </motion.h3>
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {category.items.map((item: any, itemIndex: number) => (
                  <motion.div key={itemIndex} variants={itemVariants}>
                    <Card className="bg-white border-[#912914]/15 hover:border-[#912914]/30 hover:shadow-md transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <motion.h4
                              className="text-xl font-serif text-[#912914]"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.name}
                            </motion.h4>
                            <motion.span
                              className="text-[#912914] font-bold text-lg"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.price}
                            </motion.span>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-white to-[#f9d6af]/5"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif font-bold mb-6 text-[#912914]">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse into the beauty and elegance of Petals
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={`/placeholder.svg?height=400&width=600`}
                alt={`Gallery image ${index}`}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#912914]/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/90 px-4 py-2 rounded-full text-[#912914] font-serif">
                  View Image
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-[#f9d6af]/5 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif font-bold mb-6 text-[#912914]">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why our guests fall in love with the Petals experience
          </p>
          <motion.div
            className="flex items-center justify-center gap-8 mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              {
                value: reviewsData.stats.averageRating,
                label: "Average Rating",
                stars: true,
              },
              {
                value: reviewsData.stats.totalCustomers,
                label: "Happy Customers",
              },
              {
                value: reviewsData.stats.recommendationRate,
                label: "Would Recommend",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#912914] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                {stat.stars && (
                  <div className="flex text-[#912914] mb-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                )}
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reviewsData.reviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white border-[#912914]/15 hover:border-[#912914]/30 hover:shadow-lg transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-[#912914] to-[#f9d6af] rounded-full flex items-center justify-center text-white font-serif font-bold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </motion.div>
                      <div>
                        <h4 className="font-serif text-[#912914] text-lg">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="flex text-[#912914]">
                            {[...Array(review.rating)].map((_, i) => (
                              <motion.svg
                                key={i}
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </motion.svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{review.review}"
                    </p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-[#912914] text-[#912914] hover:bg-[#912914] hover:text-white transition-all duration-300"
              onClick={() => window.open(contactData.links.googleReviews, '_blank')}
            >
              Read More Reviews
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ReservationsSection({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  partySize,
  setPartySize,
}: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="reservations"
      className="py-24 bg-gradient-to-b from-white to-[#f9d6af]/5"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif font-bold mb-6 text-[#912914]">
            Make a Reservation
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Currently accepting reservations for when we reopen
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Badge
              variant="secondary"
              className="bg-[#912914]/10 text-[#912914] border-[#912914]/20"
            >
              Temporarily Closed - Reopening Soon
            </Badge>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="bg-white border-[#912914]/20 shadow-lg">
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="p-8">
                <form className="space-y-6">
                  <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#912914] transition-colors duration-300">
                        Name
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          className="bg-white border-gray-300 text-gray-800 focus:border-[#912914] focus:ring-[#912914] transition-all duration-300"
                          placeholder="Your name"
                        />
                      </motion.div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#912914] transition-colors duration-300">
                        Email
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          className="bg-white border-gray-300 text-gray-800 focus:border-[#912914] focus:ring-[#912914] transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#912914] transition-colors duration-300">
                        Date
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          type="date"
                          className="bg-white border-gray-300 text-gray-800 focus:border-[#912914] focus:ring-[#912914] transition-all duration-300"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </motion.div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#912914] transition-colors duration-300">
                        Time
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          type="time"
                          className="bg-white border-gray-300 text-gray-800 focus:border-[#912914] focus:ring-[#912914] transition-all duration-300"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        />
                      </motion.div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#912914] transition-colors duration-300">
                        Party Size
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          type="number"
                          className="bg-white border-gray-300 text-gray-800 focus:border-[#912914] focus:ring-[#912914] transition-all duration-300"
                          placeholder="2"
                          value={partySize}
                          onChange={(e) => setPartySize(e.target.value)}
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#912914] transition-colors duration-300">
                        Special Requests
                      </label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Textarea
                          className="bg-white border-gray-300 text-gray-800 focus:border-[#912914] focus:ring-[#912914] transition-all duration-300"
                          placeholder="Any special requests or dietary restrictions..."
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-[#912914] text-white hover:bg-[#912914]/90 transition-all duration-300">
                      Request Reservation
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="location"
      className="py-24 bg-gradient-to-b from-[#f9d6af]/5 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif font-bold mb-6 text-[#912914]">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600">
            Find us in the heart of the city
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: MapPin,
                title: "Address",
                content: [
                  contactData.address.street,
                  `${contactData.address.city} ${contactData.address.postalCode}`,
                  contactData.address.country,
                ],
              },
              {
                icon: Clock,
                title: "Hours",
                content: [
                  contactData.hours.weekdays,
                  contactData.hours.weekends,
                  contactData.hours.status,
                ],
              },
              {
                icon: Phone,
                title: "Contact",
                content: [contactData.contact.phone, contactData.contact.email],
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white border-[#912914]/20 shadow-md hover:shadow-lg transition-all duration-300">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <item.icon className="h-6 w-6 text-[#912914]" />
                        </motion.div>
                        <h3 className="text-xl font-serif text-[#912914]">
                          {item.title}
                        </h3>
                      </div>
                      <div className="text-gray-600 space-y-1">
                        {item.content.map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className={`${
                              line.includes("Currently Closed")
                                ? "text-[#912914] font-medium"
                                : ""
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1219562885735!2d80.35350629999999!3d5.977939999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae11300d1a390af%3A0x2455d69028da7bc1!2sPetals!5e0!3m2!1sen!2slk!4v1748096346166!5m2!1sen!2slk"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Petals Restaurant Location"
                className="w-full h-96"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.footer
      className="bg-[#f9d6af]/10 border-t border-[#912914]/20 py-12"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <motion.h3
              className="text-2xl font-serif mb-4 text-[#912914]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {contactData.restaurant.name}
            </motion.h3>
            <p className="text-gray-600 mb-4">
              {contactData.restaurant.tagline}
            </p>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#912914] text-[#912914] hover:bg-[#912914] hover:text-white transition-all duration-300"
                  onClick={() =>
                    window.open(contactData.links.uberEats, "_blank")
                  }
                >
                  Order Now
                </Button>
              </motion.div>
            </div>
          </div>

          {[
            {
              title: "Quick Links",
              items: ["Menu", "Reservations", "Gallery", "Location"],
            },
            {
              title: "Services",
              items: [
                "Breakfast & Brunch",
                "Fresh Flowers",
                "Guest Rooms",
                "Uber Eats Delivery",
              ],
            },
            {
              title: "Contact",
              items: [
                contactData.address.street,
                `${contactData.address.city} ${contactData.address.postalCode}, ${contactData.address.country}`,
                contactData.contact.phone,
                contactData.contact.email,
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <h4 className="text-lg font-serif mb-4 text-[#912914]">
                {section.title}
              </h4>
              <div className="space-y-2 text-gray-600">
                {section.items.map((item, itemIndex) => (
                  <motion.p
                    key={itemIndex}
                    className="hover:text-[#912914] transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-[#912914]/20 mt-8 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="hover:text-gray-600 transition-colors duration-300">
            &copy; 2025 Petals Restaurant. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
