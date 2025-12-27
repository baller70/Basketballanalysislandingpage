'use client'

import React from 'react'

// Local shooting form images - all 100 NBA/WNBA player shots
const basketballImages = [
  '/shooting/00000169-0cf1-dbbe-a16f-4ef1b11b0000.webp',
  '/shooting/0420e54d1faf0452fdf19eb4bab3cd76_1.jpg',
  '/shooting/0caf26f6ee754936bdb63682973aee51.webp',
  '/shooting/0f25fb3e030f11d61e0351d753d57a4b7f4abef8158e7d333a4afee74e7c6967_copy.jpg',
  '/shooting/0f25fb3e030f11d61e0351d753d57a4b7f4abef8158e7d333a4afee74e7c6967.webp',
  '/shooting/1_PumjpmIbXp8nSPnGMCrf9w.jpg',
  '/shooting/10-best-shooting-forms-in-nba-history_2.jpg',
  '/shooting/10-best-shooting-forms-in-nba-history.jpg',
  '/shooting/156fe3369ed8ff2f451ed44efd3456fc0920ab31630d6a2c34a1c91902c875d1.jpg',
  '/shooting/16416227010038.jpg',
  '/shooting/16472352488335_copy.jpg',
  '/shooting/16479881724525.jpg',
  '/shooting/167-1678251_kyle-korver-wallpaper-20-kyle-korver-shooting-form.jpg',
  '/shooting/1920x0.jpg',
  '/shooting/20200201_ely_0854_copy.jpg',
  '/shooting/2023-OKC-GS-Klay_copy.jpg',
  '/shooting/2023-OKC-GS-Klay.webp',
  '/shooting/2cb5f15c048b1e2c759f9c6ab86e60b3035bd91ea76a4f5dd2b13dd1f9d519ab_copy.jpg',
  '/shooting/3-jj-redick-jesse-d-garrabrant.jpg',
  '/shooting/3165518.jpg',
  '/shooting/3B16FC9C00000578-0-image-a-1_1481017380281.jpg',
  '/shooting/40b62397e67e0667ed2da852e8c7f784.jpg',
  '/shooting/61BPCi21PHL._UF894,1000_QL80_.jpg',
  '/shooting/621d518377b53.hires_copy.jpg',
  '/shooting/88a10e7e90cc04d434ffb125ee8820d1.jpg',
  '/shooting/88c01a668763cfc288cf0f5b97770f2f.jpg',
  '/shooting/915b97d41317bba5ba76b567f801f73a.jpg',
  '/shooting/a7313d7a2087f9478911ef64f91a40c3.jpg',
  '/shooting/af3a8ae4-882e-4995-a671-9b7a06625d5e.jpg',
  '/shooting/allan-houston-andrew-d-bernstein.jpg',
  '/shooting/allan-houston-nathaniel-s-butler_1.jpg',
  '/shooting/allan-houston-nathaniel-s-butler.jpg',
  '/shooting/article-2390246-1B43567C000005DC-856_634x858.jpg',
  '/shooting/b4ba7621e8f8b0399f9d6f88eaa35a1a.jpg',
  '/shooting/bb32fb1a8d75bee7b1a7541cb0673d74.avif',
  '/shooting/Beller-DamianLillardShot_copy.jpg',
  '/shooting/BN-GP418_count0_M_20150125142358.jpg',
  '/shooting/BNG-L-WARRIORS-1211-4_copy.jpg',
  '/shooting/d67d4a375a7197aef6da2d0ab2ae2c39.jpg',
  '/shooting/damian-lillard-portland-trail-blazers-unsigned-shooting-photograph_pi3875000_ff_3875906-a8e09a87c0a0197872aa_full.jpg',
  '/shooting/damiancolor.jpg',
  '/shooting/De8mp_aXcAYtY5s.jpg',
  '/shooting/desktop-wallpaper-stephen-curry-shooting-seth-curry.jpg',
  '/shooting/Donte-DiVincenzo-Shoot-Getty.webp',
  '/shooting/DTPHIDMPOD5KJOY4ZYROC72AFQ.avif',
  '/shooting/Dxfn5woX4AASUcA.jpg',
  '/shooting/f246e003d4ab470286e10dcdb12dec07c53ca90d_hq.jpg',
  '/shooting/F89E1EEIGV4HPHK.webp',
  '/shooting/GettyImages-1051863302-1-683x1024.jpg',
  '/shooting/gettyimages-1138700352-612x612.jpg',
  '/shooting/GettyImages-1243660668-scaled_1.jpg',
  '/shooting/gettyimages-1439898859-612x612.jpg',
  '/shooting/gettyimages-1760579-1024x1024.jpg',
  '/shooting/gettyimages-1978657632-612x612.jpg',
  '/shooting/gettyimages-1999006-612x612.jpg',
  '/shooting/gettyimages-569313-612x612.jpg',
  '/shooting/gettyimages-628403178-612x612.jpg',
  '/shooting/gettyimages-72848024-612x612.jpg',
  '/shooting/hi-res-d92b6dc2e02c2456b4a8944aa8cb4003_crop_north_copy.jpg',
  '/shooting/jj-redick-rocky-widner.jpg',
  '/shooting/kevin-durant-phoenix-suns-unsigned-shooting-in-black-vs-clippers-in-2023-nba-playoffs-photograph_ss5_p-200125182-u-lcojfikmeaqnwr1odv8b-v-ueqiu9hvqwi1hbmwxjpw.webp',
  '/shooting/kevin-durant-phoenix-suns-unsigned-shooting-vs-clippers-in-2023-nba-playoffs-photograph_ss5_p-200125183-u-8vdlmneizhqzo2hwbrfh-v-33wtyzmaltr5v1vbevem_copy.jpg',
  '/shooting/kyle-korver-jordan-johnson.jpg',
  '/shooting/kyle-korver.webp',
  '/shooting/media_1cbe1e6e8a0f89f1931f7eac2311819870408d0e1.jpg',
  '/shooting/nba-finals-game-5-fjpg.jpg',
  '/shooting/new-york-knicks-guard-donte-75691668_copy.jpg',
  '/shooting/orlando-magic-shooting-guard-jj-redick-7-shoots-over-washington-wizards-shooting-guard-jordan-crawford-15-during-the-first-half-of-their-game-played-at-the-verizon-center-in-washington-dc-tuesday-april-10-2012-harry-e-walkermctsipa-usa-2F02.jpg',
  '/shooting/rawImage_1.jpg',
  '/shooting/rawImage.jpg',
  '/shooting/ray-allen-shooting-e1315842341703.jpg',
  '/shooting/RayAllenThree.jpg',
  '/shooting/Shooting-75-2-scaled-e1643806236603.jpg',
  '/shooting/SPORTS_160219815_AR_0_ATXBUNLLEWEY_1.webp',
  '/shooting/SPORTS_160219815_AR_0_ATXBUNLLEWEY.webp',
  '/shooting/SPORTS_170229536_AR_0_WAFELUIBYHAG.webp',
  '/shooting/steph-curry-shooting-a-three-pointer-4fyljglpoxdkq18v.jpg',
  '/shooting/stephen-curry-golden-state-warriors-unsigned-3-point-shot-photograph_pi3891000_ff_3891324-cf779e3c22286152e0af_full.webp',
  '/shooting/TAVCl3JXtkp9Kqw8U6_hDBaEtXCnZYc1SebnzekiK7Z6PCx0CTo5rdoWE2MKGfGeNbU9ElLZP8-HxxkMFZOb-g_copy.jpg',
  '/shooting/the-greatest-NBA-shooters-of-all-time_copy.jpg',
  '/shooting/tumblr_inline_og4wcrQWEQ1up8ogc_1280.jpg',
  '/shooting/tyler-herro.jpg',
  '/shooting/usatsi_21919476.jpg',
  '/shooting/valiers_at_golden_sta_100282738-e1528400698633_copy.jpg',
  '/shooting/w640xh480_REU_2019849.jpg',
  '/shooting/wp12199434.webp',
]

// Generate rows of images (10 rows, 25 images each)
const generateRows = () => {
  const rows = []
  for (let i = 0; i < 10; i++) {
    const rowImages = []
    for (let j = 0; j < 25; j++) {
      rowImages.push(basketballImages[(i * 25 + j) % basketballImages.length])
    }
    rows.push(rowImages)
  }
  return rows
}

const imageRows = generateRows()

export default function BackgroundGrid() {
  return (
    <>
      {/* Inject the CSS styles - Netflix-style */}
      <style jsx global>{`
        .netflix-container {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          overflow: hidden;
          margin-bottom: 56px;
          background-color: rgb(17, 17, 17);
          z-index: 1;
        }

        .netflix-container-perspective {
          perspective: 500px;
          height: 100%;
          position: relative;
        }

        .netflix-container-background {
          height: 100%;
          transform: rotateX(365deg) rotateY(352deg) rotateZ(10deg) translateX(1300px);
          transform-style: preserve-3d;
          animation: netflix_move 180s linear infinite alternate;
        }

        .netflix-box {
          margin: 5px 0;
          display: flex;
          justify-content: flex-end;
          width: 100%;
          flex-wrap: nowrap;
          flex-grow: 1;
          transform: translateX(100px) translateY(-200px);
        }

        .netflix-thumbnail {
          transform-style: preserve-3d;
          width: 125px;
          height: 187px;
          min-width: 125px;
          min-height: 187px;
          display: inline-block;
          background-position: center center;
          background-size: cover;
          background-repeat: no-repeat;
          margin: 7px;
          border-radius: 12px;
          transform: skewX(335deg);
          flex-shrink: 0;
        }

        .netflix-gradient {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
          background: linear-gradient(
            rgba(0, 0, 0, 0.8) 15%,
            rgba(0, 0, 0, 0.8) 50%,
            rgba(0, 0, 0, 0.95) 70%,
            rgba(0, 0, 0, 0.6) 95%,
            rgb(0, 0, 0) 100%
          );
          opacity: 0.65;
        }

        @keyframes netflix_move {
          100% {
            transform: rotateX(365deg) rotateY(352deg) rotateZ(10deg) translateX(-190px);
          }
        }
      `}</style>

      {/* Netflix-style background container */}
      <div className="netflix-container">
        <div className="netflix-gradient" />
        <div className="netflix-container-perspective">
          <div className="netflix-container-background" id="netflix-container-bg">
            {imageRows.map((row, rowIndex) => (
              <div key={rowIndex} className="netflix-box">
                {row.map((imgSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="netflix-thumbnail"
                    style={{ 
                      backgroundImage: `url("${imgSrc}")`
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
