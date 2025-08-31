"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDrawer = (open) => {
    setMobileMenuOpen(open);
  };

  return (
    <Box>
      {/* ✅ Navbar */}
      <Box
        className="sticky top-0 left-0 right-0 bg-gray-200 border-b border-gray-200 shadow-sm"
        sx={{ zIndex: 20 }}
      >
        <div className="flex items-center justify-between px-6 lg:px-20 h-[70px]">
          {/* Logo */}
          <motion.h1
            onClick={() => router.push("/")}
            className="cursor-pointer text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hire22.ai
            </span>
            <span className="text-sm text-gray-500 ml-2">for employers</span>
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <motion.button
              whileHover={{ scale: 1.05, color: "#2563eb" }}
              onClick={() => router.push("/login")}
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#2563eb" }}
              onClick={() => router.push("/register")}
            >
              Register
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push("/post-job")}
              className="flex items-center gap-1"
            >
              Post a Job
              <span className="bg-blue-600 text-white px-2 py-[2px] text-[10px] rounded-full">
                free
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#2563eb" }}
              onClick={() => router.push("/pricing")}
            >
              Pricing
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <IconButton onClick={() => toggleDrawer(true)}>
              <MenuIcon className="text-gray-700" />
            </IconButton>
          </div>
        </div>
      </Box>

      {/* ✅ Mobile Drawer with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 w-64 h-full bg-white text-gray-800 shadow-xl z-50"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Menu</h2>
              <IconButton onClick={() => toggleDrawer(false)}>
                <CloseIcon className="text-gray-600" />
              </IconButton>
            </div>

            {/* Menu Items */}
            <List>
              {["Login", "Register", "Post a Job", "Pricing"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      router.push(
                        text === "Login"
                          ? "/login"
                          : text === "Register"
                          ? "/register"
                          : text === "Post a Job"
                          ? "/post-job"
                          : "/pricing"
                      );
                      toggleDrawer(false);
                    }}
                    sx={{
                      "&:hover": { backgroundColor: "#f3f4f6" },
                    }}
                  >
                    <ListItemText primary={text} />
                    {text === "Post a Job" && (
                      <span className="bg-blue-600 text-white px-2 py-[2px] text-[10px] rounded-full ml-2">
                        free
                      </span>
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
