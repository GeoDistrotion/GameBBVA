import hero_right_15 from '../../images/player__hero/right_01/h3ro__15.png';
import hero_right_14 from '../../images/player__hero/right_01/h3ro__14.png';
import hero_right_13 from '../../images/player__hero/right_01/h3ro__13.png';
import hero_right_12 from '../../images/player__hero/right_01/h3ro__12.png';
import hero_right_11 from '../../images/player__hero/right_01/h3ro__11.png';
import hero_right_10 from '../../images/player__hero/right_01/h3ro__10.png';
import hero_right_9 from '../../images/player__hero/right_01/h3ro__9.png';
import hero_right_8 from '../../images/player__hero/right_01/h3ro__8.png';
import hero_right_7 from '../../images/player__hero/right_01/h3ro__7.png';
import hero_right_6 from '../../images/player__hero/right_01/h3ro__6.png';
import hero_right_5 from '../../images/player__hero/right_01/h3ro__5.png';
import hero_right_4 from '../../images/player__hero/right_01/h3ro__4.png';
import hero_right_3 from '../../images/player__hero/right_01/h3ro__3.png';
import hero_right_2 from '../../images/player__hero/right_01/h3ro__2.png';
import hero_right_1 from '../../images/player__hero/right_01/h3ro__1.png';
import hero_right_0 from '../../images/player__hero/right_01/h3ro__0.png';

import hero_left_15 from '../../images/player__hero/left/h3ro__15.png';
import hero_left_14 from '../../images/player__hero/left/h3ro__14.png';
import hero_left_13 from '../../images/player__hero/left/h3ro__13.png';
import hero_left_12 from '../../images/player__hero/left/h3ro__12.png';
import hero_left_11 from '../../images/player__hero/left/h3ro__11.png';
import hero_left_10 from '../../images/player__hero/left/h3ro__10.png';
import hero_left_9 from '../../images/player__hero/left/h3ro__9.png';
import hero_left_8 from '../../images/player__hero/left/h3ro__8.png';
import hero_left_7 from '../../images/player__hero/left/h3ro__7.png';
import hero_left_6 from '../../images/player__hero/left/h3ro__6.png';
import hero_left_5 from '../../images/player__hero/left/h3ro__5.png';
import hero_left_4 from '../../images/player__hero/left/h3ro__4.png';
import hero_left_3 from '../../images/player__hero/left/h3ro__3.png';
import hero_left_2 from '../../images/player__hero/left/h3ro__2.png';
import hero_left_1 from '../../images/player__hero/left/h3ro__1.png';
import hero_left_0 from '../../images/player__hero/left/h3ro__0.png';

import zombie_right_1 from '../../images/zombie/right/Walk_1.png';
import zombie_right_2 from '../../images/zombie/right/Walk_2.png';
import zombie_right_3 from '../../images/zombie/right/Walk_3.png';
import zombie_right_4 from '../../images/zombie/right/Walk_4.png';
import zombie_right_5 from '../../images/zombie/right/Walk_5.png';
import zombie_right_6 from '../../images/zombie/right/Walk_6.png';
import zombie_right_7 from '../../images/zombie/right/Walk_7.png';
import zombie_right_8 from '../../images/zombie/right/Walk_8.png';
import zombie_right_9 from '../../images/zombie/right/Walk_9.png';
import zombie_right_10 from '../../images/zombie/right/Walk_10.png';

import zombie_left_1 from '../../images/zombie/left/Walk_1.png';
import zombie_left_2 from '../../images/zombie/left/Walk_2.png';
import zombie_left_3 from '../../images/zombie/left/Walk_3.png';
import zombie_left_4 from '../../images/zombie/left/Walk_4.png';
import zombie_left_5 from '../../images/zombie/left/Walk_5.png';
import zombie_left_6 from '../../images/zombie/left/Walk_6.png';
import zombie_left_7 from '../../images/zombie/left/Walk_7.png';
import zombie_left_8 from '../../images/zombie/left/Walk_8.png';
import zombie_left_9 from '../../images/zombie/left/Walk_9.png';
import zombie_left_10 from '../../images/zombie/left/Walk_10.png';

export default function getGameAssets(){
    let assets = {
            hero: {
                right: [
                    hero_right_0,
                    hero_right_1,
                    hero_right_2,
                    hero_right_3,
                    hero_right_4,
                    hero_right_5,
                    hero_right_6,
                    hero_right_7,
                    hero_right_8,
                    hero_right_9,
                    hero_right_10,
                    hero_right_11,
                    hero_right_12,
                    hero_right_13,
                    hero_right_14,
                    hero_right_15,
                ],
                left:[
                    hero_left_0,
                    hero_left_1,
                    hero_left_2,
                    hero_left_3,
                    hero_left_4,
                    hero_left_5,
                    hero_left_6,
                    hero_left_7,
                    hero_left_8,
                    hero_left_9,
                    hero_left_10,
                    hero_left_11,
                    hero_left_12,
                    hero_left_13,
                    hero_left_14,
                    hero_left_15,
                ]
            },
            zombie:{
                right:[
                    zombie_right_1,
                    zombie_right_2,
                    zombie_right_3,
                    zombie_right_4,
                    zombie_right_5,
                    zombie_right_6,
                    zombie_right_7,
                    zombie_right_8,
                    zombie_right_9,
                    zombie_right_10,
                ],
                left:[
                    zombie_left_1,
                    zombie_left_2,
                    zombie_left_3,
                    zombie_left_4,
                    zombie_left_5,
                    zombie_left_6,
                    zombie_left_7,
                    zombie_left_8,
                    zombie_left_9,
                    zombie_left_10,
                ]
            }
        }

    let storageAssets = {
        hero_right:[],
        hero_left:[],
        zombie_right:[],
        zombie_left:[],
    };
    
    assets.hero.right.forEach(asset=>{
        let newImg = new Image();
        newImg.src = asset;
        storageAssets.hero_right.push(newImg);
    });
    
    assets.hero.left.forEach(asset=>{
        let newImg = new Image();
        newImg.src = asset;
        storageAssets.hero_left.push(newImg);
    });
    
    assets.zombie.right.forEach(asset=>{
        let newImg = new Image();
        newImg.src = asset;
        storageAssets.zombie_right.push(newImg);
    });

    assets.zombie.left.forEach(asset=>{
        let newImg = new Image();
        newImg.src = asset;
        storageAssets.zombie_left.push(newImg);
    });

    return storageAssets;
}