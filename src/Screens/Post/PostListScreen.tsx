import { Col, Row } from "reactstrap"
import { CustomCard } from "../../components/CustomCard/CustomCard"

export const PostListScreen = () => {
  const posts = [
    {
      "id": 1,
      "author": "Rebecca Bellan",
      "title": "Tesla delivers 405,278 vehicles in Q4, missing Wall Street expectations",
      "description": "In Q4 2022, Tesla delivered 405,278 and produced 439,701 vehicles. Annually, Tesla delivered 1.31 million and produced 1.37 million vehicles.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/10/tesla-Model-3-Performance-Midnight-Silver-Tarmac-Motion.jpg?resize=1200,675",
      "publishedAt": "2023-01-02T19:18:06Z",
      "content": "Tesla reported Sunday 405,278 vehicles delivered in the fourth quarter of 2022. While the automaker hit  a record number of deliveries, it came in shy of Wall Streets expectations of around 420,000"
    },
    {
      "id": 2,
      "author": "Manish Singh",
      "title": "Yet another Zomato co-founder leaves the firm",
      "description": "Gunjan Patidar is the fourth Zomato co-founder to resign from the Indian food delivery firm, whose shares are down over 55% in a year.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/05/GettyImages-1209753713.jpg?resize=1200,800",
      "publishedAt": "2023-01-02T14:33:22Z",
      "content": "Zomato said on Monday its co-founder and chief technology officer Gunjan Patidar has left the firm, the latest in a series of departures at the Indian food delivery firm whose shares have lost over"
    },
    {
      "id": 3,
      "author": "Matt Burns",
      "title": "Hear from Ecobee CEO and Founder at a special, in-person TechCrunch Live at CES",
      "description": "Ecobee started in 2007 when connected thermostats were an entirely different product and nothing like what’s available today. Ecobee released its Smart thermostat in 2008, bringing modern connectivity and usability to the device. I’m excited to host a special…",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/TCL-CES-2023-featured-1920x1080-1.jpg?resize=1200,675",
      "publishedAt": "2023-01-02T13:44:24Z",
      "content": "Ecobee started in 2007 when connected thermostats were an entirely different product and nothing like whats available today. Ecobee released its Smart thermostat in 2008, bringing modern connectivity…"
    },
    {
      "id": 4,
      "author": "Ram Iyer",
      "title": "Fintech predictions and opportunities for 2023",
      "description": "While 2022 was largely about the reset of the funding environment, 2023 will be a year of recalibration for fintech companies.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/GettyImages-1393673728.jpg?resize=1200,800",
      "publishedAt": "2023-01-02T08:06:25Z",
      "content": "Its been quite an eventful year. Fintech has fallen a long way from the highs of 2021, and while 2022 was largely about the reset of the funding environment, 2023 is going to be a year of recalibrati… "
    },
    {
      "id": 5,
      "author": "Ram Iyer",
      "title": "We need to destigmatize down rounds in 2023",
      "description": "A new year is upon us, and with it comes uncertain, and uncomfortable, market conditions. In such times, down rounds are a viable path to survival.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/GettyImages-1308411849.jpg?resize=1200,900",
      "publishedAt": "2023-01-02T07:55:03Z",
      "content": "A new year is upon us, and with it comes uncertain, and uncomfortable, market conditions. Accompanying those conditions are equally uncomfortable decisions. For startup founders, determining which pa… "
    },
    {
      "id": 6,
      "author": "Ram Iyer",
      "title": "How to make the most of your startup’s big fundraising moment",
      "description": "One of the biggest reasons founders overlook the value of announcing funding news is assuming the round isn’t \"big enough\" to warrant attention.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/GettyImages-1443200899.jpg?resize=1200,798",
      "publishedAt": "2023-01-02T07:52:44Z",
      "content": "Late-stage startups are facing major fundraising headwinds, but early-stage investing is still a bright spot for startups until they hit Series B rounds.\r\nTraditional venture capital dollars are hard… "
    },
    {
      "id": 7,
      "author": "Manish Singh",
      "title": "India set an 'incredibly important precedent' by banning TikTok, FCC Commissioner says",
      "description": "\"I don't see a path forward for anything other than a blanket ban working,\" said FCC Commissioner of TikTok's future in the U.S.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1231203702.jpeg?resize=1200,800",
      "publishedAt": "2023-01-02T06:41:43Z",
      "content": "India set an incredibly important precedent by banning TikTok two and a half years ago, FCC Commissioner said, as he projected a similar fate for the Chinese giant Bytedance app in the U.S.\r\nBrendan …"
    },
    {
      "id": 8,
      "author": "Rebecca Bellan",
      "title": "Micromobility in limbo: Takeaways from Paris and LA",
      "description": "A look at two cities that were at the forefront of the e-scooter micromobility revolution – Los Angeles and Paris.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/12/los-angeles-scooter-app-3.jpg?resize=1200,960",
      "publishedAt": "2022-12-31T18:55:34Z",
      "content": "Shared electric scooters came onto the scene five years ago with a promising vision of getting people out of cars and onto greener modes of transportation. Yet despite billions in VC money and plenty… [+11756 chars]"
    },
    {
      "id": 9,
      "author": "Anna Heim",
      "title": "Product-led growth and profitability: What's going on?",
      "description": "There are some reasons why PLG companies would be less profitable now that could turn into reasons why they might be more profitable in the near future.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/01/GettyImages-1406545347.jpg?resize=1200,800",
      "publishedAt": "2022-12-30T20:23:39Z",
      "content": "Among public tech companies, “product-led growth (PLG) companies those who educate and convert buyers with product rather than sales and marketing (SLG) operate at about 5% to 10% less profitability …"
    },
    {
      "id": 10,
      "author": "Amanda Silberling",
      "title": "What to expect from the creator economy in 2023",
      "description": "The Democratic Congress’s parting gift to American employers is new taxes on investment that start in 2023.",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/youtube-shorts-tiktok-1.jpg?resize=1200,675",
      "publishedAt": "2022-12-30T18:02:42Z",
      "content": "Social media platforms and creator-focused startups haven’t looked too hot this year, as companies like Snapchat, Patreon, Cameo and Meta all waged layoffs along with the rest of the tech industry. Y…"
    },
    {
      "id": 11,
      "author": "Belle Lin",
      "title": "Southwest Meltdown Shows Airlines Need Tighter Software Integration - The Wall Street Journal",
      "description": "The airline industry is long overdue for a tech overhaul that takes full advantage of the cloud and data integration, analysts say",
      "urlToImage": "https://images.wsj.net/im-695501/social",
      "publishedAt": "2023-01-02T19:33:00Z",
      "content": "The\r\nSouthwest Airlines Co.\r\nmeltdown that stranded thousands of passengers during one of the busiest travel weeks of the year exposed a major industry shortcoming: crew-scheduling technology that wa…"
    },
    {
      "id": 12,
      "author": "Rebecca Elliott",
      "title": "Elon Musk’s Tesla Comes Up Short of 2022 Delivery Target as Growth Slows",
      "description": "Electric car maker falls short of its initial goal of increasing annual deliveries by 50% or more last year",
      "urlToImage": "https://images.wsj.net/im-692341/social",
      "publishedAt": "2023-01-02T17:48:00Z",
      "content": "Tesla Inc. delivered fewer vehicles in 2022 than it initially targeted, capping a year during which the stock suffered its worst annual performance as demand appeared to soften and Covid-related \r\npr… "
    }
  ]

  return (
    <>
      <h1 className="text-light text-center">Posts</h1>
      <Row>
        {
          posts.map((post: any) => {
            return (
              <Col md={3}>
                <CustomCard
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  image={post.urlToImage}
                  author={post.author}
                />
              </Col>
            )
          })
        }
      </Row>
    </>
  )
}