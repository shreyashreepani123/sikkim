// src/pages/Monasteries.jsx
import React, { useState } from "react";
import MonasteryDetails from "../components/MonasteryDetails";
import "../styles.css";

const MONASTERIES = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    district: "Gangtok",
    images: [
      "/images/rumtek-1.jpeg",
      "/images/rumtek-2.jpeg",
      "/images/rumtek-3.jpeg",
      "/images/rumtek-4.jpeg",
      "/images/rumtek-5.jpeg",
    ],
    short: "One of the largest and most significant monasteries in Sikkim.",
    longDescription: `Rumtek Monastery, also known as the Dharmachakra Centre, is one of the most important religious sites in Sikkim. Established in the mid-20th century as the seat of the 16th Karmapa, Rumtek serves as the most prominent center of the Karma Kagyu lineage of Tibetan Buddhism outside Tibet. It is renowned for its grand architecture that blends traditional Tibetan styles with modern craftsmanship, creating a harmonious spiritual environment. The monastery complex houses a vast collection of rare manuscripts, ancient thankas (scroll paintings), relics, and the Golden Stupa containing the remains of the 16th Karmapa.

The main temple of Rumtek is an awe-inspiring structure, adorned with vibrant murals and detailed wood carvings. Its spacious prayer hall is supported by massive columns painted with intricate depictions of Buddhist deities, guardians, and symbolic motifs. The monastery also houses a retreat center for monks undergoing rigorous meditative training, keeping alive the unbroken traditions of Tibetan Buddhist practice.

Beyond its architectural splendor, Rumtek is famous for the annual Cham dances—ritual masked dances performed by monks during the Tibetan New Year and other festivals. These dances are considered sacred offerings to ward off evil and bring blessings to devotees. The monastery is also home to the Karma Shri Nalanda Institute, a renowned Buddhist college where hundreds of monks pursue advanced studies in philosophy, meditation, and ritual practice.

The location of Rumtek adds to its majesty, as it sits on a hilltop overlooking Gangtok, offering breathtaking views of the Himalayas. Pilgrims and tourists alike are drawn not only by its religious significance but also by its serene atmosphere and scenic surroundings. Today, Rumtek Monastery continues to be a thriving spiritual hub, preserving sacred rituals while welcoming visitors into the rich heritage of Tibetan Buddhism.`,
  },

  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    district: "Pelling",
    images: [
      "/images/pemayangtse-1.jpeg",
      "/images/pemayangtse-2.jpeg",
      "/images/pemayangtse-3.jpeg",
      "/images/pemayangtse-4.jpeg",
      "/images/pemayangtse-5.jpeg",
    ],
    short: "One of the oldest monasteries in Sikkim, built in the 17th century.",
    longDescription: `Pemayangtse Monastery, perched on a hilltop in Pelling, is one of the oldest and most prestigious monasteries in Sikkim. Founded in the late 17th century by Lama Lhatsun Chempo, Pemayangtse translates to “Perfect Sublime Lotus.” It belongs to the Nyingma order, the oldest of the four schools of Tibetan Buddhism. Historically, it held special importance as the principal monastery of Sikkim’s royal family, the Chogyals, who were closely linked to its founding.

The monastery is famous for its exquisite art, intricate woodwork, and sacred relics. One of its most remarkable treasures is the seven-tiered wooden model of Guru Rinpoche’s celestial abode, Zangdok Palri, which took years to complete and remains an unparalleled example of monastic craftsmanship. The walls are adorned with detailed murals and ancient thankas that depict stories from Buddhist scriptures, legends, and cosmology.

The annual Cham festival is one of the highlights of Pemayangtse. Monks in vibrant costumes and masks perform ritual dances to dispel evil and invoke blessings for the community. The festival attracts pilgrims, locals, and tourists who gather to witness the unique fusion of devotion and performance art.

The monastery’s surroundings are equally enchanting, with sweeping views of the snow-capped Kanchenjunga range and lush valleys. This serene location enhances the spiritual energy of the monastery, making it not just a religious center but also a retreat for meditation and contemplation. Today, Pemayangtse continues to play a vital role in the preservation of Buddhist traditions and serves as a reminder of Sikkim’s deep spiritual heritage.`,
  },

  {
    id: "tashiding",
    name: "Tashiding Monastery",
    district: "West Sikkim",
    images: [
      "/images/tashiding-1.jpeg",
      "/images/tashiding-2.jpeg",
      "/images/tashiding-3.jpeg",
      "/images/tashiding-4.jpeg",
      "/images/tashiding-5.jpeg",
    ],
    short: "The holiest monastery in Sikkim, known for sacred rituals.",
    longDescription: `Tashiding Monastery, considered the holiest in Sikkim, is situated atop a hill between the Rangit and Rathong rivers. Established in the 17th century by Ngadak Sempa Chempo, one of the three revered lamas who consecrated Sikkim’s first king, it is deeply venerated by the Buddhist community. The very name “Tashiding” translates to “The Devoted Central Glory,” reflecting its profound spiritual importance.

The monastery is most famous for the annual Bumchu Festival, a ritual involving the sacred vase containing holy water that is said to have been blessed by Guru Rinpoche. The level of water in the vase is believed to predict the future prosperity, peace, and wellbeing of Sikkim. This event attracts thousands of pilgrims from across the Himalayan region and beyond.

Architecturally, Tashiding is adorned with magnificent white chortens (stupas) known as “Chortens of Enlightenment,” inscribed with prayers and mantras. The fluttering prayer flags that surround the monastery carry blessings to all living beings with every breeze. Inside, the monastery preserves sacred texts, ancient relics, and icons that make it a repository of Tibetan Buddhist tradition.

Surrounded by forests and mountains, Tashiding offers a deeply spiritual and serene atmosphere. Pilgrims believe that even a glimpse of this monastery cleanses sins and bestows merit. Today, Tashiding continues to uphold its reputation as the holiest monastery in Sikkim, where sacred rituals, age-old traditions, and unwavering devotion remain alive and vibrant.`,
  },

  {
    id: "phodong",
    name: "Phodong Monastery",
    district: "North Sikkim",
    images: [
      "/images/phodong-1.jpeg",
      "/images/phodong-2.jpeg",
      "/images/phodong-3.jpeg",
      "/images/phodong-4.jpeg",
      "/images/phodong-5.jpeg",
    ],
    short: "Known for annual Cham dances and vibrant culture.",
    longDescription: `Phodong Monastery, located in North Sikkim, is one of the most vibrant and culturally significant monasteries of the region. Built in the 18th century under the patronage of the Chogyal Gyurmed Namgyal, Phodong belongs to the Kagyu order of Tibetan Buddhism. Its colorful architecture, decorated with traditional murals and thankas, creates an inviting spiritual atmosphere.

The monastery is especially renowned for its annual Cham dances, performed during the Tibetan New Year (Losar) and other festivals. These dances, carried out by monks in elaborate masks and costumes, symbolize the victory of good over evil and are an integral part of Sikkim’s cultural identity. Devotees gather in large numbers to witness the dances, offer prayers, and receive blessings.

Inside the monastery, one finds exquisite statues of Buddhist deities, elaborate frescoes, and sacred scriptures. The large prayer hall resonates with the sound of chanting monks, the deep drone of long trumpets, and the rhythm of ritual drums, immersing visitors in a truly spiritual experience.

Phodong’s setting amidst lush hills and panoramic views of the mountains adds to its charm. Pilgrims and tourists alike come not only to witness the rituals but also to experience the unique blend of spirituality and natural beauty. Even today, Phodong Monastery remains a thriving hub of Buddhist practice and community celebration.`,
  },

  {
    id: "dubdi",
    name: "Dubdi Monastery",
    district: "West Sikkim",
    images: [
      "/images/dubdi-1.jpeg",
      "/images/dubdi-2.jpeg",
      "/images/dubdi-3.jpeg",
      "/images/dubdi-4.jpeg",
      "/images/dubdi-5.jpeg",
    ],
    short: "The oldest monastery in Sikkim, built in 1701.",
    longDescription: `Dubdi Monastery, built in 1701, holds the distinction of being the oldest monastery in Sikkim. Located near Yuksom, the first capital of Sikkim, it was established soon after the coronation of the first Chogyal (king) by Lama Lhatsun Chempo. Dubdi, meaning “The Retreat,” is a modest yet historically invaluable site that marks the very foundation of Buddhist governance in Sikkim.

The monastery, though smaller than others, is revered for its historical significance. It enshrines manuscripts, sacred texts, and relics that date back to the founding of Sikkim. The structure is built in traditional Sikkimese style, with stone walls, a flat roof, and intricate wood carvings. Inside, statues of Buddhist deities and images of the three lamas who consecrated the first king of Sikkim are preserved.

Dubdi’s location requires a short trek through forested trails, which enhances its aura of seclusion and sanctity. Pilgrims believe that visiting Dubdi cleanses karmic impurities and bestows spiritual merit. Although less grand compared to Rumtek or Pemayangtse, Dubdi holds a charm rooted in simplicity and antiquity.

Today, it stands as a living heritage site where the origins of Sikkim’s Buddhist monarchy can still be felt. For historians, pilgrims, and travelers, Dubdi Monastery represents not just a religious center but also a vital link to the birth of Sikkim’s spiritual and political history.`,
  },

  {
    id: "ralong",
    name: "Ralong Monastery",
    district: "South Sikkim",
    images: [
      "/images/ralong-1.jpeg",
      "/images/ralong-2.jpeg",
      "/images/ralong-3.jpeg",
      "/images/ralong-4.jpeg",
      "/images/ralong-5.jpeg",
    ],
    short: "Known for its Tibetan architecture and annual festivals.",
    longDescription: `Ralong Monastery, nestled in Ravangla, South Sikkim, is a prominent seat of the Kagyu tradition of Tibetan Buddhism. It was originally built in the 18th century after the fourth Chogyal returned from Tibet, bringing with him sacred relics and blessings to establish the monastery. In the 1990s, a new and larger Ralong Monastery was constructed nearby, making the complex one of the largest monasteries in Sikkim.

The architecture of Ralong reflects traditional Tibetan style, with colorful murals, statues of deities, and expansive prayer halls. The monastery is home to hundreds of monks who study scriptures, perform rituals, and engage in meditation. Sacred relics, including thankas and manuscripts, are carefully preserved here.

Ralong is especially famous for the Pang Lhabsol festival, which celebrates the guardian deities of Sikkim and fosters unity between communities. Cham dances performed by monks during this festival draw large crowds, making it both a spiritual and cultural spectacle. The monastery is also associated with the annual Mahakala Dance, a ritual performance invoking the powerful protector deity Mahakala.

Set against the backdrop of the majestic Himalayas, Ralong Monastery is not only a center of devotion but also a beacon of cultural preservation. Its festivals, teachings, and daily practices keep alive centuries-old Buddhist traditions, making it an essential destination for pilgrims and travelers alike.`,
  },

  {
    id: "enchey",
    name: "Enchey Monastery",
    district: "Gangtok",
    images: [
      "/images/enchey-1.jpeg",
      "/images/enchey-2.jpeg",
      "/images/enchey-3.jpeg",
      "/images/enchey-4.jpeg",
      "/images/enchey-5.jpeg",
    ],
    short: "200-year-old monastery famous for tantric arts.",
    longDescription: `Enchey Monastery, located above Gangtok, is a 200-year-old religious site belonging to the Nyingma order of Tibetan Buddhism. It was established in the early 19th century by Lama Druptob Karpo, a renowned tantric master believed to have had supernatural powers. The word “Enchey” means “Solitary Monastery,” as it was originally built in seclusion.

The monastery is known for its strong association with tantric practices and rituals. Within its halls are enshrined images of deities such as Guru Padmasambhava, Lord Buddha, and Loki Sharia. The murals depict tantric symbols and protective deities, reflecting the mystical practices of Vajrayana Buddhism.

Enchey is particularly vibrant during the Chaam Festival, when monks don elaborate masks and costumes to perform sacred dances. These dances, accompanied by the sound of horns, drums, and chants, are both a religious ritual and a cultural event that draws devotees and visitors. The festival embodies the victory of good over evil and the invocation of divine blessings.

The monastery is surrounded by pine forests and offers stunning views of the Kanchenjunga range. Despite its small size compared to Rumtek or Pemayangtse, Enchey Monastery holds immense spiritual importance in Sikkim. It continues to be a center for tantric study and ritual practice, preserving a unique aspect of Himalayan Buddhism.`,
  },
];

export default function Monasteries() {
  const [selected, setSelected] = useState(null);

  function openDetails(mon) {
    setSelected(mon);
  }
  function closeDetails() {
    setSelected(null);
  }

  return (
    <div className="page-container">
      <h2 className="section-title center">Explore Monasteries</h2>

      <div className="card-grid">
        {MONASTERIES.map((m) => (
          <div key={m.id} className="card">
            <img
              src={m.images[0]}
              alt={m.name}
              className="card-image"
              onError={(e) => { e.target.src = "/images/placeholder.png"; }}
            />
            <h3 className="card-title">{m.name}</h3>
            <p className="card-district">{m.district}</p>
            <p className="card-short">{m.short}</p>

            <div className="card-actions">
              <button onClick={() => openDetails(m)} className="btn primary">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <MonasteryDetails monastery={selected} onClose={closeDetails} />
      )}
    </div>
  );
}
