const apiHost = () => {};

const newsArticles = () => 
    Promise.resolve({
            "status": "ok",
            "totalResults": 70,
            "articles": [
            {
            "source": {
            "id": null,
            "name": "Electrek.co"
            },
            "author": null,
            "title": "Tesla Cybertruck with laser blade lights shows up at esports Dota 2 game event - Electrek",
            "description": "The Tesla Cybertruck prototype was used to shuttle players into a gaming competition today, and we got a good look at the “upper laser blade lights” which will come standard on the truck, as CEO Elon Musk announced yesterday. In addition, the truck showed up …",
            "url": "https://electrek.co/2020/02/22/tesla-cybertruck-with-laser-blade-lights-shows-up-at-esports-dota-2-game-event/",
            "urlToImage": "https://electrek.co/wp-content/uploads/sites/3/2020/02/esports.jpg?resize=1024,505",
            "publishedAt": "2020-02-22T21:21:00Z",
            "content": "The Tesla Cybertruck prototype was used to shuttle players into a gaming competition today, and we got a good look at the “upper laser blade lights” which will come standard on the truck, as CEO Elon Musk announced yesterday.\r\nIn addition, the truck showed up… [+5032 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": "Jonathan Stempel",
            "title": "Buffett defends Berkshire stock push, reassures on future as profit smashes record - Reuters",
            "description": "Warren Buffett on Saturday forcefully defended Berkshire Hathaway Inc's decision to invest heavily in stocks of companies such as Apple Inc as he labors through a four-year drought since his last major acquisition of a company.",
            "url": "https://www.reuters.com/article/us-berkshire-buffett-idUSKCN20G0S0",
            "urlToImage": "https://s2.reutersmedia.net/resources/r/?m=02&d=20200222&t=2&i=1493854561&w=1200&r=LYNXNPEG1L0LD",
            "publishedAt": "2020-02-22T19:49:00Z",
            "content": "NEW YORK (Reuters) - Warren Buffett on Saturday forcefully defended Berkshire Hathaway Inc’s (BRKa.N) decision to invest heavily in stocks of companies such as Apple Inc (AAPL.O) as he labors through a four-year drought since his last major acquisition of a c… [+5274 chars]"
            },
            {
            "source": {
            "id": "google-news",
            "name": "Google News"
            },
            "author": null,
            "title": "Honda Civic Type R \"Coupe\" Is a Crazy Two-Door Hot Hatch - autoevolution",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiZWh0dHBzOi8vd3d3LmF1dG9ldm9sdXRpb24uY29tL25ld3MvaG9uZGEtY2l2aWMtdHlwZS1yLWNvdXBlLWlzLWEtY3JhenktdHdvLWRvb3ItaG90LWhhdGNoLTE0MTI3Ni5odG1s0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2020-02-22T19:47:00Z",
            "content": null
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Alisha Ebrahimji, CNN",
            "title": "Burger King debuts a french fry sandwich and Wendy's isn't impressed - CNN",
            "description": "Burger chains have come a long way, now offering a wide array of options for all, no matter your dietary preference.",
            "url": "https://www.cnn.com/2020/02/22/business/burger-king-chip-butty-trnd/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200222134131-burger-king-chip-butty-super-tease.jpg",
            "publishedAt": "2020-02-22T19:24:00Z",
            "content": "(CNN)Burger chains have come a long way, now offering a wide array of options for all, no matter your dietary preference.\r\nTake the meatless Whopper. It turned heads and left taste buds curious. \r\nNow Burger King has introduced the Chip Butty, a patty-less sa… [+1385 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Collider.com"
            },
            "author": null,
            "title": "NBCUniversal May Buy Vudu, Walmart's Movie Rental and Streaming Service - Collider.com",
            "description": "NBCUniversal is reportedly looking to buy Walmart's movie rental and free streaming service Vudu, thereby expanding its holdings.",
            "url": "https://collider.com/nbcuniversal-may-buy-vudu-walmart-streaming-service/",
            "urlToImage": "https://cdn.collider.com/wp-content/uploads/2020/02/nbc-logo-social.jpg",
            "publishedAt": "2020-02-22T18:48:09Z",
            "content": "NBCUniversal already has big things in the works with its upcoming streaming service Peacock. But, those streaming ambitions may be growing as NBCUniversal reportedly sizes up Walmart’s free streaming service and movie rental site Vudu for purchase.\r\nImage vi… [+1781 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Alaa Elassar, CNN",
            "title": "It's National Margarita Day! Here's where to score great deals on drinks - CNN",
            "description": "Jimmy Buffett once famously said: \"If life gives you limes, make margaritas.\"",
            "url": "https://www.cnn.com/2020/02/22/us/national-margarita-day-specials-deals-trnd/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200222115523-margarita-cheers-stock-super-tease.jpg",
            "publishedAt": "2020-02-22T18:25:00Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "Fool.com"
            },
            "author": "Travis Hoium",
            "title": "Why General Motors Is Built to Beat Tesla Long Term - Motley Fool",
            "description": "GM isn't trying to compete with what Tesla is today; it's building the innovations that will disrupt transportation for the next generation.",
            "url": "https://www.fool.com/investing/2020/02/22/why-general-motors-is-built-to-beat-tesla-long-ter.aspx",
            "urlToImage": "https://g.foolcdn.com/editorial/images/557216/cruise-origin-in-sfs-castro-district.jpg",
            "publishedAt": "2020-02-22T17:23:00Z",
            "content": "I think we're past the point where it can be argued that General Motors(NYSE:GM) will ever be a big competitor with Tesla(NASDAQ:TSLA) in electric vehicle (EV) sales. The company has tried with the Volt and Bolt, but its products are uninspired and dealers se… [+4079 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Fool.com"
            },
            "author": "Christy Bieber",
            "title": "Have You Checked Your Social Security Earnings Record Lately? - The Motley Fool",
            "description": "Your benefits could be affected, so be sure you check your record.",
            "url": "https://www.fool.com/retirement/2020/02/22/have-you-checked-your-social-security-earnings-rec.aspx",
            "urlToImage": "https://g.foolcdn.com/editorial/images/550901/businessman-handing-check-to-other-person-paycheck-income-earnings-wages.jpg",
            "publishedAt": "2020-02-22T17:05:00Z",
            "content": "The amount of your Social Security benefits is based on how much you make throughout the time you work. Specifically, you get benefits equal to a percentage of your average wages in the 35 years your earnings were highest, after wages are adjusted for inflati… [+2958 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Wausaupilotandreview.com"
            },
            "author": null,
            "title": "Gordmans in Rib Mountain to close - wausaupilotandreview.com",
            "description": "By Shereen Siewert Gordmans department store in Rib Mountain will soon close, company officials have confirmed. A \"store closing\" sale is already underway",
            "url": "https://wausaupilotandreview.com/2020/02/22/gordmans-in-rib-mountain-to-close/",
            "urlToImage": "https://i0.wp.com/wausaupilotandreview.com/wp-content/uploads/2017/04/Gordmans.jpeg?fit=1575%2C1050&ssl=1",
            "publishedAt": "2020-02-22T16:29:00Z",
            "content": "By Shereen Siewert\r\nGordmans department store in Rib Mountain will soon close, company officials have confirmed.\r\nA store closing sale is already underway at the Rib Mountain location, at 226601 Rib Mountain Drive.\r\nLocations in Ashwaubenon, Kenosha and Madis… [+440 chars]"
            },
            {
            "source": {
            "id": "usa-today",
            "name": "USA Today"
            },
            "author": "Morgan Hines",
            "title": "Jennifer Garner gets your 'primal need' for Girl Scout cookies, so she's shipping them to fans - USA TODAY",
            "description": "Jennifer Garner is celebrating the best time of year: Girl Scout cookie season. And she's offering to ship boxes to fans.",
            "url": "https://www.usatoday.com/story/entertainment/celebrities/2020/02/22/girl-scout-cookies-jennifer-garner-ships-boxes-instagram-fans/4841613002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2020/02/22/USAT/c109228e-d1fd-4f0e-978b-a66e9690a70a-AFP_AFP_1NZ1ZY.JPG?crop=2656,1494,x0,y0&width=1600&height=800&fit=bounds",
            "publishedAt": "2020-02-22T16:06:09Z",
            "content": "US actress Jennifer Garner presents an award during the 26th Annual Screen Actors Guild Awards show at the Shrine Auditorium in Los Angeles on January 19, 2020.\r\n (Photo: ROBYN BECK, AFP via Getty Images)\r\nJennifer Garner is celebrating the best time of year:… [+1513 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ultimateclassicrock.com"
            },
            "author": "daveliftongmail-com",
            "title": "'Animal House,' 'Stripes,' 'Smokey and the Bandit' Get New Funkos - Ultimate Classic Rock",
            "description": "Funko Pop! figures dedicated to some classic '70s and '80s movies were announced in February 2020.",
            "url": "https://ultimateclassicrock.com/animal-house-stripes-smokey-bandit-funko/",
            "urlToImage": "https://townsquare.media/site/295/files/2020/02/BlutoOxBandit1.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
            "publishedAt": "2020-02-22T15:46:00Z",
            "content": "Four classic '70s and '80s movies will be celebrated with a new line of Funko Pop! figures.\r\nThere are two for National Lampoon's Animal House, both of John Belushi as future U.S. senator John \"Bluto\" Blutarski. The first features him in Roman regalia during … [+1202 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Nypost.com"
            },
            "author": "Eileen AJ Connelly",
            "title": "Wells Fargo to pay $3B to settle fake accounts probes - New York Post ",
            "description": "Wells Fargo will pay $3 billion to settle investigations into its long-running scam that had company employees opening millions of bogus bank accounts in order to meet unrealistic sales goals. Sinc…",
            "url": "https://nypost.com/2020/02/22/wells-fargo-to-pay-3b-to-settle-fake-accounts-probes/",
            "urlToImage": "https://thenypost.files.wordpress.com/2020/02/wells-fargo-to-pay-3b-to-settle-bogus-account-probes.jpg?quality=90&strip=all&w=1200",
            "publishedAt": "2020-02-22T15:00:00Z",
            "content": "Wells Fargo will pay $3 billion to settle investigations into its long-running scam that had company employees opening millions of bogus bank accounts in order to meet unrealistic sales goals.\r\nSince the fake-accounts scandal was revealed in 2016, the San Fra… [+1176 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Newser.com"
            },
            "author": "Jenn Gidman",
            "title": "McDonald's Offers Pack of 6 Candles Meant to Smell Like Quarter Pounder - Newser",
            "description": "6-pack of custom-scented candles smell like a Quarter Pounder when all burned together",
            "url": "https://www.newser.com/story/287293/your-home-can-now-smell-like-a-quarter-pounder-247.html",
            "urlToImage": "https://img2-azrcdn.newser.com/image/1283587-12-20200222094257.jpeg",
            "publishedAt": "2020-02-22T15:00:00Z",
            "content": "(Newser)\r\nYou know that heavenly smell of hamburger that wafts into your car as you're on the McDonald's drive-thru line? You can have that all day at home now, thanks to a new product offered by the fast-food chain. The Quarter Pounder Scented Candle Pack ad… [+974 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Dan Gallagher",
            "title": "Dropbox Finally Doesn't Drop - The Wall Street Journal",
            "description": "Lowly valued cloud player boosts profitability target and drops in a buyback plan",
            "url": "https://www.wsj.com/articles/dropbox-finally-doesnt-drop-11582383600",
            "urlToImage": "https://images.wsj.net/im-149854/social",
            "publishedAt": "2020-02-22T15:00:00Z",
            "content": "Having struggled to convince investors of its growth prospects, it was high time for Dropbox to try something new.\r\nThe cloud-software companys fiscal fourth-quarter earnings report late Thursday was a big step in that direction. The results themselves were t… [+272 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "Meghan Morris",
            "title": "Bosses sleeping with subordinates ran rampant at WeWork - Business Insider - Business Insider",
            "description": "The culture came from the top: founder Miguel McKelvey dated a junior employee, though she did not report directly to him.",
            "url": "https://www.businessinsider.com/office-relationships-and-sex-abounded-at-wework-under-adam-neumann-2020-2",
            "urlToImage": "https://i.insider.com/5d7b77a62e22af050d4470a5?width=1200&format=jpeg",
            "publishedAt": "2020-02-22T14:50:00Z",
            "content": "Couples at WeWork weren't a human resources problem – they could be celebrated. \r\nOne couple that met at WeWork was presented with a \"member for life\" keycard for their baby at Summer Camp, WeWork's raucous annual party that ended after 2018. And cofounder Mi… [+2146 chars]"
            },
            {
            "source": {
            "id": "cnbc",
            "name": "CNBC"
            },
            "author": "Michael Wayland",
            "title": "2020 Chevrolet Corvette: 5 unique features of the mid-engine supercar - CNBC",
            "description": "In addition to improving the performance of the vehicle and moving the engine from the front to behind the driver, General Motors added a lot of new and unique features for drivers.",
            "url": "https://www.cnbc.com/2020/02/21/2020-chevy-corvette-5-new-unique-features-of-the-mid-engine-supercar.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106401070-1582225951136bluevette.jpg?v=1582226018",
            "publishedAt": "2020-02-22T14:46:00Z",
            "content": "LAS VEGAS The performance, price and mid-engine layout of the 2020 Chevrolet Corvette have been well-documented.\r\nIf you need a reminder, the vehicle has Chevrolet's LT2 small-block 6.2-liter V8 engine that's rated at 495 horsepower and 470 pound-feet of torq… [+3943 chars]"
            },
            {
            "source": {
            "id": "cnbc",
            "name": "CNBC"
            },
            "author": "Michael Wayland",
            "title": "Project Blackjack: GM's top-secret redesign of its mid-engine Corvette was disguised in an Australian pickup truck - CNBC",
            "description": "Most notably, the eighth-generation Corvette started its life as an Australian-made pickup called the Holden Ute, codenamed internally as \"Blackjack.\"",
            "url": "https://www.cnbc.com/2020/02/21/gms-top-secret-redesign-of-its-mid-engine-corvette-was-disguised-in-an-australian-pickup-truck.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106398724-1582143948199img-1927.jpg?v=1582144025",
            "publishedAt": "2020-02-22T14:46:00Z",
            "content": "LAS VEGAS General Motors took unprecedented steps in an attempt to hide the development of the redesigned mid-engine 2020 Chevrolet Corvette that arrives in dealerships as early as next week. \r\n Codenamed the \"Blackjack\" prototype, the eighth-generation Corve… [+2012 chars]"
            },
            {
            "source": {
            "id": "cnbc",
            "name": "CNBC"
            },
            "author": "Taylor Locke",
            "title": "Elon Musk shares the science fiction book series that inspired him to start SpaceX - CNBC",
            "description": "As a teenage boy, Elon Musk felt a \"personal obligation\" for the fate of mankind, according to \"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future\" by Ashlee Vance. And Musk shared the book that inspired this \"obligation.\"",
            "url": "https://www.cnbc.com/2020/02/21/elon-musk-recommends-science-fiction-book-series-that-inspired-spacex.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/104252018-spacex.jpg?v=1582218174",
            "publishedAt": "2020-02-22T14:01:00Z",
            "content": "As a teenage boy, Elon Musk felt a \"personal obligation\" for the fate of mankind, according to the book \"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future\" by Ashlee Vance.\r\nMusk's love of books and the lessons he took from them inspired him to c… [+1697 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Marketwatch.com"
            },
            "author": "Mark DeCambre",
            "title": "Why the coronavirus outbreak is delivering a fresh dose of recession fear to the stock market - MarketWatch",
            "description": "A more apropos adage for today’s market bears may be that when an outbreak of coronavirus grinds the world’s second-largest economy to a halt, the rest of...",
            "url": "https://www.marketwatch.com/story/why-the-coronavirus-outbreak-is-delivering-a-fresh-dose-of-recession-fear-to-the-stock-market-2020-02-22",
            "urlToImage": "http://s.marketwatch.com/public/resources/MWimages/MW-IA712_corona_ZG_20200221143948.jpg",
            "publishedAt": "2020-02-22T13:47:00Z",
            "content": "The old saw used to be that when the U.S. sneezes, the rest of the world catches a cold. \r\nNow, a more apropos adage for market bears may be that when an outbreak of coronavirus grinds the worlds second-largest economy to a halt, the rest of the world catches… [+6451 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Thepointsguy.com"
            },
            "author": "Emily McNutt",
            "title": "Sneak peek at Scarlet Lady, the first-ever ship from Virgin Voyages - The Points Guy",
            "description": "Can Richard Branson‘s Virgin Group work its magic in the cruise space? We’re finally about to find out. The brand that brought us beloved airlines, chic hotels, high-speed trains and the promise of commercial space travel (even a hyperloop!) is finally unveil…",
            "url": "http://thepointsguy.com/news/first-look-scarlet-lady-virgin-voyages/",
            "urlToImage": "https://i2.wp.com/thepointsguy.com/wp-content/uploads/2020/02/Virgin-Voyages-Scarlet-Lady-First-Look-Nicky-Kelvin-69-of-143-scaled.jpg?fit=2048%2C2048px&ssl=1",
            "publishedAt": "2020-02-22T13:34:22Z",
            "content": "Can Richard Branson‘s Virgin Group work its magic in the cruise space?\r\nWe’re finally about to find out.\r\nThe brand that brought us beloved airlines, chic hotels, high-speed trains and the promise of commercial space travel (even a hyperloop!) is finally unve… [+18473 chars]"
            }
            ]




    });

    export {
        apiHost,
        newsArticles,
    };