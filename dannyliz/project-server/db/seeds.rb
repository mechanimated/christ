puts "Deleting all data..."
Ingredient.destroy_all
Product.destroy_all
Routine.destroy_all

puts "Creating chemicals..."
niacinamide = Ingredient.create(name: "niacinamide", chem_type: "vitamin B3", treatment: "anti-inflammatory")
glycolic_acid = Ingredient.create(name: "glycolic acid", chem_type: "alpha-hydroxy acid", treatment: "exfoliant")
lactic_acid = Ingredient.create(name: "lactic acid", chem_type: "alpha-hydroxy acid", treatment: "exfoliant")
tartaric_acid = Ingredient.create(name: "tartaric acid", chem_type: "alpha-hydroxy acid", treatment: "exfoliant")
citric_acid = Ingredient.create(name: "citric acid", chem_type: "alpha-hydroxy acid", treatment: "exfoliant")
malic_acid = Ingredient.create(name: "malic acid", chem_type: "alpha-hydroxy acid", treatment: "exfoliant")
salicylic_acid = Ingredient.create(name: "salicylic acid", chem_type: "beta-hydroxy acid", treatment: "anti-inflammatory")
hyaluronic_acid = Ingredient.create(name: "hyaluronic acid", chem_type: "glycosaminoglycan", treatment: "moisturizer")
sodium_hyaluronate = Ingredient.create(name: "sodium hyaluronate", chem_type: "glycosaminoglycan", treatment: "moisturizer")
hydroquinone = Ingredient.create(name: "hydroquinone", chem_type: "phenol", treatment: "lightening agent")
retinol = Ingredient.create(name: "retinol", chem_type: "vitamin A", treatment: "cell turnover")
ascorbic_acid = Ingredient.create(name: "ascorbic acid", chem_type: "vitamin C", treatment: "anti-oxidant")
dimethicone = Ingredient.create(name: "dimethicone", chem_type: "silicone", treatment: "moisturizer")
gluconolactone = Ingredient.create(name: "gluconolactone", chem_type: "poly-hydroxy acid", treatment: "exfoliant")
copper_peptide = Ingredient.create(name: "copper peptide", chem_type: "peptide", treatment: "anti-oxidant")
glycerin = Ingredient.create(name: "glycerin", chem_type: "polyol", treatment: "moisturizer")
benzoyl_peroxide = Ingredient.create(name: "benzoyl peroxide", chem_type: "peroxide", treatment: "acne")
clindamycin = Ingredient.create(name: "clindamycin", chem_type: "antibiotic", treatment: "acne")
caffeine = Ingredient.create(name: "caffeine", chem_type: "methylxanthine", treatment: "anti-oxidant")
hydrogen_peroxide = Ingredient.create(name: "hydrogen peroxide", chem_type: "peroxide", treatment: "acne")
ceramide = Ingredient.create(name: "ceramide", chem_type: "lipid", treatment: "moisturizer")
butylene_glycol = Ingredient.create(name: "butylene glycol", chem_type: "polyol", treatment: "moisturizer")
sorbitol = Ingredient.create(name: "sorbitol", chem_type: "polyol", treatment: "moisturizing")
propylene_glycol = Ingredient.create(name: "propylene glycol", chem_type: "polyol", treatment: "moisturizer")
stearic_acid = Ingredient.create(name: "stearic acid", chem_type: "fatty acid", treatment: "")
squalane = Ingredient.create(name: "squalane", chem_type: "fatty acid", treatment: "moisturizer")
isohexadecane = Ingredient.create(name: "isohexadecane", chem_type: "isoparaffin", treatment: "moisturizer")
avobenzone = Ingredient.create(name: "avobenzone", chem_type: "dibenzoylmethane", treatment: "sunscreen")
homosalate = Ingredient.create(name: "homosalate", chem_type: "salicylate", treatment: "sunscreen")
octisalate = Ingredient.create(name: "octisalate", chem_type: "salicylate", treatment: "sunscreen")
octocrylene = Ingredient.create(name: "octocrylene", chem_type: "cyanocinnamic ester", treatment: "sunscreen")
tretinoin = Ingredient.create(name: "tretinoin", chem_type: "vitamin A", treatment: "acne")

puts "Creating Product..."
skinceuticals_cleanser = Product.create(name: "Soothing Cleanser", brand: "Skinceuticals", price: "$36", chemicals: ["sorbitol", "glycerin", "propylene_glycol", "ascorbic_acid"])
# sorbitol, glycerin, propylene glycol, ascorbic acid, https://www.skinceuticals.com/soothing-cleanser-3606000463660
byoma_hydrating_serum = Product.create(name: "Hydrating Serum Tri-Ceramide Complex", brand: "BYOMA", price: "$15.99", chemicals: ["glycerin", "ceramide", "squalane", "butelyne_glycol", "lactic acid"])
# glycerin, ceramide, squalane, butelyne glycol, lactic acid  https://byoma.com/product/hydrating-serum/
olay_regenerist = Product.create(name: "Regenerist Micro-Sculpting Cream", brand: "Olay", price: "$36.99", chemicals: ["glycerin", "niacinamide", "sodium_hyaluronate", "isohexadecane"])
# glycerin, niacinamide, sodium hyaluronate, isohexadecane https://www.ulta.com/p/regenerist-micro-sculpting-cream-xlsImpprod5981450
vichy_liftactiv= Product.create(name: "LiftActiv Peptide-C Face Sunscreen", brand: "Vichy", price: "$39", chemicals: ["glycerin", "dimethcone", "glycolic acid", "sodium hyaluronate", "stearic acid", "avobenzone", "homosalate", "octisalate", "octocrylene"])
# glycerin, dimethcone, glycolic acid, sodium hyaluronate, stearic acid, avobenzone, homosalate, octisalate, octocrylene  https://www.ulta.com/p/liftactiv-peptide-c-face-sunscreen-spf-30-pimprod2013305
cerave_sa_cleanser = Product.create(name: "Renewing SA Cleanser", brand: "CeraVe", price: "$11.49", chemicals: ["glycerin", "ceramide", "salicylic_acid", "niacinamide", "hyaluronic_acid"])
# glycerin, ceramide, salicylic acid, niacinamide, hyaluronic acid https://www.cerave.com/skincare/cleansers/renewing-sa-cleanser
ordinary_glycolic_toner = Product.create(name: "Glycolic Acid 7% Exfoliating Toning Solution", brand: "The Ordinary", price: "$10", chemicals: ["glycolic acid"])
# glycolic acid https://www.sephora.com/product/the-ordinary-deciem-glycolic-acid-7-toning-solution-P427406
br_lotion50 = Product.create(name: "Lotion P50", brand: "Biologique Recherche", price: "$34", chemicals: ["citric_acid", "lactic_acid", "malic_acid", "salicylic_acid", "gluconolactone", "niacinamide"])
# citric acid, lactic acid, malic acid, salicylic acid, gluconolactone, niacinamide https://www.shoprescuespa.com/biologique-recherche-p50
laroche_retinol = Product.create(name: "Pure Retinol Face Serum with Vitamin B3", brand: "La Roche-Posay", price: "39.99", chemicals: ["glycerin", "niacinamide", "dimethicone", "sodium_hyaluronate", "retinol", "citric_acid"])
# glycerin, niacinamide, dimethicone, sodium hyaluronate, retinol, citric acid https://www.dermstore.com/la-roche-posay-pure-retinol-face-serum-with-vitamin-b3/12434152
ordinary_retinol = Product.create(name: "Retinol 1% in Squalane", brand: "The Ordinary", price: "$8.00", chemicals: ["squalane", "retinol"])
# squalane, retinol https://theordinary.com/en-us/retinol-1-in-squalane-serum-100441

25.times do |t|
    Routine.create(
        product_id: Product.all.sample.id,
        ingredient_id: Ingredient.all.sample.id
    )
end