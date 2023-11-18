import Galaxy231 from './../images/Samsung/s23-front.png'
import Galaxy232 from './../images/Samsung/s23-side.png'
import GalaxyUltra1 from './../images/Samsung/ultra-front.png'
import GalaxyUltra2 from './../images/Samsung/ultra-side.png'
import GalaxyZflip1 from './../images/Samsung/flip-front.png'
import GalaxyZflip2 from './../images/Samsung/flip-side.png'
import GalaxyFlip1 from './../images/Samsung/z-flip-front.png'
import GalaxyFlip2 from './../images/Samsung/z-flip-side.png'
import GalaxyTablet1 from './../images/Samsung/tablet-front.png'
import GalaxyTablet2 from './../images/Samsung/tablet-side.png'
import tv1 from './../images/Samsung/tv1.png'
import tv2 from  './../images/Samsung/tv2.png'
import monitor1 from './../images/Samsung/monitor1.png'
import monitor2 from './../images/Samsung/monitor2.png'

let image1;
let image2;

try {
  image1 = require('./../images/Samsung/1.1.png');
  image2 = require('./../images/Samsung/2.png');
} catch (error) {
  // Handle the error, e.g., log a message or set default values
  console.error("Error loading images:", error);
  // Provide default values or set them to null
  image1 = null;
  image2 = null;
}

const samsungData = [
    {
        id: 10,
        category: 'samsung',
        img1: Galaxy231,
        img2: Galaxy232,
        name: 'Samsung Galaxy s23+',
        color: 'Carbon black',
        description: 'Choose your device',
        storage: '256GB',
        price: '$999.99'
    },
    {
        id: 11,
        category: 'samsung',
        img1: GalaxyUltra1,
        img2: GalaxyUltra2,
        name: 'Samsung Galaxy ultra',
        color: 'Black',
        description: 'Every Latercase is made with premium aramid fibers. They"re hand-laid by skilled craftsmen, precision-formed to fit your iPhone 15 Pro Max, then laser-cut to perfection. Latercase is easy to put on, easy to take off, and coated with a durable matte finish that"s addictive to touch.',
        storage: '256GB',
        price: '$1,199.99'
    },
    {
        id: 12,
        category: 'samsung',
        img1: GalaxyZflip1,
        img2: GalaxyZflip2,
        name: 'Samsung Galaxy Z Flip',
        color: 'Black',
        description: 'Meet the phone that’s tiny, trendy and totally flex worthy. With a full cover screen, you can reply to texts, preview photos and access even more widgets than before with your Galaxy Z Flip5 folded shut.',
        storage: '512GB',
        price: '$1,019.99'
    },
    {
        id: 13,
        category: 'samsung',
        img1: GalaxyFlip1,
        img2: GalaxyFlip2,
        name: 'Samsung Galaxy Flip',
        color: 'Black',
        description: 'Every Latercase is made with premium aramid fibers. They"re hand-laid by skilled craftsmen, precision-formed to fit your iPhone 15 Pro Max, then laser-cut to perfection. Latercase is easy to put on, easy to take off, and coated with a durable matte finish that"s addictive to touch.',
        storage: '1000GB',
        price: '$1,859.99'
    },
    {
        id: 14,
        category: 'samsung',
        img1: GalaxyTablet1,
        img2: GalaxyTablet2,
        name: 'Samsung Galaxy Tablet',
        color: 'Black',
        description: 'With great power comes great productivity. Backed by our mighty Snapdragon 8 Gen 2 processor and a long-lasting battery that can keep up with your dynamic lifestyle, Galaxy Tab S9 Ultra redefines how you conquer your to-do list.',
        storage: '512GB',
        price: '$1,199.99'
    },
    {
        id: 15,
        category: 'samsung',
        img1: tv1,
        img2: tv2,
        name: 'Samsung - 55" OLED 4K ',
        color: 'Black',
        description: 'Steal the show with the bold contrast, dramatic sound, and vibrant colors of Samsung OLED. Samsung’s Infinity One Design is sleek, slim and impossibly thin',
        storage: 'N/A',
        price: '$1,899.99'
    },
    {
        id: 16,
        category: 'samsung',
        img1: monitor1,
        img2: monitor2,
        name: 'Samsung - 27" Curved FHD',
        color: 'Black',
        description: 'Explore the 27" inch S39C FHD Curved Monitor with a 1000R Curvature and advanced eye comfort technology. Its minimalist design features a borderless display.',
        storage: 'N/A',
        price: '$199.99'
    }
]

export default samsungData;