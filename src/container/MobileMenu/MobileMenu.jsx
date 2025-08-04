import Navbar from "../../components/Navbar/Navbar";
import Footer from '../Footer/Footer';
import MobileMenuItem from '../MobileMenuItem/MobileMenuItem';

import React, { Component } from 'react';
import './MobileMenu.css';

const menuData = {
  "items": [
    // Veg Appetizers
    {"id": 1, "title": "Crispy Pepper Fries/Masala Fries", "cost": "4.99", "category": 1, "isVeg": true},
    {"id": 2, "title": "Aloo Samosa - 2", "cost": "5.99", "category": 1, "isVeg": true},
    {"id": 3, "title": "Corn kernel Samosa - 5", "cost": "5.99", "category": 1, "isVeg": true},
    {"id": 4, "title": "Mirchi Bajji - 5 pieces", "cost": "5.99", "category": 1, "isVeg": true},
    {"id": 5, "title": "Karivepaku Corn", "cost": "9.99", "category": 1, "isVeg": true},
    {"id": 6, "title": "Bindaz Paneer 65", "cost": "10.99", "category": 1, "isVeg": true},
    {"id": 7, "title": "Mix Veggie Samosa - 5", "cost": "14.99", "category": 1, "isVeg": true},
    {"id": 8, "title": "Karivepaku Gobhi fry", "cost": "14.99", "category": 1, "isVeg": true},
    {"id": 9, "title": "Crispy Baby Corn fry", "cost": "14.99", "category": 1, "isVeg": true},
    {"id": 10, "title": "Onion Samosa - 5", "cost": "14.99", "category": 1, "isVeg": true},
    {"id": 11, "title": "Karivepaku Paneer", "cost": "14.99", "category": 1, "isVeg": true},
    {"id": 12, "title": "Gobhi Manchurian fry", "cost": "13.99", "category": 1, "isVeg": true},
    {"id": 13, "title": "Cut Mirchi", "cost": "13.99", "category": 1, "isVeg": true},
    {"id": 14, "title": "Sweet chilli paneer", "cost": "14.99", "category": 1, "isVeg": true},
    {"id": 15, "title": "Chilli Paneer", "cost": "14.99", "category": 1, "isVeg": true},

    // Chicken Appetizers
    {"id": 16, "title": "Chicken 65 fry", "cost": "15.99", "category": 2, "isVeg": false},
    {"id": 17, "title": "Chicken Majestic", "cost": "15.99", "category": 2, "isVeg": false},
    {"id": 18, "title": "Bindaz Chicken 65 - Wet", "cost": "15.99", "category": 2, "isVeg": false},
    {"id": 19, "title": "Chilly Chicken", "cost": "15.99", "category": 2, "isVeg": false},
    {"id": 20, "title": "Lemon Pepper Chicken", "cost": "15.99", "category": 2, "isVeg": false},
    {"id": 21, "title": "Sweet Chilli Chicken", "cost": "15.99", "category": 2, "isVeg": false},
    {"id": 22, "title": "Karivepaku Chicken", "cost": "15.99", "category": 2, "isVeg": false},
    {"id": 23, "title": "Chicken Manchurian", "cost": "15.99", "category": 2, "isVeg": false},
    {"id": 24, "title": "Schezwan Chicken", "cost": "15.99", "category": 2, "isVeg": false},

    // Seafood Appetizers
    {"id": 25, "title": "Chilly Fish", "cost": "16.99", "category": 3, "isVeg": false},
    {"id": 26, "title": "Sweet Chilli Shrimp", "cost": "14.99", "category": 3, "isVeg": false},
    {"id": 27, "title": "Fish Apollo", "cost": "16.99", "category": 3, "isVeg": false},
    {"id": 28, "title": "Schezwan Shrimp", "cost": "14.99", "category": 3, "isVeg": false},
    {"id": 29, "title": "Chilly Shrimp", "cost": "16.99", "category": 3, "isVeg": false},
    {"id": 30, "title": "Lemon Pepper Shrimp", "cost": "15.99", "category": 3, "isVeg": false},
    {"id": 31, "title": "Crispy Prawns 65 fry", "cost": "16.99", "category": 3, "isVeg": false},
    {"id": 32, "title": "Karivepaku Shrimp", "cost": "15.99", "category": 3, "isVeg": false},
    {"id": 33, "title": "Fish Manchurian", "cost": "16.99", "category": 3, "isVeg": false},

    // Veg Tandoor/Kababs
    {"id": 34, "title": "Bindaz Tandoori Paneer Platter", "cost": "29.99", "category": 4, "isVeg": true},
    {"id": 35, "title": "Achari Paneer Tikka", "cost": "15.99", "category": 4, "isVeg": true},
    {"id": 36, "title": "Haryali Paneer Tikka", "cost": "15.99", "category": 4, "isVeg": true},
    {"id": 37, "title": "Malai Paneer Kabab", "cost": "15.99", "category": 4, "isVeg": true},
    {"id": 38, "title": "Paneer Tikka Kabab", "cost": "15.99", "category": 4, "isVeg": true},

    // Non-Veg Tandoor/Kababs
    {"id": 39, "title": "Bindaz Tandoori Mix", "cost": "29.99", "category": 5, "isVeg": false},
    {"id": 40, "title": "Chicken & Naan", "cost": "16.99", "category": 5, "isVeg": false},
    {"id": 41, "title": "Tandoori Chicken 4*4", "cost": "15.99", "category": 5, "isVeg": false},
    {"id": 42, "title": "Chicken Malai Kabab", "cost": "16.99", "category": 5, "isVeg": false},
    {"id": 43, "title": "Tandoori Chicken 2*2", "cost": "35.99", "category": 5, "isVeg": false},
    {"id": 44, "title": "Chicken Tikka Kabab", "cost": "16.99", "category": 5, "isVeg": false},
    {"id": 45, "title": "Bindaz Tandoori Chicken Platter", "cost": "15.99", "category": 5, "isVeg": false},
    {"id": 46, "title": "Haryali Chicken Tikka", "cost": "19.99", "category": 5, "isVeg": false},
    {"id": 47, "title": "Tangdi Kabab", "cost": "15.99", "category": 5, "isVeg": false},

    // Indo Chinese Veg
    {"id": 48, "title": "Veg Schezwan Noodles", "cost": "13.99", "category": 6, "isVeg": true},
    {"id": 49, "title": "Veg Hakka Noodles", "cost": "13.99", "category": 6, "isVeg": true},
    {"id": 50, "title": "Veg Hakka Fried Rice", "cost": "13.99", "category": 6, "isVeg": true},
    {"id": 51, "title": "Veg Schezwan Fried Rice", "cost": "13.99", "category": 6, "isVeg": true},

    // Indo Chinese Non-Veg
    {"id": 52, "title": "Chicken Hakka Noodles", "cost": "16.99", "category": 7, "isVeg": false},
    {"id": 53, "title": "Chicken Hakka Fried Rice", "cost": "14.99", "category": 7, "isVeg": false},
    {"id": 54, "title": "Shrimp Schezwan Noodles", "cost": "16.99", "category": 7, "isVeg": false},
    {"id": 55, "title": "Egg Schezwan Noodles", "cost": "14.99", "category": 7, "isVeg": false},
    {"id": 56, "title": "Chicken Schezwan Noodles", "cost": "16.99", "category": 7, "isVeg": false},
    {"id": 57, "title": "Shrimp Schezwan Fried Rice", "cost": "14.99", "category": 7, "isVeg": false},
    {"id": 58, "title": "Egg Hakka Noodles", "cost": "16.99", "category": 7, "isVeg": false},
    {"id": 59, "title": "Egg Fried Rice", "cost": "15.99", "category": 7, "isVeg": false},
    {"id": 60, "title": "Chicken Schezwan Fried Rice", "cost": "16.99", "category": 7, "isVeg": false},
    {"id": 61, "title": "Egg Schezwan Fried Rice", "cost": "15.99", "category": 7, "isVeg": false},
    {"id": 62, "title": "Shrimp Hakka Noodles", "cost": "16.99", "category": 7, "isVeg": false},
    {"id": 63, "title": "Shrimp Fried Rice", "cost": "15.99", "category": 7, "isVeg": false},

    // Veg Entrees
    {"id": 64, "title": "Dal Palak (spinach)", "cost": "13.99", "category": 8, "isVeg": true},
    {"id": 65, "title": "Dal Makhani", "cost": "14.99", "category": 8, "isVeg": true},
    {"id": 66, "title": "Saag Chana", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 67, "title": "Methi Chaman", "cost": "14.99", "category": 8, "isVeg": true},
    {"id": 68, "title": "Paneer Butter Masala", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 69, "title": "Muttar Paneer", "cost": "14.99", "category": 8, "isVeg": true},
    {"id": 70, "title": "Paneer Tikka Masala", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 71, "title": "Paneer Bhurji", "cost": "14.99", "category": 8, "isVeg": true},
    {"id": 72, "title": "Kaju Paneer", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 73, "title": "Saag Paneer", "cost": "14.99", "category": 8, "isVeg": true},
    {"id": 74, "title": "Dal Tadka", "cost": "13.99", "category": 8, "isVeg": true},
    {"id": 75, "title": "Navarathan Khorma", "cost": "16.99", "category": 8, "isVeg": true},
    {"id": 76, "title": "Kadhai Paneer", "cost": "16.99", "category": 8, "isVeg": true},
    {"id": 77, "title": "Aloo Gobi Mutter", "cost": "14.99", "category": 8, "isVeg": true},
    {"id": 78, "title": "Bhagara Baigan", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 79, "title": "Andhra Spicy Dal", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 80, "title": "Bhindi masala", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 81, "title": "Gongura Spicy Dal", "cost": "14.99", "category": 8, "isVeg": true},
    {"id": 82, "title": "Chana masala", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 83, "title": "Vegetable Khorma", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 84, "title": "Channa Batura", "cost": "15.99", "category": 8, "isVeg": true},
    {"id": 85, "title": "Mughlai Paneer", "cost": "14.99", "category": 8, "isVeg": true},
    {"id": 86, "title": "Channa Poori", "cost": "13.99", "category": 8, "isVeg": true},
    {"id": 87, "title": "Malai Kofta", "cost": "16.99", "category": 8, "isVeg": true},

    // Chicken Entrees
    {"id": 88, "title": "Kaju Chicken Curry", "cost": "16.99", "category": 9, "isVeg": false},
    {"id": 89, "title": "Gongura Chicken Curry", "cost": "14.99", "category": 9, "isVeg": false},
    {"id": 90, "title": "Butter Chicken", "cost": "15.99", "category": 9, "isVeg": false},
    {"id": 91, "title": "Chicken Tikka Masala", "cost": "15.99", "category": 9, "isVeg": false},
    {"id": 92, "title": "Chicken Mughlai Khorma", "cost": "15.99", "category": 9, "isVeg": false},
    {"id": 93, "title": "Chettinad Chicken", "cost": "14.99", "category": 9, "isVeg": false},
    {"id": 94, "title": "Chicken Bhuna Masala", "cost": "13.99", "category": 9, "isVeg": false},
    {"id": 95, "title": "Ulavacharu Chicken Curry", "cost": "16.99", "category": 9, "isVeg": false},
    {"id": 96, "title": "Bindaz Spicy Chicken Curry", "cost": "16.99", "category": 9, "isVeg": false},
    {"id": 97, "title": "Chicken Vindaloo", "cost": "14.99", "category": 9, "isVeg": false},
    {"id": 98, "title": "Chicken Mughlai", "cost": "15.99", "category": 9, "isVeg": false},
    {"id": 99, "title": "Saag Chicken", "cost": "14.99", "category": 9, "isVeg": false},
    {"id": 100, "title": "Chicken Tikka Saag", "cost": "15.99", "category": 9, "isVeg": false},
    {"id": 101, "title": "Kadai Chicken", "cost": "14.99", "category": 9, "isVeg": false},

    // Egg Entrees
    {"id": 102, "title": "Haryana Egg Curry", "cost": "15.99", "category": 10, "isVeg": false},
    {"id": 103, "title": "Nizami Special Egg Curry", "cost": "14.99", "category": 10, "isVeg": false},
    {"id": 104, "title": "Egg Bhurji", "cost": "13.99", "category": 10, "isVeg": false},
    {"id": 105, "title": "Egg Masala Curry", "cost": "15.99", "category": 10, "isVeg": false},

    // Seafood Entrees
    {"id": 106, "title": "Fish Masala Curry", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 107, "title": "Kadai Prawn", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 108, "title": "Prawn Masala", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 109, "title": "Malai Prawn", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 110, "title": "Gongura Spicy Fish Curry", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 111, "title": "Chettinad Fish Curry", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 112, "title": "Prawn Chettinad", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 113, "title": "Prawn Butter Masala", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 114, "title": "Gongura Prawns", "cost": "16.99", "category": 11, "isVeg": false},
    {"id": 115, "title": "Prawn Bhuna Masala", "cost": "16.99", "category": 11, "isVeg": false},

    // Goat Entrees
    {"id": 116, "title": "Kadai Goat", "cost": "16.99", "category": 12, "isVeg": false},
    {"id": 117, "title": "Goat Malai", "cost": "16.99", "category": 12, "isVeg": false},
    {"id": 118, "title": "Goat Bhuna Masala", "cost": "16.99", "category": 12, "isVeg": false},
    {"id": 119, "title": "Gongura Goat Curry (sorel leaf)", "cost": "16.99", "category": 12, "isVeg": false},
    {"id": 120, "title": "Goat Rogan Josh", "cost": "16.99", "category": 12, "isVeg": false},
    {"id": 121, "title": "Chettinad Goat Curry", "cost": "16.99", "category": 12, "isVeg": false},
    {"id": 122, "title": "Ulavacharu Goat Curry", "cost": "16.99", "category": 12, "isVeg": false},
    {"id": 123, "title": "Bindaz Spicy Goat Curry", "cost": "16.99", "category": 12, "isVeg": false},

    // Lamb Entrees
    {"id": 124, "title": "Lamb Khorma", "cost": "16.99", "category": 13, "isVeg": false},
    {"id": 125, "title": "Gongura Lamb Curry", "cost": "16.99", "category": 13, "isVeg": false},
    {"id": 126, "title": "Bindaz Spicy Lamb Curry", "cost": "16.99", "category": 13, "isVeg": false},
    {"id": 127, "title": "Ulavacharu Lamb Curry", "cost": "16.99", "category": 13, "isVeg": false},
    {"id": 128, "title": "Lamb Saag", "cost": "16.99", "category": 13, "isVeg": false},
    {"id": 129, "title": "Lamb Rogan Josh", "cost": "16.99", "category": 13, "isVeg": false},
    {"id": 130, "title": "Kadai Lamb", "cost": "16.99", "category": 13, "isVeg": false},
    {"id": 131, "title": "Lamb Vindaloo", "cost": "16.99", "category": 13, "isVeg": false},
    {"id": 132, "title": "Lamb Bhuna Masala", "cost": "16.99", "category": 13, "isVeg": false},

    // Naans & Rotis
    {"id": 133, "title": "Butter Naan", "cost": "2.49", "category": 14, "isVeg": true},
    {"id": 134, "title": "Ajwain Paratha", "cost": "4.99", "category": 14, "isVeg": true},
    {"id": 135, "title": "Chilli Naan", "cost": "7.99", "category": 14, "isVeg": true},
    {"id": 136, "title": "Garlic Naan", "cost": "2.99", "category": 14, "isVeg": true},
    {"id": 137, "title": "Cheese Naan", "cost": "4.99", "category": 14, "isVeg": true},
    {"id": 138, "title": "Paneer Naan", "cost": "7.99", "category": 14, "isVeg": true},
    {"id": 139, "title": "Plain Bathura", "cost": "3.99", "category": 14, "isVeg": true},
    {"id": 140, "title": "Aloo Paratha", "cost": "5.99", "category": 14, "isVeg": true},
    {"id": 141, "title": "Methi Roti", "cost": "3.99", "category": 14, "isVeg": true},
    {"id": 142, "title": "Pudina Paratha", "cost": "5.99", "category": 14, "isVeg": true},
    {"id": 143, "title": "Roti", "cost": "4.99", "category": 14, "isVeg": true},
    {"id": 144, "title": "Laccha Paratha", "cost": "5.99", "category": 14, "isVeg": true},
    {"id": 145, "title": "Cheese Garlic Naan", "cost": "3.49", "category": 14, "isVeg": true},
    {"id": 146, "title": "Plain Naan", "cost": "5.99", "category": 14, "isVeg": true},
    {"id": 147, "title": "Butter Roti", "cost": "4.99", "category": 14, "isVeg": true},
    {"id": 148, "title": "Onion Kulcha", "cost": "4.99", "category": 14, "isVeg": true},
    {"id": 149, "title": "Paneer Garlic Naan", "cost": "6.99", "category": 14, "isVeg": true},
    {"id": 150, "title": "Poori Plain", "cost": "6.99", "category": 14, "isVeg": true},
    {"id": 151, "title": "Methi Paratha", "cost": "2.49", "category": 14, "isVeg": true},

    // Veg Biryanis
    {"id": 152, "title": "Dil Kush Paneer Biryani", "cost": "16.99", "category": 15, "isVeg": true},
    {"id": 153, "title": "Bindaz Paneer 65 Biryani", "cost": "15.99", "category": 15, "isVeg": true},
    {"id": 154, "title": "Gutti Vankaya Biryani (eggplant)", "cost": "15.99", "category": 15, "isVeg": true},
    {"id": 155, "title": "Shahi Paneer Biryani", "cost": "15.99", "category": 15, "isVeg": true},
    {"id": 156, "title": "Veg Biryani", "cost": "14.99", "category": 15, "isVeg": true},
    {"id": 157, "title": "Bindaz Paneer Biryani", "cost": "17.49", "category": 15, "isVeg": true},
    {"id": 158, "title": "Paneer Vegetable Biryani", "cost": "15.99", "category": 15, "isVeg": true},
    {"id": 159, "title": "Paneer Tikka Biryani", "cost": "15.99", "category": 15, "isVeg": true},
    {"id": 160, "title": "Ulavacharu Veg Biryani", "cost": "15.99", "category": 15, "isVeg": true},
    {"id": 161, "title": "Karivepaku Paneer Biryani", "cost": "16.99", "category": 15, "isVeg": true},
    {"id": 162, "title": "Ghee Roast Cashew Paneer Biryani", "cost": "16.99", "category": 15, "isVeg": true},
    {"id": 163, "title": "Gongura Paneer Biryani", "cost": "17.99", "category": 15, "isVeg": true},

    // Chicken Biryanis
    {"id": 164, "title": "Dil Kush Chicken Biryani", "cost": "15.99", "category": 16, "isVeg": false},
    {"id": 165, "title": "Bindaz Chicken 65 Biryani", "cost": "14.99", "category": 16, "isVeg": false},
    {"id": 166, "title": "Shahi Chicken Biryani", "cost": "15.99", "category": 16, "isVeg": false},
    {"id": 167, "title": "Ghee Roasted Chicken Biryani", "cost": "15.99", "category": 16, "isVeg": false},
    {"id": 168, "title": "Chicken Tikka Biryani", "cost": "15.99", "category": 16, "isVeg": false},
    {"id": 169, "title": "Karivepaku Chicken Biryani", "cost": "15.99", "category": 16, "isVeg": false},
    {"id": 170, "title": "Maharaja Chicken Biryani", "cost": "15.99", "category": 16, "isVeg": false},
    {"id": 171, "title": "BEZ Chicken Biryani", "cost": "16.99", "category": 16, "isVeg": false},
    {"id": 172, "title": "Ulvacharu Chicken Biryani - Bone in", "cost": "16.99", "category": 16, "isVeg": false},
    {"id": 173, "title": "Ghee Roast Cashew Chicken Biryani", "cost": "15.99", "category": 16, "isVeg": false},
    {"id": 174, "title": "Hyderabadi Chicken Dum Biryani - bone in", "cost": "17.49", "category": 16, "isVeg": false},
    {"id": 175, "title": "Spicy Chicken Boneless Biryani", "cost": "15.99", "category": 16, "isVeg": false},
    {"id": 176, "title": "Gongura Chicken Biryani", "cost": "17.49", "category": 16, "isVeg": false},
    {"id": 177, "title": "Butter Chicken Biryani", "cost": "16.99", "category": 16, "isVeg": false},
    {"id": 178, "title": "Zabardast Chicken Biryani", "cost": "17.99", "category": 16, "isVeg": false},
    {"id": 179, "title": "Chicken Biryani", "cost": "15.99", "category": 16, "isVeg": false},

    // Goat/Mutton Biryanis
    {"id": 180, "title": "Ghee Roasted Cashew Mutton Biryani (boneless)", "cost": "17.99", "category": 17, "isVeg": false},
    {"id": 181, "title": "Ghee Roasted Mutton Biryani (Boneless)", "cost": "17.99", "category": 17, "isVeg": false},
    {"id": 182, "title": "Ghee Roasted Goat Biryani (bone-in)", "cost": "17.99", "category": 17, "isVeg": false},
    {"id": 183, "title": "Ulvacharu Goat Biryani", "cost": "18.99", "category": 17, "isVeg": false},
    {"id": 184, "title": "Palnadu Spicy Mutton Biryani", "cost": "17.99", "category": 17, "isVeg": false},
    {"id": 185, "title": "Shahi Gosht Biryani", "cost": "17.99", "category": 17, "isVeg": false},
    {"id": 186, "title": "Gongura Goat (Bone In) Biryani", "cost": "17.99", "category": 17, "isVeg": false},
    {"id": 187, "title": "Goat/Mutton Biryani", "cost": "17.99", "category": 17, "isVeg": false},

    // Egg Biryanis
    {"id": 188, "title": "Dil Kush Egg Biryani", "cost": "15.99", "category": 18, "isVeg": false},
    {"id": 189, "title": "Ghee Roasted Cashew Egg Biryani", "cost": "4.99", "category": 18, "isVeg": false},
    {"id": 190, "title": "Egg Biryani", "cost": "15.99", "category": 18, "isVeg": false},

    // Shrimp Biryanis
    {"id": 191, "title": "BEZ Shrimp Biryani", "cost": "17.99", "category": 19, "isVeg": false},
    {"id": 192, "title": "Ghee Roasted cashew Shrimp Biryani", "cost": "17.99", "category": 19, "isVeg": false},
    {"id": 193, "title": "Spicy Special Shrimp Biryani", "cost": "17.99", "category": 19, "isVeg": false},
    {"id": 194, "title": "Zabardast Shrimp Biryani", "cost": "4.99", "category": 19, "isVeg": false},
    {"id": 195, "title": "Gongura spicy Shrimp Biryani", "cost": "3.49", "category": 19, "isVeg": false},
    {"id": 196, "title": "Karivepaku Shrimp Biryani", "cost": "3.99", "category": 19, "isVeg": false},
    {"id": 197, "title": "Shrimp Malai Biryani", "cost": "17.99", "category": 19, "isVeg": false},
    {"id": 198, "title": "Ghee Roasted Shrimp Biryani", "cost": "16.99", "category": 19, "isVeg": false},
    {"id": 199, "title": "Dil Kush Shrimp Biryani", "cost": "17.99", "category": 19, "isVeg": false},
    {"id": 200, "title": "Shrimp Biryani", "cost": "17.99", "category": 19, "isVeg": false},

    // Chaats
    {"id": 201, "title": "Chaat Papri", "cost": "7.99", "category": 20, "isVeg": true},
    {"id": 202, "title": "Samosa chaat", "cost": "9.99", "category": 20, "isVeg": true},
    {"id": 203, "title": "Channa chaat", "cost": "13.99", "category": 20, "isVeg": true},

    // Extras Dishes
    {"id": 204, "title": "Papad", "cost": "13.99", "category": 21, "isVeg": true},
    {"id": 205, "title": "Jeera Rice", "cost": "5.99", "category": 21, "isVeg": true},
    {"id": 206, "title": "Lentils Soup", "cost": "3.99", "category": 21, "isVeg": true},
    {"id": 207, "title": "Masala Dum Rice", "cost": "13.99", "category": 21, "isVeg": true},
    {"id": 208, "title": "Papad in Oil - 3 pieces", "cost": "2.99", "category": 21, "isVeg": true},
    {"id": 209, "title": "Onion Salad", "cost": "2.99", "category": 21, "isVeg": true},
    {"id": 210, "title": "White Rice", "cost": "13.99", "category": 21, "isVeg": true},
    {"id": 211, "title": "Plain Yogurt", "cost": "2.99", "category": 21, "isVeg": true},

    // Desserts
    {"id": 212, "title": "Coconut Jamun", "cost": "9.99", "category": 22, "isVeg": true},
    {"id": 213, "title": "Apricot delight", "cost": "13.99", "category": 22, "isVeg": true},
    {"id": 214, "title": "Gulab Jamun With Ice Cream", "cost": "5.99", "category": 22, "isVeg": true},
    {"id": 215, "title": "Carrot halwa", "cost": "3.99", "category": 22, "isVeg": true},
    {"id": 216, "title": "Gulab Jamun", "cost": "4.99", "category": 22, "isVeg": true},
    {"id": 217, "title": "Rasmalai", "cost": "5.99", "category": 22, "isVeg": true},

    // Beverages
    {"id": 218, "title": "Indian Masala Tea", "cost": "2.49", "category": 23, "isVeg": true},
    {"id": 219, "title": "Cardamom Tea", "cost": "3.99", "category": 23, "isVeg": true},
    {"id": 220, "title": "Kashmiri Jeera", "cost": "3.49", "category": 23, "isVeg": true},
    {"id": 221, "title": "Madras Coffee", "cost": "3.99", "category": 23, "isVeg": true},

    // Cold Beverages
    {"id": 222, "title": "Limca", "cost": "4.99", "category": 24, "isVeg": true},
    {"id": 223, "title": "Soft drinks/water", "cost": "3.49", "category": 24, "isVeg": true},
    {"id": 224, "title": "Mango Rupture Lassi", "cost": "3.99", "category": 24, "isVeg": true},
    {"id": 225, "title": "Sweet Lassi /Salt Lassi", "cost": "4.99", "category": 24, "isVeg": true},
    {"id": 226, "title": "Thumbs up", "cost": "3.49", "category": 24, "isVeg": true},
    {"id": 227, "title": "Rose Rupture Lassi", "cost": "4.99", "category": 24, "isVeg": true},
    {"id": 228, "title": "Lemon soda", "cost": "3.99", "category": 24, "isVeg": true}
  ], 
  "categories": {
    1: "Veg Appetizers",
    2: "Chicken Appetizers", 
    3: "Seafood Appetizers",
    4: "Veg Tandoor/Kababs",
    5: "Non-Veg Tandoor/Kababs",
    6: "Indo Chinese Veg",
    7: "Indo Chinese Non-Veg",
    8: "Veg Entrees",
    9: "Chicken Entrees",
    10: "Egg Entrees",
    11: "Seafood Entrees",
    12: "Goat Entrees",
    13: "Lamb Entrees",
    14: "Naans & Rotis",
    15: "Veg Biryanis",
    16: "Chicken Biryanis",
    17: "Goat/Mutton Biryanis",
    18: "Egg Biryanis",
    19: "Shrimp Biryanis",
    20: "Chaats",
    21: "Extras Dishes",
    22: "Desserts",
    23: "Beverages",
    24: "Cold Beverages"
  }
};

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      vegFilter: 'all', // 'all', 'veg', 'non-veg'
      selectedCategory: null
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleVegFilterChange = (filterType) => {
    this.setState({ vegFilter: filterType });
  }

  handleCategorySelect = (categoryId) => {
    this.setState({ 
      selectedCategory: this.state.selectedCategory === categoryId ? null : categoryId 
    });
  }

  getFilteredItems = () => {
    const { searchTerm, vegFilter, selectedCategory } = this.state;
    
    return menuData.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesVegFilter = vegFilter === 'all' || 
                              (vegFilter === 'veg' && item.isVeg) || 
                              (vegFilter === 'non-veg' && !item.isVeg);
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      return matchesSearch && matchesVegFilter && matchesCategory;
    });
  }

  groupItemsByCategory = (items) => {
    const grouped = {};
    items.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }

  render() {
    const filteredItems = this.getFilteredItems();
    const groupedItems = this.groupItemsByCategory(filteredItems);
    const hasResults = filteredItems.length > 0;

    return (
      <div>
        <Navbar/>
        <div className="menu">
          <div className="menu-header">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search menu items..."
                value={this.state.searchTerm}
                onChange={this.handleSearchChange}
              />
            </div>
            <div className="filter-container">
              <div className="veg-filter">
                <button 
                  className={`veg-option ${this.state.vegFilter === 'all' ? 'active' : ''}`}
                  onClick={() => this.handleVegFilterChange('all')}
                >
                  All
                </button>
                <button 
                  className={`veg-option ${this.state.vegFilter === 'veg' ? 'active' : ''}`}
                  onClick={() => this.handleVegFilterChange('veg')}
                >
                  Veg
                </button>
                <button 
                  className={`veg-option ${this.state.vegFilter === 'non-veg' ? 'active' : ''}`}
                  onClick={() => this.handleVegFilterChange('non-veg')}
                >
                  Non-Veg
                </button>
              </div>
            </div>
          </div>

          <div className="category-filter-bar">
            <div className="category-chips">
              <button 
                className={`category-chip ${this.state.selectedCategory === null ? 'active' : ''}`}
                onClick={() => this.handleCategorySelect(null)}
              >
                All
              </button>
              {Object.entries(menuData.categories).map(([categoryId, categoryName]) => (
                <button
                  key={categoryId}
                  className={`category-chip ${this.state.selectedCategory === parseInt(categoryId) ? 'active' : ''}`}
                  onClick={() => this.handleCategorySelect(parseInt(categoryId))}
                >
                  {categoryName}
                </button>
              ))}
            </div>
          </div>

          {/* New scrollable content wrapper */}
          <div className="menu-content">
            {hasResults ? (
              Object.keys(groupedItems).map(categoryId => (
                <div key={categoryId} className="category-section">
                  <h2 className="category-heading">
                    {menuData.categories[categoryId]}
                  </h2>
                  <div className="menu-items">
                    {groupedItems[categoryId].map(item => (
                      <MobileMenuItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                No items found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;