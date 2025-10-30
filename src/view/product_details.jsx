import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Productsbycat = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isReadMoreOpen, setReadMoreOpen] = useState(false);
  const [isQuoteOpen, setQuoteOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    company: "",
    quantity: "",
    message: "",
  });

  const navigate = useNavigate();
  const { category } = useParams();

  // ✅ Local product dataset
  //Red Chilli, Cardamom, Black Pepper, Clove, Cumin, Green Chilli, Onion
  const allProducts = [
  {
    "name": "SANNAM (S-10)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/redchilli1.png"
    ],
    "details": {
      "Chilli Type": "SANNAM (S-10)",
      "Scoville Heat Units (SHU)": "25,000–50,000",
      "Colour (ASTA)": "30–50",
      "Length (cm)": "5–8",
      "Skin": "Thin & Red",
      "Use": "Powder, Flakes, Culinary"
    }
  },
  {
    "name": "TEJA (S-17)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/redchilli2.png",
    ],
    "details": {
      "Chilli Type": "TEJA (S-17)",
      "Scoville Heat Units (SHU)": "90,000–170,000",
      "Colour (ASTA)": "30–50",
      "Length (cm)": "4–7",
      "Skin": "Thin & Wrinkled Red",
      "Use": "Spicy Blends"
    }
  },
  {
    "name": "KASHMIRI CHILLI (Deggi)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/kdl.png"
    ],
    "details": {
      "Chilli Type": "KASHMIRI CHILLI (Deggi)",
      "Scoville Heat Units (SHU)": "1,000–2,000",
      "Colour (ASTA)": "100–160",
      "Length (cm)": "5–8",
      "Skin": "Smooth Dark Red",
      "Use": "Rich Colour, Low Heat"
    }
  },
  {
    "name": "GUNTUR (S-341)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/guntur.png"
    ],
    "details": {
      "Chilli Type": "GUNTUR (S-341)",
      "Scoville Heat Units (SHU)": "20,000–50,000",
      "Colour (ASTA)": "80–140",
      "Length (cm)": "6–12",
      "Skin": "Thin to Medium Thick",
      "Use": "Chilli Powder"
    }
  },
  {
    "name": "BYADGI-KADDI/KDL",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/SYNGETA2.png"
    ],
    "details": {
      "Chilli Type": "BYADGI-KADDI/KDL",
      "Scoville Heat Units (SHU)": "8,000–18,000",
      "Colour (ASTA)": "100–250",
      "Length (cm)": "10–15",
      "Skin": "Wrinkled, Thin, Long with Prominent Wrinkles even when dried",
      "Use": "Primarily for Colour Extraction (Oleoresin) for food colouring"
    }
  },
  {
    "name": "SYNGENTA (2043)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/SYNGENTA (2043).png"
    ],
    "details": {
      "Chilli Type": "SYNGENTA (2043)",
      "Scoville Heat Units (SHU)": "20,000–35,000",
      "Colour (ASTA)": "40–60",
      "Length (cm)": "12–13",
      "Skin": "Uniform Dried, High Circular Wrinkles",
      "Use": "Fresh Consumption"
    }
  },
  {
    "name": "ROMI (26)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/romi.png"
    ],
    "details": {
      "Chilli Type": "ROMI (26)",
      "Scoville Heat Units (SHU)": "30,000–50,000",
      "Colour (ASTA)": "60–80",
      "Length (cm)": "6–8",
      "Skin": "Thin, Generally Smooth or Slightly Wrinkled",
      "Use": "Pickles, Sauces, Curries & Stews"
    }
  },
  {
    "name": "SYNGENTA (5531)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/SYNGETA2.png"
    ],
    "details": {
      "Chilli Type": "SYNGENTA (5531)",
      "Scoville Heat Units (SHU)": "15,000–30,000",
      "Colour (ASTA)": "40–55",
      "Length (cm)": "10–12",
      "Skin": "Circular Wrinkles",
      "Use": "Fresh Consumption in Dishes"
    }
  },
  {
    "name": "GUNTUR (Shark)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/guntur shark.png"
    ],
    "details": {
      "Chilli Type": "GUNTUR (Shark)",
      "Scoville Heat Units (SHU)": "25,000–90,000",
      "Colour (ASTA)": "60–160",
      "Length (cm)": "6–9",
      "Skin": "Thin & Medium Thickness, Often Wrinkled",
      "Use": "Spice, Blends, Pickles, Sauces and Curries"
    }
  },
  {
    "name": "RALLIES (BYADGI)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/Rallies.png"
    ],
    "details": {
      "Chilli Type": "RALLIES (BYADGI)",
      "Scoville Heat Units (SHU)": "10,000–30,000",
      "Colour (ASTA)": "156–200",
      "Length (cm)": "10–14",
      "Skin": "Thin, Fully Wrinkled",
      "Use": "Spice Blends and Powders"
    }
  },
  {
    "name": "GUNTUR (S-18)",
    "category": "chilli",
    "description": "Red Chilli",
    "imageUrl": [
      "/redchilli/GUNTURS_18.png"
    ],
    "details": {
      "Chilli Type": "GUNTUR (S-18)",
      "Scoville Heat Units (SHU)": "18,000–35,000",
      "Colour (ASTA)": "50–80",
      "Length (cm)": "6–9",
      "Skin": "Medium Thickness, Often Relatively Smooth or Slightly Wrinkled",
      "Use": "Chilli Powder"
    }
  },
  // cardamom varieties
  {
    "name": "AGEB (Extra Bold)",
    "category": "cardamom",
    "description": "Green Cardamom",
    "imageUrl": [
      "/cardamom/AGEB (Extra Bold).png"
    ],
    "details": {
      "Grade": "AGEB (Extra Bold)",
      "Size (mm)": "7.8–8.2",
      "Density (G/L)": "435",
      "Empty/Open Pods (%)": "Max 1%",
      "Defective Pods (%)": "Max 1%",
      "Moisture (%)": "Max 10%",
      "Immature Pods (%)": "Max 1%"
    }
  },
  {
    "name": "AGB (Bold)",
    "category": "cardamom",
    "description": "Green Cardamom",
    "imageUrl": [
      "/cardamom/AGB (Bold).png"
    ],
    "details": {
      "Grade": "AGB (Bold)",
      "Size (mm)": "7.0–8.0",
      "Density (G/L)": "415",
      "Empty/Open Pods (%)": "Max 2%",
      "Defective Pods (%)": "Max 2%",
      "Moisture (%)": "Max 10%",
      "Immature Pods (%)": "Max 1.5%"
    }
  },
  {
    "name": "AGS Superior",
    "category": "cardamom",
    "description": "Green Cardamom",
    "imageUrl": [
      "/cardamom/AGS Superior ­ I.png"
    ],
    "details": {
      "Grade": "AGS Superior",
      "Size (mm)": "6.0–7.0",
      "Density (G/L)": "385",
      "Empty/Open Pods (%)": "Max 3%",
      "Defective Pods (%)": "Max 3%",
      "Moisture (%)": "Max 10%",
      "Immature Pods (%)": "Max 2%"
    }
  },
  {
    "name": "AGS Superior - I",
    "category": "cardamom",
    "description": "Green Cardamom",
    "imageUrl": [
      "/cardamom/AGS Superior ­ II.png"
    ],
    "details": {
      "Grade": "AGS Superior - I",
      "Size (mm)": "6.0–7.0",
      "Density (G/L)": "350",
      "Empty/Open Pods (%)": "Max 4%",
      "Defective Pods (%)": "Max 4%",
      "Moisture (%)": "Max 10%",
      "Immature Pods (%)": "Max 3%"
    }
  },
  {
    "name": "AGS Superior - II",
    "category": "cardamom",
    "description": "Green Cardamom",
    "imageUrl": [
      "/cardamom/cardamom2.png"
    ],
    "details": {
      "Grade": "AGS Superior - II",
      "Size (mm)": "6.0–7.0",
      "Density (G/L)": "320",
      "Empty/Open Pods (%)": "Max 5%",
      "Defective Pods (%)": "Max 5%",
      "Moisture (%)": "Max 10%",
      "Immature Pods (%)": "Max 4%"
    }
  },
  // blackpepper varieties New Varieties
  {
    "name": "Black Pepper – Malabar Garbled 1 (MG1)",
    "category": "blackpepper",
    "description": "Premium export-grade pepper with strong aroma and pungent flavour",
    "imageUrl": [
      "/blackpepper/Malabar.png"
    ],
    "details": {
      "Grade": "MG1",
      "Size": "4.75 mm+",
      "Quality": "Hand-picked, matured, well-dried",
      "Aroma": "Strong",
      "Usage": "International spice trade",
      "Origin": "Kerala, India"
    }
  },
  {
    "name": "Black Pepper – Panniyur-1",
    "category": "blackpepper",
    "description": "High-yield hybrid pepper with bold berries and strong flavour",
    "imageUrl": [
      "/blackpepper/Panniyur.png"
    ],
    "details": {
      "Size": "4.5–5 mm",
      "Breeding": "India’s first hybrid variety",
      "Strengths": "High yield & disease resistance",
      "Usage": "Culinary & commercial cultivation",
      "Origin": "Panniyur, Kerala"
    }
  },
  {
    "name": "Black Pepper – Karimunda",
    "category": "blackpepper",
    "description": "Popular high-piperine pepper with uniform black berries",
    "imageUrl": [
      "/blackpepper/Karimunda.png"
    ],
    "details": {
      "Size": "3.5–4.5 mm",
      "Aroma": "Strong & aromatic",
      "Chemical Strength": "High piperine content",
      "Usage": "Culinary & medicinal",
      "Origin": "Kerala, India"
    }
  },
  {
    "name": "Black Pepper – Thevam",
    "category": "blackpepper",
    "description": "Early-maturing pepper with strong aroma & export suitability",
    "imageUrl": [
      "/blackpepper/Thevam.png"
    ],
    "details": {
      "Size": "4–4.5 mm",
      "Strengths": "Disease-resistant & high-yield",
      "Berry Quality": "Medium-sized & uniform",
      "Usage": "Domestic & export"
    }
  },
  {
    "name": "Black Pepper – Kottanadan (TGSEB)",
    "category": "blackpepper",
    "description": "High essential oil pepper ideal for premium spice blends",
    "imageUrl": [
      "/blackpepper/Kottanadan.png"
    ],
    "details": {
      "Size": ">4.25 mm",
      "Oil Content": "High",
      "Flavor": "Excellent aroma & taste",
      "Usage": "Oil extraction & commercial markets",
      "Origin": "Kerala, India"
    }
  },
  {
    "name": "Black Pepper – Sreekara",
    "category": "blackpepper",
    "description": "Bold, aromatic pepper ideal for culinary & commercial use",
    "imageUrl": [
      "/blackpepper/Sreekara.png"
    ],
    "details": {
      "Size": "4.5–5 mm",
      "Strengths": "Wilt-resistant & high-yield",
      "Aroma": "Intense",
      "Usage": "Export & culinary applications"
    }
  },
  // blackpepper varieties
  /*{
    "name": "Panniyur-1",
    "category": "blackpepper",
    "description": "High yield, bold berries",
    "imageUrl": [
      "/Black Peaper_page-0001.jpg"
    ],
    "details": {
      "Grading Styles": "Whole, Cracked, Ground, FAQ, MG1, TGSEB",
      "Moisture Content": "Max 12% (as per FSSAI standards)",
      "Piperine Content": "4%–9%",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Karnataka, Kerala, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Coorg, Wayanad, Idukki, Sivaganga"
    }
  },
  {
    "name": "Karimunda",
    "category": "blackpepper",
    "description": "Traditional Kerala variety",
    "imageUrl": [
      "/Black Peaper_page-0001.jpg"
    ],
    "details": {
      "Grading Styles": "Whole, Cracked, Ground, FAQ, MG1, TGSEB",
      "Moisture Content": "Max 12% (as per FSSAI standards)",
      "Piperine Content": "4%–9%",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Karnataka, Kerala, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Coorg, Wayanad, Idukki, Sivaganga"
    }
  },
  {
    "name": "Kottanadan",
    "category": "blackpepper",
    "description": "Aromatic, medium-sized berries",
    "imageUrl": [
        "/Black Peaper_page-0001.jpg"
    ],
    "details": {
      "Grading Styles": "Whole, Cracked, Ground, FAQ, MG1, TGSEB",
      "Moisture Content": "Max 12% (as per FSSAI standards)",
      "Piperine Content": "4%–9%",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Karnataka, Kerala, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Coorg, Wayanad, Idukki, Sivaganga"
    }
  },
  {
    "name": "Arakkulam Munda",
    "category": "blackpepper",
    "description": "Early maturing variety",
    "imageUrl": [
      "/Black Peaper_page-0001.jpg"
    ],
    "details": {
      "Grading Styles": "Whole, Cracked, Ground, FAQ, MG1, TGSEB",
      "Moisture Content": "Max 12% (as per FSSAI standards)",
      "Piperine Content": "4%–9%",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Karnataka, Kerala, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Coorg, Wayanad, Idukki, Sivaganga"
    }
  },
  {
    "name": "Balankotta",
    "category": "blackpepper",
    "description": "Export-grade black blackpepper",
    "imageUrl": [
      "/Black Peaper_page-0001.jpg"
    ],
    "details": {
      "Grading Styles": "Whole, Cracked, Ground, FAQ, MG1, TGSEB",
      "Moisture Content": "Max 12% (as per FSSAI standards)",
      "Piperine Content": "4%–9%",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Karnataka, Kerala, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Coorg, Wayanad, Idukki, Sivaganga"
    }
  },*/
  // clove varieties

  {
    "name": "Ungraded Clove",
    "category": "clove",
    "description": "Lower-grade cloves suitable for bulk spice use & industrial processing",
    "imageUrl": [
      "/clove/Ungradedclove.jpg"
    ],
    "details": {
      "Quality": "Small or broken buds",
      "Appearance": "Uneven size, dull color",
      "Aroma": "Mild to moderate",
      "Usage": "Bulk spices, processed products",
      "Export Suitability": "Low-priced segment"
    }
  },
  {
    "name": "Graded Clove",
    "category": "clove",
    "description": "Premium cloves with strong aroma & uniform size for culinary & export",
    "imageUrl": [
      "/clove/Gradedclove.jpg"
    ],
    "details": {
      "Quality": "Large, intact buds",
      "Aroma": "Strong fragrance with high oil content",
      "Appearance": "Uniform dark brown",
      "Usage": "Premium culinary & export",
      "Export Suitability": "High"
    }
  },
  {
    "name": "Stem Clove",
    "category": "clove",
    "description": "Cloves with stem portions — strong aroma & durable for industrial use",
    "imageUrl": [
      "/clove/Stemclove.jpg"
    ],
    "details": {
      "Structure": "Bud with attached stem",
      "Oil Content": "High",
      "Usage": "Oil extraction & bold flavor dishes",
      "Export Suitability": "High in bulk spice markets"
    }
  },
  {
    "name": "Special Grade Clove",
    "category": "clove",
    "description": "Highest grade cloves with intense aroma & premium export quality",
    "imageUrl": [
      "/clove/Specialgradeclove.jpg"
    ],
    "details": {
      "Quality": "Uniform, fully closed buds",
      "Oil Content": "Very high",
      "Appearance": "Thick stems, rich color",
      "Usage": "Premium culinary & international markets",
      "Export Suitability": "Top-grade"
    }
  },
  {
    "name": "Ground Clove",
    "category": "clove",
    "description": "Fine clove powder for spice blends & seasoning applications",
    "imageUrl": [
      "/clove/Groundclove.jpg"
    ],
    "details": {
      "Form": "Powder",
      "Aroma": "Strong & pungent",
      "Usage": "Baking, spice blends, medicinal",
      "Market Demand": "High retail & industrial"
    }
  },


  // cumin varieties
  {
    "name": "Common Cumin",
    "category": "cumin",
    "description": "Warm, earthy spice widely used in global cuisines",
    "imageUrl": [
      "/cumin/Commoncumin.png"
    ],
    "details": {
      "Botanical Name": "Cuminum cyminum",
      "Flavor": "Warm & earthy",
      "Usage": "Cooking, spice blends",
      "Medicinal Benefits": "Digestive support"
    }
  },
  {
    "name": "Wild Cumin",
    "category": "cumin",
    "description": "Strong pungent aroma and high medicinal value",
    "imageUrl": [
      "/cumin/wildcumin.png"
    ],
    "details": {
      "Botanical Name": "Bunium persicum",
      "Flavor": "Stronger & more pungent",
      "Usage": "Traditional medicine & regional cuisines",
      "Health Benefits": "Antioxidant & antimicrobial"
    }
  },
  {
    "name": "White Cumin",
    "category": "cumin",
    "description": "Most widely used cumin variety with aromatic warm flavor",
    "imageUrl": [
      "/cumin/whitecumin.png"
    ],
    "details": {
      "Color": "Pale brownish-white",
      "Usage": "Indian, Middle Eastern & Latin cuisines",
      "Health Benefits": "Aids digestion"
    }
  },
  {
    "name": "Black Jeera",
    "category": "cumin",
    "description": "Smaller & darker seeds used in biryani and herbal remedies",
    "imageUrl": [
      "/cumin/Blackjeera.png"
    ],
    "details": {
      "Botanical Name": "Bunium persicum",
      "Flavor": "Intense earthy aroma",
      "Usage": "Biryani, immunity-boosting traditional medicine"
    }
  },
  {
    "name": "Roman Cumin",
    "category": "cumin",
    "description": "Caraway seeds with sweet anise-like flavor",
    "imageUrl": [
      "/cumin/Romancumin.png"
    ],
    "details": {
      "Botanical Name": "Carum carvi",
      "Flavor": "Sweet, anise-like",
      "Usage": "Breads, cheese & savory dishes",
      "Medicinal Uses": "Digestive support"
    }
  },

  /*{
    "name": "Indian Clove",
    "category": "clove",
    "description": "Preferred for oil content and aroma",
    "imageUrl": [
      "/CLOVE_page-0001.jpg"
    ],
    "details": {
      "Oil Types": "Clove Bud Oil, Clove Leaf Oil, Clove Stem Oil",
      "Moisture Content": "Max 13% (as per IS 4404 standards)",
      "Physical Specs": "Length: 12–16 mm, Color: reddish brown, Texture: firm, oily",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Tamil Nadu, Karnataka, Kerala",
      "Top Producing Cities": "Kanyakumari, Kodagu, Idukki"
    }
  },
  {
    "name": "Sri Lankan Clove",
    "category": "clove",
    "description": "Known for strong aroma and high oil yield",
    "imageUrl": [
      "CLOVE_page-0001.jpg"
    ],
    "details": {
      "Oil Types": "Clove Bud Oil, Clove Leaf Oil, Clove Stem Oil",
      "Moisture Content": "Max 13% (as per IS 4404 standards)",
      "Physical Specs": "Length: 12–16 mm, Color: reddish brown, Texture: firm, oily",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Tamil Nadu, Karnataka, Kerala",
      "Top Producing Cities": "Kanyakumari, Kodagu, Idukki"
    }
  },
  {
    "name": "Zanzibar Clove",
    "category": "clove",
    "description": "Export-grade clove with bold flavor",
    "imageUrl": [
      "CLOVE_page-0001.jpg"
    ],
    "details": {
      "Oil Types": "Clove Bud Oil, Clove Leaf Oil, Clove Stem Oil",
      "Moisture Content": "Max 13% (as per IS 4404 standards)",
      "Physical Specs": "Length: 12–16 mm, Color: reddish brown, Texture: firm, oily",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Tamil Nadu, Karnataka, Kerala",
      "Top Producing Cities": "Kanyakumari, Kodagu, Idukki"
    }
  },
  {
    "name": "Madagascar Clove",
    "category": "clove",
    "description": "Aromatic clove with export potential",
    "imageUrl": [
      "CLOVE_page-0001.jpg"
    ],
    "details": {
      "Oil Types": "Clove Bud Oil, Clove Leaf Oil, Clove Stem Oil",
      "Moisture Content": "Max 13% (as per IS 4404 standards)",
      "Physical Specs": "Length: 12–16 mm, Color: reddish brown, Texture: firm, oily",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Tamil Nadu, Karnataka, Kerala",
      "Top Producing Cities": "Kanyakumari, Kodagu, Idukki"
    }
  },
  {
    "name": "Handpicked Whole Clove",
    "category": "clove",
    "description": "Premium quality cloves selected for export",
    "imageUrl": [
      "CLOVE_page-0001.jpg"
    ],
    "details": {
      "Oil Types": "Clove Bud Oil, Clove Leaf Oil, Clove Stem Oil",
      "Moisture Content": "Max 13% (as per IS 4404 standards)",
      "Physical Specs": "Length: 12–16 mm, Color: reddish brown, Texture: firm, oily",
      "Shelf Life": "12–18 months",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Tamil Nadu, Karnataka, Kerala",
      "Top Producing Cities": "Kanyakumari, Kodagu, Idukki"
    }
  },*/
  //  cumin varieties
  /*{
    "name": "European Cumin",
    "category": "cumin",
    "description": "Light brown, aromatic seeds",
    "imageUrl": [
      "/CUMIN.jpg"
    ],
    "details": {
      "Seed Size & Color": "3–6 mm length, pale brown",
      "Moisture Content": "Max 10% (as per FSSAI standards)",
      "Purity Grades": "FAQ, 99% Purity, 98% Purity",
      "Shelf Life": "6–12 months",
      "Export Suitability": "High",
      "Packaging": "Jute bags, vacuum packs, bulk cartons",
      "Top Producing States": "Gujarat, Rajasthan, West Bengal, Madhya Pradesh, Karnataka",
      "Top Producing Cities": "Unjha, Jodhpur, Barmer"
    }
  },
  {
    "name": "Indian Cumin",
    "category": "cumin",
    "description": "Medium brown seeds with bold flavor",
    "imageUrl": [
      "/CUMIN.jpg"
    ],
    "details": {
      "Seed Size & Color": "3–6 mm length, medium brown",
      "Moisture Content": "Max 10% (as per FSSAI standards)",
      "Purity Grades": "FAQ, 99% Purity, 98% Purity",
      "Shelf Life": "6–12 months",
      "Export Suitability": "High",
      "Packaging": "Jute bags, vacuum packs, bulk cartons",
      "Top Producing States": "Gujarat, Rajasthan, West Bengal, Madhya Pradesh, Karnataka",
      "Top Producing Cities": "Unjha, Jodhpur, Barmer"
    }
  },
  {
    "name": "Black Cumin (Shahi Jeera)",
    "category": "cumin",
    "description": "Smaller, darker seeds with earthy aroma",
    "imageUrl": [
      "/CUMIN.jpg"
    ],
    "details": {
      "Seed Size & Color": "3–6 mm length, dark brown",
      "Moisture Content": "Max 10% (as per FSSAI standards)",
      "Purity Grades": "FAQ, 99% Purity, 98% Purity",
      "Shelf Life": "6–12 months",
      "Export Suitability": "High",
      "Packaging": "Jute bags, vacuum packs, bulk cartons",
      "Top Producing States": "Gujarat, Rajasthan, West Bengal, Madhya Pradesh, Karnataka",
      "Top Producing Cities": "Unjha, Jodhpur, Barmer"
    }
  },
  {
    "name": "Iranian Cumin",
    "category": "cumin",
    "description": "Longer seeds with mild aroma",
    "imageUrl": [
      "/CUMIN.jpg"
    ],
    "details": {
      "Seed Size & Color": "3–6 mm length, pale brown",
      "Moisture Content": "Max 10% (as per FSSAI standards)",
      "Purity Grades": "FAQ, 99% Purity, 98% Purity",
      "Shelf Life": "6–12 months",
      "Export Suitability": "High",
      "Packaging": "Jute bags, vacuum packs, bulk cartons",
      "Top Producing States": "Gujarat, Rajasthan, West Bengal, Madhya Pradesh, Karnataka",
      "Top Producing Cities": "Unjha, Jodhpur, Barmer"
    }
  },
  {
    "name": "Syrian Cumin",
    "category": "cumin",
    "description": "Pale seeds with mild taste",
    "imageUrl": [
      "/CUMIN.jpg"
    ],
    "details": {
      "Seed Size & Color": "3–6 mm length, pale brown",
      "Moisture Content": "Max 10% (as per FSSAI standards)",
      "Purity Grades": "FAQ, 99% Purity, 98% Purity",
      "Shelf Life": "6–12 months",
      "Export Suitability": "High",
      "Packaging": "Jute bags, vacuum packs, bulk cartons",
      "Top Producing States": "Gujarat, Rajasthan, West Bengal, Madhya Pradesh, Karnataka",
      "Top Producing Cities": "Unjha, Jodhpur, Barmer"
    }
  },*/
  /*{
    "name": "Pusa Jwala",
    "category": "greenchilli",
    "description": "Long, thin, mild green chilli",
    "imageUrl": [
      "/GREEN CHILLI_page_1.jpg"
    ],
    "details": {
      "Size & Shape": "Length: 5–12 cm, Shape: slender",
      "Moisture Content": "85%–90% (fresh)",
      "Pungency (SHU)": "15,000–1,000,000",
      "Shelf Life": "7–10 days (fresh), 6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes, crates, vacuum packs",
      "Top Producing States": "Andhra Pradesh, Telangana, Madhya Pradesh, Karnataka, Tamil Nadu",
      "Top Producing Cities": "Guntur, Prakasam, Khammam, Indore, Coimbatore"
    }
  },*/
    // graded green chilli
  {
    "name": "G4 Green Chilli",
    "category": "greenchilli",
    "description": "Glossy, high-pungency export-grade chilli",
    "imageUrl": [
      "/GREEN CHILLI_page_2.jpg"
    ],
    "details": {
      "Variety": "G4",
      "Botanical Name": "Capsicum annuum",
      "Length": "3–4 inches",
      "Color": "Deep green with glossy skin",
      "Pungency": "High (rich in capsaicin)",
      "Texture": "Firm and smooth",
      "Shelf Life": "15–20 days (under cold chain)",
      "Packaging": "Corrugated boxes (Net: 3.8 kg, Gross: 4.4 kg)",
      "Origin": "Maharashtra & Gujarat, India",
      "Export Markets": "Gulf & Asian countries",
      "Export Suitability": "High due to shelf stability"
    }
  },
  
    // ungraded green chilli
  /*{
    "name": "Samba",
    "category": "greenchilli",
    "description": "Short, thick, bold green chilli",
    "imageUrl": [
      "/GREEN CHILLI_page_1.jpg"
    ],
    "details": {
      "Size & Shape": "Length: 5–12 cm, Shape: thick",
      "Moisture Content": "85%–90% (fresh)",
      "Pungency (SHU)": "15,000–1,000,000",
      "Shelf Life": "7–10 days (fresh), 6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes, crates, vacuum packs",
      "Top Producing States": "Andhra Pradesh, Telangana, Madhya Pradesh, Karnataka, Tamil Nadu",
      "Top Producing Cities": "Guntur, Prakasam, Khammam, Indore, Coimbatore"
    }
  },*/
  /*{
    "name": "Jwalamukhi",
    "category": "greenchilli",
    "description": "Early maturing green chilli variety",
    "imageUrl": [
      "/GREEN CHILLI_page_1.jpg"
    ],
    "details": {
      "Size & Shape": "Length: 5–12 cm, Shape: slender to thick",
      "Moisture Content": "85%–90% (fresh)",
      "Pungency (SHU)": "15,000–1,000,000",
      "Shelf Life": "7–10 days (fresh), 6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes, crates, vacuum packs",
      "Top Producing States": "Andhra Pradesh, Telangana, Madhya Pradesh, Karnataka, Tamil Nadu",
      "Top Producing Cities": "Guntur, Prakasam, Khammam, Indore, Coimbatore"
    }
  },*/
  /*{
    "name": "Bhut Jolokia",
    "category": "greenchilli",
    "description": "Extremely hot, export-grade chilli",
    "imageUrl": [
      "/GREEN CHILLI_page_1.jpg"
    ],
    "details": {
      "Size & Shape": "Length: 5–12 cm, Shape: thick",
      "Moisture Content": "85%–90% (fresh)",
      "Pungency (SHU)": "15,000–1,000,000",
      "Shelf Life": "7–10 days (fresh), 6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes, crates, vacuum packs",
      "Top Producing States": "Andhra Pradesh, Telangana, Madhya Pradesh, Karnataka, Tamil Nadu",
      "Top Producing Cities": "Guntur, Prakasam, Khammam, Indore, Coimbatore"
    }
  },*/
 /*{
    "name": "Bhima Super",
    "category": "onion",
    "description": "Red skin, high yield variety",
    "imageUrl": [
      "/ONION_page_1.jpg"
    ],
    "details": {
      "Weight Range": "100g–250g per bulb",
      "Moisture Content": "~85%–90%",
      "Shelf Life": "2–4 weeks (dry cured)",
      "Export Suitability": "High",
      "Packaging": "Mesh bags, jute sacks, ventilated cartons",
      "Top Producing States": "Maharashtra, Madhya Pradesh, Karnataka, Gujarat, Rajasthan",
      "Top Producing Cities": "Nashik, Pune, Indore, Hubli, Rajkot"
    }
  },*/
  // ungraded onion
  {
    "name": "Garva Red Onion",
    "category": "onion",
    "description": "Reddish-brown skin, mild sweetness & long shelf life",
    "imageUrl": [
      "/onion/ONION_page_2.png"
    ],
    "details": {
      "Variety": "Garva Red Onion",
      "Size Grades": "Grade 1: 55mm+ | Grade 2: 45mm+ | Grade 3: <40mm",
      "Shelf Life": "3–4 months (cool, dry storage)",
      "Flavor Profile": "Medium pungency, mildly sweet",
      "Packaging": "Mesh bags (5–50 kg), Jute bags (30 kg), export cartons on request",
      "Export Destinations": "UAE, Saudi Arabia, Bangladesh, Malaysia, Sri Lanka, Oman, Qatar",
      "Certifications": "APEDA, FSSAI",
      "Peak Season": "March–May, also available Oct–Dec",
      "Primary Sourcing States": "Maharashtra"
    }
  },
  // graded onion
  /*{
    "name": "Bhima Shubhra",
    "category": "onion",
    "description": "White skin, long shelf life variety",
    "imageUrl": [
      "/ONION_page_1.jpg"
    ],
    "details": {
      "Weight Range": "100g–250g per bulb",
      "Moisture Content": "~85%–90%",
      "Shelf Life": "2–4 weeks (dry cured)",
      "Export Suitability": "High",
      "Packaging": "Mesh bags, jute sacks, ventilated cartons",
      "Top Producing States": "Maharashtra, Madhya Pradesh, Karnataka, Gujarat, Rajasthan",
      "Top Producing Cities": "Nashik, Pune, Indore, Hubli, Rajkot"
    }
  },
  {
    "name": "Bhima Dark Red",
    "category": "onion",
    "description": "Deep red, pungent onion variety",
    "imageUrl": [
      "/ONION_page_1.jpg"
    ],
    "details": {
      "Weight Range": "100g–250g per bulb",
      "Moisture Content": "~85%–90%",
      "Shelf Life": "2–4 weeks (dry cured)",
      "Export Suitability": "High",
      "Packaging": "Mesh bags, jute sacks, ventilated cartons",
      "Top Producing States": "Maharashtra, Madhya Pradesh, Karnataka, Gujarat, Rajasthan",
      "Top Producing Cities": "Nashik, Pune, Indore, Hubli, Rajkot"
    }
  },
  {
    "name": "Agrifound Light Red",
    "category": "onion",
    "description": "Light red onion with balanced flavor",
    "imageUrl": [
      "/ONION_page_1.jpg"
    ],
    "details": {
      "Weight Range": "100g–250g per bulb",
      "Moisture Content": "~85%–90%",
      "Shelf Life": "2–4 weeks (dry cured)",
      "Export Suitability": "High",
      "Packaging": "Mesh bags, jute sacks, ventilated cartons",
      "Top Producing States": "Maharashtra, Madhya Pradesh, Karnataka, Gujarat, Rajasthan",
      "Top Producing Cities": "Nashik, Pune, Indore, Hubli, Rajkot"
    }
  },
  {
    "name": "NHRDF Red",
    "category": "onion",
    "description": "Red onion developed by NHRDF",
    "imageUrl": [
      "/ONION_page_1.jpg"
    ],
    "details": {
      "Weight Range": "100g–250g per bulb",
      "Moisture Content": "~85%–90%",
      "Shelf Life": "2–4 weeks (dry cured)",
      "Export Suitability": "High",
      "Packaging": "Mesh bags, jute sacks, ventilated cartons",
      "Top Producing States": "Maharashtra, Madhya Pradesh, Karnataka, Gujarat, Rajasthan",
      "Top Producing Cities": "Nashik, Pune, Indore, Hubli, Rajkot"
    }
  },*/
  /*{
    "name": "Bhagwa",
    "category": "pomegranate",
    "description": "Export-grade variety with deep red arils and long shelf life",
    "imageUrl": [
      "/POMEGRANATE_page_1.jpg"
    ],
    "details": {
      "Weight Range": "200g–400g per fruit",
      "Moisture Content": "~75%–85% in arils",
      "Seed Hardness": "Soft",
      "Shelf Life": "Up to 45 days",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes with foam netting or clamshell trays",
      "Top Producing States": "Maharashtra, Gujarat, Karnataka, Andhra Pradesh",
      "Top Producing Cities": "Solapur, Nashik, Bijapur, Mehsana"
    }
  },*/
    //graded pomegranate

   {
    "name": "Bhagwa Pomegranate — Medium Grade",
    "category": "pomegranate",
    "description": "150–250g fruits with glossy red skin & juicy soft-seeded arils",
    "imageUrl": [
       "/POMEGRANATE_page_2.png"
    ],
    "details": {
      "Weight Range": "150–250g",
      "Aril Color": "Deep red",
      "Seeds": "Soft & edible",
      "Juice Content": "High",
      "Shape": "Round to oval",
      "Packaging": "5–10 kg cartons",
      "Market Suitability": "Domestic & export",
      "Shelf Life": "Strong under cold chain"
    }
  },
  {
    "name": "Bhagwa Pomegranate — Grade A+ Export",
    "category": "pomegranate",
    "description": "Premium 250g+ grade for high-value international markets",
    "imageUrl": [
       "/POMEGRANATE_page_3.jpg"
    ],
    "details": {
      "Weight Range": "Above 250g+",
      "Visual Quality": "Bright red, glossy skin",
      "Aril Quality": "Deep red, soft seeds",
      "Shape": "Uniform round to oval",
      "Packaging": "Bulk corrugated export boxes",
      "Export Suitability": "Highest",
      "Target Markets": "Gulf, Europe, Southeast Asia"
    }
  },
  //pomegranate varieties
  /*{
    "name": "Ganesh",
    "category": "pomegranate",
    "description": "Soft-seeded variety with balanced taste",
    "imageUrl": [
      "/POMEGRANATE_page_3.jpg"
    ],
    "details": {
      "Weight Range": "200g–400g per fruit",
      "Moisture Content": "~75%–85% in arils",
      "Seed Hardness": "Soft",
      "Shelf Life": "15–30 days",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes with foam netting or clamshell trays",
      "Top Producing States": "Maharashtra, Gujarat, Karnataka, Andhra Pradesh",
      "Top Producing Cities": "Solapur, Nashik, Bijapur, Mehsana"
    }
  },
  {
    "name": "Arakta",
    "category": "pomegranate",
    "description": "Preferred for color, taste, and shelf life",
    "imageUrl": [
      "/POMEGRANATE_page_1.jpg"
    ],
    "details": {
      "Weight Range": "200g–400g per fruit",
      "Moisture Content": "~75%–85% in arils",
      "Seed Hardness": "Soft to medium",
      "Shelf Life": "15–30 days",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes with foam netting or clamshell trays",
      "Top Producing States": "Maharashtra, Gujarat, Karnataka, Andhra Pradesh",
      "Top Producing Cities": "Solapur, Nashik, Bijapur, Mehsana"
    }
  },
  {
    "name": "Mridula",
    "category": "pomegranate",
    "description": "Balanced flavor with moderate shelf life",
    "imageUrl": [
      "/POMEGRANATE_page_1.jpg"
    ],
    "details": {
      "Weight Range": "200g–400g per fruit",
      "Moisture Content": "~75%–85% in arils",
      "Seed Hardness": "Medium",
      "Shelf Life": "15–30 days",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes with foam netting or clamshell trays",
      "Top Producing States": "Maharashtra, Gujarat, Karnataka, Andhra Pradesh",
      "Top Producing Cities": "Solapur, Nashik, Bijapur, Mehsana"
    }
  },
  {
    "name": "Ruby",
    "category": "pomegranate",
    "description": "Bright red arils with juicy texture",
    "imageUrl": [
      "/POMEGRANATE_page_1.jpg"
    ],
    "details": {
      "Weight Range": "200g–400g per fruit",
      "Moisture Content": "~75%–85% in arils",
      "Seed Hardness": "Medium",
      "Shelf Life": "15–30 days",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes with foam netting or clamshell trays",
      "Top Producing States": "Maharashtra, Gujarat, Karnataka, Andhra Pradesh",
      "Top Producing Cities": "Solapur, Nashik, Bijapur, Mehsana"
    }
  },
  {
    "name": "Kandhari",
    "category": "pomegranate",
    "description": "Hard-seeded variety with bold flavor",
    "imageUrl": [
      "/POMEGRANATE_page_1.jpg"
    ],
    "details": {
      "Weight Range": "200g–400g per fruit",
      "Moisture Content": "~75%–85% in arils",
      "Seed Hardness": "Hard",
      "Shelf Life": "15–30 days",
      "Export Suitability": "High",
      "Packaging": "Corrugated boxes with foam netting or clamshell trays",
      "Top Producing States": "Maharashtra, Gujarat, Karnataka, Andhra Pradesh",
      "Top Producing Cities": "Solapur, Nashik, Bijapur, Mehsana"
    }
  },*/
   /*{
    "name": "Fully Husked Coconut",
    "category": "coconut",
    "description": "Mature coconut with husk completely removed",
    "imageUrl": [
      "/SEMI HUSK COCUNUT_page_1.jpg"
    ],
    "details": {
      "Uses": "Edible consumption, Oil extraction, Religious ceremonies, Export",
      "Weight Range": "500g–800g",
      "Moisture Content": "~52%–60%",
      "Fiber Retention": "None",
      "Shelf Life": "30–60 days",
      "Export Suitability": "High",
      "Packaging": "Mesh bags or cartons",
      "Top Producing States": "Karnataka, Tamil Nadu, Kerala",
      "Top Producing Cities": "Tumakuru, Coimbatore, Kozhikode"
    }
  },
  {
    "name": "Semi-Husked Coconut",
    "category": "coconut",
    "description": "Mature coconut with partial husk removed, exposing shell but retaining fiber",
    "imageUrl": [
      "/SEMI HUSK COCUNUT_page_1.jpg"
    ],
    "details": {
      "Uses": "Edible consumption, Oil extraction, Religious ceremonies, Export",
      "Weight Range": "500g–800g",
      "Moisture Content": "~52%–60%",
      "Fiber Retention": "Partial husk retained around the 'eyes'",
      "Shelf Life": "30–60 days",
      "Export Suitability": "High",
      "Packaging": "Mesh bags or cartons",
      "Top Producing States": "Karnataka, Tamil Nadu, Kerala",
      "Top Producing Cities": "Tumakuru, Coimbatore, Kozhikode"
    }
  },*/
  //Coconuts
  {
    "name": "Semi-Husked Coconut – Grade A",
    "category": "coconut",
    "description": "Premium matured coconuts with partial husk removal; excellent shelf life",
    "imageUrl": [
      "/SEMI HUSK COCUNUT_page_2.jpg"
    ],
    "details": {
      "Quality": "Premium, matured",
      "Appearance": "Smooth shell exposure with protective fibres",
      "Shelf Life": "High (suitable for long-distance export)",
      "Usage": "Cooking, retail, religious offerings",
      "Export Suitability": "High"
    }
  },
  {
    "name": "Semi-Husked Coconut – Grade B",
    "category": "coconut",
    "description": "Value-grade coconuts with minor irregularities; flexible usage & pricing",
    "imageUrl": [
      "/SEMI HUSK COCUNUT_page_3.jpg"
    ],
    "details": {
      "Quality": "Matured with minor imperfections",
      "Shape": "Slightly irregular",
      "Surface": "May have blemishes",
      "Usage": "Oil extraction, cooking, religious use",
      "Export Suitability": "Good for price-sensitive markets"
    }
  },
  {
    "name": "Semi-Husked Coconut – Grade C",
    "category": "coconut",
    "description": "Smaller size & irregular appearance; ideal for processing industries",
    "imageUrl": [
      "/SEMI HUSK COCUNUT_page_4.jpg"
    ],
    "details": {
      "Quality": "Fully matured but smaller/irregular",
      "Surface": "Visible blemishes or partial husk damage",
      "Usage": "Industrial processing, religious offerings",
      "Export Suitability": "Low-to-medium"
    }
  },

  //Turmeric

{
    "name": "Salem Turmeric",
    "category": "turmeric",
    "description": "High curcumin content, bright yellow color",
    "imageUrl": [
      "/turmeric/TURMERIC_page_1.jpg"
    ],
    "details": {
      "Curcumin Content": "2.5%–5.5%",
      "Moisture Content": "60%–70% (fresh), 8%–10% (dried)",
      "Rhizome Type": "Finger (long, slender), Bulb (short, stout)",
      "Shelf Life": "6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Maharashtra, Telangana, Karnataka, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Sangli, Nanded, Erode, Nizamabad"
    }
  },
  {
    "name": "Rajapuri Turmeric",
    "category": "turmeric",
    "description": "Bold fingers, low fiber content",
    "imageUrl": [
      "/turmeric/TURMERIC_page_2.jpg"
    ],
    "details": {
      "Curcumin Content": "2.5%–5.5%",
      "Moisture Content": "60%–70% (fresh), 8%–10% (dried)",
      "Rhizome Type": "Finger (long, slender), Bulb (short, stout)",
      "Shelf Life": "6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Maharashtra, Telangana, Karnataka, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Sangli, Nanded, Erode, Nizamabad"
    }
  },
  {
    "name": "Erode Turmeric",
    "category": "turmeric",
    "description": "Fine texture, golden color",
    "imageUrl": [
      "/turmeric/TURMERIC_page_3.jpg"
    ],
    "details": {
      "Curcumin Content": "2.5%–5.5%",
      "Moisture Content": "60%–70% (fresh), 8%–10% (dried)",
      "Rhizome Type": "Finger (long, slender), Bulb (short, stout)",
      "Shelf Life": "6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Maharashtra, Telangana, Karnataka, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Sangli, Nanded, Erode, Nizamabad"
    }
  },
  {
    "name": "Nizamabad Turmeric",
    "category": "turmeric",
    "description": "Export-grade turmeric with balanced properties",
    "imageUrl": [
      "/turmeric/TURMERIC_page_4.jpg"
    ],
    "details": {
      "Curcumin Content": "2.5%–5.5%",
      "Moisture Content": "60%–70% (fresh), 8%–10% (dried)",
      "Rhizome Type": "Finger (long, slender), Bulb (short, stout)",
      "Shelf Life": "6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Maharashtra, Telangana, Karnataka, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Sangli, Nanded, Erode, Nizamabad"
    }
  },
  {
    "name": "Alleppey Turmeric",
    "category": "turmeric",
    "description": "Deep orange color, high oil content",
    "imageUrl": [
      "/turmeric/TURMERIC_page_5.jpg"
    ],
    "details": {
      "Curcumin Content": "2.5%–5.5%",
      "Moisture Content": "60%–70% (fresh), 8%–10% (dried)",
      "Rhizome Type": "Finger (long, slender), Bulb (short, stout)",
      "Shelf Life": "6–12 months (dried)",
      "Export Suitability": "High",
      "Packaging": "Gunny bags, vacuum packs, bulk cartons",
      "Top Producing States": "Maharashtra, Telangana, Karnataka, Tamil Nadu, Andhra Pradesh",
      "Top Producing Cities": "Sangli, Nanded, Erode, Nizamabad"
    }
  },
  //Banana
    {
    "name": "Solapur Banana – G9 Cavendish",
    "category": "banana",
    "description": "Premium export-grade bananas with long shelf life and uniform size",
    "imageUrl": [
      "/banana/banana.png"
    ],
    "details": {
      "Variety": "G9 Cavendish",
      "Harvest Maturity": "40–46 days after bunch formation",
      "Shelf Life": "30–45 days (controlled ripening)",
      "Weight per Box": "13–13.5 kg ventilated export cartons",
      "Production Volume": "5+ lakh MT annually",
      "Key Sourcing Areas": "Solapur district — Kandar, Tembhurni",
      "Export Markets": "Gulf countries (high demand)",
      "Quality Standards": "Residue-free & phytosanitary certified",
      "Export Containers": "25,000+ per year from region",
      "Brand Success Example": "Star Banana"
    }
  },
  //Coriander Seeds and Leaf
   {
    "name": "Eagle Coriander Seeds",
    "category": "corianderseeds",
    "description": "Premium spice with rich aroma and warm citrusy profile",
    "imageUrl": [
      "/coriander seeds/Coriander seeds.jpg"
    ],
    "details": {
      "Flavor": "Warm, citrusy",
      "Usage": "Curries, chutneys, spice blends",
      "Grade": "Premium aroma",
      "Market Suitability": "Strong domestic & international demand"
    }
  },
  {
    "name": "Double Parrot Coriander Seeds",
    "category": "corianderseeds",
    "description": "Finely selected aromatic seeds for authentic Asian flavours",
    "imageUrl": [
      "/coriander seeds/Double Parrot Coriander.jpg"
    ],
    "details": {
      "Flavor": "Warm, slightly citrusy",
      "Usage": "Spice mixes, curries, soups",
      "Quality": "Freshness and consistent size",
      "Market Usage": "Indian & Asian cuisines"
    }
  },
  {
    "name": "Single Parrot Coriander",
    "category": "corianderseeds",
    "description": "Aromatic leafy coriander with strong fresh taste",
    "imageUrl": [
      "/coriander seeds/Single Parrot Coriander.jpg"
    ],
    "details": {
      "Texture": "Tender & vibrant green leaves",
      "Usage": "Garnishing, chutneys, seasoning",
      "Cultivation": "Organically grown",
      "Market Suitability": "Retail & household consumption"
    }
  },
  {
    "name": "Scooter Quality Coriander",
    "category": "corianderseeds",
    "description": "Robust leaves with bold aroma and longer freshness",
    "imageUrl": [
      "/coriander seeds/Scooter quality Coriander.png"
    ],
    "details": {
      "Appearance": "Lush green, strong stems",
      "Flavor": "Earthy fragrance",
      "Usage": "Cooking & garnishing",
      "Yield": "High crop performance"
    }
  },
  {
    "name": "Super Bold Coriander",
    "category": "corianderseeds",
    "description": "Broad leaves with intense aroma and extended shelf life",
    "imageUrl": [
      "/coriander seeds/Super bold coriander.jpg"
    ],
    "details": {
      "Leaf Size": "Extra broad",
      "Shelf Life": "Superior for commercial supply",
      "Usage": "Cooking & garnishing",
      "Market Preference": "Retail & commercial kitchens"
    }
  },
  {
    "name": "Swastik Bold Coriander Seeds",
    "category": "corianderseeds",
    "description": "Premium whole seeds with 99% purity for food seasoning",
    "imageUrl": [
      "/coriander seeds/Swastik bold coriander seeds.jpg"
    ],
    "details": {
      "Purity": "99%",
      "Admixture": "Max 1%",
      "Split Content": "Max 5%",
      "Top Sourcing Regions": "Gujarat, Rajasthan, Madhya Pradesh",
      "Market Usage": "Spice blends & commercial seasoning"
    }
  },
  {
    "name": "Organic Coriander Seeds",
    "category": "corianderseeds",
    "description": "Chemical-free seeds with natural aroma & nutritional value",
    "imageUrl": [
      "/coriander seeds/Organic Coriander Seeds.png"
    ],
    "details": {
      "Cultivation": "100% Organic",
      "Health Benefits": "Rich in antioxidants & dietary fiber",
      "Flavor Profile": "Warm citrusy with nutty undertones",
      "Export Suitability": "High due to certification standards"
    }
  },
//Honey varieties
  {
    "name": "Multiflora Honey",
    "category": "honey",
    "description": "Mildly sweet honey sourced from various wildflowers.",
    "imageUrl": ["/honey/Multiflora.png"],
    "details": {
      "Primary Source": "Multiple wildflowers",
      "Color": "Light Amber",
      "Key Characteristics": "Common, mild sweetness",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Mustard Honey",
    "category": "honey",
    "description": "Lightly flavored honey with quick crystallization.",
    "imageUrl": ["/honey/Mustard.png"],
    "details": {
      "Primary Source": "Mustard flowers",
      "Color": "Golden-yellow",
      "Key Characteristics": "Quick crystallization",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Eucalyptus Honey",
    "category": "honey",
    "description": "Strong aroma with medicinal taste properties.",
    "imageUrl": ["/honey/Eucalyptus.png"],
    "details": {
      "Primary Source": "Eucalyptus trees",
      "Color": "Amber",
      "Key Characteristics": "Strong aroma, medicinal flavor",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Litchi Honey",
    "category": "honey",
    "description": "Light and fruity flavored premium honey.",
    "imageUrl": ["/honey/Litchi.png"],
    "details": {
      "Primary Source": "Litchi flowers",
      "Color": "Light Amber",
      "Key Characteristics": "Mild fruity taste",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Sunflower Honey",
    "category": "honey",
    "description": "Bright yellow thick honey with a mild taste.",
    "imageUrl": ["/honey/Sunflower.jpg"],
    "details": {
      "Primary Source": "Sunflower fields",
      "Color": "Golden Yellow",
      "Key Characteristics": "Mildly sweet & thick",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Neem Honey",
    "category": "honey",
    "description": "Dark and bitter honey rich in medicinal properties.",
    "imageUrl": ["/honey/Neem.png"],
    "details": {
      "Primary Source": "Neem flowers",
      "Color": "Dark Amber",
      "Key Characteristics": "High medicinal value",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Jamun Honey",
    "category": "honey",
    "description": "Slightly bitter honey — helps regulate sugar levels.",
    "imageUrl": ["/honey/Jamun.jpg"],
    "details": {
      "Primary Source": "Jamun trees",
      "Color": "Dark Brown",
      "Key Characteristics": "Good for diabetics",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Acacia Honey",
    "category": "honey",
    "description": "Delicate flavor, slow crystallizing honey.",
    "imageUrl": ["/honey/Acacia.jpg"],
    "details": {
      "Primary Source": "Acacia trees",
      "Color": "Very Light Yellow",
      "Key Characteristics": "Slow crystallization",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Ajwain Honey",
    "category": "honey",
    "description": "Herbal flavored honey that aids digestion.",
    "imageUrl": ["/honey/Ajwain.jpg"],
    "details": {
      "Primary Source": "Ajwain flowers",
      "Color": "Dark Amber to Golden Brown",
      "Key Characteristics": "Helps digestion",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Tulsi Honey",
    "category": "honey",
    "description": "Honey with strong herbal aroma & immunity properties.",
    "imageUrl": ["/honey/Tulsi.png"],
    "details": {
      "Primary Source": "Tulsi plants",
      "Color": "Amber",
      "Key Characteristics": "High medicinal value",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Forest/Wild Honey",
    "category": "honey",
    "description": "Raw and unprocessed nutrient-rich wild honey.",
    "imageUrl": ["/honey/Forest.jpg"],
    "details": {
      "Primary Source": "Forest wild flora",
      "Color": "Dark Amber to Brown",
      "Key Characteristics": "Raw, high in nutrients",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  },
  {
    "name": "Coriander Honey",
    "category": "honey",
    "description": "Strongly flavored honey with a golden amber tone.",
    "imageUrl": ["/honey/Coriander.jpg"],
    "details": {
      "Primary Source": "Coriander flowers",
      "Color": "Golden Amber",
      "Key Characteristics": "Strong aroma",
      "Packaging": "250g, 500g, 1kg Glass/Plastic Jars"
    }
  }


]


  const categoryNames = {
    honey: "Premium Honey",
    coconut: "Natural Coconuts",
    chilli: "Red Chilli",
    cardamom: "Finest Cardamom",
    blackpepper: "Quality blackpepper",
    clove: "Aromatic Cloves",
    cumin: "Pure Cumin",
    pomegranate: "Juicy Pomegranates",
    turmeric: "Golden Turmeric",
    greenchilli: "Fresh Green Chilli",
    blackblackpepper: "Quality blackpepper",
    banana: "Tasty Bananas",
    corianderseeds: "Coriander Seeds",
    onion: "Fresh Onions"

  };

  const cat = categoryNames[category] || "Unknown Category";

  /*useEffect(() => {
    // ✅ Filter products locally instead of fetching
    const filtered = allProducts.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setProducts(filtered);
    setLoading(false);
  }, [category]);*/

  useEffect(() => {
  const normalizedCategory = category.toLowerCase().replace(/s$/, ""); // onions → onion
  const filtered = allProducts.filter(
    (item) => item.category.toLowerCase() === normalizedCategory
  );
  setProducts(filtered);
  setLoading(false);
}, [category]);

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted!");
    setQuoteOpen(false);
  };

  const openQuoteModal = (product) => {
    setSelectedProduct(product);
    setQuoteForm((prev) => ({
      ...prev,
      message: `I'm interested in "${product.name}" under category "${cat}". Please share pricing and export details.`,
    }));
    setQuoteOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-50 to-yellow-50">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 to-yellow-50 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4 sm:mb-0">
          {cat} Varieties
        </h1>
        
      

      <button
  onClick={() => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const section = document.getElementById("products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // slight delay so page loads properly first
  }}
  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow transition"
>
  ← Back
</button>
</div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 place-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl w-72 sm:w-80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={
                product.imageUrl[0] ||
                "https://via.placeholder.com/300x200?text=Product+Image"
              }
              alt={product.name}
              className="w-full h-52 object-cover rounded-lg mb-3"
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#341F07] font-inter">
              {product.name}
            </h2>
            <div className="text-sm text-gray-700 space-y-0.5 mb-4">
              {Object.entries(product.details).map(([key, value]) => (
                <p key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setReadMoreOpen(true);
                }}
                className="flex-1 bg-[#F6821E] text-white px-3 py-2 rounded-md font-medium hover:bg-[#219150] transition-colors text-sm"
              >
                Read More
              </button>
              <button
                onClick={() => openQuoteModal(product)}
                className="flex-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-3 py-2 rounded-md font-medium shadow hover:opacity-90 transition-opacity text-sm"
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reuse your Read More and Get Quote modals here (same as before) */}
        {isReadMoreOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-6 sm:p-8 relative">
            <button
              onClick={() => setReadMoreOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-3">{selectedProduct.title}</h2>
            <div className="text-gray-700 space-y-1">
              {Object.entries(selectedProduct.details).map(([key, value]) => (
                <p key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => openQuoteModal(selectedProduct)}
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition-opacity text-sm"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Get Quote Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-lg p-6 sm:p-8 relative">
            <button
              onClick={() => setQuoteOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-2">
              🚢 Get Your Free Quote!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Fill in your details and our team will reach out soon.
            </p>
            <form onSubmit={handleQuoteSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={quoteForm.name}
                  onChange={handleQuoteChange}
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={quoteForm.email}
                  onChange={handleQuoteChange}
                  className="flex-1 border rounded-lg px-3 py-2"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  value={quoteForm.phone}
                  onChange={handleQuoteChange}
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <select
                  name="country"
                  value={quoteForm.country}
                  onChange={handleQuoteChange}
                  className="flex-1 border rounded-lg px-3 py-2"
                >
                  <option>Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>UAE</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={quoteForm.company}
                  onChange={handleQuoteChange}
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  name="quantity"
                  value={quoteForm.quantity}
                  onChange={handleQuoteChange}
                  className="flex-1 border rounded-lg px-3 py-2"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="3"
                name="message"
                value={quoteForm.message}
                onChange={handleQuoteChange}
                className="w-full border rounded-lg px-3 py-2"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 hover:opacity-90 text-white font-bold py-2 rounded-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productsbycat;
