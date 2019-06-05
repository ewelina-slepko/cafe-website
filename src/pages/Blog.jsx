import React from 'react';
import Article from '../components/Article';

import article1 from '../images/article1.jpg'
import article2 from '../images/article2.jpg'
import article3 from '../images/article3.jpg'

const articles = [
    {
        id: 1,
        img: article1,
        title: 'A Barista Guide to Almond Milk & Latte Art',
        author: 'Danielle Kilbride',
        text: 'If we care about our coffee, we should care about the milk we put into it – and that includes our dairy alternatives  Not all lactose-free milks are the same, just like not all coffee beans are the same. There are lots of alternative milks  out there, and almond milk is one of the most popular varieties. However, if you asked most baristas and coffee-lovers about it, they would be able to tell you surprisingly little this common coffee additive. The name almond milk is actually a bit of a misnomer. However, almond extract was already taken, and it wouldn’t be entirely accurate either. Almond milk is made by soaking almonds in spring water, grinding them, and then straining the liquid. The result is a slightly nutty beverage that can be used to replace milk. “Almond milk is surprisingly easy to make,” Peter Sullivan of Almond Breeze tells me, “as there are few ingredients required.” That being said, the company also offers a sweetened version of the milk, which contains pure cane sugar. Although almond milk isn’t actually milk, its texture is similar to cow’s milk – which is why it’s a popular alternative to dairy. It also contains vitamins and has a low calorie count. Although latte art isn’t essential to good coffee, it’s in many ways become expected. “Latte art has become an industry standard and customers have come to expect it on their coffee…” Luke says. “Latte art is just one piece of the coffee experience, but when done well it can brighten up someone’s day!” It can take months of practice to master certain latte art designs, so I wanted to ask Luke and Peter if they had any more tips for making latte art with almond milk. The answer? Buy good almond milk, and then just treat it the same as regular milk. “Ensure you have a nice shaped cup and a small milk jug,” Peter says. “Do not put too much air in the jug and only heat the milk to 65 degrees – when you can no longer hold the bottom of the jug, it is probably at that temperature. Angle the cup and keep a steady and consistent pour, close to the centre of the coffee as you bring it level.”'
    },
    {
        id: 2,
        img: article2,
        title: 'The confusion of expensive coffee',
        author: 'Jim Seven',
        text: 'Price is the best-known shortcut for quality. Pay more, get better stuff. Speciality coffee has long battled pricing, for the most part, fearful of putting people off for something that tastes more delicious. For years we’d been cautious of appearing too expensive, running a bare few percentage points more expensive than the global chain competitors. In some places we’re more expensive, maybe 30-40% more expensive. There is one exception: speciality coffee does, from time to time, get really, really expensive. The recent news cycles have seen incredibly high priced geisha lots, very, very expensive cups of coffee served at restaurants and coffee shops, and something about it unsettles me. a Coffee now spends a lot of time being compared to wine, much to the chagrin of many. I appreciate the arguments that they’re not the same, that they make for a poor comparison. However, I’m still going to compare the two. Wine is very expensive because people have been mining out the value in it for decades. There is a large, sufficiently affluent audience for it, all chasing the best value they can get. This has driven up prices and, broadly speaking, the good stuff is much more expensive now because it is good. As such consumers might reasonably expect that spending more on wine gets you better wine. Spending a lot on wine gets you fantastic wine. Of course, there are exceptions to this rule, but it is broadly accurate. Coffee does something different when it gets very expensive. It doesn’t necessarily get better, it gets weirder. The most expensive coffees aren’t the sweetest. The most expensive coffees aren’t the most complex, structured and delightful. The most expensive coffees are the most esoteric. Many take delight in the weirdness of Geisha lots, of other rare varieties, or strange cups. I’m always interested to taste coffees like these, to experience something new. However, we’ve come to position these coffees as a substantial upgrade to one’s daily morning brew, rather than a dramatic detour into strange territory. This isn’t really aimed at Geisha lots specifically, but at all super premium coffee. I believe that we’ve come to disproportionately value weird, strange and unusual coffees, coffees that require context. I think this means that we don’t celebrate the straight up exceptional as much as we used to (I think of the early days of the Cup of Excellence, which promoted these kinds of coffees). I’m not saying we shouldn’t sell weird coffees. I’m not saying they shouldn’t be expensive. I am saying that I think we need to be careful with how we communicate their value to us and their value to our customers. The challenge will be that the two won’t always line up.'
    },
    {
        id: 3,
        img: article3,
        title: '60% of coffee species in the world are in danger of extinction',
        author: 'Jane Doe',
        text: '60% of the world’s 124 coffee species are on the verge of extinction, as a study published in the journal ScienceAdvances and Global Change Biology reveals. According to the researchers, deforestation, climate change, the spread of disease and pathogenic fungi are the main causes for this reduction, which can cause coffee production to decline by at least 50% by 2088. The study at the Royal Botanic Gardens in Kew, UK, also reveals that measures to conserve coffee beans are currently “inadequate”. 28% of wild coffee species grow outside protected areas and only 55% are preserved in seed banks. This is the first time that coffee is classified as threatened in the official ranking of the Red List of the International Union for Conservation of Nature. Ethiopia is the “home” of Arabica coffee, which grows naturally in the rainforests. There are also other world outbreaks such as the island of Madagascar or parts of India, Sri Lanka and Australia. We mostly use coffee beans of two species in the thousands of available coffee blends – arabica and robusta. There is still a third species – Liberian – but this is rarely used commercially. Although not all wild grains know well, they always contain genes that can be harnessed to continue to preserve the species. Are you afraid to loose your cup of Joe? What are your thoughts on this coffee extinction?'
    }
]

const Blog = () => {
    const artList = articles.map(article => (<Article key={article.id} {...article} />))
    return (
        <div className="blog">
            {artList}
        </div>
    );
}

export default Blog;
