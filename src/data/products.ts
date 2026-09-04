export interface Product {
  id: string;
  name: string;
  category: 'Actives' | 'UV Filters & Moisturizer' | 'Functional Products' | 'Preservatives' | 'Rheology Modifiers' | 'Herbal Extracts' | 'Natural Oils' | 'Butters';
}

export const PRODUCTS: Product[] = [
  // ACTIVES
  { id: "act-1", name: "Sodium Hyaluronate- 5KDA", category: "Actives" },
  { id: "act-2", name: "Sodium Hyaluronate - 50KDA", category: "Actives" },
  { id: "act-3", name: "Sodium Hyaluronate - 60KDA", category: "Actives" },
  { id: "act-4", name: "Sodium Hyaluronate - 90KDA", category: "Actives" },
  { id: "act-5", name: "Sodium Hyaluronate - 1.2MDA", category: "Actives" },
  { id: "act-6", name: "Sodium Hyaluronate - 2MDA", category: "Actives" },
  { id: "act-7", name: "Biotinoyl Tripeptide – 1", category: "Actives" },
  { id: "act-8", name: "Decapeptide - 10", category: "Actives" },
  { id: "act-9", name: "Ceramide Blend – 5", category: "Actives" },
  { id: "act-10", name: "Pseudo-Ceramide (synthetic)", category: "Actives" },
  { id: "act-11", name: "Coenzyme Q 10", category: "Actives" },
  { id: "act-12", name: "Ethyl Ascorbic Acid", category: "Actives" },
  { id: "act-13", name: "Glabradin 40%", category: "Actives" },
  { id: "act-14", name: "Glabradin 90%", category: "Actives" },
  { id: "act-15", name: "1-3 Propanediol", category: "Actives" },
  { id: "act-16", name: "PV Hair Silk -Oil Soluble Keratin", category: "Actives" },
  { id: "act-17", name: "Propanediol", category: "Actives" },

  // UV FILTERS & MOISTURIZER
  { id: "uvm-1", name: "Solar Defense (Aqua, Ethylhexyl Methoxycinnamate and Butyl Methoxydibenzoylmethane and Benzophenone-3, and Phospholipids, and 1,3 Butylene Glycol, and Phenoxyethanol)", category: "UV Filters & Moisturizer" },
  { id: "uvm-2", name: "Solar Defense Plus (Ethylhexyl Methoxycinnamate, and Aqua, and Butyl Methoxydibenzoylmethane, and Octocrylene, and Phospholipids, and 1-3 Butylene Glycol, and Phenoxyethanol)", category: "UV Filters & Moisturizer" },
  { id: "uvm-3", name: "Solar Defense Advanced (C12-15 Alkyl benzoate, and Aqua, and Butyl Methoxydibenzoylmethane, and Diethylamino Hydroxybenzoyl Hexyl Benzoate, and Phospholipids, and Ethylhexyl Triazone, and Propanediol, and Phenoxyethanol)", category: "UV Filters & Moisturizer" },
  { id: "uvm-4", name: "Solar Defense Advanced Plus (C12-15 Alkyl benzoate, and Aqua, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, and Diethylamino Hydroxybenzoyl Hexyl Benzoate, and Phospholipids, and Ethylhexyl Triazone, and Propanediol, and Phenoxyethanol)", category: "UV Filters & Moisturizer" },
  { id: "uvm-5", name: "HydraBoost (Glycerine, Xylitol, Trehalose, Sodium Hyaluronate, Betaine, Urea, Sodium Gluconate & Sodium PCA)", category: "UV Filters & Moisturizer" },
  { id: "uvm-6", name: "HydraBoost Advanced (Glycerin (and) Aqua (and) Trehalose (and) Xylitol (and) Sodium Gluconate (and) Betaine (and) Citric Acid (and) Sodium PCA (and) Sodium Hyaluronate)", category: "UV Filters & Moisturizer" },
  { id: "uvm-7", name: "HydraXYL (Xylitylglucoside (and) Anhydroxylitol (and) Xylitol)", category: "UV Filters & Moisturizer" },
  { id: "uvm-8", name: "Octocrylene", category: "UV Filters & Moisturizer" },
  { id: "uvm-9", name: "Avobenzone", category: "UV Filters & Moisturizer" },

  // FUNCTIONAL PRODUCTS
  { id: "func-1", name: "Isopropyl Myristate", category: "Functional Products" },
  { id: "func-2", name: "C12-15 Alkyl Benzoate", category: "Functional Products" },
  { id: "func-3", name: "Octyldodecanol", category: "Functional Products" },
  { id: "func-4", name: "Caprylic/Capric Triglyceride", category: "Functional Products" },
  { id: "func-5", name: "Ethylhexyl Stearate", category: "Functional Products" },
  { id: "func-6", name: "Niacinamide", category: "Functional Products" },
  { id: "func-7", name: "Kojic Dipalmitate", category: "Functional Products" },
  { id: "func-8", name: "Pseudo-Ceramide", category: "Functional Products" },
  { id: "func-9", name: "Polyglyceryl-4 Caprate", category: "Functional Products" },
  { id: "func-10", name: "Lumisense PO (Piroctone Olamine)", category: "Functional Products" },
  { id: "func-11", name: "Lumisense BTAC50 (Behentrimonium Chloride & Cetearyl Alcohol)", category: "Functional Products" },
  { id: "func-12", name: "Lumisense BTMS 50 (Behentrimonium Methosulfate & Cetearyl Alcohol)", category: "Functional Products" },
  { id: "func-13", name: "Stearamidopropyl Dimethylamine", category: "Functional Products" },
  { id: "func-14", name: "Lumisense HRP (Hydrolyzed Rice Protein)", category: "Functional Products" },
  { id: "func-15", name: "Lumisense M68 (Cetearyl Glucoside & Cetearyl Alcohol)", category: "Functional Products" },
  { id: "func-16", name: "Lumisense SMO (Sorbitan Oleate)", category: "Functional Products" },
  { id: "func-17", name: "Lumisense SSL (Sodium Stearoyl Lactylate)", category: "Functional Products" },
  { id: "func-18", name: "Lumisense SMS (Sorbitan Stearate)", category: "Functional Products" },
  { id: "func-19", name: "Lumisense 165 (Glycerol Stearate & PEG-100 Stearate)", category: "Functional Products" },
  { id: "func-20", name: "Lumisense DLSS (Disodium Lauryl Sulfosuccinate)", category: "Functional Products" },
  { id: "func-21", name: "Sodium Lauroyl Sarcosinate", category: "Functional Products" },
  { id: "func-22", name: "Sodium Methyl Cocoyl Taurate", category: "Functional Products" },
  { id: "func-23", name: "Cocamidopropyl Betaine", category: "Functional Products" },

  // PRESERVATIVES
  { id: "pres-1", name: "DMDM Hydantoin", category: "Preservatives" },
  { id: "pres-2", name: "DMDM Hydantoin Ultra low free formaldehyde", category: "Preservatives" },
  { id: "pres-3", name: "DMDM Hydantoin + IPBC", category: "Preservatives" },
  { id: "pres-4", name: "Phenoxyethanol + Ethylhexylglycerin", category: "Preservatives" },
  { id: "pres-5", name: "Ethylhexylglycerin + Caprylyl Glycol", category: "Preservatives" },
  { id: "pres-6", name: "DMDM Hydantoin + CMIT/MIT", category: "Preservatives" },
  { id: "pres-7", name: "Ethylhexylglycerin", category: "Preservatives" },
  { id: "pres-8", name: "Phenoxyethanol 10 ppm Grade", category: "Preservatives" },
  { id: "pres-9", name: "Phenoxyethanol + Caprylyl Glycol", category: "Preservatives" },
  { id: "pres-10", name: "Phenoxyethanol + Caprylyl Glycol + Sorbic Acid", category: "Preservatives" },
  { id: "pres-11", name: "1,2-Octanediol/Caprylyl Glycol", category: "Preservatives" },
  { id: "pres-12", name: "1,2-hexanediol", category: "Preservatives" },
  { id: "pres-13", name: "CMIT + MIT (14% and 1.5%)", category: "Preservatives" },
  { id: "pres-14", name: "Phenoxyethanol + Chlorphenesin", category: "Preservatives" },
  { id: "pres-15", name: "Phenoxyethanol + IPBC", category: "Preservatives" },
  { id: "pres-16", name: "Phenoxyethanol + 5 Parabens", category: "Preservatives" },
  { id: "pres-17", name: "Phenoxyethanol + 4 Parabens", category: "Preservatives" },
  { id: "pres-18", name: "Phenoxyethanol + 2 Parabens", category: "Preservatives" },
  { id: "pres-19", name: "Sodium Benzoate + Potassium Sorbate + Water", category: "Preservatives" },
  { id: "pres-20", name: "Phenoxyethanol + Ethylhexylglycerin + Caprylyl Glycol", category: "Preservatives" },
  { id: "pres-21", name: "Phenoxyethanol + Di-hydroacetic acid + Benzoic Acid", category: "Preservatives" },

  // RHEOLOGY MODIFIERS
  { id: "rheo-1", name: "Acrylate Copolymer", category: "Rheology Modifiers" },
  { id: "rheo-2", name: "Acrylate / Steareth 20 Methacrylate Copolymer", category: "Rheology Modifiers" },
  { id: "rheo-3", name: "Acrylate / Beheneth 25 Methacrylate Copolymer", category: "Rheology Modifiers" },
  { id: "rheo-4", name: "Acrylate / Palemth 25 Methacrylate Copolymer", category: "Rheology Modifiers" },
  { id: "rheo-5", name: "PEG 120 Methyl Glucose Dioleate", category: "Rheology Modifiers" },
  { id: "rheo-6", name: "Thixo GEL IDD (Hectorite, Isododecane, Polypropylene Carbonate)", category: "Rheology Modifiers" },
  { id: "rheo-7", name: "Xanthan Gum", category: "Rheology Modifiers" },
  { id: "rheo-8", name: "Cetearyl Glucoside, Cetearyl Alcohol, Water", category: "Rheology Modifiers" },
  { id: "rheo-9", name: "Xyloglucan", category: "Rheology Modifiers" },

  // HERBAL EXTRACTS
  ...[
    "Acerola extract", "Aloe Vera Extract", "Arnica Extract", "Amla Extract", "Apple Extract",
    "Ashwagandha Extract", "Babul Extract", "Bamboo Extract", "Banana Extract", "Basil Nut Extract",
    "Berries Blend", "Bhringraj Extract", "Bhumi Amla Extract", "Brhami Extract", "Black Berry Extract",
    "Blue Berry Extract", "Borage Extract", "Cactus Extract", "Calendula Extract", "Carrot Extract",
    "Chamomile Extract", "Chicory Extract", "Cinnamon Extract", "Cocoa Extract", "Coconut Neucifera",
    "Comfrey Extract", "Coriander Extract", "Cucumber Extract", "Dragons Blood Extract", "Elder Flower Extract",
    "Fennel Extract", "Fruit Mix Extract", "Ginseng Extract", "Gotu kola Extract", "Grape Extract",
    "Green tea Extract", "Ground nut Extract", "Guava Extract", "Hinna Extract", "Jammun Extract",
    "Jasmine Extract", "Jasuind Extract", "Kakadu Plum Extract", "Kapurkachri Extract", "Karanj Extract",
    "Lavender Extract", "Kombucha Extract", "Lemon Extract", "Lemon Grass Extract", "Licorice Extract",
    "Lime Extract", "Malvari Extract", "Manjistha Extract", "Mary Gold Extract", "Mint Extract",
    "Moringa Extract", "Moroccan Extract", "Mulberry Extract", "Musk melon Extract", "Myrrh Extract",
    "Neem Extract", "Nirgundi Extract", "Oat Extract", "Olive Extract", "Onion Extract",
    "Orange Extract", "Papaine Extract", "Papaya Extract", "Passion Fruit Extract", "Pea Extract",
    "Peach Extract", "Peony Extract", "Pine apple Extract", "Pistachio Extract", "Plant Mix",
    "Pomegranate Extract", "Potato Extract", "Red Algae Extract", "Red Wine Extract", "Ritha Extract",
    "Rose Extract", "Rosemary Extract", "Sabal Extract", "Saffron Extract", "Sage Extract",
    "Sandal Extract", "Saw palmetto Extract", "Sea buckthorn", "Shikakai Extract", "Siris Extract",
    "Soap Wort Extract", "Strawberry Extract", "Sweet Flag Extract", "Tea Extract", "Tea Tree Extract",
    "Tomato Extract", "Tulsi Extract", "Turmeric Extract", "Turmeric & Saffron Extract", "Water melon Extract",
    "Wheat grass Extract", "White Tea Extract", "White Water Lilly", "White Willow Bark Extract", "Wild Cherry Bark Extract",
    "Yuzu Extract"
  ].map((name, i) => ({ id: `he-${i+1}`, name, category: "Herbal Extracts" as const })),

  // NATURAL OILS
  ...[
    "Argan Oil", "Ajwain Oil", "Almond Oil", "Ambrette Seed Oil", "Amla Oil",
    "Anise Oil", "Anjeer Oil", "Apricot Oil", "Arnica Oil", "Avocado Oil",
    "Rosehip Oil", "Basil Oil", "Passion Fruit Flower Oil", "Bergamot Oil", "Brahmi Oil",
    "Black Pepper Oil", "Jojoba Oil", "Sea buckthorn Oil", "Calendula Oil", "Frankincense Oil",
    "Carrot Oil", "Camphor Oil", "Neroli Oil", "Sweet Orange Oil", "Eucalyptus Oil",
    "Sandalwood Oil"
  ].map((name, i) => ({ id: `oil-${i+1}`, name, category: "Natural Oils" as const })),

  // BUTTERS
  ...[
    "Almond Butter", "Shea Butter", "Apricot Kernel Butter", "Avocado Butter", "Cocoa Butter",
    "Cupuacu Butter", "Green Tea Butter", "Hemp Seed Butter", "Mango Butter", "Jojoba Butter",
    "Kokum Butter", "Macadamia Nut Butter", "Papaya Butter", "Peanut Butter"
  ].map((name, i) => ({ id: `but-${i+1}`, name, category: "Butters" as const }))
];
