import React from "react"
const MockData =[
    {
      "author": "Jo\u00e3o Guimar\u00e3es Rosa",
      "country": "Brazil",
      "imageLink": "images/the-devil-to-pay-in-the-backlands.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
      "pages": 494,
      "title": "The Devil to Pay in the Backlands",
      "year": 1956
    },
    {
      "author": "Knut Hamsun",
      "country": "Norway",
      "imageLink": "images/hunger.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
      "pages": 176,
      "title": "Hunger",
      "year": 1890
    },
    {
      "author": "Ernest Hemingway",
      "country": "United States",
      "imageLink": "images/the-old-man-and-the-sea.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
      "pages": 128,
      "title": "The Old Man and the Sea",
      "year": 1952
    },
    {
      "author": "Homer",
      "country": "Greece",
      "imageLink": "images/the-iliad-of-homer.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Iliad\n",
      "pages": 608,
      "title": "Iliad",
      "year": -735
    },
    {
      "author": "Homer",
      "country": "Greece",
      "imageLink": "images/the-odyssey-of-homer.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Odyssey\n",
      "pages": 374,
      "title": "Odyssey",
      "year": -800
    },
    {
      "author": "Henrik Ibsen",
      "country": "Norway",
      "imageLink": "images/a-Dolls-house.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
      "pages": 68,
      "title": "A Doll's House",
      "year": 1879
    },
    {
      "author": "James Joyce",
      "country": "Irish Free State",
      "imageLink": "images/ulysses.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
      "pages": 228,
      "title": "Ulysses",
      "year": 1922
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "images/stories-of-franz-kafka.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
      "pages": 488,
      "title": "Stories",
      "year": 1924
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "images/the-trial.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Trial\n",
      "pages": 160,
      "title": "The Trial",
      "year": 1925
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "images/the-castle.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
      "pages": 352,
      "title": "The Castle",
      "year": 1926
    },
    {
      "author": "K\u0101lid\u0101sa",
      "country": "India",
      "imageLink": "images/the-recognition-of-shakuntala.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
      "pages": 147,
      "title": "The recognition of Shakuntala",
      "year": 150
    },
    {
      "author": "Yasunari Kawabata",
      "country": "Japan",
      "imageLink": "images/the-sound-of-the-mountain.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
      "pages": 288,
      "title": "The Sound of the Mountain",
      "year": 1954
    },
    {
      "author": "Nikos Kazantzakis",
      "country": "Greece",
      "imageLink": "images/zorba-the-greek.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
      "pages": 368,
      "title": "Zorba the Greek",
      "year": 1946
    },
    {
      "author": "D. H. Lawrence",
      "country": "United Kingdom",
      "imageLink": "images/sons-and-lovers.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
      "pages": 432,
      "title": "Sons and Lovers",
      "year": 1913
    },
    {
      "author": "Halld\u00f3r Laxness",
      "country": "Iceland",
      "imageLink": "images/independent-people.jpg",
      "language": "Icelandic",
      "link": "https://en.wikipedia.org/wiki/Independent_People\n",
      "pages": 470,
      "title": "Independent People",
      "year": 1934
    },
    {
      "author": "Giacomo Leopardi",
      "country": "Italy",
      "imageLink": "images/poems-giacomo-leopardi.jpg",
      "language": "Italian",
      "link": "\n",
      "pages": 184,
      "title": "Poems",
      "year": 1818
    },
    {
      "author": "Doris Lessing",
      "country": "United Kingdom",
      "imageLink": "images/the-golden-notebook.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
      "pages": 688,
      "title": "The Golden Notebook",
      "year": 1962
    },
    {
      "author": "Astrid Lindgren",
      "country": "Sweden",
      "imageLink": "images/pippi-longstocking.jpg",
      "language": "Swedish",
      "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
      "pages": 160,
      "title": "Pippi Longstocking",
      "year": 1945
    },
    {
      "author": "Lu Xun",
      "country": "China",
      "imageLink": "images/diary-of-a-madman.jpg",
      "language": "Chinese",
      "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
      "pages": 389,
      "title": "Diary of a Madman",
      "year": 1918
    },
    {
      "author": "Naguib Mahfouz",
      "country": "Egypt",
      "imageLink": "images/children-of-gebelawi.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
      "pages": 355,
      "title": "Children of Gebelawi",
      "year": 1959
    },
    {
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "images/buddenbrooks.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
      "pages": 736,
      "title": "Buddenbrooks",
      "year": 1901
    },
    {
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "images/the-magic-mountain.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
      "pages": 720,
      "title": "The Magic Mountain",
      "year": 1924
    },
    {
      "author": "Herman Melville",
      "country": "United States",
      "imageLink": "images/moby-dick.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
      "pages": 378,
      "title": "Moby Dick",
      "year": 1851
    },
    {
      "author": "Michel de Montaigne",
      "country": "France",
      "imageLink": "images/essais.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
      "pages": 404,
      "title": "Essays",
      "year": 1595
    },
    {
      "author": "Elsa Morante",
      "country": "Italy",
      "imageLink": "images/history.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
      "pages": 600,
      "title": "History",
      "year": 1974
    },
    {
      "author": "Toni Morrison",
      "country": "United States",
      "imageLink": "images/beloved.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
      "pages": 321,
      "title": "Beloved",
      "year": 1987
    },
    {
      "author": "Murasaki Shikibu",
      "country": "Japan",
      "imageLink": "images/the-tale-of-genji.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
      "pages": 1360,
      "title": "The Tale of Genji",
      "year": 1006
    },
    {
      "author": "Robert Musil",
      "country": "Austria",
      "imageLink": "images/the-man-without-qualities.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
      "pages": 365,
      "title": "The Man Without Qualities",
      "year": 1931
    },
    {
      "author": "Vladimir Nabokov",
      "country": "Russia/United States",
      "imageLink": "images/lolita.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Lolita\n",
      "pages": 317,
      "title": "Lolita",
      "year": 1955
    },
    {
      "author": "George Orwell",
      "country": "United Kingdom",
      "imageLink": "images/nineteen-eighty-four.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
      "pages": 272,
      "title": "Nineteen Eighty-Four",
      "year": 1949
    },
    {
      "author": "Ovid",
      "country": "Roman Empire",
      "imageLink": "images/the-metamorphoses-of-ovid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
      "pages": 576,
      "title": "Metamorphoses",
      "year": 100
    },
    {
      "author": "Fernando Pessoa",
      "country": "Portugal",
      "imageLink": "images/the-book-of-disquiet.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
      "pages": 272,
      "title": "The Book of Disquiet",
      "year": 1928
    },
    {
      "author": "Edgar Allan Poe",
      "country": "United States",
      "imageLink": "images/tales-and-poems-of-edgar-allan-poe.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
      "pages": 842,
      "title": "Tales",
      "year": 1950
    },
    {
      "author": "Marcel Proust",
      "country": "France",
      "imageLink": "images/a-la-recherche-du-temps-perdu.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
      "pages": 2408,
      "title": "In Search of Lost Time",
      "year": 1920
    },
    {
      "author": "Fran\u00e7ois Rabelais",
      "country": "France",
      "imageLink": "images/gargantua-and-pantagruel.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
      "pages": 623,
      "title": "Gargantua and Pantagruel",
      "year": 1533
    },
    {
      "author": "Juan Rulfo",
      "country": "Mexico",
      "imageLink": "images/pedro-paramo.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
      "pages": 124,
      "title": "Pedro P\u00e1ramo",
      "year": 1955
    },
    {
      "author": "Rumi",
      "country": "Sultanate of Rum",
      "imageLink": "images/the-masnavi.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Masnavi\n",
      "pages": 438,
      "title": "The Masnavi",
      "year": 1236
    },
    {
      "author": "Salman Rushdie",
      "country": "United Kingdom, India",
      "imageLink": "images/midnights-children.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
      "pages": 536,
      "title": "Midnight's Children",
      "year": 1981
    },
    {
      "author": "Saadi",
      "country": "Persia, Persian Empire",
      "imageLink": "images/bostan.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
      "pages": 298,
      "title": "Bostan",
      "year": 1257
    },
    {
      "author": "Tayeb Salih",
      "country": "Sudan",
      "imageLink": "images/season-of-migration-to-the-north.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
      "pages": 139,
      "title": "Season of Migration to the North",
      "year": 1966
    },
    {
      "author": "Jos\u00e9 Saramago",
      "country": "Portugal",
      "imageLink": "images/blindness.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
      "pages": 352,
      "title": "Blindness",
      "year": 1995
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "images/hamlet.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Hamlet\n",
      "pages": 432,
      "title": "Hamlet",
      "year": 1603
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "images/king-lear.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/King_Lear\n",
      "pages": 384,
      "title": "King Lear",
      "year": 1608
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "images/othello.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Othello\n",
      "pages": 314,
      "title": "Othello",
      "year": 1609
    },
    {
      "author": "Sophocles",
      "country": "Greece",
      "imageLink": "images/oedipus-the-king.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
      "pages": 88,
      "title": "Oedipus the King",
      "year": -430
    },
    {
      "author": "Stendhal",
      "country": "France",
      "imageLink": "images/le-rouge-et-le-noir.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
      "pages": 576,
      "title": "The Red and the Black",
      "year": 1830
    },
    {
      "author": "Laurence Sterne",
      "country": "England",
      "imageLink": "images/the-life-and-opinions-of-tristram-shandy.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "year": 1760
    },
    {
      "author": "Italo Svevo",
      "country": "Italy",
      "imageLink": "images/confessions-of-zeno.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
      "pages": 412,
      "title": "Confessions of Zeno",
      "year": 1923
    },
    {
      "author": "Jonathan Swift",
      "country": "Ireland",
      "imageLink": "images/gullivers-travels.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
      "pages": 178,
      "title": "Gulliver's Travels",
      "year": 1726
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "images/war-and-peace.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
      "pages": 1296,
      "title": "War and Peace",
      "year": 1867
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "images/anna-karenina.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
      "pages": 864,
      "title": "Anna Karenina",
      "year": 1877
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "images/the-death-of-ivan-ilyich.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
      "pages": 92,
      "title": "The Death of Ivan Ilyich",
      "year": 1886
    },
    {
      "author": "Mark Twain",
      "country": "United States",
      "imageLink": "images/the-adventures-of-huckleberry-finn.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
      "pages": 224,
      "title": "The Adventures of Huckleberry Finn",
      "year": 1884
    },
    {
      "author": "Valmiki",
      "country": "India",
      "imageLink": "images/ramayana.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Ramayana\n",
      "pages": 152,
      "title": "Ramayana",
      "year": -450
    },
    {
      "author": "Virgil",
      "country": "Roman Empire",
      "imageLink": "images/the-aeneid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Aeneid\n",
      "pages": 442,
      "title": "The Aeneid",
      "year": -23
    },
    {
      "author": "Vyasa",
      "country": "India",
      "imageLink": "images/the-mahab-harata.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
      "pages": 276,
      "title": "Mahabharata",
      "year": -700
    }
  ]
  export default MockData