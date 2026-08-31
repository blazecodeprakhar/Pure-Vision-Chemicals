export interface Product {
  id: string;
  name: string;
  category: 'Actives' | 'Sunscreen & Moisturizer' | 'Functional Products' | 'Preservatives' | 'Rheology Modifiers' | 'Herbal Extracts (Water Soluble)' | 'Herbal Extracts (Oil Soluble)' | 'Natural Oils' | 'Butters';
}

export const PRODUCTS: Product[] = [
  // SUNSCREEN & MOISTURIZER
  { id: "sun-1", name: "Solar Defense", category: "Sunscreen & Moisturizer" },
  { id: "sun-2", name: "Solar Defense Plus", category: "Sunscreen & Moisturizer" },
  { id: "sun-3", name: "Solar Defense Advanced", category: "Sunscreen & Moisturizer" },
  { id: "sun-4", name: "Solar Defense Advanced Plus", category: "Sunscreen & Moisturizer" },
  { id: "sun-5", name: "HydraBoost", category: "Sunscreen & Moisturizer" },
  { id: "sun-6", name: "HydraBoost Advanced", category: "Sunscreen & Moisturizer" },
  { id: "sun-7", name: "HydraXYL", category: "Sunscreen & Moisturizer" },
  { id: "sun-8", name: "Octocrylene", category: "Sunscreen & Moisturizer" },
  { id: "sun-9", name: "Avobenzone", category: "Sunscreen & Moisturizer" },

  // FUNCTIONAL PRODUCTS
  { id: "func-1", name: "Caprylic / Capric Triglyceride", category: "Functional Products" },
  { id: "func-2", name: "Cetearyl Alcohol & Ceteareth-20", category: "Functional Products" },
  { id: "func-3", name: "Glyceryl Monostearate SE", category: "Functional Products" },
  { id: "func-4", name: "Polysorbate 20", category: "Functional Products" },
  { id: "func-5", name: "PEG-40 Hydrogenated Castor Oil", category: "Functional Products" },

  // ACTIVES
  { id: "act-1", name: "Sodium Hyaluronate- 5KDA", category: "Actives" },
  { id: "act-2", name: "Sodium Hyaluronate - 10KDA", category: "Actives" },
  { id: "act-3", name: "Sodium Hyaluronate - 60KDA", category: "Actives" },
  { id: "act-4", name: "Sodium Hyaluronate - 90KDA", category: "Actives" },
  { id: "act-5", name: "Sodium Hyaluronate - 1.2MDA", category: "Actives" },
  { id: "act-6", name: "Sodium Hyaluronate - 2MDA", category: "Actives" },
  { id: "act-7", name: "Biotinoyl Tripeptide - 1", category: "Actives" },

  { id: "act-8", name: "Decapeptide - 10", category: "Actives" },
  { id: "act-9", name: "Ceramide Blend - 5", category: "Actives" },
  { id: "act-10", name: "Coenzyme Q 10", category: "Actives" },
  { id: "act-11", name: "Ethyl Ascorbic Acid", category: "Actives" },
  { id: "act-12", name: "Glabradin 40%", category: "Actives" },
  { id: "act-13", name: "Glabradin 90%", category: "Actives" },
  { id: "act-14", name: "1-3 Propanediol", category: "Actives" },
  { id: "act-15", name: "PV Hair Silk -Oil Soluble Keratin", category: "Actives" },
  { id: "act-16", name: "Propendiol", category: "Actives" },
  { id: "act-17", name: "Ectoin", category: "Actives" },
  { id: "act-18", name: "Bamboo Charcoal Powder", category: "Actives" },
  { id: "act-19", name: "Biotin", category: "Actives" },
  { id: "act-20", name: "3-o-Ethyl Ascorbic Acid", category: "Actives" },
  { id: "act-21", name: "Xanthan Gum", category: "Actives" },
  { id: "act-22", name: "Squalene", category: "Actives" },
  { id: "act-23", name: "Alpha Arbutin", category: "Actives" },

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
  { id: "pres-10", name: "Phenoxyethanol + Caprylyl Glycol+Sorbic Acid", category: "Preservatives" },
  { id: "pres-11", name: "1,2-octanediol/Caprylyl Glycol", category: "Preservatives" },
  { id: "pres-12", name: "1,2-hexanediol", category: "Preservatives" },
  { id: "pres-13", name: "CMIT + MIT (14% and 1.5%)", category: "Preservatives" },
  { id: "pres-14", name: "Phenoxyethanol + Chlorphenesin", category: "Preservatives" },
  { id: "pres-15", name: "Phenoxyethanol + IPBC", category: "Preservatives" },
  { "id": "pres-16", "name": "Phenoxyethanol + 5 Parabens", "category": "Preservatives" },
  { "id": "pres-17", "name": "Phenoxyethanol + 4 Parabens", "category": "Preservatives" },
  { "id": "pres-18", "name": "Phenoxyethanol + 2 Parabens", "category": "Preservatives" },
  { "id": "pres-19", "name": "Sodium Benzoate + Potassium Sorbate + Water", "category": "Preservatives" },
  { "id": "pres-20", "name": "Phenoxyethanol +Ethylhexylglycerin +Caprylyl Glycol", "category": "Preservatives" },
  { "id": "pres-21", "name": "Phenoxyethanol + Di-hydroacetic acid + Benzoic Acid", "category": "Preservatives" },

  // RHEOLOGY MODIFIERS
  { id: "rheo-1", name: "Acrylate Copolymer", category: "Rheology Modifiers" },
  { id: "rheo-2", name: "Acrylate / Steareth 20 Methacrylate Copolymer", category: "Rheology Modifiers" },
  { id: "rheo-3", name: "Acrylate / Beheneth 25 Methacrylate Copolymer", category: "Rheology Modifiers" },
  { id: "rheo-4", name: "Acrylate / Palmeth 25 Methacrylate Copolymer", category: "Rheology Modifiers" },
  { id: "rheo-5", name: "PEG 120 Methyl Glucose Dioleate", category: "Rheology Modifiers" },
  { id: "rheo-6", name: "Thixo GEL IDD (Hectorite, Isododecane, Polypropylene Carbonate)", category: "Rheology Modifiers" },
  { id: "rheo-7", name: "Xanthan Gum", category: "Rheology Modifiers" },
  { id: "rheo-8", name: "Cetearyl Glucoside, Cetearyl Alcohol, Water", category: "Rheology Modifiers" },

  // HERBAL EXTRACTS (WATER SOLUBLE)
  ...[
    "AHA Fruit Extract", "Aloe Vera Extract", "Amla Extract", "Apple Extract", "Amica Extract",
    "Ashwagandha Extract", "Babul Extract", "Bamboo Extract", "Banana Extract", "Basil Nut Extract",
    "Bhringraj Extract", "Bhumi Amla Extract", "Birhami Extract", "Black Berry Extract", "Blue Berry Extract",
    "Borage Extract", "Cactus Extract", "Calendula Extract", "Carrot Extract", "Chamomile Extract",
    "Chicory Extract", "Cinnamon Extract", "Cocoa Extract", "Coconut Extract", "Comfrey Extract",
    "Coriander Extract", "Cucumber Extract", "Elder Flower Extract", "Fennel Extract", "Gotu kola Extract",
    "Grape Extract", "Green tea Extract", "Ground nut Extract", "Guava Extract", "Hinna Extract",
    "Jamun Extract", "Jasmine Extract", "Jasuind Extract", "Kapurkachri Extract", "Karanj Extract",
    "Lavender Extract", "Lemon Extract", "Lemon Grass Extract", "Licorice Extract", "Lime Extract",
    "Malvari Extract", "Manjistha Extract", "Marry Gold Extract", "Mint Extract", "Moroccan Extract",
    "Mulberry Extract", "Musk melon Extract", "Myrrh Extract", "Neem Extract", "Nirgundi Extract",
    "Oat Extract", "Olive Extract", "Onion Extract", "Orange Extract", "Papaya Extract",
    "Pea Extract", "Peach Extract", "Pine apple Extract", "Pomegranate Extract", "Red Algae Extract",
    "Red Wine Extract", "Ritha Extract", "Rose Extract", "Rosemary Extract", "Sabal Extract",
    "Saffron Extract", "Sage Extract", "Sandal Extract", "Saw palmetto Extract", "Shikakai Extract",
    "Siris Extract", "Soap wort Extract", "Strawberry Extract", "Sweet flag Extract", "Tea Extract",
    "Tea Tree Extract", "Tomato Extract", "Tulsi Extract", "Turmeric Extract", "UV Sorb Herb Vativer Ext.",
    "Water melon Extract", "Wheat grass Extract", "White Willow Bark Ext.", "Wild Cherry Bark Ext."
  ].map((name, i) => ({ id: `hew-${i+1}`, name, category: "Herbal Extracts (Water Soluble)" as const })),

  // HERBAL EXTRACTS (OIL SOLUBLE)
  ...[
    "Aha fruit Extract", "Aloe vera Extract", "Amla Extract", "Apple Extract", "Amica Extract",
    "Ashwagandha Ext.", "Babul Extract", "Bamboo Extract", "Banana Extract", "Basil Nut Extract",
    "Bhirangraj Extract", "Bhumi Amla Extract", "Birahmi Extract", "Blue Berry Extract", "Black barry Extract",
    "Borage Extract", "Cactus Extract", "Calendula Extract", "Carrot Extract", "Chamomile Extract",
    "Chicory Extract", "Cinnamon Extract", "Cocoa Extract", "Coconut Extract", "Comfrey Extract",
    "Coriander Extract", "Cucumber Extract", "Elder Flower Extract", "Fennel Extract", "Gotu kola Extract",
    "Grape Extract", "Green tea Extract", "Ground nut Extract", "Guava Extract", "Hibiscus Extract",
    "Hinna Extract", "Jamun Extract", "Jasmine Extract", "Jasuind Extract", "Kapurkachri Extract",
    "Karanj Extract", "Lavender Extract", "Lemon Extract", "Lemon Grass Extract", "Licorice Extract",
    "Lime Extract", "Malvari Extract", "Manjistha Extract", "Marry Gold Extract", "Mint Extract",
    "Moroccan Extract", "Mulberry Extract", "Musk melon Extract", "Myrrh Extract", "Neem Extract",
    "Nirgundi Extract", "Oat Extract", "Olive Extract", "Onion Extract", "Orange Extract",
    "Papaya Extract", "Pea Extract", "Pineapple Extract", "Pomegranate Extract", "Red Wine Extract",
    "Ritha Extract", "Rose Extract", "Rosemary Extract", "Sabal Extract", "Saffron Extract",
    "Sage Extract", "Sandal Extract", "Saw palmetto Extract", "Shikakai Extract", "Siris Extract",
    "Soap wort Extract", "Strawberry Extract", "Sweet flag Extract", "Tea Extract", "Tea Tree Extract",
    "Tomato Extract", "Tulsi Extract", "Turmeric Extract", "UV Sorb Herb Vativer Ext.", "Water melon Extract",
    "Wheat grass Extract", "Wild cherry bark Extract"
  ].map((name, i) => ({ id: `heo-${i+1}`, name, category: "Herbal Extracts (Oil Soluble)" as const })),

  // NATURAL OILS
  ...[
    "Agarwood Cheap", "Ajwain Oil", "Almond Oil", "Ambrett Seed Oil", "Amla Oil", "Anise Oil",
    "Anjeer Oil", "Apricot Oil", "Argan Oil", "Amica Oil", "Avacado Oil", "Babchi Oil", "Basil Oil",
    "Bay Oil", "Bergamot Oil", "Bhrahmi Oil", "Black Pepper Oil", "Black Seed Oil", "Borage Oil",
    "Cajuput Oil", "Calendula Oil", "Calmus Oil", "Camphor Oil", "Canellia Oil", "Cardamom Oil",
    "Carrot Seed Oil", "Carway Oil", "Cashew Nut Oil", "Cassia Oil", "Castor Oil", "Cedar Wood Oil",
    "Celery Seed Oil", "Chamomile Blue Oil", "Chamomile Roman Oil", "Chaul Mogra Oil", "Chirongi Oil",
    "Cinnamon Oil", "Citronella Oil", "Clary Sage Oil", "Clove Bud Oil", "Clove Oil", "Coconut Oil",
    "Coconut Oil (Cosmetic)", "Coriander Oil", "Cotton Seed Oil", "Cucumber Oil", "Cumin Seed Oil",
    "Curry Leaf Oil", "Cypress Oil", "Dill Seed Oil", "ElmiOil", "Eucalyptus Oil", "Evening Prime Rose",
    "Frank Incense Oil", "Fennel Seed Oil", "Flax Seed Oil", "Garlic Oil", "Geranium Oil", "Ginger Oil",
    "Grape Fruit Oil", "Grape Seed Oil", "Hazel Nut Oil", "Heli Chrysum Oil", "Hemp Seed Oil",
    "Hibiscus Oil", "Hing Oil", "Hops Oil", "Hyssop Oil", "Jasmine Oil", "Jatamasi Oil", "Jawa Oil",
    "Jojoba Oil", "Juniper Berry Oil", "Kalongi Oil", "Kapoor Kachri Oil", "Kumkumadi Oil",
    "Lavender Oil", "Lemon Grass Oil", "Lemon Oil", "Lilly Oil", "Lime Oil", "Lin Seed Oil",
    "Maca Damia Oil", "Mace Oil", "Malkangi Oil", "Manderian Oil", "Marry Gold Oil", "Moringa Oil",
    "Musk Melon Oil", "Myrrh Oil", "Nagar Motha Oil", "Naiouli Oil", "Neem Oil", "Neeroli Oil",
    "Nirgundi Oil", "Nutmeg Oil", "Olive Oil", "Onion Oil", "Orange Oil", "Palma Rosa Oil",
    "Papaya Oil", "Pine Oil", "Peppermint Oil", "Pitchouli Oil", "Pomegranate Seed Oil", "Pumpkin Seed Oil",
    "Rose Hip Oil", "Rose Marry Oil", "Rose Oil", "Pure Rose Wood Oil", "Leaf Rose Essential Oil",
    "Rose Oil Ws", "Rose Petal Oil", "Rose Wood Oil", "Sage Oil", "Sandal Wood Oil", "Sea Buckthorn Oil",
    "Sesame Seed Oil", "Spearmint Oil", "Sugandh Kokila Oil", "Sugandh Mantri Oil", "Sun Flower Oil",
    "Tangerine Oil", "Tarragon Oil", "Tea Tree Oil", "Thuja Wood Oil", "Thyme Oil", "Thymol Crystal",
    "Till Oil", "Tomer Seed Oil", "Tuberose Absolute", "Turmeric Oil", "Turmeric Root Oil", "Vanilla Oil",
    "Vanilla Oil Transparent", "Vetiver Oil", "Vitamin-E Oil", "Walnut Oil", "Water Melon Oil",
    "Wheat Germ Oil", "Winter Green Oil", "Ylang Ylang"
  ].map((name, i) => ({ id: `oil-${i+1}`, name, category: "Natural Oils" as const })),

  // BUTTERS
  ...[
    "Almond Butter", "Aloe Butter", "Apricot Kernel Butter", "Avocado Butter", "Chaulmoogra Butter",
    "Cocoa Butter", "Cupuacu Butter", "Dhupu Butter", "Green Tea Butter", "Hemp Seed Butter",
    "Illipe Butter", "Jojoba Butter", "Kokum Butter", "Kukui Nut Butter", "Macadamia Nut Butter",
    "Mango Butter", "Mowrah Butter", "Murumuru Butter", "Papaya Butter", "Peanut Butter",
    "Sal Butter", "Shea Butter", "Tucuma Butter", "Turmeric Butter", "Ucuuba Butter"
  ].map((name, i) => ({ id: `but-${i+1}`, name, category: "Butters" as const }))
];
