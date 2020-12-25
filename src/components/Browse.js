// Imports React, Component
import React, { Component } from 'react';
// Imports Ads Component
import Ads from './Ads';

export class Browse extends Component {
  state = {
    ads: [
      {
        _id: `1`,
        name: `Nike Air Force 1 Low Clot Blue Silk`,
        image: `/images/nike-air-force-blue.png`,
        description: `The Clot x Nike Air Force 1 Low “Blue Silk” is an ultra limited collaboration between the Chinese streetwear imprint and Nike on the Uptown footwear icon`,
        brand: `Nike`,
        category: `Sneakers`,
        price: 630,
        numReviews: 12
      },
      {
        _id: `2`,
        name: `Adidas Yeezy Boost 350 V2 Zebra`,
        image: `/images/adidas-yeezy-boost-350-white.png`,
        description: `Adidas is back with their latest Yeezy Boost 350 V2. Fresh off the heels of NBA All-Star Weekend, these Yeezy's are nicknamed the "Zebras," and come in a classic white, black and red color scheme.`,
        brand: `Adidas`,
        category: `Sneakers`,
        price: 210,
        numReviews: 3
      },
      {
        _id: `3`,
        name: `Nike Air Jordan 1 Mid Chicago Toe`,
        image: `/images/air-jordan-1-mid-chicago-toe-red.png`,
        description: `The Air Jordan 1 Mid GS “Chicago Black Toe” is the youth sizing of the model that combines two popular looks of Michael Jordan’s first signature shoe.`,
        brand: `Nike`,
        category: `Sneakers`,
        price: 160,
        numReviews: 5
      },
      {
        _id: `4`,
        name: `Converse Chuck Taylor All-Star 70s`,
        image: `/images/converse-chuck-taylor-all-star-70s-white.png`,
        description: `Virgil is back at it again with the Converse Chuck Taylor All-Star 70s Hi Off-White. These legendary sneakers come with an all-white upper, stripped midsole, and orange sole.`,
        brand: `Converse`,
        category: `Sneakers`,
        price: 430,
        numReviews: 20
      },
      {
        _id: `5`,
        name: `Nike Air Jordan 1 Retro High Pine Green`,
        image: `/images/air-jordan-1-retro-high-green.png`,
        description: `This colorway draws inspiration from the Jordan 1 Retro High Pine Green from 2019, only this time the entire upper features black and pine green hues.`,
        brand: `Nike`,
        category: `Sneakers`,
        price: 280,
        numReviews: 9
      },
      {
        _id: `6`,
        name: `Adidas Yeezy Boost 350 V2 Black Red`,
        image: `/images/adidas-yeezy-boost-350-black.png`,
        description: `Known for their iconic collabs, once again Kanye West and adidas had brewed up more sneaker collection heat with the adidas Yeezy Boost 350 Black Red. Showing "Pirate Black" flashes, these come with a core black upper and sole that has a core red "SPLY-350" branding on both sides.`,
        brand: `Adidas`,
        category: `Sneakers`,
        price: 265,
        numReviews: 14
      },
      {
        _id: `7`,
        name: `Nike Air Max 90 Infrared`,
        image: `/images/nike-air-max-90-orange.png`,
        description: `The Nike Air Max 90 Infrared returned in its original form to celebrate the model’s 30th Anniversary. While younger Air Max fans might refer to the silhouette as the Air Max 90 Infrared, (referencing its release in 1990), the original colorway was dubbed Hyvent Orange.`,
        brand: `Nike`,
        category: `Sneakers`,
        price: 130,
        numReviews: 8
      },

      {
        _id: `8`,
        name: `Vans Style 36 Blends Bones`,
        image: `/images/vans-style-36-blends-bones.png`,
        description: `The signature white jazz stripes on Vans Old Skools and Sk-8 His are rarely messed with. Like Adidas's three stripes or Nike's Swoosh, it's a design feature that's synonymous with the Vans brand.`,
        brand: `Vans`,
        category: `Sneakers`,
        price: 410,
        numReviews: 4
      },
      {
        _id: `9`,
        name: `Nike Air Max 90 Recraft Hyper Grape`,
        image: `/images/nike-air-max-90-purple.png`,
        description: `Nike’s iconic Air Max 90 turns 30 this year and the celebrations are already well under way. A recrafting of Tinker’s masterpiece, this women’s pair is constructed from the usual combination of mesh, leather and suede and features the all-important OG stitching through the Swoosh.`,
        brand: `Nike`,
        category: `Sneakers`,
        price: 75,
        numReviews: 2
      }
    ]
  };

  render() {
    return (
      <>
        <Ads ads={this.state.ads} />
      </>
    );
  }
}

export default Browse;
