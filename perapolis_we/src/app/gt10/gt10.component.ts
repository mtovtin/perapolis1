import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt10-component',
  templateUrl: './gt10.component.html',
  styleUrls: ['./gt10.component.css']
})
export class Gt10Component implements OnInit {

  brandName: string | undefined = "ksks";
  category: any = 12;
  goods: any;
  price: any;
  clients: any;
  age: any;
  communication: any;
  proposition: any;
  reason: any;

  c: any;
  r: any
  g: any = [];
  h: any;
  d: any;
  aw: any;
  a: any;
t: any;



str: any;
str2: any;
str3: any;
str4: any;
Reason = {
  ONE: "Prestige",
  TWO: "Return on Investment",
  THREE: "For a greater cause",
  FOUR: "Exclusive ownership",
  FIVE: "Product iconicity",
  SIX: "Niche knowledge"
};

MarketSegmentDesc = {
  ONE: "A market segment is driven by identifiable cues like logos and monograms, Brand Luxury caters to a need of establishing one’s self-worth. It stems from a reason to purchase status and affiliation and feeds into the desire of being seen. The client of this segment puts worth into recognizable items and brands, as well as trending and favoured products. They find stability and upper bringing in a brand that favours their confidence and social status. Due to the need of being recognized and being translated into iconic product cues and a strong brand presence, the market’s exclusivity is low, not concluding an important factor for its clients. Design notes, interpreted monograms and visible logos position Brand Luxury into an aesthetic philosophy of modern kitsch – excessive, showy, known. ",
  TWO: `Price&Benefit is a particular luxury segment that answers to customers’ need to be in the know. For this reason, everything revolves around the acculturation of products or services and their benefits. As a consequence, brands corresponding to this profile don’t necessarily have to pursue exclusivity, but rather rely on the benefits they are offering. When every other brand strives to run over trends, Price&Benefit brands focus on price to quality ratio. This is translated into a simple and clean aesthetic, almost resembling essentialism.  
  In the same line, also the brand’s relationship with clients relies upon informative communication about the offer. For them, the brand doesn’t simply symbolize a friend to rely on, but rather a father or mother that teaches them notions of life.
  New technologies represent a big opportunity for Price&Benefit, supply chain transparency can inform purchasers about what’s behind a certain product. The digital translation allows them to easily establish connections with clients and attract them into the brand’s world.
  Successful brands: Jil Sander, Max Mara, Loro Piana, Brunello Cucinelli, and Tag Heuer.`,
  THREE: `Purpose luxury is the market for depth, meaning and positive change. Products can be given even more value when working in collaborations with other causes, the more inclusive the better. The greater cause is a crucial part of the market, the stronger the cause the better; whether it's a practical, social or sustainable cause, they want to be able to recognize their won. With this being said community is what is most important so brands should take a holistic approach. The primary differentiator for a product in this market is the ability to be unified. The biggest advantage to this market is the loyalty and cult-like following of this market. Community-based brands must be aware of forcing a fake cause or straying away from core values as this market can easily smell when something starts to become ingenuine. Successful brands:`,
  FOUR: `One-of-a-kind luxury is the market for extravagance and personality, whether it's custom marble baths, rare monogrammed turtle sunglasses, or a made-to-measure immaculate suit. The product's worth increases as a result of its originality.The more exclusive the better. Ownership is a crucial part of this market, the product needs to be exclusively owned by the purchaser. Individualism reigns supreme here, with the brand's environment centred on a single individual. The primary differentiator for a product in this market is its ability to be customized or manufactured uniquely. Perhaps the biggest advantage to this market is that it is rarely oversaturated, the target audience is small but can be retained for years if properly catered to. Unique luxury brands must be conscious of the hazards inherent in this industry, which include high prices and the complexity of manufacturing procedures. Successful brands:`,
  FIVE: `Product Luxury is a market segment with a core philosophy of emotionalism. Centred around the product and its iconicity, the client seeks identifiable elements of the brand’s best-seller and finds worth in its recognition. Colours, embellishments, and materials are all examples of the lead that sets up the attraction between the brand and the client. This aspect later flourishes into a chance to build upon its legacy. Creating more of the thrilling need serves as the main strategic move a brand from this market should play upon. The need for exclusivity and affiliation is balanced at a middle level, as iconicity always shines stronger in the Product Luxury segment. Successful brands:`,
  SIX: `Crypted Luxury is the answer to customers’ need to be profound. Brands need to represent something that goes beyond luxury, symbolizing mystery and depth of life. This mystical approach carries a high level of exclusivity, only a niche of deep people can understand the brand’s hidden codes. To encrypt the client requires complex aesthetics, full of symbolic meaning. The brand’s communication is also ambiguous, the customer sees in him not only a friend but a real-life mentor to inquire about the mystical meaning of events.
  The pandemic and the uncertainty of war accelerated personal introspection and meditation. This difficult historical period has tapped into customers’ minds, therefore pushing some of them to deny superficiality in favour of depth.
  Successful brands: Rick Owens, Maison Margiela, The Row, Alighieri, and Yohji Yamamoto. 
  `
}

MarketSegment = {
  ONE: "Brand Luxury",
  TWO: "Price And Benefit",
  THREE: "Purpose Luxury",
  FOUR: "One Of A Kind Luxury",
  FIVE: "Product Luxury",
  SIX: "Crypted Luxury"
};

PurchaseProposition = {
  ONE: "Product",
  TWO: "Service",
  THREE: "Community",
  FOUR: "Status",
  FIVE: "Personalization",
  SIX: "Heritage",
  SEVEN: "Self-Indulgence"
};


Pod = {
  ONE: `For a luxury brand to stand out, the point of differentiation embodies the profound desire of the corresponding target profiles, based on basic biological catalysts. Knowledge of the intangible incentive between the brand and the target is required for an understanding of the main idea of how to manage the customer‐brand relationship. 

  The “To recognize” point of differentiation revolves around the authenticity driving catalyst. The customer’s main need is to leave a mark and has a high need for self-realization. A brand is a collection of functional and experiential characteristics that promises a value reward that is meaningful to the customer. "To Recognize" indicates that the value reward your client is seeking is to be acknowledged and reinforced with societally recognized product cues.
  
  
  There are two components that contribute to your unique point of differentiation; consequently, for a comprehensive analysis, pair the point of differentiation with your mentioned UPP to develop unique selling propositions and communication campaigns.
  `,
  TWO: `For a luxury brand to stand out, the point of differentiation embodies the profound desire of the corresponding target profiles, based on basic biological catalysts. Knowledge of the intangible incentive between the brand and the target is required for an understanding of the main idea of how to manage the customer‐brand relationship.

  The “To teach” point of differentiation revolves around the acculturation driving catalyst. Clients’ main need is to be in the know and their need for exclusive products is average. A brand is a collection of functional and experiential characteristics that promises a value reward that is meaningful to the customer. "To Teach" indicates that the value reward your client is seeking is to be taught the right ratio between functionality and self-realization, through the optimization of the items’ cost peruse.
  
  There are two components that contribute to your unique point of differentiation; consequently, for a comprehensive analysis, pair the point of differentiation with your mentioned UPP to develop unique selling propositions and communication campaigns.
  `,
  THREE: `For a luxury brand to stand out, the point of differentiation embodies the profound desire of the corresponding target profiles, based on basic biological catalysts. Knowledge of the intangible incentive between the brand and the target is required for an understanding of the main idea of how to manage the customer‐brand relationship.

  The “To Lead” point of differentiation revolves around the need for depth as a driving catalyst. Clients’ main need is to be profound while their need for exclusivity is fairly low, as building a community is what is important. A brand is a collection of functional and experiential characteristics that promises a value reward that is meaningful to the customer. "To Lead" indicates that the value reward your client is seeking is to be led towards a greater cause, by creating a utopia of positive change visualized by a community uniform.
  
  
  There are two components that contribute to your unique point of differentiation; consequently, for a comprehensive analysis, pair the point of differentiation with your mentioned UPP to develop unique selling propositions and communication campaigns.
  `,
  FOUR: `For a luxury brand to stand out, the point of differentiation embodies the profound desire of the corresponding target profiles, based on basic biological catalysts. Knowledge of the intangible incentive between the brand and the target is required for an understanding of the main idea of how to manage the customer‐brand relationship.

  The “To treat” point of differentiation revolves around the eroticism driving catalyst. Your customer’s main need is to indulge and there is a low-mid need for self-realization. A brand is a collection of functional and experiential characteristics that promises a value reward that is meaningful to the customer. "To Treat" indicates that the value reward your client is seeking is to be treated and cherished. 
  
  There are two components that contribute to your unique point of differentiation; consequently, for a comprehensive analysis, pair the point of differentiation with your mentioned UPP to develop unique selling propositions and communication campaigns.
  `,
  FIVE: `For a luxury brand to stand out, the point of differentiation embodies the profound desire of the corresponding target profiles, based on basic biological catalysts. Knowledge of the intangible incentive between the brand and the target is required for an understanding of the main idea of how to manage the customer‐brand relationship. 

  The “To Endorse” point of differentiation revolves around the eroticism driving catalyst. The customer’s main need is to achieve and has a mid-level need for self-realization. A brand is a collection of functional and experiential characteristics that promises a value reward that is meaningful to the customer. "To Endorse" indicates that the value reward your client is seeking is to be praised for their achievements and reinforce their identity.
  
  
  There are two components that contribute to your unique point of differentiation; consequently, for a comprehensive analysis, pair the point of differentiation with your mentioned UPP to develop unique selling propositions and communication campaigns.
  `,
  SIX: `For a luxury brand to stand out, the point of differentiation embodies the profound desire of the corresponding target profiles, based on basic biological catalysts. Knowledge of the intangible incentive between the brand and the target is required for an understanding of the main idea of how to manage the customer‐brand relationship.

  The “To Encrypt” point of differentiation revolves around the depth driving catalyst, meaning. Clients’ main need is to be profound and they have a high need for self-realization. A brand is a collection of functional and experiential characteristics that promises a value reward that is meaningful to the customer. "To Encrypt" indicates that the value reward your client is seeking is to be encrypted with mystery, represented by hidden codes and visual cues to be decrypted only by the ones belonging to the same tribe.
  
  There are two components that contribute to your unique point of differentiation; consequently, for a comprehensive analysis, pair the point of differentiation with your mentioned UPP to develop unique selling propositions and communication campaigns.
  `
}

PodDesc = {
  ONE: "To recognize",
  TWO: "To teach",
  THREE: "To lead",
  FOUR: "To treat",
  FIVE: "To endorse",
  SIX: "To inquire"
}

TargetProfile = {
  ONE: "The Self-Worth Searcher",
  TWO: "The Benefit Chaser",
  THREE: "The Communal Wearer",
  FOUR: "The Absolute Hedonist",
  FIVE: "The Fulfilment Seeker",
  SIX: "The Mastermind"
}

TargetProfileDesc = {
  ONE: `The Self-Worth Searcher represents one of the most comprehensive but also competitive landscapes in the target profiles of the luxury industry. Their rather high need for affiliation is combined with a desire to establish their self-worth (to others especially); an intrinsic need to be recognized, seen and accepted into the social status they are striving towards.
  The Self-Worth Searcher looks for brands and products that provide a social position and are backed up either by heritage or a strong identity – an indicator of their taste in the outside world. Product recognition and visual cues are highly important for this target profile, as they speak to everyone around them and bring about a feeling of achievement through their iconicity. A Self-Worth Searcher’s loyalty is not the highest, but they will always come back if treated with the right kind of communication and provided with the newest “it” product. Furthermore, they are the client that will ride the wave of bringing a brand to the forefront of trends and must-haves. 
  `,
  TWO: `The Benefit Chaser lives by the necessity of proving others to be the one with the highest IQ in the room, an individual dimension of personal pride. This condition is translated into a personal purchasing behaviour that values the most personalization, heritage, and service when buying a product or choosing a service. 
  For the Benefit Chaser, luxury matches the concept of Return On Investment: the best deal is a high-quality lifetime product to keep with them for a long time.
  For this reason, exclusive products are not particularly attractive, only people as smart as they can quickly recognize the value of their possessions.
  `,
  THREE: `In the past, we lived in tribes and as time evolved we slowly strayed away from this idea. Yet, for the Community Wearer identifying their tribe is absolutely crucial. This stems from the need to work towards the greater cause and reach a utopia. The Community Wearer seeks positive change in everything they do and this is no exception when it comes to luxury; from concept to creation and even communication is it absolutely necessary to highlight what greater cause is being worked towards. The Community wearer has a high need for association and craves community-based experiences; exclusivity doesn’t matter to them. Affiliation is something this target strives for, for they welcome anyone and everyone to join their cause. The community wearers are drawn to products identifiable to their cause to make a positive change; it's about the feeling of being able to identify one of your own people. This target profile has a need to be profound, they seek depth in every product.
 
  `,
  FOUR: `What is one's life purpose? For some, it can be life achievements, community or knowledge, for the absolute hedonist it is the pursuit of pleasure. This enthusiasm is fueled by an erotic desire stem. ​​Pleasure is the added value the Absolute Hedonist seeks in a product; it can be directed into the client's service or represented through a customised experience. The Absolute Hedonists have a low requirement for an association; affiliation is not something this target profile desires. This target profile places a great value on exclusivity; if there is anything that only a small number of people can have, they must be one of them, preferably the only one. Absolute Hedonists are drawn to brands with significant heritage, unique product propositions or distinctive shopping experiences, as these make them feel extraordinary. When we talk about pleasure, we don't just mean the extravagant sort. Joy can also be found in modest opulent items for the Absolute Hedonist; it's about the feeling of possessing a product that gives its individualistic owner a sense of uniqueness. This target profile values an individualized oriented approach in the core of the product, whether it's personalized, made-to-order, or made-to-measure.`,
  FIVE: `The Fulfilment Seeker is a target profile revolving around the need of being fulfilled – a search for that thrilling rush after a perfect product purchase. With a mid-level need for affiliation, this client is the one that puts money aside for their most desired product. There is a clear observation of a higher purpose of satisfaction, a nearby love relationship. Being part of the brand’s community grows into attached leverage to the product. The Fulfilment Seeker recognizes status and heritage in a brand’s DNA as their main value assessment is done through the product. For this reason, cues and iconicity play an important factor in a brand’s communication with the client; this is where the two create a connection. With this journey in mind, the Fulfilment Seeker looks for ownership, an added value beyond the dream, purely tangible.`,
  SIX: `The Mastermind believes that being deep and highly acculturated about mystical human topics is essential to living a meaningful life. Superficiality can be beaten by going beyond appearances by choosing a community of similar people, self-indulgence, and product. This predisposition is reflected in a purchase behaviour that values knowledge over everything. As a result, the Mastermind desires to wear items and live experiences that can be decrypted by an exclusive group of people. A community that shares the same philosophy and is able to decrypt visual cues specific to their interests.`
}

  constructor(private answersService:AnswersService, private router: Router) { }

  POD = (marketSegment: any) => {
    switch (marketSegment) {
      case 3:
        this.h = this.Pod.ONE;
        this.a = this.PodDesc.ONE;
        break;
      case 5:
        this.h = this.Pod.TWO;
        this.a = this.PodDesc.TWO;
        break;
      case 1:
        this.h = this.Pod.THREE;
        this.a = this.PodDesc.THREE;
        break;
      case 10:
        this.h = this.Pod.FOUR;
        this.a = this.PodDesc.FOUR;
        break;
      case 6:
        this.h = this.Pod.FIVE;
        this.a = this.PodDesc.FIVE;
        break;
      case 8:
        this.h = this.Pod.SIX;
        this.a = this.PodDesc.SIX;
        break;
        default:
          this.h = "Something went wrong. Try again";
          break;
    }
    return this.h, this.a;
  }

  marketExclusivity = (marketSegment: any) => {
    switch (marketSegment) {
      case this.MarketSegment.ONE:
        this.d = 3;
        break;
      case this.MarketSegment.TWO:
        this.d = 5;
        break;
      case this.MarketSegment.THREE:
        this.d = 1;
        break;
      case this.MarketSegment.FOUR:
        this.d = 10;
        break;
      case this.MarketSegment.FIVE:
        this.d = 6;
        break;
      case this.MarketSegment.SIX:
        this.d = 8;
        break;
        default:
          this.d = "Something went wrong. Try again";
          break;
    }
    this.POD(this.d);
  }

  reasonToPurchase = (reason: any) => {
    switch (reason) {
      case this.Reason.ONE:
        this.c = this.MarketSegment.ONE;
        this.r = this.MarketSegmentDesc.ONE;
        break;
      case this.Reason.TWO:
        this.c = this.MarketSegment.TWO;
        this.r = this.MarketSegmentDesc.TWO;
        break;
      case this.Reason.THREE:
        this.c = this.MarketSegment.THREE;
        this.r = this.MarketSegmentDesc.THREE;
        break;
      case this.Reason.FOUR:
        this.c = this.MarketSegment.FOUR;
        this.r = this.MarketSegmentDesc.FOUR;
        break;
      case this.Reason.FIVE:
        this.c = this.MarketSegment.FIVE;
        this.r = this.MarketSegmentDesc.FIVE;
        break;
      case this.Reason.SIX:
        this.c = this.MarketSegment.SIX;
        this.r = this.MarketSegmentDesc.SIX;
        break;
        default:
          this.c = "Something went wrong. Try again";
          break;
    }
    this.marketExclusivity(this.c);
    return this.c, this.r;
  }





  uniquePurchaseProposition = (proposition: any) => {
    let res = [{}];
    switch (proposition) {
      case this.PurchaseProposition.ONE:
        res = [{
          profileExclusivity: 2,
          targetProfile: this.TargetProfile.THREE,
          t: this.TargetProfileDesc.THREE
        },
        {
          profileExclusivity: 5,
          targetProfile: this.TargetProfile.FIVE,
          t: this.TargetProfileDesc.FIVE
        },
        {
          profileExclusivity: 8,
          targetProfile: this.TargetProfile.SIX,
          t: this.TargetProfileDesc.SIX
        }
        ];
        break;
      case this.PurchaseProposition.TWO:
        res = [{
          profileExclusivity: 2,
          targetProfile: this.TargetProfile.THREE,
          t: this.TargetProfileDesc.THREE
        },
        {
          profileExclusivity: 4,
          targetProfile: this.TargetProfile.TWO,
          t: this.TargetProfileDesc.TWO
        },
        {
          profileExclusivity: 10,
          targetProfile: this.TargetProfile.FOUR,
          t: this.TargetProfileDesc.FOUR
        }
        ];
        break;
      case this.PurchaseProposition.THREE:
        res = [{
          profileExclusivity: 5,
          targetProfile: this.TargetProfile.FIVE,
          t: this.TargetProfileDesc.FIVE
        },
        {
          profileExclusivity: 8,
          targetProfile: this.TargetProfile.SIX,
          t: this.TargetProfileDesc.SIX
        }
        ];
        break;
      case this.PurchaseProposition.FOUR:
        res = [{
          profileExclusivity: 5,
          targetProfile: this.TargetProfile.FIVE,
          t: this.TargetProfileDesc.FIVE
        },
        {
          profileExclusivity: 7,
          targetProfile: this.TargetProfile.ONE,
          t: this.TargetProfileDesc.ONE
        }
        ];
        break;
      case this.PurchaseProposition.FIVE:
        res = [{
          profileExclusivity: 4,
          targetProfile: this.TargetProfile.TWO,
          t: this.TargetProfileDesc.TWO
        },
        {
          profileExclusivity: 10,
          targetProfile: this.TargetProfile.FOUR,
          t: this.TargetProfileDesc.FOUR
        }
        ];
        break;
      case this.PurchaseProposition.SIX:
        res = [{
          profileExclusivity: 4,
          targetProfile: this.TargetProfile.TWO,
          t: this.TargetProfileDesc.TWO
        },
        {
          profileExclusivity: 5,
          targetProfile: this.TargetProfile.FIVE,
          t: this.TargetProfileDesc.FIVE
        },
        {
          profileExclusivity: 7,
          targetProfile: this.TargetProfile.ONE,
          t: this.TargetProfileDesc.ONE
        }
        ];
        break;
      case this.PurchaseProposition.SEVEN:
        res = [{
          profileExclusivity: 8,
          targetProfile: this.TargetProfile.SIX,
          t: this.TargetProfileDesc.SIX
        },
        {
          profileExclusivity: 7,
          targetProfile: this.TargetProfile.ONE,
          t: this.TargetProfileDesc.ONE
        },
        {
          profileExclusivity: 10,
          targetProfile: this.TargetProfile.FOUR,
          t: this.TargetProfileDesc.FOUR
        }
        ];
        break;
        default:
          this.h = "Something went wrong. Try again";
          break;
    }
    this.weightedAverage(res);
  }

  weightedAverage = (profileExclusivity: any) => {
    let a = 0;
    let b: any = [];
    let c = 0;
    let checker = 0;
    let maks;

    if (profileExclusivity.length > 2) {
      for (let i = 1; i < profileExclusivity.length; i++) {
        maks = Math.abs(this.d - profileExclusivity[i - 1].profileExclusivity);
        if (Math.abs(this.d - profileExclusivity[i].profileExclusivity) > maks) {
          maks = Math.abs(this.d - profileExclusivity[i].profileExclusivity);
          checker = i;
        }
      }

      for (let i = 0; i < profileExclusivity.length; i++) {
        if (i != checker) {
          a += Math.abs(this.d - profileExclusivity[i].profileExclusivity);
        }
      }

      for (let i = 0; i < profileExclusivity.length; i++) {
        if (i != checker) {
          b.push(a - Math.abs(this.d - profileExclusivity[i].profileExclusivity));
          c += a - Math.abs(this.d - profileExclusivity[i].profileExclusivity);
        } else {
          b.push(-1);
        }
      }

      c = 100 / c;

      b.forEach((el: any) => el = (el * c).toFixed(2));

      let aw = b.map(function (x: any) {
        if (x != -1) {
          return (x * c).toFixed(2);
        }
        else return 2;
      });

      for (let i = 0; i < aw.length; i++) {
        if (aw[i] != undefined) {
          this.g.push({
            percentage: aw[i],
            targetProfile: profileExclusivity[i].targetProfile,
            t: profileExclusivity[i].t
          });
        }
      }
    } else {
      profileExclusivity.forEach((element: { profileExclusivity: any; }) => {
        var x = element.profileExclusivity;
        a += Math.abs(this.d - x);
      });

      profileExclusivity.forEach((element: { profileExclusivity: any; }) => {
        var x = element.profileExclusivity;
        b.push(a - Math.abs(this.d - x));
        c += a - Math.abs(this.d - x);
      });

      c = 100 / c;
      b.forEach((el: any) => el = (el * c).toFixed(2));
      let aw = b.map(function (x: any) {
        return (x * c).toFixed(2);
      });

      for (let i = 0; i < aw.length; i++) {
        this.g.push({
          percentage: aw[i],
          targetProfile: profileExclusivity[i].targetProfile,
          t: profileExclusivity[i].t
        });
      }
    }
    return this.g;
  }

  ngOnInit(): void {
    this.reason = this.answersService.reason;
    this.proposition = this.answersService.proposition
    this.reasonToPurchase(this.reason);
    this.uniquePurchaseProposition(this.proposition);
    
    this.brandName = this.answersService.brandName
    this.category = this.answersService.category
    this.goods = this.answersService.goods
    this.price = this.answersService.price
    this.clients = this.answersService.clients
    this.age = this.answersService.age
    this.communication = this.answersService.communication
  

  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    
  }

  goToNext(){
    this.answersService.c = this.c;
    this.answersService.g = this.g;
    this.answersService.h = this.h;
    this.router.navigateByUrl('gt11-component')
  }

  vidEnded() {
    this.answersService.c = this.c;
    this.answersService.g = this.g;
    this.answersService.h = this.h;
    this.answersService.r = this.r;
    this.answersService.a = this.a;

    this.router.navigateByUrl('gt11-component')
}
  
}
