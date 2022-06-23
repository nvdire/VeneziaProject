// 3 itinerary, 5 POI each (connected through PoiToItinerary), 10 of POIs have Event
export const itineraries = [
	{
		Title: "The Ultimate 2 Days in Venice",
		Description:
			"Spending 2 days in Venice is an entirely wonderful–and entirely unique–experience. From its beautiful canals filled with iconic gondolas to the impressive Doge’s Palace to the ease of getting delightfully lost in the maze of narrow streets and tiny canals, there is absolutely nowhere like Venice.  Sometimes it can seem like any city with a canal wants to claim itself as the Venice of Wherever, but they all fall short by a mile. This city is a truly unique place, and the opportunity to spend a couple of days in Venice is one to cherish. Yes, it is crowded. Yes, it is expensive (especially by Italy standards!). Yes, it is extremely touristic.",
		ImageUrl: "https://i.postimg.cc/z817PwBg/Venice-143.jpg",
		TotalDuration: "2 days",
		SuggestedAudience: ["Every one", "Outgoing"],
		PoiToItinerary: {
			create: [
				{
					POI: {
						create: {
							Title: "Rialto Bridge",
							Description:
								"The Rialto Bridge is the oldest of the four bridges spanning the Grand Canal in Venice, Italy. Connecting the sestieri of San Marco and San Polo, it has been rebuilt several times since its first construction as a pontoon bridge in 1173, and is now a significant tourist attraction in the city.",
							ImageUrl: "https://i.postimg.cc/mTqW96L9/88.jpg",
							Address: "Sestiere San Polo, 30125 Venezia VE, Italy",
							OpeningHours: "Tuesday to Saturday from 7:30 am to 12:00 pm",
							Event: {
								create: [
									{
										Title: "Private Overview of Venice",
										Description:
											"You'll be escorted by your private guide during a relaxing 2-hour guided walk away from the main tourist sites and crowds. We make our way through the labyrinth of alleyways towards the famous Opera house La Fenice which burned down and has now been rebuilt to is original glory, then a quiet walk towards Palazzo Fortuny once known as Palace of the Orpheans, we will see the ornate Bovolo spiral staircase (known as ‘of the snail’) tucked away in a tiny courtyard, then onto a view of Rialto bridge and Grand Canal.  Discover the hunch-back of Rialto, Marco Polo’s house and much more.Take advantage of our expert guides, and learn about the Venetian dialect.",
										ImageUrl: "https://i.postimg.cc/6tNW5htc/venice-overview-1400x788-1-48e3-1400x788.jpg",
										EventType: "Tour",
										Date: "2022-10-15T10:00:00.000Z",
										TimeDuration: "1970-01-01T02:00:00.000Z",
										EventUrl: "https://www.veniceevents.com/book-walks-tours/?re-product-id=173213",
										Price: "From €210",
										PreregisterNeccessary: true,
										Address: "Venice",
										Season: "Winter"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Doge's Palace",
							Description:
								"The Doge's Palace is a palace built in Venetian Gothic style, and one of the main landmarks of the city of Venice in northern Italy. The palace was the residence of the Doge of Venice, the supreme authority of the former Republic. It was built in 1340 and extended and modified in the following centuries. It became a museum in 1923 and is one of the 11 museums run by the Fondazione Musei Civici di Venezia.",
							ImageUrl:
								"https://i.postimg.cc/4J9kQbyS/1200px-Venice-Doge-s-Palace-and-campanile-of-St-Mark-s-Basilica-facing-the-sea.jpg",
							Address: "P.za San Marco, 1, 30124 Venezia VE, Italy",
							OpeningHours: "Every day from 9:00 am to 7:00 pm",
							Event: {
								create: [
									{
										Title: "Sculptures by Antonio Rizzo",
										Description:
											"Antonio Rizzo was one of the leading figures in early Renaissance Venice. Originally from Verona, where no trace remains of his earliest work, he established himself in Venice after several stays in Padua, where he was able to admire Donatello’s sculptures in the basilica of the Santo and Mantegna’s frescoes in the church of the Eremitani. He certainly visited Florence, where he admired the works of Luca della Robbia and Desiderio da Settignano. In 1465 the doge Cristoforo Moro commissioned Antonio Rizzo to built three altars in St Mark’s basilica. In 1469 he took over from Niccolò di Giovanni Fiorentino as head sculptor on the Arco Foscari, on the side facing the Doge’s Palace courtyard.",
										ImageUrl: "https://i.postimg.cc/MWXxrPm6/blobid1626267071769.jpg",
										EventType: "Exhibition",
										Date: "2022-08-12T09:00:00.000Z",
										TimeDuration: "1970-01-01T01:30:00.000Z",
										EventUrl:
											"https://palazzoducale.visitmuve.it/en/eventi-en/eventi-in-corso-en/sculptures-by-antonio-rizzo-in-doges-palace/2019/10/20619/presentation-rizzo/",
										Price: "From €89",
										PreregisterNeccessary: false,
										Address: "Doge's Palace",
										Season: "Summer"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Saint Mark's Basilica",
							Description:
								"The Patriarchal Cathedral Basilica of Saint Mark, commonly known as St Mark's Basilica, is the cathedral church of the Roman Catholic Patriarchate of Venice; it became the episcopal seat of the Patriarch of Venice in 1807, replacing the earlier cathedral of San Pietro di Castello. It is dedicated to and holds the relics of Saint Mark the Evangelist, the patron saint of the city. The church is located on the eastern end of Saint Mark's Square, the former political and religious centre of the Republic of Venice, and is attached to the Doge's Palace. Prior to the fall of the republic in 1797, it was the chapel of the Doge and was subject to his jurisdiction, with the concurrence of the procurators of Saint Mark de supra for administrative and financial affairs.",
							ImageUrl: "https://i.postimg.cc/1y4ZfZQP/st-mark-church-venice.jpg",
							Address: "P.za San Marco, 328, 30100 Venezia VE, Italy",
							OpeningHours: "Every day from 9:30 am to 5:00 pm",
							Event: {
								create: [
									{
										Title: "Golden Saint Mark's Tour",
										Description:
											"Your guide will provide you with a wealth of information regarding Saint Mark's Square and then accompany you on a detailed tour of the Golden Basilica from Saint Mark's square, once the private chapel of the Doge of Venice, the only one of its kind in Italy, thanks to the sumptuous golden mosaics and impressive marble inlay flooring.  During the tour you will be able absorb the atmosphere whilst listening to your guide who will describe the biblical scenes represented throughout the building, together with history and particularities of this ancient Basilica.  Visit Saint Mark's Basilica first floor museum and see the famous horses and admire Saint Mark's Square from the Basilica's terrace. The tour lasts one hour and concludes outside the Basilica in Saint Mark's Square.",
										ImageUrl: "https://i.postimg.cc/1y4ZfZQP/st-mark-church-venice.jpg",
										EventType: "Tour",
										Date: "2022-09-03T09:00:00.000Z",
										TimeDuration: "1970-01-01T01:00:00.000Z",
										EventUrl: "https://www.veniceevents.com/book-walks-tours/?re-product-id=173803",
										Price: "From €39",
										PreregisterNeccessary: true,
										Address: "Saint Mark's Basilica",
										Season: "Winter"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Grand Canal",
							Description:
								"The main waterway of Venice, Italy. It is lined on each side by palaces and spanned by the Rialto Bridge",
							ImageUrl: "https://i.postimg.cc/9XFJfC7j/Grand-Canal-Venice.webp",
							Address: "Grand Canal, Venice, Italy!",
							OpeningHours: "Every day from 10:00 am to 9:00 pm",
							Event: {
								create: [
									{
										Title: "Private Gondola tour",
										Description:
											"Book your enchanting private gondola ride in Venice and glide through centuries of history, allowing yourself to be captivated by the glamour and elegance of the Venetian Palazzi. The perfect way to appreciate the beauty, charm and colour of this unique city built on water, you will be enthralled by what surrounds you.  Feel part of an ancient Venetian tradition and experience Venice as the locals have for more than a thousand years. Once upon a time the most noble and wealthy of families would have travelled around by gondola - the slightly eccentric Peggy Guggenheim was the last person to have her own private gondola in the 1960's. On this unique exploration of the Venetian romantic canals, unwind and relax into the gentle rhythms and movements of the Grand Canal, appreciating the skill involved in steering the gondola ride through the intricate waterways of Venice.",
										ImageUrl: "https://i.postimg.cc/GbXdKwYg/id019-gondola-privata-pomeriggio-full.jpg",
										EventType: "Tour",
										Date: "2022-09-21T10:00:00.000Z",
										TimeDuration: "1970-01-01T00:30:00.000Z",
										EventUrl: "https://www.veniceevents.com/book-walks-tours/?re-product-id=173204",
										Price: "From €89",
										PreregisterNeccessary: true,
										Address: "Grand Canal",
										Season: "Winter"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Bridge of Sighs",
							Description:
								"The Bridge of Sighs is a bridge in Venice, Italy. The enclosed bridge is made of white limestone, has windows with stone bars, passes over the Rio di Palazzo, and connects the New Prison to the interrogation rooms in the Doge's Palace. It was designed by Antonio Contino, whose uncle Antonio da Ponte designed the Rialto Bridge, and it was built in 1600.",
							ImageUrl: "https://i.postimg.cc/CLXrRXGL/1200px-Antonio-Contin-Ponte-dei-sospiri-Venice.jpg",
							Address: "P.za San Marco, 1, 30124 Venezia VE, Italy",
							OpeningHours: "Every day from 8:30 am to 7:00 pm"
						}
					}
				}
			]
		}
	},
	{
		Title: "First-time Visitors",
		Description:
			"If you are planning your first trip to Venice, this Venice itinerary is perfect for you. With 2 days in Venice, you have just enough time to visit the highlights of this beautiful city and stroll the canals. Tour Doges Palace, visit St. Mark’s Basilica, drift through the canals on a gondola, and explore the quieter corners of Venice.",
		ImageUrl: "https://i.postimg.cc/BsFNg7q3/2-Days-in-Venice-Itinerary-Photo.jpg",
		TotalDuration: "2 days",
		SuggestedAudience: ["First-time visitors"],
		PoiToItinerary: {
			create: [
				{
					POI: {
						create: {
							Title: "Peggy Guggenheim Collection",
							Description:
								"The Peggy Guggenheim Collection is a modern art museum on the Grand Canal in the Dorsoduro sestiere of Venice, Italy. It is one of the most visited attractions in Venice. The collection is housed in the Palazzo Venier dei Leoni, an 18th-century palace, which was the home of the American heiress Peggy Guggenheim for three decades. She began displaying her private collection of modern artworks to the public seasonally in 1951. After her death in 1979, it passed to the Solomon R. Guggenheim Foundation, which opened the collection year-round from 1980.",
							ImageUrl: "https://i.postimg.cc/Mxx21BS9/architecture-pgc-exterior-16-9-ratio-web.jpg",
							Address: "Dorsoduro, 701-704, 30123 Venezia VE, Italy",
							OpeningHours: "Wednesday to Monday from 10:00 am to 6:00 pm",
							Event: {
								create: [
									{
										Title: "The Guggenheim venue",
										Description:
											"Located on the Grand Canal in the heart of Venice, the museum offers the opportunity to enjoy 20th-century masterpieces in a striking setting, the former residence of the American collector and patron of the arts Peggy Guggenheim. Palazzo Venier dei Leoni is the only unfinished building along the Grand Canal. This addity has also made it one of very few places with a panoramic roof terrace overlooking the Grand Canal. Likewise guests may enjoy the quiet and beautiful atmosphere of the Nasher Sculpture Garden, which includes iconic sculptures from the collection.",
										ImageUrl: "https://i.postimg.cc/Mxx21BS9/architecture-pgc-exterior-16-9-ratio-web.jpg",
										EventType: "Exclusive evening",
										Date: "2022-10-12T10:00:00.000Z",
										TimeDuration: "1970-01-01T03:00:00.000Z",
										EventUrl: "https://www.guggenheim-venice.it/en/private-visits-and-events/private-events/",
										Price: "From €299",
										PreregisterNeccessary: true,
										Address: "The Peggy Guggenheim Collection Museum",
										Season: "Winter"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Murano",
							Description:
								"Murano is a series of islands linked by bridges in the Venetian Lagoon, northern Italy. It lies about 1.5 kilometres north of Venice and measures about 1.5 km across with a population of just over 5,000. It is famous for its glass making. It was once an independent comune, but is now a frazione of the comune of Venice.",
							ImageUrl: "https://i.postimg.cc/wqYKfysT/Murano-Burano-and-Torcello-Day-Trip.jpg",
							Address: "Murano, Venice, Italy",
							OpeningHours: "24/7 (it's an island!)",
							Event: {
								create: [
									{
										Title: "Islands Boat Tour",
										Description:
											"Departing from your Venice, we take you across the lagoon for visiting the Three Islands of the Venetian Lagoon: Murano, Burano and Torcello.  The first stop is at the well known Island of Murano, famous for its glass making since the 10th century.Here you will visit a glass factory and furnace to see the making of venetian glass. Your local guide will explain to you the history and the process of the glass making throughout the years.  Then, crossing the northern part of the Lagoon, we arrive at the colourful Island of Burano, famous for its brightly coloured houses, fishing industry and also its lace making, you will have time to walk around this elegant little island and also visiting its shops, your guide will point out to you one of the specialized shops where it is possible to see one of the Local ladies working on the Burano Lace, she will show you the different stitches involved in making these wonderful works of art.",
										ImageUrl: "https://i.postimg.cc/wqYKfysT/Murano-Burano-and-Torcello-Day-Trip.jpg",
										EventType: "Boat Tour",
										Date: "2022-08-03T09:00:00.000Z",
										TimeDuration: "1970-01-01T01:30:00.000Z",
										EventUrl: "https://www.veniceevents.com/book-walks-tours/?re-product-id=173224",
										Price: "From €25",
										PreregisterNeccessary: true,
										Address: "Murano, Burano & Torcello",
										Season: "Summer"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Gallerie dell'Accademia",
							Description:
								"The Gallerie dell'Accademia is a museum gallery of pre-19th-century art in Venice, northern Italy. It is housed in the Scuola della Carità on the south bank of the Grand Canal, within the sestiere of Dorsoduro. It was originally the gallery of the Accademia di Belle Arti di Venezia, the art academy of Venice, from which it became independent in 1879, and for which the Ponte dell'Accademia and the Accademia boat landing station for the vaporetto water bus are named. The two institutions remained in the same building until 2004, when the art school moved to the Ospedale degli Incurabili.",
							ImageUrl:
								"https://i.postimg.cc/9Vp3bfXC/a994990a-f5af-4e91-8438-99c5478ce873-7600-florence-priority-access-accademia-gallery-04.jpg",
							Address: "Campo della Carità, 1050, 30123 Venezia VE, Italy",
							OpeningHours: "Every day from 8:15 am to 7:15 pm",
							Event: {
								create: [
									{
										Title: "Michelangelo Exhibition",
										Description:
											"This exhibition will be the first to display all of the early exemplars of bronze portraits of Michelangelo attributed to Daniele da Volterra, exploring the complex relationship between originals, replicas and derivations.  The problem of the authorship of the bronze portraits of Michelangelo has long vexed art historians: with the exception of the Casa Buonarroti bust in Florence, which remained in the hands of his heirs for centuries, there is significant uncertainty surrounding the authorship and provenance of the numerous exemplars found in different Italian and foreign collections. The recent restoration of the exemplar in the collection of the Galleria dell’Accademia di Firenze made it possible to identify the second of the three originals cast by Daniele da Volterra in 1565 and to revise a few attributions that were considered secure until a few years ago.",
										ImageUrl: "https://i.ytimg.com/vi/m7xifWqI3VI/maxresdefault.jpg",
										EventType: "Exhibition",
										Date: "2022-07-31T10:00:00.000Z",
										TimeDuration: "1970-01-01T02:00:00.000Z",
										EventUrl:
											"https://www.galleriaaccademiafirenze.it/en/expositions/i-ritratti-in-bronzo-di-michelangelo-di-daniele-da-volterra/",
										Price: "From €25",
										PreregisterNeccessary: false,
										Address: "Gallerie dell'Accademia",
										Season: "Summer"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Santa Maria della Salute",
							Description:
								"Santa Maria della Salute, commonly known simply as the Salute, is a Roman Catholic church and minor basilica located at Punta della Dogana in the Dorsoduro sestiere of the city of Venice, Italy. It stands on the narrow finger of Punta della Dogana, between the Grand Canal and the Giudecca Canal, at the Bacino di San Marco, making the church visible when entering the Piazza San Marco from the water. The Salute is part of the parish of the Gesuati and is the most recent of the so-called plague churches.",
							ImageUrl: "https://i.postimg.cc/2rcspXBt/99.jpg",
							Address: "Dorsoduro, 1, 30123 Venezia VE, Italy",
							OpeningHours: "Monday to Sunday 9:00 am to 6:30 pm",
							Event: {
								create: [
									{
										Title: "Madonna dellaSalute Celebration",
										Description:
											"Every year, in November, Venetians go on pilgrimage to one of the most beautiful churches in the city: Santa Maria della Salute.The Celebration of Madonna della Salute is the feast of the Madonna della Salute, testimony to the close relationship between Venice and religious sentiment which, in this case more than ever, is lived in a very intimate, I dare say almost visceral way and, not by chance, is an event not very well known and experienced by tourists.",
										ImageUrl: "https://i.postimg.cc/2rcspXBt/99.jpg",
										EventType: "Pilgrimage",
										Date: "2022-11-21T10:00:00.000Z",
										TimeDuration: "1970-01-01T01:30:00.000Z",
										EventUrl:
											"https://www.visitvenezia.eu/en/venetianity/discover-venice/the-celebration-of-the-madonna-della-salute-a-deep-link-between-venice-and-its-traditions",
										Price: "From €25",
										PreregisterNeccessary: false,
										Address: "Santa Maria della Salute",
										Season: "Winter"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "St Mark's Campanile",
							Description:
								"St Mark's Campanile is the bell tower of St Mark's Basilica in Venice, Italy. The current campanile is a reconstruction completed in 1912, the previous tower having collapsed in 1902. At 98.6 metres in height, it is the tallest structure in Venice and is colloquially termed \"el paròn de casa\". It is one of the most recognizable symbols of the city. Located in Saint Mark's Square near the mouth of the Grand Canal, the campanile was initially intended as a watchtower to sight approaching ships and protect the entry to the city. It also served as a landmark to guide Venetian ships safely into harbour.",
							ImageUrl: "https://i.postimg.cc/y722xgjX/st-marks-campanile-2x.jpg",
							Address: "P.za San Marco, 30124 Venezia VE, Italy",
							OpeningHours: "Every day from 9:45 am to 7:00 pm"
						}
					}
				}
			]
		}
	},
	{
		Title: "4 Days in Venice",
		Description:
			"Visiting Venice for the first time? Here is a 4 day Venice itinerary that covers the essential places to visit as well as lesser-known attractions.",
		ImageUrl: "https://i.postimg.cc/2SyhhSx4/Grand-Canal-view-from-Ponte-di-Accademia-in-Venice-Italy-feature.jpg",
		TotalDuration: "4 days",
		SuggestedAudience: ["Every one", "First-time visitors"],
		PoiToItinerary: {
			create: [
				{
					POI: {
						create: {
							Title: "Teatro La Fenice",
							Description:
								'Teatro La Fenice is an opera house in Venice, Italy. It is one of "the most famous and renowned landmarks in the history of Italian theatre" and in the history of opera as a whole. Especially in the 19th century, La Fenice became the site of many famous operatic premieres at which the works of several of the four major bel canto era composers – Rossini, Bellini, Donizetti, Verdi – were performed. Its name reflects its role in permitting an opera company to "rise from the ashes" despite losing the use of three theatres to fire, the first in 1774 after the city\'s leading house was destroyed and rebuilt but not opened until 1792; the second fire came in 1836, but rebuilding was completed within a year. However, the third fire was the result of arson. It destroyed the house in 1996 leaving only the exterior walls, but it was rebuilt and re-opened in November 2004. In order to celebrate this event the tradition of the Venice New Year\'s Concert started.',
							ImageUrl: "https://i.postimg.cc/BSBzmh0M/la-fenice-2.jpg",
							Address: "Campo S. Fantin, 1965, 30124 Venezia VE, Italy",
							OpeningHours: "Every day from 9:30 am to 11:00 pm",
							Event: {
								create: [
									{
										Title: "Peter Grimes",
										Description:
											"Britten’s first large-scale opera, premiered in 1945, tells the story of the fisherman Peter Grimes who lives in The Borough, a coastal village in Suffolk. Grimes is a tragic character: aspiring to improvement but brutish, he is often scapegoated by the gossipy folks and loses his life at sea, as the villagers continue to go about their business. Even though he is involved in the deaths of two apprentice boys, the opera never reveals whether he is a murderer, an abusive guardian, or simply the victim of his obsession with money. With luscious orchestral music, powerful choruses, and beautiful solo arias, Britten’s music conjures up a complex vision of both Nature’s majesty and harsh human relations.",
										ImageUrl: "https://i.postimg.cc/xny0kbd2/Schermata-2022-06-30-alle-14-55-56.png",
										EventType: "Opera",
										Date: "2022-07-05T19:00:00.000Z",
										TimeDuration: "1970-01-01T03:00:00.000Z",
										EventUrl: "https://bachtrack.com/opera-event/peter-grimes-teatro-la-fenice-24-june-2022/353682",
										Price: "From €99",
										PreregisterNeccessary: true,
										Address: " LA FENICE OPERA HOUSE",
										Season: "Summer"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Ca' Rezzonico",
							Description:
								"Ca' Rezzonico is a palazzo on the Grand Canal in the Dorsoduro sestiere of Venice, Italy. It is a particularly notable example of the 18th century Venetian baroque and rococo architecture and interior decoration, and displays paintings by the leading Venetian painters of the period, including Francesco Guardi and Giambattista Tiepolo. It is a public museum dedicated to 18th-century Venice and one of the 11 venues managed by the Fondazione Musei Civici di Venezia.",
							ImageUrl: "https://i.postimg.cc/Td6SjzZK/0-ca-rezzonico-full.jpg",
							Address: "Dorsoduro, 3136, 30123 Venezia VE, Italy",
							OpeningHours: "Wednesday to Monday from 10:00 am to 6:00 pm",
							Event: {
								create: [
									{
										Title: "MUSICA AD ARTE",
										Description:
											"A master of contemporary art and architecture, in recent years Corrado Levi has rediscovered his old love for music, a youthful enthusiasm that has returned to the centre of his experimental interests using a variety of artistic languages, and in particular for its being able to construct a deep relationship with architecture and with the sensorial sensitivities of the public.",
										ImageUrl: "https://i.postimg.cc/Td6SjzZK/0-ca-rezzonico-full.jpg",
										EventType: "Performance",
										Date: "2022-10-21T10:00:00.000Z",
										TimeDuration: "1970-01-01T03:00:00.000Z",
										EventUrl:
											"https://carezzonico.visitmuve.it/en/eventi-en/archivio-eventi-en/performance-corrado-levi/2015/04/7603/corrado-levi-performer/",
										Price: "From €49",
										PreregisterNeccessary: true,
										Address: "Ca' Rezzonico",
										Season: "Summer"
									}
								]
							}
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Church of San Giorgio Maggiore",
							Description:
								"San Giorgio Maggiore is a 16th-century Benedictine church on the island of the same name in Venice, northern Italy, designed by Andrea Palladio, and built between 1566 and 1610. The church is a basilica in the classical Renaissance style and its brilliant white marble gleams above the blue water of the lagoon opposite the Piazzetta di San Marco and forms the focal point of the view from every part of the Riva degli Schiavoni.",
							ImageUrl: "https://i.postimg.cc/FrxTm71Z/Church-of-San-Giorgio-Maggiore-Venice-Andrea-1610.webp",
							Address: "Isola di S.Giorgio Maggiore, 30133 Venezia VE, Italy",
							OpeningHours: "Every day from 7:00 am to 6:00 pm"
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Caffè Florian",
							Description:
								"Caffè Florian is a coffee house situated in the Procuratie Nuove of Piazza San Marco, Venice. It was established in 1720 and is the oldest coffee house in continuous operation in Italy, and one of the oldest in the world.",
							ImageUrl: "https://i.postimg.cc/c0HzcM5B/Getty-Images-921709292.jpg",
							Address: "P.za San Marco, 57, 30124 Venezia VE, Italy",
							OpeningHours: "Every day from 9:00 am to 00:00 pm"
						}
					}
				},
				{
					POI: {
						create: {
							Title: "Museo Correr",
							Description:
								"The Museo Correr is a museum in Venice, northern Italy. Located in St. Mark's Square, Venice, it is one of the 11 civic museums run by the Fondazione Musei Civici di Venezia. The museum extends along the southside of the square on the upper floors of the Procuratorie Nuove. With its rich and varied collections, the Museo Correr covers both the art and history of Venice.",
							ImageUrl: "https://i.postimg.cc/2z495HVr/99.jpg",
							Address: "P.za San Marco, 52, 30124 Venezia VE, Italy",
							OpeningHours: "Every day from 10:00 am to 6:00 pm"
						}
					}
				}
			]
		}
	}
]

// 5 serviceTypes with 1 or 2 Services each
export const serviceTypesWithServices = [
	{
		Introduction: "A selection of parking lots in the town.",
		Title: "Parking",
		Service: {
			create: [
				{
					Title: "Autorimessa Comunale AVM",
					ImageUrl: "https://i.postimg.cc/rFg0gRyD/d4e10c18-4bd8-54c5-8919-5287fe637bcf.jpg",
					OpeningHours: "Open 24 hours a day",
					Address: "Piazzale Roma, 496"
				},
				{
					Title: "Garage San Marco",
					ImageUrl: "https://i.postimg.cc/Bn68zZtM/64809b4d-36a0-57bf-a4f2-6be456582a6f.png",
					OpeningHours: "Open 24 hours a day",
					Address: "Piazzale Roma 467"
				}
			]
		}
	},
	{
		Introduction: "Hospitals and Emergency rooms around town.",
		Title: "Hospital",
		Service: {
			create: [
				{
					Title: "Sarasota Memorial Hospital",
					ImageUrl: "https://i.postimg.cc/w96DJgxt/LP-SKU-S2-IMG-1-en-us-1613855461254.jpg",
					OpeningHours: "Open 24 hours a day",
					Address: "2600 Laurel Road E., North Venice, FL 34275"
				},
				{
					Title: "ShorePoint Health Venice ER",
					ImageUrl: "https://i.postimg.cc/tgnsXr36/1280px-Venice-Regional-Bayfront-Health.jpg",
					OpeningHours: "Open 24 hours a day",
					Address: "540 The Rialto, Venice, FL 34285"
				}
			]
		}
	},
	{
		Introduction: "Auto repair and mechanic shops",
		Title: "Mechanic",
		Service: {
			create: [
				{
					Title: "JB Auto Works",
					ImageUrl: "https://i.postimg.cc/Hpn5Zzyd/o.jpg",
					OpeningHours: "Monday to Friday from 9:00 am to 5:00 pm",
					Address: "609 Colonia Ln E Nokomis, FL 34275"
				},
				{
					Title: "Best Friends Automotive",
					ImageUrl: "https://i.postimg.cc/D0n0PntQ/o.jpg",
					OpeningHours: "Monday to Friday from 8:30 am to 5:00 pm",
					Address: "212 Tampa Ave E Venice, FL 34285"
				}
			]
		}
	},
	{
		Introduction: "General Dentistry, Cosmetic Dentists and Orthodontists",
		Title: "Dentist",
		Service: {
			create: [
				{
					Title: "The Smile Centre",
					ImageUrl: "https://i.postimg.cc/tJkTr8jK/o.jpg",
					OpeningHours: "Monday to Friday from 9:00 am to 5:00 pm",
					Address: "1500 E Venice Ave Ste 203 Venice, FL 34292"
				}
			]
		}
	},
	{
		Introduction: "Have a break, have a coffee",
		Title: "Cafe",
		Service: {
			create: [
				{
					Title: "Mon Ami Cafe",
					ImageUrl: "https://i.postimg.cc/y6ykY3ZL/o.jpg",
					OpeningHours: "Monday to saturday from 9:00 am to 5:00 pm",
					Address: "1740 E Venice Ave Ste 19 Venice Venice, FL 34292"
				},
				{
					Title: "Black Gold Coffee Roasters",
					ImageUrl: "https://i.postimg.cc/gkMj394R/o.jpg",
					OpeningHours: "Monday to saturday from 7:00 am to 2:00 pm",
					Address: "2385 E Venice Ave Venice, FL 34292"
				}
			]
		}
	}
]
