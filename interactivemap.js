//$(document).ready(function(){
  //$(".hide").hide();
  //$(".United States").click(function(){
    //$(".usa-txt").toggle();
  //});
//});

$(document).ready(function() {

  $("#svgmap").click(function(evt) {
    switch(evt.target.id) {
      case "Aussie":
        $("#info").html("Australia is the only continent in the world without an active volcano");
        break;
      case "Cand":
        $("#info").html("Canada is the number one donut consumer in the world, eating 1 billion donuts annually.");
        break;
      case "Chi":
        $("#info").html("Put all of China’s railway lines, it can loop around the earth two times.");
        break;
      case "Indo":
        $("#info").html("Indonesia is the only place on earth to see the Komodo dragon in the wild");
        break;
      case "Ita":
        $("#info").html("The Italian Police Force use Lamborghinis");
        break;
      case "Jap":
        $("#info").html("The number four is extremely unlucky in Japan");
        break;
      case "MX":
        $("#info").html("69 different languages are spoken in Mexico.");
        break;
      case "Malay":
        $("#info").html("It has the world’s oldest tropical rainforest");
        break;
      case "AF":
        $("#info").html("Afghanistan is home to the oldest oil paintings in the world.");
        break;
      case "Ang":
        $("#info").html("Angola housed some of the largest African kingdoms");
        break;
      case "AL":
        $("#info").html("Albania's language is like no other");
        break;
      case "AE":
        $("#info").html("The UAE Is the World’s Third Largest Oil Producer");
        break;
      case "Arge":
        $("#info").html("Argentina’s national sport isn’t soccer...it's Pato");
        break;
      case "AM":
        $("#info").html("Armenia is home to the world's oldest winery");
        break;
      case "AT":
        $("#info").html("The first post cards came from Austria");
        break;
      case "Azer":
        $("#info").html("The word 'Azerbaijan' literally means 'protector of fire'");
        break;
      case "BI":
        $("#info").html("Burundi is home to a notorious man-eating crocodile");
        break;
      case "BE":
        $("#info").html("French fries actually come from Belgium!");
        break;
      case "BJ":
        $("#info").html("The largest export from Benin is cotton.");
        break;
      case "BF":
        $("#info").html("Burkina Faso is one of the youngest nations in the world");
        break;
      case "BD":
        $("#info").html("Bangladesh is the longest female-led government");
        break;
      case "BG":
        $("#info").html("Almost one third of Bulgaria is covered with forests");
        break;
      case "BA":
        $("#info").html("Sarajevo hosted the Olympic Games in 1984");
        break;
      case "BY":
        $("#info").html("Belarus's capital is considered a green city, with over 844,000 trees.");
        break;
      case "BZ":
        $("#info").html("Belize is home to the second biggest barrier reef system in the world");
        break;
      case "BO":
        $("#info").html("Bolivia has one of the highest degrees of income inequality in the world.");
        break;
      case "BR":
        $("#info").html("Brazil has been the largest producer of coffee for the last 150 years");
        break;
      case "BN":
        $("#info").html("Brunei has one of the highest car-ownership rates in the world");
        break;
      case "BT":
        $("#info").html("Bhutan is the ONLY carbon-negative country in the world");
        break;
      case "BW":
        $("#info").html("The people are called Batswana, but single persons are referred to as a Motswana.");
        break;
      case "CF":
        $("#info").html("The Central African Republic home to the world’s second-largest rainforest");
        break;
      case "CH":
        $("#info").html("Switzerland Has 7000 Lakes");
        break;
      case "CI":
        $("#info").html("Cote d'Ivoire achieved independence from France in 1960");
        break;
      case "CM":
        $("#info").html("It’s home to Africa’s oldest forest");
        break;
      case "CD":
        $("#info").html("The DRC is among the most resource-rich countries on the planet");
        break;
      case "CG":
        $("#info").html("The Republic of Congo is home to the famous Pygmy Tribe.");
        break;
      case "CO":
        $("#info").html("Colombia is often voted one of the World’s Happiest Countries");
        break;
      case "CR":
        $("#info").html("There are over 500,000 species of wildlife in Costa Rica");
        break;
      case "CU":
        $("#info").html("Cuba has one of the highest literacy rates in the world");
        break;
      case "CZ":
        $("#info").html("In the Czech Republic, there are the most medieval originals in Europe");
        break;
      case "DE":
        $("#info").html("You can find over 2100 castles throughout Germany");
        break;
      case "DJ":
        $("#info").html("Lake Assal is 10 times saltier than the sea");
        break;
      case "Den":
        $("#info").html("LEGO® was invented by a Dane");
        break;
      case "DO":
        $("#info").html("Christopher Colombus first landed in the Dominican Republic");
        break;
      case "DZ":
        $("#info").html("Algeria is the largest African nation");
        break;
      case "EC":
        $("#info").html("Ecuador recognises nature’s rights");
        break;
      case "EG":
        $("#info").html("The Egyptian alphabet contained more than 700 hieroglyphs");
        break;
      case "ER":
        $("#info").html("Eritrea has only ever had one president");
        break;
      case "EE":
        $("#info").html("Estonia celebrated its 100th birthday in 2018.");
        break;
      case "ET":
        $("#info").html("Ethiopia is the oldest country in Africa");
        break;
      case "FI":
        $("#info").html("Almost half of Finland's foreign population lives in Helsinki");
        break;
      case "GA":
        $("#info").html("Gabon is home to most of Africa's gorillas.");
        break;
      case "UK":
        $("#info").html("Stamps originated in the United Kingdom");
        break;
      case "GE":
        $("#info").html("The world’s deepest cave is found in Georgia");
        break;
      case "GH":
        $("#info").html("The word 'Ghana' means 'Warrior King' in Mande");
        break;
      case "GN":
        $("#info").html("Guinea Has A 320 Km Long Coastline And Iconic Beaches");
        break;
      case "GM":
        $("#info").html("The Gambia is the smallest country in mainland Africa");
        break;
      case "GW":
        $("#info").html("Guinea-Bissau is home to a massive network of almost 90 islands off its shores");
        break;
      case "GQ":
        $("#info").html("Equatorial Guinea is the smallest African country to be a member of the United Nations");
        break;
      case "Gre":
        $("#info").html("80% of Greece is made up of mountains");
        break;
      case "GL":
        $("#info").html("Greenland is the largest island in the world that is not a continent");
        break;
      case "GT":
        $("#info").html("Guatemala hosts the largest city in Central America.");
        break;
      case "GY":
        $("#info").html("Guyana is the only English-speaking country in South America.");
        break;
      case "HN":
        $("#info").html("Honduras's nickname was the Banana Republic");
        break;
      case "HR":
        $("#info").html("Croatia is home to Europe’s oldest town");
        break;
      case "HT":
        $("#info").html("Haiti is on the island of Hispaniola");
        break;
      case "HU":
        $("#info").html("Hungary spends 4.9% of GDP (2010) on Education.");
        break;
      case "IN":
        $("#info").html("India was the first country to mine diamonds");
        break;
      case "IE":
        $("#info").html("Halloween originated in Ireland");
        break;
      case "IR":
        $("#info").html("The weekend is on Thursday and Friday in Iran");
        break;
      case "IQ":
        $("#info").html("Iraq is home to the world's oldest civilisation");
        break;
      case "IS":
        $("#info").html("Icelanders love books");
        break;
      case "IL":
        $("#info").html("Israel has two official languages: Hebrew and Arabic");
        break;
      case "JM":
        $("#info").html("Jamaica gained independence from Britain in 1962");
        break;
      case "JO":
        $("#info").html("Jordan has the world’s oldest dam");
        break;
      case "KZ":
        $("#info").html("Kazakhstan is the largest landlocked country in the world");
        break;
      case "KE":
        $("#info").html("Kenya has 50 national parks and reserves");
        break;
      case "KG":
        $("#info").html("Kyrgyzstan is one of the world’s least crowded countries");
        break;
      case "KH":
        $("#info").html("Cambodia's flag is the only flag that features a building");
        break;
      case "KR":
        $("#info").html("In South Korea, live octopus is a delicacy");
        break;
      case "KW":
        $("#info").html("The first Gulf nation to have a constitution and parliament is Kuwait.");
        break;
      case "LA":
        $("#info").html("Laos is the only landlocked country in Southeast Asia");
        break;
      case "LB":
        $("#info").html("Lebanon Has Been Inhabited Since 10000 BC.");
        break;
      case "LR":
        $("#info").html("Most Liberians speak English");
        break;
      case "LY":
        $("#info").html("Libya has Africa’s largest proven oil reserves");
        break;
      case "LK":
        $("#info").html("Sri Lanka used to be called Ceylon which is the transliteration of Ceilao.");
        break;
      case "LS":
        $("#info").html("Lesotho has the “highest lowest point” of any country");
        break;
      case "LT":
        $("#info").html("Basketball is the national sport of Lithuania");
        break;
      case "LU":
        $("#info").html("Luxembourg has 3 official languages");
        break;
      case "LV":
        $("#info").html("Latvian is one of oldest European languages");
        break;
      case "MA":
        $("#info").html("Morocco was the first country to recognize the United States as a country");
        break;
      case "MD":
        $("#info").html("Being bilingual (or even trilingual) is quite normal in Moldova");
        break;
      case "MG":
        $("#info").html("Most of Madagascar’s wildlife is found nowhere else on Earth");
        break;
      case "MK":
        $("#info").html("The Second Most Mountainous Country In The World Is Macedonia");
        break;
      case "ML":
        $("#info").html("Humans have lived in Mali for thousands of years");
        break;
      case "MM":
        $("#info").html("Humans have lived in Mali for thousands of years");
        break;
      case "ME":
        $("#info").html("Montenegrins are always happy to see foreigners");
        break;
      case "MN":
        $("#info").html("There are almost as many people as horses in Mongolia");
        break;
      case "MZ":
        $("#info").html("Mozambique is also the only one-word country that includes all five vowels in its name.");
        break;
      case "MR":
        $("#info").html("The Mauritania Railway is one of the longest and heaviest trains in the world.");
        break;
      case "MW":
        $("#info").html("Malawi's nickname is 'the warm heart of Africa'");
        break;
      case "NA":
        $("#info").html("Namibia is home to the oldest desert in the world");
        break;
      case "NE":
        $("#info").html("Niger is home to the highest mud-brick structure in the world");
        break;
      case "NG":
        $("#info").html("Nigeria is the most populous country in Africa with over 200 million people.");
        break;
      case "NI":
        $("#info").html("First Geopark in Central America is in Nicaragua");
        break;
      case "Nor":
        $("#info").html("You can see polar bears in the wild in Norway");
        break;
      case "NP":
        $("#info").html("Nepal is home to most of the world’s highest mountains");
        break;
      case "Oma":
        $("#info").html("Oman is the oldest independent state in the Arab world.");
        break;
      case "PK":
        $("#info").html("The world's largest deep sea port, Gwadar, is in Pakistan.");
        break;
      case "PA":
        $("#info").html("About 4 million people live in Panama");
        break;
      case "PE":
        $("#info").html("Over 70% of the world’s alpaca population lives in Peru.");
        break;
      case "Philip":
        $("#info").html("Philippines has 7641 islands");
        break;
      case "Papua":
        $("#info").html("Papua New Guinea Hosts 5% Of The Global Biodiversity");
        break;
      case "PL":
        $("#info").html("Poland is home to the world’s biggest castle");
        break;
      case "KP":
        $("#info").html("Pyongyang’s stadium is the largest in the world.");
        break;
      case "PY":
        $("#info").html("Paraguay is home to the world’s largest water reserve");
        break;
      case "PS":
        $("#info").html("Not all countries recognise Palestine sovereign state");
        break;
      case "QA":
        $("#info").html("Qatar is located between the sea and the desert");
        break;
      case "RO":
        $("#info").html("The heaviest building in the world is in Romania");
        break;
      case "RW":
        $("#info").html("Rwanda is the cleanest country in Africa");
        break;
      case "EH":
        $("#info").html("Western Sahara hosts the second largest wall in the world");
        break;
      case "SA":
        $("#info").html("Saudia Arabia has more oil than any other country in the world");
        break;
      case "SD":
        $("#info").html("Sudan is home to more pyramids than Egypt");
        break;
      case "SS":
        $("#info").html("South Sudan has one of the world’s youngest populations");
        break;
      case "SN":
        $("#info").html("Senegal is home to Africa’s tallest statue");
        break;
      case "SL":
        $("#info").html("Sierra Leone translates as ‘Lion Mountains’");
        break;
      case "SV":
        $("#info").html("El Salvador is known as the Land of Volcanoes");
        break;
      case "RS":
        $("#info").html("Most Serbian last names end on ‘ic’");
        break;
      case "SR":
        $("#info").html("Suriname is the smallest independent country in South America");
        break;
      case "SK":
        $("#info").html("There are over 6000 caves, nine national parks and 14 protected landscapes packed across Slovakia.");
        break;
      case "SI":
        $("#info").html("Slovenia has all kinds of terrain to explore.");
        break;
      case "SE":
        $("#info").html("Sweden imports waste – from Norway!");
        break;
      case "SZ":
        $("#info").html("Swaziland changed it's name to Eswatini");
        break;
      case "SY":
        $("#info").html("Syria is home to the oldest library in the world");
        break;
      case "TD":
        $("#info").html("Chad is the fifth-largest country in Africa.");
        break;
      case "TG":
        $("#info").html("The largest ivory seizure in Africa occurred in Togo");
        break;
      case "TH":
        $("#info").html("The world’s largest Chinatown is in Bangkok");
        break;
      case "TJ":
        $("#info").html("The capital city in Tajikistan is named after Monday");
        break;
      case "TM":
        $("#info").html("Turkmenistan is one of the least visited countries in the world.");
        break;
      case "TL":
        $("#info").html("Timor-Leste was the first new nation of the 21st century");
        break;
      case "TN":
        $("#info").html("Tunisia is the most northern country in the whole of Africa with strong trade ties to Europe.");
        break;
      case "Turk":
        $("#info").html("Turkey has total area of 783,562km², or more then three times larger then U.K.");
        break;
      case "TW":
        $("#info").html("Taiwan's cuisine is considered to be one of the best in the world.");
        break;
      case "TZ":
        $("#info").html("Tanzania has a unique species of tree-climbing lions.");
        break;
      case "UG":
        $("#info").html("Uganda is famous as the Pearl of Africa and hospitable to visitors");
        break;
      case "UA":
        $("#info").html("Ukraine is the second-largest country in Europe by land area");
        break;
      case "UY":
        $("#info").html("Uruguay means “river of painted birds”");
        break;
      case "UZ":
        $("#info").html("Uzbekistan has a rich history of architecture");
        break;
      case "VE":
        $("#info").html("Venezuela is home to the world's highest waterfall, Angel Falls");
        break;
      case "VN":
        $("#info").html("Vietnam is home to the largest cave in the world.");
        break;
      case "YE":
        $("#info").html("Yemen is the only republic in the Arabian Peninsula.");
        break;
      case "ZM":
        $("#info").html("Zambia relies on copper as one of its biggest exports.");
        break;
      case "ZW":
        $("#info").html("The world's largest man-made lake is in Zimbabwe.");
        break;
      case "SO":
        $("#info").html("Somalia Has One of the World's Largest Camel Herds.");
        break;
      case "XK":
        $("#info").html("Kosovo has the youngest population in Europe.");
        break;
      case "ZA":
        $("#info").html("South Africa has 11 official languages.");
        break;
      case "Zea":
        $("#info").html("There are way more sheep than people in New Zealand");
        break;
      case "Chil":
        $("#info").html("The world's biggest swimming pool is in Chile");
        break;
      case "NL":
        $("#info").html("The Netherlands is the world's biggest flower exporter");
        break;
      case "PT":
        $("#info").html("Portugal is the oldest country in Europe.");
        break;
      case "Russ":
        $("#info").html("Tetris Was Invented in Russia.");
        break;
      case "ES":
        $("#info").html("Spanish is the 2nd most widely spoken language in the world.");
        break;
      case "Fran":
        $("#info").html("Putting a baguette upside down is unlucky in France");
        break;
      case "US":
        $("#info").html("The USA ranks number 1 for hosting International students.");
        break;
      case "GF":
        $("#info").html("French Guiana has fertile land suitable for rice cultivation");
        break;
      case "AW":
        $("#info").html("Aruba has one of the most ethnically diverse populations in the world");
        break;
      case "AI":
        $("#info").html("Anguilla's national animal is the Fallow Deer");
        break;
      case "AmeS":
        $("#info").html("There are 14 territories in total in the American Samoa, nine of which are currently uninhabited.");
        break;
      case "A-B":
        $("#info").html("Antigua and Barbuda's National Dish is Fungie.");
        break;
      case "BH":
        $("#info").html("Bahrain's island location has made it unique among Persian Gulf states.");
        break;
      case "Baha":
        $("#info").html("The Bahamas is made up of over 700 islands");
        break;
      case "BL":
        $("#info").html("Saint-Barthélemy was occupied by the French in 1648.");
        break;
      case "BM":
        $("#info").html("Bermuda is a cluster of 138 islands located in the North Atlantic ocean.");
        break;
      case "BB":
        $("#info").html("Barbados is named after a tree");
        break;
      case "Como":
        $("#info").html("The Comoros are an archipelago in the Indian Ocean");
        break;
      case "Cape":
        $("#info").html("Cape Verde is the third largest nesting site for loggerhead turtles.");
        break;
      case "CW":
        $("#info").html("Curacao Actually Consists of Two Islands.");
        break;
      case "Cay":
        $("#info").html("The Cayman Islands flag is a symbol of unity and heritage.");
        break;
      case "Cyp":
        $("#info").html("Cyprus enjoys around 320 days of sunshine a year.");
        break;
      case "DM":
        $("#info").html("Dominica has the second-largest boiling lake in the world.");
        break;
      case "Falk":
        $("#info").html("The Falklands served an important role in Britain's territorial claims to subantarctic islands and a section of Antarctica.");
        break;
      case "Fae":
        $("#info").html("The Faroes Were Once Independent – For 11 Days.");
        break;
      case "FSoM":
        $("#info").html("Micronesia is home to the world's largest crabs");
        break;
      case "GD":
        $("#info").html("Grenada is home to the world's first underwater garden.");
        break;
      case "GU":
        $("#info").html("Guam is part of the Mariana Islands");
        break;
      case "SKaN":
        $("#info").html("St. Kitts was the first English colony in the Caribbean");
        break;
      case "LC":
        $("#info").html("Saint Lucia is first country to be named after a woman.");
        break;
      case "MF":
        $("#info").html("St. Martin is the smallest island in the world divided between two countries");
        break;
      case "MV":
        $("#info").html("Maldives is the World's Flattest Country.");
        break;
      case "MH":
        $("#info").html("The Marshall Islands are the site of a number of seamounts.");
        break;
      case "Mal":
        $("#info").html("Malta Is Not a Solitary Island");
        break;
      case "NMI":
        $("#info").html("Plumeria is the official flower of the Northern Mariana Islands.");
        break;
      case "MS":
        $("#info").html("Montserrat means “saw mountain” in Catalan.");
        break;
      case "Maur":
        $("#info").html("Mauritius has an incredible mix of cultures.");
        break;
      case "NewC":
        $("#info").html("New Caledonia has four major island clusters.");
        break;
      case "NR":
        $("#info").html("Nauru is the world's smallest island nation");
        break;
      case "PW":
        $("#info").html("Palau is sometimes called the “Underwater Serengeti” because its waters are teeming with marine life");
        break;
      case "Puer":
        $("#info").html("Puerto Rico Has Its Very Own Abyss Known As the Trench");
        break;
      case "FrenP":
        $("#info").html("French Polynesia is known for its stunning beaches and resorts");
        break;
      case "SoloI":
        $("#info").html("The Solomon Islands are made up of over 900 islands, around half of which still remain uninhabited");
        break;
      case "StaP":
        $("#info").html("Sao Tome and Principe is the second-smallest African country.");
        break;
      case "SX":
        $("#info").html("St. Maarten is the smallest island in the world to share two nationalities.");
        break;
      case "Sey":
        $("#info").html("The Seychelles are the only granite islands in the world");
        break;
      case "TaCI":
        $("#info").html("The Turks and Caicos are located in the Atlantic, not the Caribbean.");
        break;
      case "Ton":
        $("#info").html("Tonga is the only monarchy in Oceania");
        break;
      case "TaT":
        $("#info").html("The largest natural deposit of asphalt in the world is located in Trinidad and Tobago");
        break;
      case "TV":
        $("#info").html("Tuvalu is made up entirely of atolls");
        break;
      case "VC":
        $("#info").html("St Vincent and the Grenadines are largely undiscovered");
        break;
      case "VG":
        $("#info").html("The British Virgin Islands traditional music is called 'fungi'");
        break;
      case "USVI":
        $("#info").html("Unlike the rest of the United States, in the U.S. Virgin Islands, vehicles drive on the left side of the road");
        break;
      case "Van":
        $("#info").html("Vanuatu is home to one of the world's most sought after dive sites.");
        break;
      case "Sam":
        $("#info").html("Samoa's name has different meanings.");
        break;
      case "BQBO":
        $("#info").html("Amsterdam has over 1,200 bridges.");
        break;
      case "BQSE":
        $("#info").html("St. Eustatius does not have miles of white sandy beaches.");
        break;
      case "BQSA":
        $("#info").html("Christopher Columbus is said to have sighted Saba on November 13, 1493, but did not land.");
        break;
      case "MQ":
        $("#info").html("Martinique exports oil, bananas, rum, and pineapples.");
        break;
      case "Cana":
        $("#info").html("The Canary Islands were formed by volcanic eruptions millions of years ago");
        break;
      case "YT":
        $("#info").html("Mayotte exports perfume oils, vanilla, copra, coconuts, coffee, and cinnamon");
        break;
      case "RE":
        $("#info").html("The dialect spoken in Reunion is French Creole");
        break;
      case "Guad":
        $("#info").html("Guadeloupe is prone to earthquakes and hurricanes.");
        break;
      case "Fij":
        $("#info").html("Fiji is committed to protecting the ocean, the country's lifeblood.");
        break;
      default:
        break;
    }
  });

});
