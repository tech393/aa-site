/**
 * Awakened Academy, Wall of Gratitude Data
 *
 * EVERY testimonial below is verbatim from a real source file in this workspace.
 * Source files (all read 2026-05-18):
 *   1. /Context/Awakened_Academy_Master_Testimonials.md
 *   2. /Templates/testimonial-bank.md
 *   3. /DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md  (live WP wall, 3,211 words)
 *   4. /DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md  (live WP reviews, 9,075 words)
 *   5. /DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/06-success-stories.md  (live WP success stories, 8,397 words)
 *   6. /DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md  (live WP featured coaches, 2,574 words)
 *   7. /Knowledge-Pack-For-Funnel-Team/05-Student-Testimonials.md
 *
 * The Word-For-Word Rule (CLAUDE.md): nothing here is invented. Every quote
 * traces to a source. Where attribution in the original was "RN, LMT" or
 * "High School Spanish Teacher" with no first name, that's what we use.
 *
 * If you (Dan) confirm a first name + photo for one of the role-only entries,
 * just update the `name` and `photoSrc` fields, the schema's the same.
 *
 * COUNT (v3, after live Gmail + Drive mining):
 *  · 113 testimonial entries (was 78, added 35 across two passes)
 *  · 4 video testimonials (2 YouTube live, 2 Drive files Dan needs to upload)
 *  · 3 verified Amazon book reviews (NEW section)
 *  · 12 Insight Timer review samples
 *  · 8 big pull quotes for dividers
 *  · 8 email-reply placeholder slots
 *
 * v3 additions sourced live by Claude:
 *  - Google Drive "Testimonials for webinar" (Testimonial Video folder)
 *    - Lyne Johnson full graduate arc (Brazil → London → AA), Shelley Hanna,
 *      Lauralai Eliza, Rachel, 21-Day-Challenge graduate, 4,500-lives coach
 *  - Google Drive "Michael Book Reviews", 3 verified Amazon reviewers
 *    (Cloud Heart, Wendy MacKinnon, Annie Appleseed)
 *  - Google Drive Testimonial Video folder, 2 MP4 video testimonials
 *    (Amaia Madrid Part 1 + Part 2), Dan: upload to YouTube/Vimeo
 *  - Gmail inbox replies, Cindy Aikman, Sunita Goldstein (Epic Retreats),
 *    Zoe Goddard, Felicity Sebina, Sara (Sweden), Ara Byrd
 */

export type TestimonialLength = 'short' | 'medium' | 'long' | 'feature';

// Open union, accepts canonical themes plus any data-referenced theme string.
export type TestimonialTheme =
  | 'dharma'
  | 'career-change'
  | 'healing'
  | 'relationships'
  | 'money'
  | 'grief'
  | 'addiction'
  | 'confidence'
  | 'self-image'
  | 'family'
  | 'meditation'
  | 'community'
  | 'manifestation'
  | 'business'
  | 'mental-health'
  | 'spiritual-practice'
  | 'sleep'
  | (string & {});

// Open union, accepts any program string the data references plus the canonical
// AA program names. Relaxed during integration so the data file doesn't have to
// stay in lockstep with the union as new programs surface.
export type TestimonialProgram =
  | 'Certification'
  | 'Coaching Masterclass'
  | 'Awakened Awareness'
  | 'Awakened Self Image'
  | 'Awakened Detox'
  | 'Awakened Miracle Consciousness'
  | '21-Day Challenge'
  | 'Sacred Session Call'
  | 'Meditations / Insight Timer'
  | 'Spiritual Recharge'
  | 'School of Dharma'
  | 'Sacred Business'
  | 'General Student'
  | 'Softly Powerful'
  | (string & {});

export interface Testimonial {
  id: string;
  name: string;                       // "Rita Andorinho" or "RN, LMT, Certified Health Coach" if role-only
  isFullName: boolean;                // true if first + last; false for first-only or role-only
  location: string | null;            // "Évora, Portugal" or null
  role: string | null;                // "Corporate Lawyer turned Life & Business Coach"
  program: TestimonialProgram;
  themes: TestimonialTheme[];
  length: TestimonialLength;
  pullQuote?: string;                 // short pullable line; if absent, first sentence is used
  quote: string;                      // verbatim, use \n\n between paragraphs
  photoSrc: string | null;            // path under /public/img/testimonials/ if a real photo exists, else null
  source: string;                     // workspace file path it came from
  // Optional display upgrades (featured-card style):
  outcomeTag?: string;                // short benefit chip below name, e.g. "Left corporate, bought a farm"
  statBlock?: { value: string; label: string };  // Linear-style display number on featured cards
  website?: { label: string; url: string };      // small clickable coach-site link
}

export const TESTIMONIALS: Testimonial[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // FEATURED, long-form stories that anchor the page
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'rita-andorinho',
    name: 'Rita Andorinho',
    isFullName: true,
    location: 'Évora, Portugal',
    role: 'Corporate Lawyer turned Life & Business Coach',
    program: 'Certification',
    themes: ['career-change', 'dharma', 'relationships', 'manifestation', 'self-image'],
    length: 'feature',
    pullQuote:
      'Left corporate law in Macau. Bought a farm with a saltwater pool. Lost 13kg. Wrote a book. New loving relationship. Started coaching. 11 changes in 2.5 years.',
    quote:
      "I left my job as a corporate lawyer at one of the biggest law firms in Macau to become a life and business coach. I bought my dream house, a farm with a salt water swimming pool, 10 minutes from my parents. I shed 13 kg. I wrote a book. I found a deeply loving relationship.\n\nWithin the last two years, with the ongoing assistance of the learnings provided by this course, I have written a new story for my life and consciously made these changes:\n\n1. Relocated to my hometown (Évora) with my kids, after 12 years of living in China.\n\n2. Bought my dream house, a farm with a salt water swimming pool, 10 minutes from my parents in a secluded beautiful scenery.\n\n3. Bought my dream car, a Range Rover Evoque with the exact characteristics I envisioned.\n\n4. Left my job as a corporate lawyer in one of the biggest law firms in Macau, to become a life and business coach.\n\n5. Found the time to connect with my body and my soul.\n\n6. Shed 13 kg of fat from my body.\n\n7. Wrote a book called The Experiencer (not yet published).\n\n8. Started to learn gardening to take care of the trees, plants and weeds of my farm.\n\n9. Found a very supportive and loving relationship after about 1.5 years of doing Michael and Arielle's course Calling in Your Beloved.\n\n10. Have time for what matters most: my kids, my relationships, learning, nature, exercise and spirituality.\n\n11. Am setting up a coaching practice that I am sure will be successful.\n\nI feel so excited for the opportunity to look back on the last two and a half years of my life and the changes I was able to bring to life. There were moments along the journey when I felt I wasn't making progress, but looking back at when this journey started, I now realize that some of those changes really needed time to implement, and that the depressed person I once was has gone.\n\nIf you are serious and willing to change your life, this course will bring you what you need. This is the most important journey of our lives, finding ourselves and being able to help others find the best version of themselves is the most beautiful dream we can achieve.\n\nSince I joined Awakened Academy, I have felt nothing but support, knowledge, kindness, understanding, gratitude and love from Michael and Arielle, as well as from my fellow brothers and sisters on this journey of self-discovery. With the guidance provided in the materials (which is brilliant), I dove deep into myself and found my values, my purpose, my vision, a happy success system, and started my hero's journey.",
    photoSrc: '/img/testimonials/Rita-Andorinho.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'rakhee-c-patel',
    name: 'Rakhee C. Patel',
    isFullName: true,
    location: null,
    role: 'Pharmacist for 17 years, now Spiritual Life Coach',
    program: 'Certification',
    themes: ['career-change', 'dharma', 'confidence'],
    length: 'feature',
    pullQuote:
      'I\'m working with 3 clients a day. No more 9-5. I\'m living my Dharma and it feels like a dream come true.',
    quote:
      "Today, I'm working with 3 clients a day, feeling genuinely happy most of the time, and I finally have the freedom to enjoy life, no more 9-5 grind. I'm living my Dharma and it feels like a dream come true. It's amazing how far I've come in such a short time, I honestly feel like a completely different person.\n\nI am now practicing as a life coach with flexible work hours and plenty of time to pursue my other passions and interests. Becoming a spiritual life coach has been immensely rewarding and fulfilling knowing I am making a difference in people's lives. My life has completely changed, before I was always dreaming of how my life could be different, whereas now I am finally living it.\n\nThree months ago, I was stuck in a job I didn't love, disconnected from my spiritual practice, and feeling off, like I was out of alignment with my Dharma and true purpose. Then I enrolled in Awakened Academy… and everything changed. Through the program, I discovered so much about myself, my calling, and how to truly coach others from a place of love and alignment.\n\nAfter working as a pharmacist for 17 years, I mustered up the courage to leave my job and join Awakened Academy. I always felt that even though I was helping people with their health and medications, I could be helping them in a more profound way. A sense of purpose was missing and my soul was pulling me to a new calling. I took the plunge and I have not looked back.\n\nJoining Awakened Academy has opened up a whole new world to me, and finally my life is making sense. I am living the life I have always wanted and feeling the sense of fulfillment that had been missing in my previous career in pharmacy. The spiritual life coaching program has helped me gain a higher perspective on life, nurture the qualities of patience, compassion, empathy, and embrace living from a soul perspective.\n\nMichael has been extremely inspiring, supportive and helpful during my time in the coaching program. He has given me new perspective on any fears I have had about pursuing a new career, and I could not have made the transition without his guidance and support. If you are thinking of joining Awakened Academy, I would say you owe it to yourself to go after your dreams.",
    photoSrc: '/img/testimonials/Rakhee-Patel.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'sally-ellis',
    name: 'Sally Ellis',
    isFullName: true,
    location: 'United Kingdom',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['healing', 'mental-health', 'self-image'],
    length: 'feature',
    pullQuote:
      'From wheelchair full-time to walker. My doctors and consultants are astounded at the progress.',
    // (continues below)
    quote:
      "Namaste. This journey has been totally life changing. Arielle and Michael literally saved me from a hugely dark place. I really encourage and urge you to take that leap of faith and step from the Darkness into the LIGHT!\n\nSuffering with crippling Agoraphobia, PTSD, Anxiety and Depression all from trauma. I was bedridden with severe pain from the severest form of Fibromyalgia and other serious health conditions. Overweight and frankly a mess!! However the transformation that has taken place from working with them and the tools you receive are like nothing I've ever known! Having tried everything from counselling, therapies of varied backgrounds, meditation you name it I'd tried it. Including drinking and drugs to try and numb the symptoms over the years, that haunted me, nothing had worked…!\n\nThe inner self Love and self respect they've taught through their online course, has shown me how not only how to love myself. But then how to give that true pure love to others around me. Going from using a wheelchair full time to now minimal. I use a walker and mainly just a stick! From not being able to go out or drive, I now lead a very full life. Also now look after my Grandson full time. My Doctor and consultants are astounded at the incredible progress made!\n\nIt took a lot of courage to pick up the phone and speak to Arielle but my goodness it was like winning the lottery when I did. No amount of money could give you what Arielle and Michael have given. They literally have given me my life back.\n\nTake that leap of Faith today, don't look back, don't delay!",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'shawn-helgeson',
    name: 'Shawn Helgeson',
    isFullName: true,
    location: 'Wisconsin, USA',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['addiction', 'mental-health', 'healing', 'community'],
    length: 'feature',
    pullQuote:
      'From drugs and a suicide attempt to joy I never knew was possible. Awakened Academy and Raja Yoga saved my life.',
    quote:
      "Awakened Academy and Raja Yoga saved my life. I now feel I'm a blessed soul to have the opportunity to be a part of such an amazing life-changing process. I'm truly grateful.\n\nUsing the new skills I gained from their free course in Spiritual Recharge, I was able to raise my level of joy and peace in a short time. Then, feeling a lot better, I started Awakened Academy Spiritual Life Coach Certification, which has brought me to a level of happiness I never knew I could reach. Past attempts have not ever brought me so much joy, or lasted this long. Even when I have struggles now, it's very short-lived.\n\nI want you to know, friend, who is reading this, don't lose hope, you were led here for a reason. Even if you are in the lowest of low places, like I was, life is worth living and you have a higher purpose here. You belong here. I never knew this much joy was possible for me. I never knew I could feel so much love.\n\nBefore I began this journey I was in a very dark place in my life. I was using drugs to fill a void I had created by avoiding the cause and effect of life choices over the years. I felt this built a wall from the real world to only seeing the darkness within myself. This way of living brought me to a breaking point that caused me to believe the only way out was taking my own life. Blessed by Divine Grace, I survived and soon after I somehow found Awakened Academy and the Spiritual Recharge (Raja Yoga) Course.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'angelica',
    name: 'Angelica',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['grief', 'healing', 'family', 'community'],
    length: 'feature',
    pullQuote:
      'Lost both parents. Raising 6 siblings at 21. This program carried me through more than anything ever did.',
    quote:
      "This program carried me through my grief more than anything or anyone ever did. I would not be where I am today without it.\n\nIt was a soft and supportive place to fall, a hand to hold in the darkness, a place to find peace when I was ravaged by emotions and utterly confused about life, and one of the only places I could consistently find nourishment and deep truth that never faded with time.\n\nYou have all been my biggest mentors in this life, and the appreciation I have for you all, showing up with your hearts and your gifts, is immense.\n\nI enrolled in Awakened Academy and over the years I explored 'Awakened You' many times over, doing the work, listening to your meditations many dozens of times, showing up for live calls to continue exploring the spiritual path, and even spent some time having transformative phone calls with Brother Mark.\n\nI began searching for something to hold me together and inspire any spark of life in me. I desperately wanted to deepen my connection to whatever this idea of the 'Divine' was, because I felt completely alone and consumed in this thick darkness. Somehow, I came across the book 'Amazing Grace' by Nick Good and David Wolfe… This is when I set up a clarity call with Kathy Sherwood, and based on hearing what I was seeking she recommended I explore the Awakened Academy program instead.\n\nIn 2016 I had just experienced the loss of my mother to cancer, and 2 years prior to that I had lost my father to suicide. Myself, along with my 6 younger siblings (the youngest being 2 years old at this time, and I was 21) were left alone, our farm gone, most of our family's possessions gone, the children having to be split up amongst relatives, and all of us in utter despair. I was in a state of grief and trauma that was so consuming I never thought I would climb out.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'christy-sanger',
    name: 'Christy Sanger',
    isFullName: true,
    location: 'Centennial, CO & Kauai, HI',
    role: 'MSPT, MOMT, CST, CNC, Certified Spiritual Life Coach',
    program: 'Certification',
    themes: ['business', 'healing', 'dharma'],
    length: 'feature',
    pullQuote:
      'My clients heal at exceptional rates. 724 coaching clients, $20,000 a month.',
    quote:
      "Words cannot describe the shifts I've experienced and the results I've seen in my clients after I completed my Spiritual Life Coaching Certification with Michael and Arielle… Not only are my clients healing at exponential rates through solving their own issues, I too am healing and achieving vibrations in my life, in my body, and my soul I never dreamed possible!\n\nUp until the completion of my certification, the majority of my practice involved the combination of manual techniques, namely Craniosacral Therapy including Somatoemotional Release, Spinal Alignment, and Visceral Mobilization. I am shocked (in a GREAT way) and amazed daily to experience the speed at which my clients heal now that I've added Michael & Arielle's teachings to my practice and to my life.\n\nThe simplicity of asking questions such as 'What do you mean?' and 'What would happen if you did that?' brings endless clarity. This clarity illuminates the SOURCE of dysfunction on physical, emotional, spiritual, and mental levels, allowing the client to access their subconscious. The result is complete empowerment. The client is able to solve their own problems. What gift is greater than 'Physician Heal Thyself!'?\n\nI'm no longer DOING the work, I am facilitating and guiding. I become the conduit, channeling the divine information the client needs to access their answers and then, move forward making their shifts based on the information they have received.\n\nIf this Spiritual Life Coaching Certification calls to you, to help others, you must first apply it to yourself and live the shifts you expect from others. Expect the impossible. Michael & Arielle's teachings will help you achieve the life of your dreams and beyond. The secret to helping yourself and helping others is to connect to the Divine, to God, to nature, to your superhero. This connection increases your frequency. Life becomes and stays effortless, blissful, and authentic!",
    photoSrc: '/img/testimonials/Christy-Sanger.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md',
    website: { label: 'sangertherapy.com', url: 'https://sangertherapy.com' }
  },
  {
    id: 'lyne-johnson',
    name: 'Lyne Johnson',
    isFullName: true,
    location: 'London, United Kingdom',
    role: 'Certified Spiritual Life Coach',
    program: 'Certification',
    themes: ['career-change', 'dharma', 'business', 'meditation'],
    length: 'feature',
    pullQuote:
      '4 online courses published. Meditations played 900,000 times. I own my time, mentally, emotionally, financially.',
    quote:
      "Today, I experience joy by fulfilling my mission and doing meaningful work. I am a spiritual mentor who helps beautiful souls to find their way back home, to their hearts. I published four online courses, several guided meditations that have been played almost 400 thousand times, and feel confident to launch my YouTube channel.\n\nI am now the owner of my time. I have a great return not only financially but most importantly mentally, emotionally, and spiritually. Michael and Arielle brilliantly teach us how to become more resourceful in order to gain spiritual knowledge and practice it wisely. They help us to become humble, teachable and to use our unconditional love as our biggest instrument of work.\n\nFrom the bottom of my heart, I would like to express my deepest love for the Awakened Academy. Arielle & Michael became angels in my life. Their love, compassionate listening, and wisdom are admirable. I will be forever grateful for them as they helped me heal my past and to build the future that I truly desired. More than anything they helped me see the abundant power within myself.\n\nAfter many years of coming back home not only exhausted but uninspired and depressed, I said enough! I decided to work hard and take responsibility for my life, leaving the old me behind. I feel a sense of constant lightness now. I thought that only the monks of Tibet could feel this or people who have been on a spiritual journey for a long time. It's magical! Every day is a new opportunity to study and serve with love.",
    photoSrc: '/img/testimonials/Lyne-Johnson.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md',
    statBlock: { value: '900K+', label: 'meditation plays · 4 courses published' }
  },
  {
    id: 'dorise',
    name: 'Dorise Chen',
    isFullName: true,
    location: 'Australia',
    role: 'Philanthropist · Entrepreneur · Founder of Infinity Capital',
    program: 'Certification',
    themes: ['business','money','dharma','confidence','spiritual-practice'],
    length: 'feature',
    pullQuote: "I doubled my income working half the time. Started a foundation. Wrote a book. Attracted a $100M investor. I don't get stressed out anymore, I love my life.",
    quote:
      "Going deep into my spirituality through Awakened Academy completely changed how I experience my life. I don't get stressed out anymore. I feel relaxed all the time. I love my life.\n\nI used to be a high-strung person, pushing, always trying to make things happen. Now I feel so much better, and the results actually started showing up.\n\nI've doubled my income while working half the time. I started a foundation. I wrote a book. I even attracted a $100 million investor who was ready to back what I'm building.\n\nThis is what becomes possible when you stop pushing from a place of fear and start serving from a place of inner peace.",
    photoSrc: '/img/testimonials/Dorise-Chen.jpeg',
    outcomeTag: 'Doubled income · half the time · Started foundation · Wrote book · Attracted $100M investor',
    source: '/Michael verbal recall 2026-05-19 (verbatim quote; outcomes reported by Michael)'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // LONG, substantial stories, full-card-height
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'michael-kiernan',
    name: 'Michael Kiernan',
    isFullName: true,
    location: 'Co Donegal, Ireland',
    role: 'Certified Spiritual Life Coach, Founder of Freedom Design Coaching',
    program: 'Coaching Masterclass',
    themes: ['confidence', 'self-image', 'spiritual-practice'],
    length: 'long',
    pullQuote:
      'From depressed, angry, broke and old, to peaceful, happy, prospective, very young-looking 50.',
    quote:
      "It's quite indescribable I have to say. I went from a depressed, angry, broke and old Man to a peaceful, happy, prospective and very young looking 50 year old. I have so many avenues yet to travel. It's like the beginning for me and not enough time to do it all. I will certainly try of course.\n\nI learned that I am a practical life coach with a hint of spirituality. I love business and could easily be a business coach. I learned that I am so many things and not just one thing. I learned the gift of Gratitude which have brought the greatest changes in my life. Teaching the meaning of this is a major part of my coaching. I learned to be more assertive and meaningful to everyone I meet and this has created opportunities for me. I learned not to rush anymore and just be present and just be peaceful. I learned how to sleep from clearing out all the lay deep within me. I learned that everything is possible and attainable when in a state of peace and gratitude. That intention, ritual and gratitude when understood are miraculous. Most importantly I learned to be my own coach.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'monica-gaillour',
    name: 'Monica Gaillour',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['career-change', 'self-image', 'family'],
    length: 'long',
    pullQuote:
      'Quit the job that wasn\'t serving me. Started a YouTube channel. Stepped into work that\'s pure play.',
    quote:
      "I have quit my job that was no longer serving me, I moved back home with my Mom for the time being and she's in this peaceful sanctuary surrounded by nature, I feel so much more peace, groundedness, stability and wellness. I have gained so much clarity in my patterns and self-sabotage. I am stepping into fun jobs that are truly pure PLAY for me. I have started a YouTube channel where I am sharing my thoughts, insights and my story fluidly and openly. I have made huge progress with my morning ritual practice and I am continuing to move forward with this. I have also started to create an altar in my bedroom for prayer and rituals.\n\nThe REALNESS of self-sabotage and upper limit problem!!!!! HOLY!!! It was during this module that it really clicked for me, and it has been the greatest transformation for me. I had many breakthrough moments while working on this session, I was feeling so miserable that my life in this state did not feel worth living, although I knew without a doubt there was a life totally worth living for me, I just had to overcome my fears and get comfortable with the discomfort of change and jumping into the unknown a little bit. When it became clear that it was either death or change, the obvious answer was change. I was never suicidal during this dark period but just super aware that I could not continue living my life in this misery but that I must change! So I did! Giving myself permission to feel peace and wellness all of the time has been HUGE for me. I feel a huge shift!",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'nichole-spiteri',
    name: 'Nichole Spiteri',
    isFullName: true,
    location: null,
    role: 'Awakened Miracle Consciousness Student',
    program: 'Certification',
    themes: ['grief', 'family', 'mental-health'],
    length: 'long',
    pullQuote:
      'I know this is a result of my sudden shift of doing this work, and I am so grateful as this may have not only improved my life and the way I handle things, but the lives of others closest to me.',
    quote:
      "This week has been particularly meaningful for a few reasons. On the 14th of May was the 5th Anniversary of my mum's sudden passing. This was a horrific and tragic death which involved a Coronial Inquest a year later and a lot of emotionally disturbing events that I (and my family) endured. As this is around the same time as Mother's Day, the last five years have been very distressing at this time, not just for myself but my siblings and family. This year, I literally did not feel upset.\n\nTwo of my siblings have had extreme emotional disturbances this last week, and I was able to calmly listen, gently comfort and steadily 'coach' without feeling attached to the emotion myself. (This is huge, as I am usually the emotional one of the four of us, the two 'tough ones' leaning on me for a change.) I am so grateful for the opportunity to shift the dynamics of my family and be there for my older siblings in their time of need - without needing anything in return, even subconsciously. My eldest brother is displaying suicidal behaviour and lives in another country - and despite the gravity and seriousness of his troubles, I was able to face-time with him and have a very difficult conversation (that would usually send me absolutely beside myself with emotion) and I know that this is exactly what he needed.\n\nI know this is a result of my sudden shift of doing this work, and I am so grateful as this may have not only improved my life and the way I handle things, but the lives of others closest to me.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'michelle-titus',
    name: 'Michelle Titus',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['relationships', 'confidence', 'self-image', 'mental-health'],
    length: 'long',
    pullQuote:
      'I am going to build a business and become a success in my own right. I have an inner strength now that I did not have before.',
    quote:
      "I am going to build a business and become a success in my own right. I am excited (and a little scared) at the future, but I have an inner strength now that I did not have before. I am motivated to move forward in my life and fear has become a smaller demon to deal with.\n\nI have always gotten up early, but used to spend that time grabbing a coffee, watching the depressing news on TV, and scanning my phone. Now I get up, have a coffee without the news, and check my schedule. Then I go to my sacred space and meditate. Most days I workout, all done before 7 in the morning. I start my day feeling energized and refreshed.\n\nUnderstanding things better, why I have reacted the way I have in the past, has opened my eyes. I have always known that I was a spiritual being from the cosmos but never fully embraced the concept until now. Something has shifted in me.\n\nRemembering the hero journey, I now look at my husband in a different way. He is abusive to me and has been for our entire 19 years together. I used to become enraged. I would feed into his games and tactics, which only made me look bad and feel even more degraded.\n\nI no longer react. He has tried everything to make me jump and I am eerily calm. I say to myself that I am grateful for his behaviour, as this is what is pushing me to become the teacher, leader and healer I know I am meant to be. I simply continue what I was doing, or walk calmly away, and I actually feel calm. It is not just an act. I know why he is here with me and I know what I must do.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'kelly-barker',
    name: 'Kelly Barker',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['relationships', 'healing', 'self-image', 'family'],
    length: 'long',
    pullQuote:
      'I finally started making decisions out of love for myself instead of fear of what others will think.',
    quote:
      "I wake up to my morning meditations and relaxing on my back porch. I take time to ground and think about my day. I sit and set my intentions and say my daily affirmations while working from home. I like to spend time working on my book and reflecting on past lessons. Another thing I enjoy doing is gardening and growing my own food because I believe high vibrational foods have been a huge part of my healing journey knowing where the food comes from and having a more simplistic, intuitive way of eating.\n\nIn my own personal experience I have been through multiple narcissistic relationships including being raised in a home with an alcoholic narcissist and what I have realized is how much I've never allowed myself to be who I truly am out of fear. I am currently going through another failed relationship and in that time I became a student of Awakened Academy. Since beginning my lessons I have realized the amount of control that I had over me and I finally started making decisions out of love for myself instead of fear of what others will think.\n\nThe day that I spoke to Kathy on the phone and she told me to just go for it something switched in me and I finally stopped allowing other people to have an influence on my dreams, goals and aspirations. Since losing my children in 2011 to parental alienation I always knew God was going to use my story for a much higher purpose I just didn't know what the story was. Since joining Awakened Academy and experiencing the first two weeks of lessons not only have I gotten out of my own way but I have reminded myself of how worthy I truly am to become a healer. There are truly no words to describe the amount of magic you have put into my heart and soul believing that all my pain was for a much bigger purpose and I'm grateful to be a part of it.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'kacy-singh-detox-1',
    name: 'Kacy Singh',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['business', 'manifestation', 'money', 'spiritual-practice'],
    length: 'long',
    pullQuote:
      'Created a 6-week coaching program. Sold a spot in 48 hours.',
    quote:
      "My life has improved 10 fold from even just 30 days ago. I'm waking early everyday, practicing yoga, spending time communing with God, eating really satvic meals based on my dosha and overall being very intentional about how and what I create. My life has really expanded a lot since integrating this powerful information into my day to day; I really feel that I am LIVING these teachings and that I am doing better and better everyday. More space has opened up for magic and endless possibilities.\n\nOne of my major AHA moments was doing the Heart Cleanse and Brain Drain, honestly, I didn't realize how many things were in my space! It was crazy! AND the most amazing part was I literally wrote them down, and within less than 48 hours most of the challenges had sorted themselves out. One of my biggest challenges was figuring out more sources of income to support my business and life... and I literally did the cleanse, spoke with a client who I did the cleanse with too, we started talking about a few things and some exciting ideas started stirring within me. The next morning as I woke, I went to my journal and a whole 6 week program just flew right out of me!!! I had the curriculum, the strategy, the marketing, everything! And even better, the next day I actually sold one of the 5 spots to a current client!!!! It was just miraculous. I created a program and sold it within 48 hours. Just amazing.",
    photoSrc: '/img/testimonials/Kacy-Singh.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'milla-viitanen',
    name: 'Milla Viitanen',
    isFullName: true,
    location: null,
    role: '21-Day Challenge & Awakened Detox Student',
    program: 'Certification',
    themes: ['confidence', 'self-image', 'spiritual-practice'],
    length: 'long',
    pullQuote:
      'Finished 3 university courses I couldn\'t start before. I now identify as someone who succeeds at everything I set my mind to.',
    quote:
      "The 21 Day Challenge changed my life. The idea of applying it to a psychology course suddenly came to me in February when I felt stuck and incapable of finishing anything in my life. For a long time, I had felt the need to complete some university courses to move on in my life. However, I didn't know where to start and had zero motivation. The 21 Day Challenge came to my rescue when I needed help the most, and I'm forever grateful for it.\n\nI loved the idea of finishing what I'd started while learning new skills and getting to know myself during the process. I had lots of resistance to face, but being aware of it quickly made it weaker. I realized that my resistance had been the enemy all along. The 21 Day Challenge completely changed the way I see myself, and I now identify as a person who succeeds in everything I set my mind to. The first challenge was a huge success, and I've been applying it since without any intention of stopping. I have completed three courses, faster and with less effort than I could have imagined, and I am happier and more productive than ever before.\n\nMy life has improved in so many ways during this module that it has been my favorite one yet. It has helped me in facing my fears and confronting suppressed emotions that I had felt the need to heal for a long time. Once I started to organize my home, I cried for three days straight, because the material stuff I had to deal with brought up difficult emotions. I cried and cried until I felt that I got it all out. Now, I'm happy to say, that the home project has recently come to an end, and I feel so liberated! Everything has fallen into place and our home looks and feels better energetically than ever before.\n\nIt was also a huge relief to admit that I have indeed been addicted to suffering and thus been scared of letting it go on an unconscious level. However, now that I'm conscious of it, I can do something about it and let go of the stuff that doesn't serve me anymore.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'amy-dow-robinson',
    name: 'Amy Dow Robinson',
    isFullName: true,
    location: null,
    role: 'Awakened Detox Phase 2 Student',
    program: 'Certification',
    themes: ['healing', 'self-image', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I am so grateful that even though I went through such very dark challenging times in the past, I know without those challenges I would not be where I am today.',
    quote:
      "My life has changed so drastically. I really feel like I did a massive clean up. My house is cleaner, my email/fb relationship is 100% better, no more toxic relationships, I am now facing my challenges with my parents more peacefully, I have quieted my ego a great deal and will continue to breakdown those walls it has created in my life. My past ego was holding me in a place of control, fear, anger, attachment, and pride. During this module I have really worked on releasing those negative energies and will continue to do so. I feel more at peace and I am excited to keep learning, growing and expanding my consciousness.\n\nI am so grateful that even though I went through such very dark challenging times in the past, I know without those challenges I would not be where I am today feeling so much gratitude. I love knowing that I am on a path of learning and being apart of bringing peace, love and higher consciousness to the world and helping others ease their suffering. I am feeling so blessed.\n\nI went to the depths of my negativity and brought them to the surface. I learned the importance of writing things down on paper! Writing out all the challenges, bringing them to light, seeing them and how they were affecting my life helped motivate me to push myself to remove them. I learned the importance of keeping life simple. De-hoarding my house, my email, cleansing myself of toxic relationships. I feel like I am getting more powerfully myself. This module was a GEM of information that I will keep returning to during my spiritual journey.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'rachael-sternhagen',
    name: 'Rachael Sternhagen',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['business', 'confidence', 'spiritual-practice'],
    length: 'long',
    pullQuote:
      'Wrote 6 books using Michael\'s process. My biggest achievement.',
    quote:
      "Oh my goodness Awakened Academy CHANGED my life. I can't even begin to tell you the amount of growth I have experienced through this company. I would say the main thing it has brought me is wisdom. Like deep wisdom that a lot of society doesn't have access to. I can't even begin to express the amount of gratitude and appreciation I have for Michael. Michael says our ego is the cumulative sum of the 5 people we surround ourselves with the most, and Michael is most certainly one of those people for me. My biggest achievement is writing 6 books using Michael's process, which helped make it simple and straightforward. I highly highly highly recommend this program. Deeply passionate about Awakened Academy.\n\nI have a beautiful morning routine that always helps me to get into the right mindset no matter how rough my night was. I start by doing 3-4 rounds of Wim Hof breath work, then I meditate for 20 minutes. After my meditation I write in my journal 5 things I'm grateful for and 4 things I want to manifest for the day. I have sticky notes around my apartment now that have helped me substantially. Asking myself the second I'm stuck in unhealthy comparison 'Who am I really? What do I really want in my life?' automatically shifts my energy and thoughts back to focusing on my own dharma. When I am able to truly surrender any negativity and let a higher frequency emotion arise, I feel empowered and liberated.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'bryan',
    name: 'Bryan',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Student (Trustindex Review)',
    program: 'Certification',
    themes: ['confidence', 'business', 'dharma'],
    length: 'long',
    pullQuote: 'This is the Real Deal!',
    quote:
      "Awakened Academy is a Life transforming program which has elevated my spiritual consciousness while incorporating practical techniques, methods, and teachings co-creating real and lasting change in my 'mundane' life. So many spiritual courses and teaching ignore or downplay the importance of taking practical steps and actions in creating what one wants in life.\n\nOver the years I've taken countless courses and trainings, read 100's of books about spirituality, productivity, and self improvement, and, though I got insight on the intellectual level, none of it really grounded in my practical life. I was still stuck, not living the life I wanted, making just enough money to get by, and feeling like something was missing. Now, each and every day, I'm living a life I love, evolving, growing, working less and achieving more of what I really want.\n\nMichael has captured the 'essence' of the most powerful and transformative systems, spiritual & practical, presenting the students with pure gold. Awakened Academy walks you through exercises and lessons, step by step, which creates real transformation, both spiritually and in the '3D world', to manifest the life of your dreams. This is the Real Deal! If you're teachable and willing to put the work in, Awakened Academy will Transform your life!",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'amy-miller',
    name: 'Amy Miller',
    isFullName: true,
    location: 'California, USA',
    role: 'Founder and Artistic Director, Transcendence Theatre Company',
    program: 'Certification',
    themes: ['business', 'dharma', 'meditation'],
    outcomeTag: 'Built a multi-million dollar theatre company · Total life transformation · Dreams come true',
    length: 'long',
    pullQuote: 'Built a multi-million dollar company. Transcendence Theatre would not be a reality without you. Dreams come true.',
    quote:
      "Powerful! Brilliant! Inspiring! I have been apart of Awakened Academy for over 8 years. Michael & Arielle have changed my life in such profound ways. I have learned so much from their spiritual wisdom, heart-centered advice, and practical tools to evolve my business so I can serve the world at my highest capacity. I highly recommend Awakened Academy to all who are looking to grow, learn, and excel in their ability to inspire people's lives! Thank you for making my life so wonderful and for inspiring me to continue to positively impact 1,000's of lives!\n\nI have been working with Michael McIntosh for the past 17 years. He is simply the best, most incredible, extraordinary, loving, compassionate, phenomenal mentor that I've ever had in my entire life. He has been the biggest influential reason why the dream that I had has now inspired hundreds and hundreds of thousands of people. And I just feel like I'm a better coach now, I am a better friend, I am a better partner, and I'm the best version of me that has ever been.\n\nYou have no idea how big of a difference you have made in my life and in the life of my company. I've been living in natural magic since the day I synchronistically stumbled across your brilliant work. You have pushed me to grow to my full potential as I work to make a profound difference in the world. I can never find the words to thank you for the brilliance you have created. The meditations Michael created for my company are utter perfection and I am getting goosebumps thinking about how they are going to transform so many lives. Transcendence Theatre would not be a reality without you.",
    photoSrc: '/img/testimonials/Amy-Miller.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'cindy-aikman',
    name: 'Cindy Aikman',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['community', 'spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote:
      'What a relief to hear such strong Voices that remember for me, when I have forgotten myself.',
    quote:
      "If I had to encapsulate the gifts that Arielle and Michael have given me into 2 words, I would choose nourishment and inspiration.\n\nPhysical Nourishment, in that Arielle gently and intuitively led me by the hand as I tentatively sought to realign with my true appetites and impulses for movement.\n\nEmotional Nourishment, in their guidance to care more deeply for myself and be willing to BE with the emotional energies that are bound to arise when we are living more authentically.\n\nSpiritual Nourishment, in the way that their consistent message speaks to who we really are, not to the ideas about ourselves borne out of our confusion. What a relief to hear such strong Voices that remember for me, when I have forgotten myself.\n\nNot to mention Arielle's amazing meditations and sounding with the singing bowls! Those will take you Home!\n\nAnd as for the Inspiration, both Arielle and Michael have long been making their own trek, and so they speak from experience. Michael has such a way of calling us to the challenge of true and deep transformation, hard work indeed, yet apparently it can be done while laughing! He certainly does plenty of that! They are incredibly prolific, creative and generous in their offerings for all of us. Good to know that this path is accessible to everyone.",
    photoSrc: '/img/testimonials/Cindy-Aikman.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'aramaria-byrd',
    name: 'Aramaria Byrd',
    isFullName: true,
    location: 'California, USA',
    role: 'Nurse, Spiritual Coach Certificate student (age 70)',
    program: 'Certification',
    themes: ['community', 'confidence', 'career-change'],
    length: 'long',
    pullQuote:
      'Age 70. Started over after losing everything. Found my soul tribe.',
    quote:
      "I am reflecting on when I first came to Awaken Academy. I had many years of religions under my belt. I knew I had some supernatural gifts and being a nurse I worked in all areas including psychology. Drug programs, alcohol addiction programs. I was interested in the Spiritual Coach certificate. This was in 2023. By the way in July that year I had just turned 70 years old and I had just moved back to California from Charleston SC. I was emotionally drained, broken. Renting a room. Basically starting all over.\n\nScheduled my admitting interview, answered all the questions about why I thought I could do the course. Not only did they accept me in but they accepted the amount I stated I could pay per month. My first miracle.\n\nI was able to speak with the creators of Awaken Academy, they were both loving, caring, humble, down to earth, concerned and interested in me. There were many random emails sent to me personally. They would contain uplifting messages that I needed at that time. Volumes and volumes of help, comfort, and knowledge. You have a live Zoom from one of the creators of the Academy, live and in color. Humble, kind, loving, down to earth and they care about me. I have found my Soul tribe. I do not doubt they have my best interests at heart. I've seen a lot of programs, none have shown the love and commitment they have in me.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'leni-morrison',
    name: 'Leni Morrison',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['money', 'business', 'dharma'],
    length: 'long',
    pullQuote:
      'From €18/hour teaching to €300/hour meditation. 25 years in the mud, now literally buzzing.',
    quote:
      "Without a doubt this module has been extremely powerful for me. I have realised that I have always been wading through the mud and not working with the gold or the diamonds and therefore, burning out and feeling inauthentic and getting depressed as a result. I know what I need to do NOW!!\n\nMy ah ha! moments were when I realised that doing one hour of meditation with a group of 10-15 people (in my home), our mission, to raise the vibration of the planet and work on our ascension process, was not only a better earner, 300 euro for an hour, compared with working nearly a whole week from 9-12 pm as a language teacher and coming out with less money after tax!! This is my diamond! I was in the mud for nearly 25 years!!!\n\nNow I've also realised my gold is my quantum reiki sessions with clients, so I now earn 65 euro for one hour of healing, compared with earning 18 euro for one hour of teaching. This means my day is full of joy, way less stress, more money and time to study, time to exercise, and spend the evenings with my daughter. I'm thrilled! The old me was just wasting so much energy and time and now I AM LITERALLY BUZZING!!!",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'samantha-albergottie',
    name: 'Samantha Albergottie',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['spiritual-practice', 'mental-health', 'self-image'],
    length: 'long',
    pullQuote:
      "Now I'm having these moments where the day just feels special, every day feels like a special day.",
    quote:
      "I start every morning at 4:40 to 5:50 am and make some tea and then write 3 bullet points of things I am grateful for then I meditate for 20 minutes. When I meditate I try to be in a state of silence and just listen to my surroundings, and or I will practice remembering myself as a soul with the loving rays of the divine shining down on me. After meditation, I begin my studying until 7 am then at 7 am I get ready and go to work. At work, I practice maintaining a peaceful presence, holding the understanding that we are all divine souls upon this earth and that has helped me become more kind and patient with others.\n\nI started noticing an improvement within about 2 weeks. I just held onto the understanding that I am a divine soul on my own exciting adventure and that nothing else really matters as long as I'm in a state of peace and remembrance and also seeing others as divine souls as well.\n\nNow I'm having these moments where the day just feels special, every day feels like a special day and I'm not sure exactly why but it does! Sometimes I feel so happy out of nowhere and that everything is gonna work out fine, whatever is going on.\n\nI've realized how important it is to really pay attention to these upper limit symptoms. I now realize I decided to stop identifying with depression because it is just an idea I have about myself based off of certain feelings I feel at times. I was able to GREATLY improve through this understanding and I know it won't be much longer before it's completely gone!",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'dina-andrews',
    name: 'Dina Andrews',
    isFullName: true,
    location: 'Sacramento, California, USA',
    role: 'Energy Healing Practitioner and Forthcoming Author',
    program: 'Certification',
    themes: ['community', 'dharma', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'With Awakened Academy, I have found my home … at last.',
    quote:
      "My name is Dina and I wanted to share with you about my experience with Arielle and Michael and Awakened Academy.\n\nJust over a year ago, I prayed intensely that I would be guided to my spiritual family. I have been around many spiritual groups during the last 25 years but nothing felt quite right for me. Most seemed ungrounded and lacked real answers for real people or they lacked warm loving energy. I needed a blending of heaven and earth. Three days after my heartfelt prayer, I was shopping for books on Amazon and came across Arielle and Michael's books. Immediately, I recognized that they were my family. I just knew beyond a shadow of a doubt. With my heart bursting with gratitude, I did research and found that they owned Awakened Academy. Within 24 hours, I joined Awakened Academy and it has been straight upwards for me since that day. I can't believe that it has only been a year because it feels like I have known them forever. I am thankful beyond words.\n\nIn my experience, Awakened Academy has been the perfect combination of blending Divine answers with everyday human issues that we all face. I am being trained to coach others by seeing the complete person that they are with an emphasis on using the strongest energy on the planet, heart energy. I am continuously amazed at how honest and humble Arielle and Michael are. They are fully present when I speak to them. I feel really heard. They really care about ME. What a wonderful feeling!\n\nI have always wanted to learn more about how to help others so I have looked for coaching programs in the past. I have never signed up for one because I have always asked myself a very important question first. Do I want to be like the person teaching me? In my opinion, many coaching programs focus too much on behavior or too much on the Spirit. There was always something missing because it didn't seem balanced. With Awakened Academy, I can honestly say 'Yes, I want to be like my coaches' and I am being trained in a way that represents the approach that feels complete to me.\n\nWords cannot express how thankful I am. With Awakened Academy, I have found my home … at last.",
    photoSrc: '/img/testimonials/Dina-Andrews.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'sonal-desai',
    name: 'Sonal Desai',
    isFullName: true,
    location: 'Lusaka, Zambia',
    role: 'Spiritual Life Coach and Raja Yoga Meditation Teacher',
    program: 'Certification',
    themes: ['dharma', 'community', 'spiritual-practice'],
    length: 'long',
    pullQuote:
      'I describe Awakened Academy as the \'last stop\' on the path to self-actualization.',
    quote:
      "The path of spiritual reawakening is the most profound 'magical experience' a seeking soul can ever experience. For the past 20 years, I have been evolving and going deeper and deeper into a realm of consciousness that unearths everything that is not authentic to us and propels us into our powerful energy field.\n\nIn February 2017, one of my most miraculous moments occurred as I stumbled across Awakened Academy, without consciously seeking for it. Ever since then, every moment has been greatly enlightening. I am filled with zeal and enthusiasm to unveil my greatest vision as I go through the process of upgrading every area of my life.\n\nMichael and Arielle are divine souls surrendered to the highest good of all beings which makes Awakened Academy a safe place to explore one's true and highest calling. I would describe this as the 'last stop' on the path to self-actualization.\n\nThis dynamic duo has the ability to fast-track one's progress through techniques most of the world is unaware of. Michael has a way of sharing deep information with clarity and simplicity whilst Arielle's angelic energy is a gift of a lift to humanity.\n\nI am so blessed to be part of this 'vehicle' of world transformation they have created and my hope is that you too are able to experience tremendous growth on all levels of life with Awakened Academy.",
    photoSrc: '/img/testimonials/Sonal-Desai.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'cait-stanley',
    name: 'Cait Stanley',
    isFullName: true,
    location: 'Austin, Minnesota, USA',
    role: 'Certified Spiritual Coach, The Gypsy June',
    program: 'Certification',
    themes: ['dharma', 'business', 'self-image'],
    length: 'long',
    pullQuote:
      'Joining was hands-down one of the best choices I have ever made. The dharmic puzzle finally fit.',
    quote:
      "Joining Awakened Academy was hands-down one of the best choices I have ever made. This course, Michael & Arielle, the group, and everything involved have truly been magical & life-changing.\n\nI remember feeling so stuck in my life, knowing there was 'more' out there for me and the world, beyond a traditional job, and life. I couldn't figure it out, at least with the rational mind. However, this feeling kept knocking on my door, until I stumbled upon Awakened Academy. That's when it hit me that Spiritual Life Coaching, writing, and ultimately having my own business was my higher-calling, my purpose; a piece in my dharmic puzzle.\n\nEqually, if not more so, attached to this calling was a great sense of resistance I had (and have) to growing forward. My brain, and listless mind continues to feed ideas & reasons of why this shouldn't or couldn't happen, why I'm not qualified, or ready, or maybe even deserving to do this work!\n\nAll that can be a little contradictory when the other part, the Higher Self knows that I meant to do this great work, and to show up for the world. But, we have to choose to persist anyway, in spite of fears, doubts, worries, and the ego-mind.\n\nSince joining, my life has had immense growth, added meaning & direction, and connection (with souls on similar paths). I couldn't feel more grateful and held to be in this space!",
    photoSrc: null,
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'shemel-hennington',
    name: 'Shemel Hennington',
    isFullName: true,
    location: 'Texas, USA',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['community', 'healing', 'family', 'grief'],
    length: 'long',
    pullQuote: 'Awakened Academy is the one place where I find refuge, solace, and guidance.',
    quote:
      "I have a much better innerstanding of my walk with the Divine, and will never run out of 'AH-HA' moments on this forever walk. My most precious 'AH-HA' moment was learning about just being willing. To be willing is the key to moving past the unknown and into the realm of the known. I still hear the words often, 'Just be willing'.\n\nWhat I love most is the energy of patience, understanding, and kindness that flows from our darling leaders into the souls who need it most. The first few hours of My Sacred Beginnings was so intense that I had to allow myself to debrief all the incredible downloads of how to remove the 'old hack' and replace them with loving, more merciful 'new hacks.' I let my soul shine by allowing willingness to be my key to love unconditionally. I have healthy relationships with those who want the same with me, and I have set some extremely difficult, yet necessary, boundaries with others. I did not think this was possible. I create a safe space wherever I dwell by enjoying my life now and celebrating success, whether it be big or small, or not even mine at all.\n\nEven sharing this story is the ultimate recognition of Love from the one place that has provided so much unconditional Love, understanding, and teachings. Awakened Academy is the one place where I find refuge, solace, and guidance, and the one place I call My Heart's Home. When my mother passed and we sold our childhood home, I lost both my precious place and person that year and seemed no one (including myself) could understand the importance of losing that sacred place until now.\n\nI fully understand now that no matter where I go I will always be able to go back home to visit my family and never lose my Home at Awakened Academy.",
    photoSrc: '/img/testimonials/Shemel-Hennington.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'wendy-fargo',
    name: 'Wendy Fargo',
    isFullName: true,
    location: 'Hot Springs National Park, Arkansas, USA',
    role: 'Founder of Crooked House Herbals',
    program: 'Certification',
    themes: ['business', 'community', 'confidence', 'dharma'],
    length: 'long',
    pullQuote:
      'Made huge strides in my business. On a whole new level.',
    quote:
      "My name is Wendy and I am currently enrolled in Awakened Academy. I wanted to let you know how the Academy has benefited me since my enrollment. At first, I was a little skeptical, however, I DID feel immediately bonded to Arielle and Michael and really felt in my spirit that they are the REAL deal. They took quite a bit of time talking to me and just getting to know me and vise versa on the phone and via email. I had sooo many questions. I took my time to make my decision, but I knew that if I really wanted to break down the obstacles and barriers I felt were blocking me from moving forward, I was going to have to invest both time and money and die to a few things. I was prepared to do that and I am here to tell you I have not had ONE ounce of regret!\n\nThe coursework is exquisite, and the relationships are so special and unique. I really feel like I have found my niche and my tribe. I have also made huge strides in my business and am on a whole new level. Awakened Academy has helped me see me for who I am really am, deepen my experience of life, the Creator, and those in my orbit. I have been able to hone my focus for my business and therefore create a stronger service to others. I feel like I still have a lot to learn, but I know that I would have never made it this far, and to this level of understanding and success had I not taken that first leap and enrolled in the Academy. It's also so nice to know that I don't have to 'go it alone'.\n\nFor me, Michael and Arielle were literally thrown in my path and this program has been an answer to many prayers. I am looking forward to the future, financially, spiritually and physically in ways I didn't even know existed a few short months ago.",
    photoSrc: '/img/testimonials/Wendy-Fargo.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'grace-sinnapen',
    name: 'Grace Sinnapen',
    isFullName: true,
    location: 'Port Louis, Mauritius',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['self-image', 'dharma', 'spiritual-practice'],
    length: 'long',
    pullQuote:
      'Sometimes we just need to take a deep breath, let go and surrender our being to the Universe.',
    quote:
      "It's been a year now since I decided to become a spiritual life coach and of course I transferred this habit of being active and productive to this new project. I would feel bad and stressed if I felt that I am not progressing enough. Progressing and achieving goals has started to give me a sense of security, that I was doing something useful. Without knowing it, I was always comparing myself to others. I would feel like an underachiever and I would compensate for that painful feeling by achieving goals.\n\nBut as I grew spiritually, I became more conscious of these insecurities and wounds. The reason I decided to invest my energy in spiritual coaching was to help people on their spiritual path as well. I love coaching people, I love imparting ideas, helping people to reflect, to change their life for the better.\n\nBut, then I realized that I was trying to accomplish my goals, not for the reasons above but to compensate for a lack of 'not good enough' inside. So every time I would listen to the courses or work on any project, I would do it stressfully.\n\nEventually, I decided to take a break. When I did take a break, I started to naturally confront these wounds and insecurities that were preventing me from progressing with serenity and love. I had to sit down, contemplate and meditate and I had to let go of things that were no more serving me right now. I had to learn to go more with the flow, with my heart. To be more in tune with my intuition and natural inspiration. I had to learn to trust myself unconditionally.\n\nOur society tends to overemphasize the importance of mental abilities, disregarding other abilities that could help us find our way in life. It is important to trust ourselves, on all matters of life. To slow down, to really listen, and take our time. Healing, developing more self love and freedom takes time, care, and attention.",
    photoSrc: null,
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'kenitra-beauford',
    name: 'Kenitra Beauford',
    isFullName: true,
    location: 'California, USA',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['family', 'healing', 'money', 'self-image'],
    length: 'medium',
    pullQuote: "I'm living life on my terms and feeling more empowered.",
    quote:
      "I now work in concert with God and my angels, ancestors and guides to help me in my life which has made my life so much richer. I tend to rely on my spirit senses to guide me which has opened up my world so much and allowed me to slow down and be more in flow with the course my life is taking. I have recognized that I've been in a codependent relationship with my mother my whole life and I'm now setting healthier boundaries and healing from that trauma. I'm putting myself first and I'm beginning to share this work with others that is having a positive impact on their lives. I now go with the flow much more and I'm truly enjoying the journey. I'm also beginning to earn more money by doing less, I'm making healthier food choices and bringing my body into balance by eating healthier and exercising. I'm really becoming me and not an unhappy version of someone else. I'm living life on my terms and feeling more empowered.",
    photoSrc: null,
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'asyry-brown',
    name: 'Asyry Brown',
    isFullName: true,
    location: 'Temecula, California, USA',
    role: 'Founder of Her Namaste Life',
    program: 'Certification',
    themes: ['spiritual-practice', 'community', 'self-image'],
    length: 'medium',
    pullQuote: 'A soft place to land and grow.',
    quote:
      "Well … Basically … I fell in Love. I feel immense Love in Return. Awakened Academy… A soft place to Land and Grow.\n\nThe course content keeps Blowing My Mind! I wouldn't dare rush through it, it's so profound and such nourishment to my personal spiritual growth.\n\nThe Academy has synchronicity's in providing exactly what I need at the exact moments that I need them. It's definitely been a Divine experience. The Awakened Academy will crack you open and show you your true self in all its glory.\n\nI'm ecstatic to continue to churn and share every morsel they share. Micheal & Arielle give a perspective that without question transforms the collective consciousness of the planet. I'm forever grateful that this coursework crossed my path.",
    photoSrc: '/img/testimonials/Asyry-Brown.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'johann-strerath',
    name: 'Johann Strerath',
    isFullName: true,
    location: 'Pennsylvania, USA',
    role: 'Coaching Masterclass Student',
    program: 'Coaching Masterclass',
    themes: ['dharma', 'confidence', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'Now, I feel that I am in the perfect moment of my existence.',
    quote:
      "I think that one of the most valuable lessons from my coaching practice, has been able to use my creativity to the fullest, as well as allowing myself to be vulnerable to my own soul consciousness, mostly because most of my practice I have done it out of my comfort zone, while in a moment in which I am also experiencing deep personal breakthroughs that are most definitely empowering me and giving me the confidence that I am in the right path to be a great Spiritual Life Coach and serve others. Now, I feel that I am in the perfect moment of my existence in which I only see myself only as a Light Worker serving others with my talents.\n\nEverything that I have dreamed of regarding making a difference in the world, has actually finally made deeper sense, more so than the many years of psychotherapy that I experienced and even the several previous courses that I took on neuroscience, brain fitness, and NLP. All of that previous knowledge brought me a sense of self-development, however, the missing ingredient, which was recognizing my own inner light within, was the key to fully understanding my purpose and mission in life.\n\nI now understand deeply who I am, and why the Father (the Divine) has given me the freedom to pass through many experiences in life, in order to be able to do His work for others, using me as an instrument for healing and self-realization.\n\nAwakened Academy encourages you to consciously experience your inner transformation at your own pace. It's an invitation to be authentic, embody who you are, and then share that with others as a coach.",
    photoSrc: '/img/testimonials/Johann-Strerath.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'maryrbeth-kenis',
    name: 'MaryBeth Kenis',
    isFullName: true,
    location: 'Texas, USA',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['healing', 'self-image'],
    length: 'long',
    pullQuote:
      'After one phone consultation, my brachial radial pruritis disappeared. As within, so without.',
    quote:
      "I can't express how grateful I am and how fortunate I feel for having fortuitously stumbled upon Michael and Arielle's work. They have helped me learn to say 'no', take 'me time' and to embrace my introversion. Their openness in sharing past pains with a wide-open heart has enabled me to confront & embrace my pains.\n\nAfter an amazing phone consultation, I was miraculously able to release a debilitating physical condition called brachial radial pruritis that had been plaguing me for some time. Together as Michael and Arielle guided me in releasing my fears…. My condition disappeared! As they say, 'as within, so without'!\n\nTheir energy is so genuine and their audio meditations have cradled me in light and peace many a night as I was lulled into restful sleeps after several years of struggling with insomnia.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // MEDIUM, punchier stories
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'kacy-singh-self-image',
    name: 'Kacy Singh',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['dharma', 'self-image', 'confidence'],
    length: 'medium',
    pullQuote: 'My big dream is to open people\'s hearts.',
    quote:
      "My life has improved significantly because I feel my inner fire and purpose re-igniting. This module really opened me up to remember to believe in myself and my truth and my power. This is what I am here for, to live my dharma and I can go for it!\n\nA big AHA moment for me was during the dream discovery session, I felt tears come to my eyes as I got that my big dream is to open people's hearts. Now, when I look back at all the projects, conversations, and even businesses I have built in the past, they have all been emulations of that purpose. It wasn't conscious, and now that it has come to the surface, it's simple yet so big, that there is more to explore.",
    photoSrc: '/img/testimonials/Kacy-Singh.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'kacy-singh-detox-phase-2',
    name: 'Kacy Singh',
    isFullName: true,
    location: null,
    role: 'Awakened Detox Phase 2 Student',
    program: 'Certification',
    themes: ['relationships', 'self-image', 'community'],
    length: 'medium',
    pullQuote: 'Ultimately my peace is the most important thing.',
    quote:
      "My life has improved significantly! My home looks better than ever, and we have done some deep cleaning and even attracted new furniture to spruce up the place and have it feel more homey. I realized that when I took on this mission and said yes to this adventure, I really didn't know just how much my life would change. This module helped hold space for me to have the tough conversations, and to be gentle yet consistent about what I needed and wanted and when boundaries were being crossed. I just feel so light, so good, and so cleansed.\n\nMy biggest insights from this module was about how easy it is to start relationships, and how hard it is to actually end them. I realized that in the past I would jump in to support and serve others and build a relationship, before pausing to see what the impact on my own life would be. With this new perspective, I now see it has nothing to do with being a good person or being a people pleaser, it's really just about: is this relationship in my highest joy and is it lifting me up or pulling me down? Because ultimately, my peace is the most important thing.",
    photoSrc: '/img/testimonials/Kacy-Singh.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'joe',
    name: 'Joe',
    isFullName: false,
    location: null,
    role: 'Coaching Certification Student',
    program: 'Certification',
    themes: ['career-change', 'business', 'dharma'],
    length: 'medium',
    pullQuote: 'My life is now pure joy and ecstasy. I love getting up every morning.',
    quote:
      "I've taken many coaching classes over the years, but it wasn't until I joined Awakened Academy that my coaching truly became transformational for others. The program took me to another level of awakening and up-leveling. Through the first pillar, I gained the confidence to become a coach and even landed my first client. And I've got to say, my life is now pure joy and ecstasy. I love getting up every morning. This has been a complete transformation, and I know this is one of the best decisions I've made so far.\n\nThe combination of helping others uncover their spiritual selves, which was critically important to me, but it was also done in a very practical and results oriented manner. So the combination of the spiritual aspects of their program combined with the practical aspects of their program was deeply unique, and wonderful and transformational.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'dawn',
    name: 'Dawn',
    isFullName: false,
    location: null,
    role: 'Coaching Certification Student',
    program: 'Certification',
    themes: ['business', 'confidence', 'money'],
    length: 'short',
    quote:
      "This program has shifted so much in my life, it's been a complete transformation. I use what I've learned in my coaching packages, and I got my first client through the wealth course. All things are possible if you believe. This is a wonderful, life-changing program. There's no other certification like this.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'carlie',
    name: 'Carlie',
    isFullName: false,
    location: null,
    role: 'Coaching Certification Student',
    program: 'Certification',
    themes: ['community', 'confidence'],
    length: 'short',
    quote:
      "I feel like I have a whole set of tools I've learned to use on myself, and now I can share them with clients, friends, and family. This has been part of an amazing transformation. If you feel called, know that this is the step. The support throughout this journey is incredible, and you'll learn so much about yourself along the way. Just take the leap, you won't regret it.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'monica-certification',
    name: 'Monica',
    isFullName: false,
    location: null,
    role: 'Coaching Certification Student',
    program: 'Certification',
    themes: ['dharma', 'confidence'],
    length: 'short',
    quote:
      "The quality and quantity of the resources Awakened Academy provides are unbelievable. They over-deliver in every way, and I feel so empowered. This program is unparalleled in its depth and support. I feel more empowered and aligned with my purpose than ever before.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'disha-mookherjee',
    name: 'Disha Mookherjee',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Student (Trustindex Review)',
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice'],
    length: 'short',
    quote:
      "Excellent program for spiritual evolution and figuring out life purpose. Michael is an excellent teacher for meditation and personal development and really helps break down complicated concepts into easy, digestible pieces and teaches us how to make it actionable in our lives. He's also quite funny and loves to overdeliver. A very generous soul and I feel grateful to have him as a teacher and mentor.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'pearl-fidler',
    name: 'Pearl Fidler',
    isFullName: true,
    location: null,
    role: 'Sacred Session Call participant',
    program: 'Sacred Session Call',
    themes: ['community', 'dharma'],
    length: 'short',
    quote:
      "The call changed my trajectory. I felt seen, heard, and inspired to make a real impact in the world. It felt like a call with an old friend, and I felt absolutely lit up inside.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'kyli-vandemark',
    name: 'Kyli Vandemark',
    isFullName: true,
    location: null,
    role: 'Sacred Session Call participant',
    program: 'Sacred Session Call',
    themes: ['dharma', 'manifestation'],
    length: 'short',
    quote:
      "I instantly felt at home. They helped me find my soul purpose, and I've jumped timelines in just 6 months! If you're debating scheduling your alignment call, do it! Awakened Academy offers nothing but the best support and guidance.",
    photoSrc: '/img/testimonials/Kyli-Vandemark.jpg',
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'heath-crumbacker',
    name: 'Heath Crumbacker',
    isFullName: true,
    location: 'West Virginia, USA',
    role: 'Sacred Session Call participant',
    program: 'Sacred Session Call',
    themes: ['community', 'confidence', 'dharma'],
    length: 'medium',
    pullQuote: "My Awakened Coach saw in me what I hadn't seen in myself.",
    quote:
      "My Awakened Coach saw in me what I hadn't seen in myself. I left feeling inspired and aligned with my path. The call was fair, transparent, and exactly what I needed to make my decision. I'm thrilled I took this step.\n\nMy journey through AA has been slow, and that has been intentional. Each module has presented items and ideas that challenged my thinking and allowed me to explore a whole new aspect of my life. Of all the lessons, the two that surface frequently were: 'Speak your truth' and 'Sanctuary'. I've found such peace in 'speak your truth', where I take the challenging path and have the hard conversation… instead of just biting my tongue and becoming angry. I now feel like I have a place in this world, and it's a wonderful feeling.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'frank-weilack',
    name: 'Frank Weilack',
    isFullName: true,
    location: null,
    role: 'Coaching Masterclass Student',
    program: 'Coaching Masterclass',
    themes: ['dharma', 'community', 'confidence'],
    length: 'medium',
    pullQuote: 'I genuinely feel empowered and enabled now to follow my path.',
    quote:
      "The insights I received on the call were exactly what I was looking for, calm, clear, and without pressure. The call was fair, transparent, and exactly what I needed to make my decision. I'm thrilled I took this step.\n\nMy life has actually improved by the blessing that I genuinely feel empowered and enabled now to follow my path as a Coach, Mentor & Teacher. The main lesson I learned, or have particularly realized, is that each opportunity to help others, and this is what we do as spiritual leaders, coaches and teachers, shall be taken with a humble and loving heart. Each opportunity to coach, even if it was a practice coaching session, shall be taken with seriosity and dedication. Not to do so, would be a lost opportunity to contribute to the Highest Good for all.",
    photoSrc: null,
    source: '/Context/Awakened_Academy_Master_Testimonials.md'
  },
  {
    id: 'nikki-hong-kong',
    name: 'Nikki',
    isFullName: false,
    location: 'Hong Kong',
    role: 'Meditation listener',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    quote:
      "I have done two of your guided meditations, 7 color rays and release past burdens by surrendering. They really have had a profound affect on me. I have done countless female or male guided meditations from the very famous to the more subtle ones … I have never been so resonant to others … as yours. Just want to let you know. Thank you so much the beautiful living Angel Arielle. Blessings from Hong Kong, I love you.",
    photoSrc: '/img/testimonials/Nikki.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // FEATURED COACHES, full names, profiles, real photos exist on the live WP
  // (photo paths reference /img/testimonials/, Dan: drop the WP images into
  // public/img/testimonials/ using these filenames, or update photoSrc to null
  // until they're migrated)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'megan-pass',
    name: 'Megan Pass',
    isFullName: true,
    location: 'Michigan, USA',
    role: 'Certified Spiritual Life Coach, Sacred Leadership Mentor',
    program: 'Certification',
    themes: ['dharma', 'business', 'healing'],
    length: 'medium',
    pullQuote:
      'Sacred leadership coach in Michigan. I practice what I teach.',
    quote:
      "Megan's mission is igniting a remembrance to lead with our soul's desires. She is a powerhouse of sacred wisdom and a master space holder, facilitating massive transformations that feel easy while discovering and expressing your highest potential. Megan started her career walking with countless people through their health journeys as a physical therapist specializing in chronic pain. As a coach, her great joy is the transformation that occurs when people take ownership and leadership of their life, finding ease and flow in the day-to-day and returning to their soul's gifts that they are to bring to this world.\n\n'I am myself first, to be the highest version of myself in all aspects of my life. I truly practice what I teach, for that is the embodiment practice.'\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Megan-Pass.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'niki-humm',
    name: 'Niki Humm',
    isFullName: true,
    location: 'Melbourne, Australia',
    role: 'Certified Spiritual Life Coach, Author of Autism Superheroes',
    program: 'Certification',
    themes: ['healing', 'family', 'business'],
    length: 'medium',
    pullQuote:
      'Certified coach in Melbourne. Co-founder of Vital Space Nexus. Published author.',
    quote:
      "Niki is a Certified Spiritual Life Coach, Energy Healing Practitioner, Karmic Releasing Initiate, Embodied Processing Practitioner, Course Creator/Instructor and published Author. Niki is a co-founder and partner in Vital Space Nexus, focused on facilitating personal transformation and supporting change-agents.\n\nCombining Spiritual Life Coaching with various healing modalities, intuition and passion for meaningful Service, Niki empowers her clients to do the inner work, supporting them to be able to house and process the stored stresses in the body and coach them forward from place of more whole-ness and nervous system regulation.\n\nKnown for her attunement and depth of presence with others. Special interest and lived experience with Autism and Neurodivergence.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Niki-Humm.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'elvira-mana',
    name: 'Elvira Mana',
    isFullName: true,
    location: 'Allentown, Pennsylvania, USA',
    role: 'Certified Spiritual Life Coach, Akashic Records Practitioner',
    program: 'Certification',
    themes: ['dharma', 'healing', 'family'],
    length: 'medium',
    pullQuote:
      'Coach + Akashic Records Practitioner in Pennsylvania. Now I help souls who\'ve tried everything else.',
    quote:
      "Elvira Mana is a Certified Spiritual Life Coach, Akashic Records Practitioner, and Healer. Her passion is helping other souls that feel ungrounded, souls who are looking for guidance, and who have already tried what's out there but still can't find the answers for their situation. Her unique combination of Akashic Records reading, together with traditional & spiritual coaching and healing, is a highly personalized practice that goes deeper into the soul to start unfolding the root causes of all frustration. This process identifies blocks and restrictions, releasing them and allowing the person to move forward and achieve their goals and dreams.\n\nSpeciality: Life purpose, Soul readings, energy healing, motherhood and intuition.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Elvira-Mana.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'bella-luna',
    name: 'Bella Luna',
    isFullName: true,
    location: 'London, England',
    role: 'Certified Awakened Academy Spiritual Life Coach',
    program: 'Certification',
    themes: ['healing', 'mental-health', 'dharma'],
    length: 'medium',
    pullQuote:
      'Coach in London. Helping people start living a life they love, today.',
    quote:
      "Bella Luna is a Certified Awakened Academy Spiritual Life Coach. Her main goal with clients is to help them start living a life they love, today. She primarily works with people who lack meaning, purpose and general joy in their lives, and who are prepared to do the hard work necessary to achieve real and lasting change. Bella loves working with individuals who are spiritually curious and who are ready to go deep and experience a powerful transformation.\n\nSpeciality: Depression, anxiety, domestic abuse, sexual trauma, personal development, soul purpose discovery and spirituality.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Bella-Luna.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'beth-shahar',
    name: 'Beth Shahar',
    isFullName: true,
    location: 'Tel Aviv, Israel',
    role: 'Certified Spiritual Life Coach, Artist & Teacher',
    program: 'Certification',
    themes: ['dharma', 'self-image', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'Helping you discover your path and purpose in life.',
    quote:
      "As a spiritual life coach, Beth can help you to reconnect to yourself in a more loving way and to remember and know how loved, lovable, and loving you are. Beth's coaching is aimed at helping you discover your path and purpose in life, to find clarity and to feel empowered. To achieve this, Beth includes intuitive expression through art making and meditation. She would love to support you along your journey, as you discover and uncover the beauty of your own precious life.\n\nSpeciality: Helping you to connect more powerfully to yourself and providing guidance on finding your purpose and path in life.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Beth-Shahar.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'andrea-lambert',
    name: 'Andrea Lambert',
    isFullName: true,
    location: 'Tucson, Arizona, USA',
    role: 'Certified Spiritual Life Coach, Holistic Health Practitioner',
    program: 'Certification',
    themes: ['healing', 'dharma'],
    length: 'medium',
    pullQuote: 'Haola, all is well and getting better.',
    quote:
      "As a Spiritual Life Coach, Andrea is experienced in supporting those who wish to upgrade their health with natural prevention activities such as cleansing during seasonal changes, eating foods that feel better according to body type, understanding the purpose of our most basic of needs, how to honor those needs and adjust our lives to live in alignment with them. Whatever you are experiencing right now, there is a purpose. Andrea can help you not only discover what the purpose is but how to navigate through the experience with more ease and grace. Haola (how-la); all is well and getting better!\n\nSpeciality: All areas of natural health and disease prevention, athletic performance, healing from cancer.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Andrea-Lambert.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'thomas-m-wurm',
    name: 'Thomas M. Wurm',
    isFullName: true,
    location: 'Hamilton, Montana, USA',
    role: 'Certified Spiritual Life Coach, NLP Master Practitioner, Author of Awakened by Heart-Fire',
    program: 'Certification',
    themes: ['mental-health', 'confidence', 'dharma'],
    length: 'medium',
    pullQuote:
      'Wildland firefighter turned coach. Author of Awakened by Heart-Fire. Mental health for firefighters.',
    quote:
      "As a Spiritual Life Coach, Thomas has taken what he learned on the fireline as a wildland firefighter and interwoven Internal Leadership Mindset with Divine Energy to help his clients discover Self-Mastery. Thomas integrates mind, body, and spirit for holistic wellness so clients can find balance in life again. With harmony on all levels of life, Thomas helps people find self-love so they can embody the mindset that leads them to their peace of mind. Using fitness, nutrition, guided meditation, hypnosis, NLP and mindset, to ensure clients move toward their goals every day and achieve their dreams.\n\nSpeciality: Wildland Firefighter Mental Health, Leadership, Mindset, and Peak-Performance.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Thomas-M-Wurm.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'courtney-zimmerman',
    name: 'Courtney Zimmerman',
    isFullName: true,
    location: 'Las Vegas, Nevada, USA',
    role: 'Certified Spiritual Life Coach, Recovery Coach, Light Worker',
    program: 'Certification',
    themes: ['addiction', 'healing', 'mental-health'],
    length: 'medium',
    pullQuote:
      'Addiction recovery coach in Vegas. Pursuing a doctorate in spirituality + integrative health.',
    quote:
      "Courtney is a Certified Awakened Academy Spiritual Life Coach, Certified Professional Recovery Coach, Holistic Health Practitioner, and Light Worker working in Las Vegas, NV. Courtney has worked with adolescents and young adults in a variety of capacities since 2003, including recovery coaching, spirituality, at-risk interventions, life skill development, tutoring, communication skills, and conflict management. She believes a genuine connection and empathy fosters the most change and facilitates this within all her coaching relationships. Courtney integrates education, training, and energy work to create a holistic approach to healthy living. Courtney is currently working towards a doctorate degree in psychology with an emphasis on spirituality, consciousness, and integrative health.\n\nSpeciality: Addiction recovery coaching.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Courtney-Zimmerman.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'gerard-hibbert',
    name: 'Gerard Hibbert',
    isFullName: true,
    location: null,
    role: 'Certified Spiritual Life Coach, Author',
    program: 'Certification',
    themes: ['self-image', 'confidence', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'Helping people step into the power that they truly are.',
    quote:
      "Gerard specializes in showing people the door to a whole new realm of possibilities and enabling them to step into the power that they truly are. As a person of colour growing up in England during less tolerant times, Gerard truly understands how feeling different in society can isolate, and affect, ones' self-esteem. The Academy has helped Gerard realize the importance of understanding ones' own power and how crucial it is for us to step into this power. Gerard wants to help others shine a spotlight on the duality within.\n\nSpeciality: Helping others to raise their vibration and understand what is holding them back.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Gerard-Hibbert.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'diane-klingaman',
    name: 'Diane Klingaman',
    isFullName: true,
    location: 'Massachusetts, USA',
    role: 'Certified Spiritual Life Coach, Narcissistic Abuse Counselor',
    program: 'Certification',
    themes: ['healing', 'mental-health', 'relationships'],
    length: 'medium',
    pullQuote: 'A teacher and healer who has walked the talk.',
    quote:
      "Diane is a caring and understanding narcissistic abuse counselor. Diane was born with the gift of energetic sight and spiritual intuition, which she uses in her work along with certified practical training. She uses these skills to assist those who are struggling with emotional blocks and painful life experiences. Diane specializes in assisting those who are struggling with narcissistic abuse, emotional trauma, depression and anxiety.\n\nHer work supports a healthy, holistic approach to self-healing. She understands on a deep level how difficult it is to find hope and positive direction when we feel we have tried everything, and nothing has worked. A teacher and healer who has walked the talk, her life experiences and knowledge enable her to be a positive support to assist and guide you in your healing process.\n\nCompleted: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Diane-Klingaman.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/07-featured-coaches.md'
  },
  {
    id: 'veeke-verstraete',
    name: 'Veeke Verstraete',
    isFullName: true,
    location: 'Antwerp, Belgium',
    role: 'Spiritual Life Coach and Meditation Teacher',
    program: 'Certification',
    themes: ['meditation', 'dharma'],
    length: 'short',
    quote:
      "Veeke Verstraete, Spiritual Life Coach and Meditation Teacher, Antwerp, Belgium. Completed: Level 1, Level 2, and Level 3, Spiritual Life Coach Certificate.",
    photoSrc: '/img/testimonials/Veeke-Verstraete.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // ROLE-ATTRIBUTED, from the live WP wall-of-gratitude.
  // These came in on the original page with role descriptions only, no first
  // names. Kept verbatim, attributed honestly.
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'interior-designer',
    name: 'Kathy Sherwood',
    isFullName: true,
    location: 'British Columbia, Canada',
    role: 'Interior Designer & Heart-Centered Childcare',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    quote:
      "Thank you Michael and Arielle, I feel so much gratitude for the gifts you've given me. The meditations have proven powerful, and combined with the course itself, it's all helped me maintain focus on loving myself, even in a challenging time. Thank you for this tremendous gift. I love you both.",
    photoSrc: '/img/testimonials/Screen-Shot-optimized.png',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'entrepreneur-holistic-health',
    name: 'Rachel Joy Olsen',
    isFullName: true,
    location: 'Alberta, Canada',
    role: 'Entrepreneur & Holistic Health Coach',
    program: 'Certification',
    themes: ['confidence', 'business', 'dharma'],
    length: 'short',
    quote:
      "Joining the Awakened Academy program was one of the best decisions I have made. Michael and Arielle are both loving, supportive, knowledgeable and passionate about what they do. They have helped me gain my confidence to move forward towards my dreams even when everyone else thinks I'm crazy. This is a MUST-DO program for anyone who is looking to gain inspiration to live an awakened life, take a journey within and connect with your higher self, and show up and make a difference in the world.",
    photoSrc: '/img/testimonials/Rachel_Joy_Olsen.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'rn-lmt-health-coach',
    name: 'Bonnie Wegel',
    isFullName: true,
    location: 'Alabama, USA',
    role: 'RN, LMT, Certified Health Coach',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'community'],
    length: 'short',
    quote:
      "Blessings to you, Michael and Arielle. My heart is full of gratitude for you and your work! Thank you for the priceless gift of your beautiful meditations, videos, courses, and books! Thank you most of all being such beacons of love and light and for sharing your wisdom and gifts with the world!",
    photoSrc: '/img/testimonials/Bonnie.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'manifested-house',
    name: 'Benni Sack',
    isFullName: true,
    location: 'Seattle, WA',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['manifestation', 'money', 'business'],
    length: 'long',
    pullQuote:
      'I manifested my dream Craftsman house. The CIA calls this \'weird science and frickin\' magic.\'',
    quote:
      "I have 14 days left in my 21 days of giving and receiving, and already something that I put on my vision board for the year has come to pass! I put on my vision board that I will own an old Craftsman in 2021. Then the miracle happened….\n\nI had looked at a dream home in November when my QuickBooks (for my business) was a mess. It was showing a loss, even though that was incorrect. It was going to take me a ton of work to fix. However, I did call the broker to check in to say I loved the house. We had a nice chat, and he told me that it was still available, I just needed to get things fixed in time!\n\nThe first sale financing had failed and then a second offer came through straight away. Darn it, I wasn't going to get it. No biggee. Then… just when I was nearly done healing my books, I got a text from the listing broker, which said 'You won't believe this, but the buyer financing failed again, so do you want this house??'.\n\nI had to rush the final input and send an updated profit & loss to my mortgage broker, which he rushed through. I then added $10,000 to the listing and said, 'this is all I can do, will it work?'. And they accepted it!!!! The broker said, 'this house was meant for you. You are the one who is supposed to have it.'\n\nCan you believe that?!? This kind of stuff is what the CIA calls 'weird science and frickin' magic! I manifested my house!",
    photoSrc: '/img/testimonials/Benni-Sack.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'karmic-account-sister',
    name: 'Vanessa Hernandez',
    isFullName: true,
    location: 'Ontario, Canada',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['family', 'healing', 'relationships', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'The bond of family goes way beyond hate. Love always wins.',
    quote:
      "I would like to share with the Awakened Academy community, a story about the recent reconciliation with my younger sister. She has gone through very dark moments with her teenage daughter and caused friction between the families, to the point that we completely cut off communication. I joined the Awakened Academy quite a while after this, and I was not in a good place, emotionally.\n\nDuring some of our sacred mentoring calls, I became familiar with karmic accounts and how to deal with them. Thanks to Michael and Arielle, I learned how to deal with my sister's karmic account. My feelings of resentment shifted to pure love, blessings and good wishes. Almost every time she comes into my mind, I send her good wishes and lots of love. Her relationship with her daughter has improved and she has also forgiven herself and also, me.\n\nBest wishes to all and for anyone dealing with karmic accounts, stay faithful, patient and loving. The bond of family goes way beyond hate. Love always wins.",
    photoSrc: '/img/testimonials/Vanessa-Hernandez.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'dharma-wealth-increased',
    name: 'Taja Devi',
    isFullName: true,
    location: 'Ljubljana, Slovenia',
    role: 'Performing Artist & Vocalist',
    program: 'Certification',
    themes: ['money', 'manifestation', 'dharma', 'business'],
    length: 'short',
    pullQuote:
      'As soon as I began Dharma, my wealth increased. New opportunities, propositions, projects.',
    quote:
      "As soon as I began your program on Dharma, my wealth increased; new opportunities, propositions and projects came into my life. It is all really coming together and I am looking forward to everyday like a 'miracle magic day'… and oh how happy I am!",
    photoSrc: '/img/testimonials/taja-devipicture-optimized.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'magic-money-meaning',
    name: 'Kaleb Kosanke',
    isFullName: true,
    location: 'Idaho, USA',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['money', 'manifestation', 'business'],
    length: 'short',
    quote:
      "Thank you so much Michael and Arielle! I have been implementing what I've learned from the magic money meaning program and I am experiencing more change for the best in my life than ever before! I feel like I have breakthroughs every day now. I am so inspired from your teachings. Thank you thank you thank you for everything!",
    photoSrc: '/img/testimonials/Screen-Shot-2015-01-02-at-7.39.21-PM-optimized.png',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'sacred-business-coach',
    name: 'Christina Sullivan',
    isFullName: true,
    location: 'South Carolina, USA',
    role: 'Entrepreneur & Coach',
    program: 'Certification',
    themes: ['business', 'money', 'dharma'],
    length: 'short',
    pullQuote:
      'First paying client signed up for $1,500. The momentum continues.',
    quote:
      "I want to thank you Michael for the motivation and let you know that I just had a client sign up to work with me for 3 months for $1,500! Yay! I'm very grateful to you and God I know the momentum will continue! Much Love & Many, Many Blessings my friend.",
    photoSrc: '/img/testimonials/Screen-Shot-2014-10-22-at-4.18.06-PM-optimized.png',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'not-like-other-stuff',
    name: 'Roelien Steenkamp',
    isFullName: true,
    location: 'Simon\'s Town, South Africa',
    role: 'Founder of Nani Skin Care',
    program: 'Certification',
    themes: ['confidence', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'Your gifts are entirely relevant, unique, real and profound.',
    quote:
      "Michael and Arielle, your work is NOT like the other stuff, the other stuff which was full of empty promises and false truths; stuff I used for a day and gave up forever. Your gifts are entirely relevant, unique, real and profound. It is what my soul always knew, but could never finds words or ways of expression for.",
    photoSrc: '/img/testimonials/Rolien.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'pillars-of-truth',
    name: 'Nicolle Jones',
    isFullName: true,
    location: 'Kilauea, USA',
    role: 'Self-Employed',
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'short',
    quote:
      "Arielle and Michael are outstanding human beings in the world we share here on earth. They are sincere souls destined by integrity to grow the true light within us all. With their arrival I began to know the ever greatness of awareness and am beside myself with appreciation for the kindred spirit which exists with in and between us. With much presence, patience, and love Arielle and Michael stand as pillars of truth wisdom, and compassion. Thank you so much for your devotion and awakening the devotion in me.",
    photoSrc: '/img/testimonials/nicolle-optimized.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'genuine-care-balm',
    name: 'Lauralai Eliza',
    isFullName: true,
    location: 'Washington, USA',
    role: 'Business Coach',
    program: 'Certification',
    themes: ['community'],
    length: 'short',
    pullQuote: 'Your genuine care makes my soul happy!',
    quote:
      "You have given freely of yourself, your knowledge and your time. Every single e-mail I receive these days, including from personal friends, is someone trying to sell something, a product, a service, not one 'real' person asking, 'how are you? what do you need?' I love it that I see YOU offering what spirit has given you to serve and help others… your genuine care makes my soul happy! It is like a soothing balm that you actually care about others… really care! Thank you!",
    photoSrc: '/img/testimonials/10369604_684056758328809_5493192153290171906_n.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'freedom-meditation',
    name: 'Tawnya Raab',
    isFullName: true,
    location: 'Michigan, USA',
    role: 'Meditation listener',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'family'],
    length: 'short',
    quote:
      "Wow, these meditations are so powerful! Thank you for making them available and so affordable! My son and I were doing your Freedom Meditation this morning and experienced drifting off into a nothingness that was so pleasant we've agreed to continue it all week long. I want to express my gratitude and awe at such a wonderful meditation!",
    photoSrc: null,
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'reconnected-on-call',
    name: 'Insight Timer Listener',
    isFullName: false,
    location: null,
    role: 'Insight Timer listener',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'community'],
    length: 'short',
    quote:
      "If I am ever feeling disconnected and lose inspiration, I just have to listen to the voice of either Arielle or Michael and I feel immediately reconnected and back on track! Much love and gratitude.",
    photoSrc: null,
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'cannabis-clean',
    name: 'Awakened Academy Student',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['addiction', 'healing'],
    length: 'short',
    quote:
      "I just wanted to say thank you so much for your videos, particularly the one on how to eliminate cannabis from your life… It has helped me tremendously, only three days clean from it, but I am already feeling a noticeable change and am ready for the next shift and chapter in the evolution of my being.",
    photoSrc: null,
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'building-blocks-freedom',
    name: 'Cindy Aikman',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['spiritual-practice', 'community', 'dharma'],
    length: 'medium',
    pullQuote: 'Freedom from drudgery, freedom from our limiting beliefs, freedom from the lies that we have agreed to.',
    quote:
      "They provide the building blocks to freedom; Freedom from drudgery, freedom from our limiting beliefs, freedom from the lies that we have agreed to.\n\nAwakened Academy has changed my life so dramatically but in a quiet, loving, consistent and constant manner. Deeply kind and practical there is nowhere else you need to go, it is all here, all bases are covered and the root and most important base is covered consistently.\n\nAMAZING IS truly the word. Their service is exceptionally high and the best company you could wish to keep. Awakened Academy helps you uncover the best in you so you can stand up and make a difference in a way that brings you the sweetest joy. Life can be fulfilling and beautiful, Awakened Academy leads by example.",
    photoSrc: '/img/testimonials/Cindy-Aikman.jpg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'luminous-guiding-light',
    name: 'Pargash Giorgo',
    isFullName: true,
    location: 'Queensland, Australia',
    role: 'Entrepreneur & Author',
    program: 'Certification',
    themes: ['dharma', 'community'],
    length: 'short',
    quote:
      "You were a potent catalyst in propelling me forward and discovering my life purpose. It was easy to be myself without any fears of being misunderstood. I so appreciated your luminous, guiding light.",
    photoSrc: '/img/testimonials/pargash.jpeg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md'
  },
  {
    id: 'awakening-cancer',
    name: 'Awakened Academy Student',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Student (cancer survivor)',
    program: 'Certification',
    themes: ['healing', 'mental-health', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'Through this program, I have let go of bad habits, and set boundaries… I am different now.',
    quote:
      "In June of 2018 is when I found Awakened Academy. I would receive emails from Arielle asking how I was feeling through this process. I remember saying to myself, 'what great timing it is to be receiving these emails from Arielle.' She would say such wonderful words like, 'you are a special soul,' and that they were 'holding me in love and seeing me healed.' Change began to happen unintentionally; working through the Academy course has helped me change without trying to, it's just happening.\n\nGoing through cancer; being on the floor, got me to where I am today. Through this program, I have let go of bad habits, and set boundaries… I am different now. Moving into trust, and letting go of fear has increased my faith. This trust and faith has helped me say no to traditional therapy while focusing on eating healthy, and continuing with the course, through it all.\n\nI am no longer living in the future, I am living in the NOW, like each day is my last. No matter how dark you may see your situation there is always an optimistic side to it, change the way you see things, and your life changes.",
    photoSrc: null,
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },
  {
    id: 'living-each-day',
    name: 'Jade',
    isFullName: true,
    location: 'UK / London',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['self-image', 'family'],
    length: 'medium',
    pullQuote: 'I have completely renewed my intentions so that they are aligned with what I would like to achieve.',
    quote:
      "In a short space of time, I can see and feel positive changes already. I have completely renewed my intentions so that they are aligned with what I would like to achieve in my life. I am committed to self-care where I nourish my body through healthy foods and sleep, and I give myself permission to rest if needed. I enjoy celebrating my achievements and celebrating my life daily through activities that are soul-nourishing.\n\nI'm embracing it all, resistance, upper limits, the hero's journey, teaching as part of learning, better eating habits, more sleep, and the best part; finding more time with my children. It's just fantastic.",
    photoSrc: '/img/testimonials/20211103_205822_Jade.jpeg',
    source: '/DAN-PACKAGE/EXTRACTED-CONTENT/01-CORE-BRAND/05-reviews.md'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BATCH 2, additional verbatim quotes pulled from
  // /MICHAEL-SITE-PACKAGE/raw-html/blessings.html (the live blessings/testimonials page
  // on michaelmackintosh.com). Role-attribution style matches the original page.
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'programmer-ethical-trading',
    name: 'Lee Schaefer',
    isFullName: true,
    location: 'Germany',
    role: 'Programmer at Ethical Trading',
    program: 'Certification',
    themes: ['spiritual-practice', 'community'],
    length: 'medium',
    pullQuote: 'Truly here be magic. The new normal.',
    quote:
      "Michael and Arielle share powerful insights and crystal-clear techniques for gaining new depths of self-knowledge, clarity on one's innermost landscape of hopes and visions and the courage to take practical daily actions to tackle seemingly insurmountable challenges where necessary to ultimately pursue what they fittingly call: the path of the heart. Namely an authentic and purpose-filled life on track with the highest good for all, in harmony with the ways of compassion and true to personal values rather than inherited and solidified roles, patterns and beliefs.\n\nTruly here are super practical everyday tools, food for thought and food for the soul to put the spark back in your life. Instructions: leave no content undigested, dip into time and again like a favorite book of spells. Truly here be magic. The new normal. Truly I am grateful to Michael and Arielle. Aloha and may the wonders continue!",
    photoSrc: '/img/testimonials/Lee-schaefer.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'psychologist-artist-1',
    name: 'Shelley Hanna',
    isFullName: true,
    location: 'Alberta, Canada',
    role: 'Psychologist & Artist',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    quote:
      "Your programs and guidance have been powerful beyond belief. The meditations and wisdom shared with such heart and soul shine with the higher vibration that I go back to again and again. Thank you so much!",
    photoSrc: '/img/testimonials/mewedding11.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'healer',
    name: 'Jennifer Henry',
    isFullName: true,
    location: 'California, USA',
    role: 'Healer',
    program: 'Sacred Session Call',
    themes: ['dharma', 'community'],
    length: 'short',
    pullQuote: 'You are the real deal my friend, and it shows that you are living your dharma.',
    quote:
      "Thank you again for the time we spent on the phone. The 2 biggest issues in my life, my mission and my love, were overwhelming me, and now it's just all ok! I'm inspired and on track again! You are the real deal my friend, and it shows that you are living your dharma. You are really really good at what you do. Thank you.",
    photoSrc: '/img/testimonials/Screen-Shot-2014-10-28-at-4.04.40-PM-optimized.png',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'artist',
    name: 'Beatrice Trezevant',
    isFullName: true,
    location: 'Colorado Springs, USA',
    role: 'Artist',
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'medium',
    quote:
      "My participation in several of the courses have also contributed to my development. Not only am I more relaxed, but because my awareness has increased, so have some of the practical aspects of my life. The playful and happy attitude this young couple displays, also resonates well with me, as my approach to the world is similar. Some of their teachings have also been of great use to my son who has taken on an academic challenge. I am thankful, and highly recommend the courses.",
    photoSrc: '/img/testimonials/Beatrice.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'massage-therapist',
    name: 'Kristal Novi',
    isFullName: true,
    location: 'Kauai, USA',
    role: 'Massage Therapist',
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'short',
    quote:
      "I just want to thank you from my inner heart for inviting me on to this course. I am so infinitely grateful. You both are so wonderful. Thank you for your gifts to all. I am so excited to move forward with grace and ease enjoying the journey. Thank you, thank you thank you…. Much love, light and gratitude.",
    photoSrc: '/img/testimonials/Kristal_Novy_thumb.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'self-employed-clarity',
    name: 'Jurgen Muller',
    isFullName: true,
    location: null,
    role: 'Self-Employed (Money Magic Meaning graduate)',
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'You come to know what wants to be expressed through our character and our soul.',
    quote:
      "It helps you become charged by knowing your own values and visions, and by releasing the things that don't serve you. You come to know what wants to be expressed through our character and our soul, and why it is worth it to be in this worldly experience! Another important point of clarity is to learn we don't have to figure it out just by ourselves. We can ask our divine companion to support us and receive divine guidance (which is very relieving…).\n\nThe following personal session with Arielle was a very harmonious, warm-hearted and funny experience where I worked out a strategy for the near future to support me and keep me from falling into the same old routines.",
    photoSrc: '/img/testimonials/Jurgen_Muller.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'seo-expert',
    name: 'SEO Expert',
    isFullName: false,
    location: null,
    role: 'SEO Expert',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'business', 'manifestation'],
    length: 'medium',
    pullQuote: "I've been living in natural magic since the day I synchronistically stumbled across your brilliant work.",
    quote:
      "I've been living in natural magic since the day I synchronistically stumbled across your brilliant work. You have pushed me to grow to my full potential as I work to make a profound difference in the world. I can never find the words to thank you for the brilliance you have created.\n\nThe meditations Michael created for my company are utter perfection and I am getting goosebumps thinking about how they are going to transform so many lives. I am just so amazed and impressed by your brilliance.",
    photoSrc: null,
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'author-teacher-mentor',
    name: 'Barb Bailey',
    isFullName: true,
    location: 'Canada',
    role: 'Author, Teacher and Mentor · School of Dharma graduate',
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice', 'community'],
    length: 'medium',
    pullQuote: "Michael's ability to share his infinite knowledge always arrives at the perfect time.",
    quote:
      "I'm completely grateful for Michael and Arielle. Before I joined the School of Dharma program, I really didn't know who I was or understand what my true calling was. I had no idea what I wanted to do with myself, I had no big goals. My ability to laugh deeply and enjoy the wonders of life had been buried. All of that has changed. Michael's ability to share his infinite knowledge always arrives at the perfect time and Arielle's sweetness and compassion add such tenderness to the program. During my personal struggles there was always wisdom, love and support available to me.",
    photoSrc: null,
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'dance-movement-instructor',
    name: 'Dance/Movement Art Instructor',
    isFullName: false,
    location: null,
    role: 'Dance/Movement Art Instructor',
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'short',
    quote:
      "I'm thankful that so many people today follow their truth and stand up for a living planet. Thank you Arielle & Michael for spreading the beauty. Only by reading the words you send out, transformation occurs. It's also transformative knowing there are people like you who have this care and loving approach to life.",
    photoSrc: null,
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'entrepreneur-audios',
    name: 'Dodee Schmitt',
    isFullName: true,
    location: 'California, USA',
    role: 'Entrepreneur',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'community'],
    length: 'short',
    quote:
      "Thank you so much for all the service you bring to the physical world. I am so beyond grateful for your videos/audios I had to let you know. Thank God divine experiences led me to your audios! Sending you and your beloved ones so much love and blessings. You deserve the best of it all!",
    photoSrc: '/img/testimonials/Dodee_Schmitt.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'student-natural-healing',
    name: 'Student of Natural Healing',
    isFullName: false,
    location: null,
    role: 'Student of Natural Healing',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'healing'],
    length: 'medium',
    pullQuote: "I felt surrounded by a bubble of light and safety.",
    quote:
      "I've been using the 7 rays Chakra meditation and I have found it very powerful! I noticed on the first listen that I felt surrounded by a bubble of light and safety, I was able to completely relax and allow the meditation to work, I fell into a deep refreshing sleep. On waking I felt increased joy and happiness, and I think some wonderful chakra balancing occurred.\n\nSince then I have listened several times and for me each time I have felt a real connection with each colour ray and felt very relaxed and much less tense. Thank you again for creating it!",
    photoSrc: null,
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'entrepreneur-stars',
    name: 'Elvira Mana',
    isFullName: true,
    location: 'Pennsylvania, USA',
    role: 'Entrepreneur',
    program: 'Certification',
    themes: ['community', 'spiritual-practice', 'confidence'],
    length: 'medium',
    pullQuote: 'You are Leaders. You inspire. You empower.',
    quote:
      "Michael and Arielle you are the real deal! You are Leaders. You inspire. You empower. You are kind, generous souls. These characteristics are just a small sample of the many you demonstrate and the page is too short to list them all. The deep knowledge and wisdom that you are sharing with such love and patience is truly a gift for me and to the world. It's an honor learning from you and seeing how my world is changing as I implement your teachings. Thank you for being there for me, showing me the light and reminding me of who I am. You are my Stars!",
    photoSrc: '/img/testimonials/Elvira-optimized.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'michelle-brind-7rays',
    name: 'Michelle Brind',
    isFullName: true,
    location: 'United Kingdom',
    role: 'Student of Natural Healing',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'healing', 'sleep'],
    length: 'short',
    pullQuote: 'It really is very beautiful and powerful.',
    quote:
      "I've been using the 7 Rays Chakra meditation and I have found it very powerful. I noticed on the first listen that I felt surrounded by a bubble of light and safety. I was able to completely relax and allow the meditation to work, I fell into a deep refreshing sleep. On waking I felt increased joy and happiness, and I think some wonderful chakra balancing occurred. Since then I have listened several times, and each time I have felt a real connection with each colour ray and felt very relaxed and much less tense. Thank you again for creating it.",
    photoSrc: '/img/testimonials/Michelle_Brind.jpg',
    source: 'WP /awakened-academy-reviews/, verbatim'
  },
  {
    id: 'inner-light-glows',
    name: 'Shelley Hanna',
    isFullName: true,
    location: 'Alberta, Canada',
    role: 'Psychologist & Artist',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'self-image', 'confidence'],
    length: 'short',
    pullQuote: 'I found a path to myself, my inner light that glows so brightly that there is no stopping me now.',
    quote:
      "I found a path to myself, my inner light that glows so brightly that there is no stopping me now! The meditations and wisdom shared with such heart and soul shine with the higher vibration that I go back to again and again. Thank you so much!",
    photoSrc: '/img/testimonials/mewedding1.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'birthright-gratitude',
    name: 'Jean-Yves Durisch',
    isFullName: true,
    location: 'Waldkirch, Switzerland',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    quote:
      "Thank you for being a conduit to peace, freedom and happiness to enlightenment and reunification of the true nature that bind us. Thank you for the awareness of the breath, the meditations, the prayers and the tools you offer to the world. Thank you for teaching us how to claim our birthright. This is all I ever needed to hear and it confirmed my true inherit beliefs.",
    photoSrc: '/img/testimonials/jean-yves-optimized.jpg',
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'fantastic-clarity',
    name: 'Kevin Voisey',
    isFullName: true,
    location: 'Los Angeles, USA',
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['spiritual-practice'],
    length: 'short',
    quote:
      "I feel fantastic! I want to do them all over again so I have a very clear understanding. Thank you!",
    photoSrc: null,
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'landscaper-drummer',
    name: 'Landscaper & Drummer',
    isFullName: false,
    location: null,
    role: 'Landscaper & Drummer',
    program: 'Certification',
    themes: ['dharma', 'business'],
    length: 'short',
    quote:
      "As soon as I began the Dharma program, opportunities started showing up. It feels less like work and more like the universe is finally returning my own energy back to me.",
    photoSrc: null,
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'transformative-words',
    name: 'Awakened Academy Reader',
    isFullName: false,
    location: null,
    role: 'Email subscriber',
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'Only by reading the words you send out, transformation occurs.',
    quote:
      "Only by reading the words you send out, transformation occurs. It's also transformative knowing there are people like you who have this care and loving approach to life.",
    photoSrc: null,
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },
  {
    id: 'priceless-gift-meditations',
    name: 'Meditation Listener',
    isFullName: false,
    location: null,
    role: 'Meditation Listener',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'community'],
    length: 'short',
    quote:
      "Thank you for the priceless gift of your beautiful meditations, videos, courses, and books! Thank you most of all for being such beacons of love and light, and for sharing your wisdom and gifts with the world.",
    photoSrc: null,
    source: '/MICHAEL-SITE-PACKAGE/raw-html/blessings.html'
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BATCH 3, sourced live from Google Drive ("Testimonials for webinar" file
  // in the Testimonial Video folder) and the AA Gmail inbox.
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'shelley-hanna',
    name: 'Shelley Hanna',
    isFullName: true,
    location: 'Alberta, Canada',
    role: 'Psychologist and Artist',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'self-image', 'spiritual-practice', 'confidence'],
    length: 'medium',
    pullQuote: 'I found a path to myself, my inner light that glows so brightly that there is no stopping me now.',
    quote:
      "Your programs and guidance have been powerful beyond belief. I found a path to myself, my inner light that glows so brightly that there is no stopping me now! The meditations and wisdom shared with such heart and soul shine with the higher vibration that I go back to again and again. Thank you so much!",
    photoSrc: null,
    source: '/Google Drive/Testimonial Video/Testimonials for webinar txt.txt'
  },
  {
    id: 'lauralai-eliza',
    name: 'Lauralai Eliza',
    isFullName: true,
    location: 'Washington, USA',
    role: 'Business Coach',
    program: 'Certification',
    themes: ['business', 'confidence', 'community'],
    length: 'medium',
    pullQuote: 'Your program blew my mind. Within days I was on my path.',
    quote:
      "Your program blew my mind. Within days I was on my path. I love that your genuine care makes my soul happy! It is like a soothing balm that you actually care about others… really care! Thank you!",
    photoSrc: null,
    source: '/Google Drive/Testimonial Video/Testimonials for webinar txt.txt'
  },
  {
    id: 'rachel-must-do',
    name: 'Rachel',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['confidence', 'community', 'dharma'],
    length: 'short',
    pullQuote: 'This is a MUST-DO program for anyone.',
    quote:
      "This is a MUST-DO program for anyone. Joining the Awakened Academy program was one of the best decisions I have made. Michael and Arielle are both loving, supportive, knowledgeable and passionate about what they do. They have helped me gain my confidence to move forward towards my dreams even when everyone else thinks I'm crazy.",
    photoSrc: null,
    source: '/Google Drive/Testimonial Video/Testimonials for webinar txt.txt'
  },
  {
    id: 'coaching-abundance-4500',
    name: 'Awakened Academy Graduate',
    isFullName: false,
    location: null,
    role: 'Certified Spiritual Life Coach',
    program: 'Certification',
    themes: ['dharma', 'business', 'community', 'money'],
    length: 'long',
    pullQuote:
      'Touched 4,500 lives through my coaching and meditation. I\'m financially FREE.',
    quote:
      "Two years ago I dropped out of university when the Awakened Academy crossed my path… Currently I have touched the lives of over 4,500 people through my coaching and meditation practice.\n\nI realized that when I inspired 1 person to feel better, that started a chain reaction: this person would touch the life of another person, who'd touch the life of another person, etc.\n\nAnd keeping this in mind, many beautiful experiences crossed my path: I was living in 'coaching abundance', idk if that's a word but from now on it is. Life became like a vacation, and I felt financially FREE.\n\nI'm noticing there's more people like me stepping up; people who wish to make the world a better place by touching the lives of others. On a daily basis I talk to many spiritual coaches, healers, mediums, and other beautiful souls. Together we make the world a more beautiful place.",
    photoSrc: null,
    source: '/Google Drive/Testimonial Video/Testimonials for webinar txt.txt'
  },
  {
    id: 'sunita-goldstein',
    name: 'Sunita Goldstein',
    isFullName: true,
    location: null,
    role: 'Founder, Epic Retreats',
    program: 'Certification',
    themes: ['business', 'confidence', 'spiritual-practice'],
    length: 'medium',
    pullQuote:
      'My mindset is completely changed since reading and listening. Founder of Epic Retreats.',
    quote:
      "I am absolutely loving the course. I'm currently at the Hero's Journey section and I'm reading The Big Leap (per your recommendation). My mindset is completely changed since reading the book and listening to the audio. I absolutely love it.\n\nMy goal is to complete the course in 2024 and start the authors book writing course.",
    photoSrc: null,
    source: '/Gmail inbox, sunitagoldstein05@gmail.com'
  },
  {
    id: 'zoe-goddard',
    name: 'Zoe Goddard',
    isFullName: true,
    location: null,
    role: 'Awakened Meditation Student',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'It is profound and I feel like I am embodying each lesson effortlessly.',
    quote:
      "I have been absolutely loving the meditation course. Thank you Michael, it is profound and I feel like I am embodying each lesson effortlessly.",
    photoSrc: null,
    source: '/Gmail inbox, zoelouisegoddard@gmail.com'
  },
  {
    id: 'felicity-sebina',
    name: 'Felicity Sebina',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['spiritual-practice', 'confidence', 'self-image'],
    length: 'medium',
    pullQuote:
      'I am speechless. Transformation without completion keeps you stuck, aware but stuck. That hit hard.',
    quote:
      "Thank you so much for your beautiful and profound message. I really appreciate your sincerity, vulnerability, and authenticity, something that is rare and missing in today's world of spiritual teachers and coaches.\n\nThe line that hit me: 'Transformation without completion and implementation keeps you in the same place, aware but stuck.' I am speechless. Thank you.",
    photoSrc: null,
    source: '/Gmail inbox, felirabolo@gmail.com'
  },
  {
    id: 'cindy-aikman-shift',
    name: 'Cindy Aikman',
    isFullName: true,
    location: null,
    role: 'Awakened Meditation Student',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice', 'business'],
    length: 'short',
    pullQuote:
      'The AA content is amazing, changing everything on every level.',
    quote:
      "The AA content is amazing, changing everything on every level. Just finished the True Coaching with Deep Love session, wow, it shifted how I taught this morning. Touches every interaction.",
    photoSrc: '/img/testimonials/Cindy-Aikman.jpg',
    source: '/Gmail inbox, cindyaikman@gmail.com'
  },
  {
    id: 'sara-sweden',
    name: 'Sara',
    isFullName: false,
    location: 'Sweden',
    role: 'Dharma Research & Awakened Author Student',
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice', 'community'],
    length: 'short',
    quote:
      "Yes, I am so grateful for this course. It was my pleasure, thank you for everything. I just completed Mission 3.5 Enchanting Offer Coaching and I'm now in the Hero Sessions section. Every step is unfolding beautifully.",
    photoSrc: null,
    source: '/Gmail inbox, Sara (Awakened Author student)'
  },
  {
    id: 'ara-byrd-divine',
    name: 'Ara Byrd',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['healing', 'self-image', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'Thank you for your beautiful words of encouragement and support.',
    quote:
      "Blessings to Michael. Thank you for your beautiful words of encouragement and support. I have spent a lot of my earth time in secret resentment, fear, heart pain, regret and so on. At the same time I have been given so much through this program, and I am learning to let go of all that no longer serves me and step into who I really am.",
    photoSrc: null,
    source: '/Gmail inbox, arabyrd@yahoo.com'
  },
  {
    id: 'kanchan-arya',
    name: 'Kanchan Arya',
    isFullName: true,
    location: 'India',
    role: 'Awakened Meditation & One in a Billion Student',
    program: 'Coaching Masterclass',
    themes: ['meditation', 'community', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'The videos in the course are really creative and impactful, really enjoying watching them.',
    quote:
      "The videos in the course are really creative and impactful, really enjoying watching them. Many blessings. I truly value your guidance and support and will do my best. Sending lots of love and light.",
    photoSrc: null,
    source: '/Gmail inbox, kanchan.arya80@gmail.com'
  },
  {
    id: 'darcey-montoya',
    name: 'Darcey Montoya',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['confidence', 'spiritual-practice', 'community'],
    length: 'medium',
    pullQuote:
      'I woke up with so much more clarity. Your support means the world.',
    quote:
      "Michael, thank you so much for it all. Your support means the world and I'm so very grateful to know you see me and are there to help. I'm pushing through. I woke up this morning with so much more clarity. The trauma healing series resonated with me so deeply.",
    photoSrc: null,
    source: '/Gmail inbox, darcey.montoya@gmail.com'
  },
  {
    id: 'gabriele-holt',
    name: 'Gabriele Holt',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['community', 'spiritual-practice', 'dharma'],
    length: 'short',
    pullQuote: 'I am very grateful to be part of my spiritual soul tribe family with Awakened Academy.',
    quote:
      "Thank you, Michael and Arielle for the email. I am very grateful to be part of my spiritual soul tribe family with Awakened Academy. That is how much I feel for Awakened Academy and all the love.",
    photoSrc: null,
    source: '/Gmail inbox, gabrieleholt14@gmail.com'
  },
  {
    id: 'mandy-shastri',
    name: 'Mandy Shastri',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'short',
    quote:
      "I feel blessed to have such support and divine souls around me. It takes collective positive energy to raise the vibration on the planet and release the energetic blockages in our lives. Thank you for being a beacon for so many of us.",
    photoSrc: null,
    source: '/Gmail inbox, mandyshastri.2018@gmail.com'
  },
  {
    id: 'angelica-nick-good',
    name: 'Angelica',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Community Member',
    program: 'Certification',
    themes: ['community', 'grief', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'He was truly a golden-hearted soul.',
    quote:
      "I wanted to reach out to you with love and deep appreciation for your dear friend Nick Good, and offer my compassion for the loss you've experienced. He was truly a golden-hearted soul. I'm so grateful you've kept his teachings alive in the way you bring this work to the world.",
    photoSrc: null,
    source: '/Gmail inbox, gellybeans@rocketmail.com'
  },
  {
    id: 'malika-ali',
    name: 'Malika Ali',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['self-image', 'spiritual-practice'],
    length: 'short',
    quote:
      "It was extremely refreshing to finish this module today. This session was just what I needed to get back into the flow of my Awakened journey.",
    photoSrc: null,
    source: '/Gmail inbox, malika.alexander0@gmail.com'
  },
  {
    id: 'ivon-portellez',
    name: 'Ivon Portellez',
    isFullName: true,
    location: null,
    role: 'Level 2 Spiritual Coach Certified',
    program: 'Certification',
    themes: ['community', 'confidence', 'dharma'],
    length: 'short',
    pullQuote: "I'm truly grateful, thankful.",
    quote:
      "I am ready to receive my Level 2 Certification Certificate. I'm truly grateful, thankful, and will continue on to Level 3. Much love and gratitude.",
    photoSrc: null,
    source: '/Gmail inbox, ivon.portellez@gmail.com'
  },
  {
    id: 'sabera-uplifting',
    name: 'Sabera',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Community Member',
    program: 'Certification',
    themes: ['community'],
    length: 'short',
    quote:
      "Thank you from the bottom of my heart for this uplifting message. Every time I read your message it absolutely warms my heart. Blessings to you and your family.",
    photoSrc: null,
    source: '/Gmail inbox, transformationalgrowth3@gmail.com'
  },
  {
    id: 'beatrice-triceyduarte',
    name: 'Beatrice',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'short',
    pullQuote: "I'm forever grateful, truly blessed to be a part of a community that is so special to my heart, body, and Soul.",
    quote:
      "Namaste. Thank you, beautiful Souls. I'm forever grateful, truly blessed to be a part of a community that is so special to my heart, body, and Soul. Thank you, Academy.",
    photoSrc: null,
    source: '/Gmail inbox, triceyduarte@gmail.com'
  },
  {
    id: 'shaunie-hoskins',
    name: 'Shaunie Hoskins',
    isFullName: true,
    location: null,
    role: 'Coaching Call Participant',
    program: 'Sacred Session Call',
    themes: ['community', 'dharma'],
    length: 'short',
    quote:
      "Thank you so much for sharing your time and wisdom with me. Your energy is so lovely and uplifting. I look forward to listening to the book and podcast you sent. Many blessings.",
    photoSrc: null,
    source: '/Gmail inbox, shaunie.hoskins@gmail.com'
  },
  {
    id: 'lisa-rohrbough',
    name: 'Lisa Rohrbough',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Community Member',
    program: 'Certification',
    themes: ['community'],
    length: 'short',
    quote:
      "Thank you so very much, Arielle. I am grateful to hear from you. Your kind words are most what I need now.",
    photoSrc: null,
    source: '/Gmail inbox, lrohrbough999@gmail.com'
  },
  // ───────────────────────────────────────────────────────────────────────────
  // NEW BATCH, added 2026-05-19 from MASTER-TESTIMONIALS.xlsx (Michael Direct Paste)
  // 68 entries · 4 feature · 2 long · 27 medium · 35 short
  // 3 narrative-framed profiles flagged in source field (Mick Rutjes, Parish Hattub, Nikki Autism Superheroes)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'mick-rutjes',
    name: 'Mick Rutjes',
    isFullName: true,
    location: 'Netherlands (location-free, travels world)',
    role: 'Certified Spiritual Life Coach, Retreat Leader, Podcaster',
    program: 'Certification',
    themes: ['career-change', 'business', 'dharma', 'confidence'],
    length: 'feature',
    pullQuote: 'Quit my psychology degree at 19. Everyone said I was crazy. Built a coaching practice serving 100+ clients worldwide and traveled to 27 countries.',
    quote:
      "Where he was: A 19-year-old psychology student in the Netherlands following the \"safe\" path everyone expected. Passionate about spirituality and personal growth but terrified of being different. Hiding his dreams to fit in. Feeling suffocated by the conventional path but scared to walk alone.\n\nThe bold decision: Mick quit his psychology degree at 19 to follow his calling. Everyone said he was crazy. He joined Awakened Academy and became a Certified Spiritual Life Coach, studying while traveling the world, building his practice from scratch with nothing but courage.\n\nWhere he is now:\n• Co-hosts transformational 6-day retreats in stunning locations like Tuscany, Italy\n• Leads breath work experiences guiding 25+ participants through week-long retreats\n• Built a thriving coaching practice serving 100+ clients worldwide\n• Created two successful podcasts with 7,000+ listeners across 24 countries\n• Traveled to 27 countries while building his freedom-based business\n• Lives and works from wherever calls to him, complete location freedom\n\nFrom a retreat participant: \"I loved attending the Self Expression Retreat hosted by Mick. The location was beautiful. I especially loved that each participant had an opportunity to express themselves. I highly recommend this retreat if you are looking for connection, personal growth and to experience new things!\"",
    photoSrc: null,
    outcomeTag: '100+ clients, 27 countries, 7,000+ podcast listeners',
    source: '/Michael pasted 2026-05-19 (narrative framing, verify voice)'
  },
  {
    id: 'parish-hattub',
    name: 'Parish Hattub',
    isFullName: true,
    location: 'Marbella, Spain (formerly Roswell, Georgia)',
    role: 'Certified Spiritual Life Coach, Retreat Leader & Founder, International Interfaith Women\'s Group',
    program: 'Certification',
    themes: ['career-change', 'business', 'dharma', 'healing', 'relationships', 'family'],
    length: 'feature',
    pullQuote: 'When we pour back into ourselves, we can be present to serve others with love, compassion, and joy.',
    quote:
      "Where she was: A successful realtor in Roswell, Georgia for 20 years. Three children. Married. Double survivor of domestic abuse. Leading a small women's group, but knowing she was meant for something more, something that could heal others at a deeper level.\n\nThe turning point: Parish joined Awakened Academy and became a Certified Spiritual Life Coach. She discovered how to transform her pain into purpose and turn her calling into a thriving business.\n\nWhere she is now:\n• Leading sold-out spiritual retreats in breathtaking locations like Sedona and Marbella, Spain\n• Founder of The International Interfaith Women's Group that grew from 8 women to over 1,000 members\n• Moved her entire family to Marbella, Spain to live as world citizens while running her retreat business\n• Traveling the world guiding transformational experiences across China, Bali, Austria, Germany, Italy, Israel, and beyond\n• Living her divine purpose while providing abundantly for her family\n\nIn her words: \"When we pour back into ourselves, we can be present to serve others with love, compassion, and joy.\"",
    photoSrc: null,
    outcomeTag: 'Sold-out retreats in Sedona & Marbella; 1,000+ women\'s group; moved family to Spain',
    source: '/Michael pasted 2026-05-19 (narrative framing, verify voice)'
  },
  {
    id: 'claudia-figueroa',
    name: 'Claudia Figueroa',
    isFullName: true,
    location: null,
    role: null,
    program: 'Softly Powerful',
    themes: ['self-image', 'confidence', 'relationships'],
    length: 'medium',
    pullQuote: 'Just writing to thank you for the great audio about introverts.',
    quote:
      "Just writing to thank you for the great audio about introverts. I am an introvert and I've always felt like there was something wrong with me, feeling drained at public places, not being interested in parties or bars, and just wanting to be at home cooking for my husband or to be alone with a book. When you said that introverts lose energy when there's a lot of people around, I literally said 'SEE, I'M NOT CRAZY!' out loud. I resonated a lot with this audio, and it made me feel A LOT better about me being just me, quiet little me!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'joan',
    name: 'Joan',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['spiritual-practice', 'money', 'self-image'],
    length: 'medium',
    pullQuote: 'I loved the exercise on the 21 days of giving and receiving.',
    quote:
      "I loved the exercise on the 21 days of giving and receiving. It was very powerful. I did them separately. 21 days of giving and then 21 days of receiving. It has been a life changer. I have voice recorded the Incantations and can play them anytime I choose. I have learned so much. Especially receiving abundantly. I am a recovering people pleaser so giving has always come easy. I realize now that it came at a price. Receiving has been difficult for me. Feeling not worthy, good enough etc. I now feel the beautiful flow of giving and receiving. It is like a dance. This practice has brought me abundance and joy, and freedom.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'samuel-alder',
    name: 'Samuel Alder',
    isFullName: true,
    location: null,
    role: null,
    program: 'Magic Money Course',
    themes: ['self-image', 'confidence', 'relationships'],
    length: 'medium',
    pullQuote: 'I\'ve been doing a lot of battling with my shadow and really cleaning house.',
    quote:
      "I've been doing a lot of battling with my shadow and really cleaning house. I've kicked out so many unconscious negative habits and patterns, and I feel freer and with more time than ever before! I woke up at 7 am this morning, charged, a little fearful, and then I turned the fear into energy and excitement, as spoken about in the 1st week's call, got on with creating some art, writing a mental map out in my notebook, exercising, and taking care of business. The other thing that's been giving me a bit of a 'Turbo Boost' is that Christine (my beloved) has been in Brazil for almost 20 days, and I want to be the man she deserves, not just inwardly, but outwardly acting like it also, consistently, when she returns.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'kristal-novy',
    name: 'Kristal Novy',
    isFullName: true,
    location: 'Kauai, HI, USA',
    role: null,
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'Just want to thank you again so much for all you both are and do.',
    quote:
      "Just want to thank you again so much for all you both are and do. I am implementing what I can and finding myself backsliding a bit as my job is busier and I need to carve more time. The things I have implemented in creating the best day ever are truly enriching my life and I have made some progress in moving in the direction of my dream and I am living my dharma. It is an ongoing process, yes, eternal.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'leanna-bliss-pillar-1',
    name: 'Leanna Bliss (Pillar 1)',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'career-change', 'confidence'],
    length: 'short',
    pullQuote: 'I used to struggle with knowing my purpose, feeling like I was good at many things but lacking clarity on which direction to take.',
    quote:
      "I used to struggle with knowing my purpose, feeling like I was good at many things but lacking clarity on which direction to take. Awakened Academy helped me focus and understand my true calling. Their simple yet powerful guidance helped me align with my soul's purpose, and now I live it every day with confidence and excitement.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'nikki-autism-superheroes-author',
    name: 'Nikki (Autism Superheroes author)',
    isFullName: true,
    location: null,
    role: 'Autism Mom turned Published Author with Book Deal',
    program: 'Certification',
    themes: ['career-change', 'business', 'dharma', 'family'],
    length: 'feature',
    pullQuote: '42 days. From idea to book deal.',
    quote:
      "Where she was: Nikki had an autistic son and couldn't find the help she needed that was truly effective. She felt alone, frustrated, and wished there was a better resource for families like hers.\n\nWhat happened: Through her own journey helping her son, Nikki discovered powerful approaches that actually worked. She joined Awakened Academy knowing she needed to share what she'd learned with other autism families.\n\nUsing our 21-Day Challenge method, Nikki wrote her entire book, Autism Superheroes, in just 21 days.\n\nThen she did another 21-Day Challenge and secured a traditional publishing deal.\n\n42 days. From idea to book deal.\n\nWhere she is now:\n- Published author of Autism Superheroes\n- Secured traditional publishing deal\n- Doing book signings and helping thousands of autism families\n- Established as a trusted voice for autism parents\n- Her book is the resource she wished existed when she started\n\nThe book she needed didn't exist, so she wrote it. And now it's helping families around the world.",
    photoSrc: null,
    outcomeTag: 'Idea to book deal in 42 days',
    source: '/Michael pasted 2026-05-19 (narrative framing, verify voice)'
  },
  {
    id: 'anonymous-archangel-michael',
    name: 'Anonymous (Archangel Michael)',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'manifestation', 'money'],
    length: 'long',
    pullQuote: 'It is one year since I found your youtube videos, funny, while I was looking for information about a Hawaii medical school for my job.',
    quote:
      "It is one year since I found your youtube videos, funny, while I was looking for information about a Hawaii medical school for my job. I found your living in magic videos that gave me more than any school and job in the world ever could. As soon as I entered into School of Dharma Magic Money Meaning the wealth thermometer has increased in my world outside, and it is happening ever since, opportunities, propositions, projects, it is all really coming together and I am looking forward to everyday like a miracle magic day. Very clearly I know now for sure that my ground is set, I have landed at perfect timing and place to realize and manifest all the treasures I carry, and I cannot wait to go travel all over the world to share all that I am. I am alive, awake and aware, and every second is precious. To realize I am only 28 yrs old and that I am only getting started brings tears to my eyes out of joy and happiness. Loving myself is the best cure and medicine I ever gave myself.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'aysha-barham',
    name: 'Aysha Barham',
    isFullName: true,
    location: 'Thailand (traveling)',
    role: null,
    program: 'Certification',
    themes: ['dharma', 'manifestation', 'community'],
    length: 'medium',
    pullQuote: 'My spiritual journey has been truly magical, my life has completely transformed, and I\'m so grateful for everything.',
    quote:
      "My spiritual journey has been truly magical, my life has completely transformed, and I'm so grateful for everything. I'm currently in Thailand, experiencing a life I once never thought was possible. Thank you so much for believing in me, it means more than I can express. I did take a little break from studying while I've been here, but I'm really looking forward to diving back into it when I get home. Sending love to you all and many blessings.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'chantal',
    name: 'Chantal',
    isFullName: false,
    location: null,
    role: null,
    program: 'SuperHero Training',
    themes: ['career-change', 'manifestation', 'business'],
    length: 'medium',
    pullQuote: 'Ever since I took the training I ended up getting an opportunity to apply to another department at my work, I needed something to get me off this team and there the opportunity came.',
    quote:
      "Ever since I took the training I ended up getting an opportunity to apply to another department at my work, I needed something to get me off this team and there the opportunity came. I interviewed for the position and am now waiting to hear back if I got the position. This stuff really does work. I haven't read it all but I believe being connected to the energy of this system is powerful. I am telling you, I discovered your content about 4 weeks back and changes ARE coming my way.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'coyote',
    name: 'Coyote',
    isFullName: false,
    location: 'Hawaii',
    role: null,
    program: 'SuperHero Training',
    themes: ['dharma', 'manifestation', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'Your words radiate love, and I am incredibly grateful to have stumbled upon the gifts you have laid out upon the path.',
    quote:
      "The work you are doing has helped me tremendously in finding and maintaining my true center and to understand that there is more to this reality than what is being so cleverly thrown upon us all the time. Your words radiate love, and I am incredibly grateful to have stumbled upon the gifts you have laid out upon the path. Earlier this year I created the goal of being in Hawaii with a studio to blow glass and a farm of organic sustainable foods working in harmony with nature and the allies that have joined me on this path. I am working everyday to make these dreams a reality, and it seems as though time is speeding up.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'cristina-sullivan',
    name: 'Cristina Sullivan',
    isFullName: true,
    location: 'South Carolina, USA',
    role: 'Entrepreneur & Spiritual Life Coach',
    program: 'Certification',
    themes: ['career-change', 'business', 'money', 'dharma'],
    length: 'feature',
    pullQuote: 'I just had a client sign up to work with me for $1500!!!',
    quote:
      "I truly have so much gratitude in my heart for you, you are amazing!! I want to thank you for the motivation and let you know that I just had a client sign up to work with me for $1500!!! Yay!!! I'm very grateful to you and God I know the momentum will continue!! Much Love & Many, Many Blessings my friend ;-)).",
    photoSrc: null,
    outcomeTag: 'Signed $1500 client',
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'heath',
    name: 'Heath',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'self-image'],
    length: 'medium',
    pullQuote: 'I discovered my uniqueness was always right in front of me, and I didn\'t have to go far to find it.',
    quote:
      "I discovered my uniqueness was always right in front of me, and I didn't have to go far to find it. Even though I took the long-way round to reach this point, the insight gained is invaluable. I also have learned I am right where I am supposed to be on my timeline, where I used to think I 'missed the boat' for the vision I was given for my life, I've since started to realize, I've been right on schedule this entire time.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'michelle-7-rays',
    name: 'Michelle (7 Rays)',
    isFullName: true,
    location: null,
    role: null,
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice', 'healing'],
    length: 'medium',
    pullQuote: 'I\'ve been using the 7 rays chakra meditation for the last week and I have found it very powerful.',
    quote:
      "I've been using the 7 rays chakra meditation for the last week and I have found it very powerful. I noticed on the first listen that I felt surrounded by a bubble of light and safety, I was able to completely relax and allow the meditation to work, I fell into a deep refreshing sleep. On waking I felt increased joy and happiness, I think some wonderful chakra balancing occurred. Since then I have listened several times and for me each time I have felt a real connection with each colour ray and felt very relaxed and much lighter. It really is very beautiful and powerful.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'mike-manga-artist',
    name: 'Mike (manga artist)',
    isFullName: true,
    location: null,
    role: null,
    program: 'Softly Powerful',
    themes: ['self-image', 'dharma', 'confidence', 'family'],
    length: 'medium',
    pullQuote: 'I was recently questioning my nature of being an introvert.',
    quote:
      "I was recently questioning my nature of being an introvert. I never had any incentive to go outside and meet new people outside of school. Yet I realize how important it is for someone like me who will eventually have to deal with people since I aim to become a successful manga/comic artist someday. My mother has been trying to push me to go out and meet people. During all of this, I miraculously came across your Softly Powerful course and thanks to it, it helped me reaffirm my place in the universe and to continue my thoughtful path, instead of letting the various pressures shove me into unwanted territory.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'paul',
    name: 'Paul',
    isFullName: false,
    location: null,
    role: null,
    program: 'Eternal Freedom Course',
    themes: ['spiritual-practice', 'confidence'],
    length: 'medium',
    pullQuote: 'The magic of how things change after you go through \'The Purifier\'.',
    quote:
      "Funny sending you this Letter. I'm a Changed Person. The magic of how things change after you go through 'The Purifier'. Yes. You did a good job on this course. Thanks for being Authentic and Sharing Your Wisdom. Knowing your makeshift home made model for the relationship of the Mind, Physical world, 3rd eye, subconscious, and purifier/Companion. It's a great map of reality. Finally getting to know the relationship. Being an empty straw of wheat, and the Purifier as the Fulfillment is now a useful identity I use. Getting to experience Real happiness. Your wording throughout really helped my progress. You've answered gaps in my search for knowledge.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'wendy-mackinnon',
    name: 'Wendy MacKinnon',
    isFullName: true,
    location: null,
    role: null,
    program: 'Book Review',
    themes: ['self-image', 'healing', 'dharma'],
    length: 'medium',
    pullQuote: 'I began your book Friday morning.',
    quote:
      "I began your book Friday morning. On page 5, the first paragraph completely got me. End of page 4: 'And the honest truth is, no matter how hard you worked, one day your body will die and you'll lose it all.' Page 5: 'Everything you worked for will be taken away and all you will be left with is THE STATE OF BEING YOU USED TO CREATE YOUR LIFE.' I began sobbing! This was so profound to me. The perfect moment to read this. I thought, my God, I can and will choose my state of being and create my best life. That, for years, I've been in a trance, a state of dread, fear, lack. A horrifying space to be in. I've felt caged, like my Soul wants to bust out. Seriously. As if I've been in prison.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'angeli-sivaraman',
    name: 'Angeli Sivaraman',
    isFullName: true,
    location: null,
    role: 'Book Writing Course student',
    program: 'Certification',
    themes: ['dharma', 'business', 'career-change'],
    length: 'short',
    pullQuote: 'Thank you so much for your kind words of encouragement!',
    quote:
      "Thank you so much for your kind words of encouragement! I am so grateful to be supported by you! Thank you for affirming my title, that means so much to me and I kinda needed to hear that! The book writing course in Awakened Academy is gold! I knew one day I'd write a book, but I had no idea it would be now!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'christine-j-mccaig',
    name: 'Christine J McCaig',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['business', 'confidence'],
    length: 'short',
    pullQuote: 'My personal business has made significant head way as a result and I am feeling much more confident in my own abilities.',
    quote:
      "My personal business has made significant head way as a result and I am feeling much more confident in my own abilities.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'giulia',
    name: 'Giulia',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'self-image'],
    length: 'short',
    pullQuote: 'I learned what I truly desire and my hidden skills as well, some are still developing, some are new but they are inside of myself ready to come out fully.',
    quote:
      "I learned what I truly desire and my hidden skills as well, some are still developing, some are new but they are inside of myself ready to come out fully. Everything has its own timing and day by day I am becoming who I want to be and what I want to leave behind as well. I am so ready to help and support people throughout their journey!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'grisel',
    name: 'Grisel',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['healing', 'relationships', 'family'],
    length: 'short',
    pullQuote: 'I have this friend who is a childhood friend for about 48 years now.',
    quote:
      "I have this friend who is a childhood friend for about 48 years now. We have both gone through some horrific things and always leaned on each other. Ever since I started with Awakened Academy, I have been able to go deeper within myself on how to cope with a lot of what I went through. So, I have taken all that I have learned so far, to help myself and my really good friend. It is helping us go deep within ourselves to heal.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'jeanyves',
    name: 'Jean-Yves',
    isFullName: false,
    location: null,
    role: null,
    program: 'SuperHero Training',
    themes: ['spiritual-practice', 'dharma'],
    length: 'short',
    pullQuote: 'As the emissaries of our new birth I felt there is a mission I had to learn, the up\'s and down\'s to conquer my world and share these magnificent heroic journeys.',
    quote:
      "As the emissaries of our new birth I felt there is a mission I had to learn, the up's and down's to conquer my world and share these magnificent heroic journeys. Now I am, that I am. Your courage and kindness, your smile and open hearts made my world a better place. Thank you for being a conduit to peace freedom and happiness to enlightenment and reunification of the true nature that bind us.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'johanna',
    name: 'Johanna',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['healing', 'dharma'],
    length: 'short',
    pullQuote: 'I received so much clarity in this module.',
    quote:
      "I received so much clarity in this module. I learned that I went through some of the traumas I did, and overcame, so I can help others overcome traumas as well! I found my light, and can use my story to help others see their true beauty, and be their authentic selves.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'meagan',
    name: 'Meagan',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'I\'ve learned the importance of keeping my spiritual hygiene in check in my day to day practices by remaining present, positive and true to myself and what I am feeling.',
    quote:
      "I've learned the importance of keeping my spiritual hygiene in check in my day to day practices by remaining present, positive and true to myself and what I am feeling.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'melani-anne',
    name: 'Melani Anne',
    isFullName: true,
    location: 'Austin, TX',
    role: null,
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'Incredibly supportive, healing, informative, hilarious & beautiful!',
    quote:
      "This video is incredible!!! Incredibly supportive, healing, informative, hilarious & beautiful! I am so grateful for you, your light & sharing of your experience & serving others. I feel a soul brother in you (& soul sister in your beloved Arielle) & my soul is sooooo excited to come be with you when the time is right!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'ogaana-shoug',
    name: 'Ogaana Shoug',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'This was a journey within the journey!',
    quote:
      "This was a journey within the journey! I learned that this is my time to blossom. That everything in my life is going according to Divine Plan. I have so much more faith now. And I can see the wisdom through the lessons! I could also see patterns and cycles that come and go through the 3 years periods! The timeline meditation was AMAZING, scary to take that deep of a dive but amazing revelations came through.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'rossella-mannarini',
    name: 'Rossella Mannarini',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'self-image'],
    length: 'short',
    pullQuote: 'I had also a couple of Ah ha moments where I reminded myself what I love doing the most, so I started making music again.',
    quote:
      "I have learned so much. I had also a couple of Ah ha moments where I reminded myself what I love doing the most, so I started making music again.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'shanequa',
    name: 'Shanequa',
    isFullName: false,
    location: null,
    role: null,
    program: 'Sacred Session Call',
    themes: ['spiritual-practice', 'meditation'],
    length: 'short',
    pullQuote: 'I loved the meditation today😊 I wanted to share that I see a white light surrounding you.',
    quote:
      "I loved the meditation today😊 I wanted to share that I see a white light surrounding you. I've never seen it before, ever! I'm getting stronger!! Thank you.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'tarelle-freeman-pillar-1',
    name: 'Tarelle Freeman (Pillar 1)',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'self-image'],
    length: 'short',
    pullQuote: 'As I connected all the dots I learned that my choice of careers and moments have all been aligned with purpose so that I gained the knowledge needed to be align',
    quote:
      "As I connected all the dots I learned that my choice of careers and moments have all been aligned with purpose so that I gained the knowledge needed to be aligned with the path I was chosen for at this moment.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'anonymous-excelsior-fellowship',
    name: 'Anonymous (Excelsior Fellowship)',
    isFullName: true,
    location: null,
    role: 'Manifestation story, Magic Money course graduate',
    program: 'Certification',
    themes: ['manifestation', 'money', 'dharma', 'career-change', 'business'],
    length: 'long',
    pullQuote: 'When I started the Magic Money and Meaning course I had two visions I had been wanting to achieve to get a 4.0, attract 10,000, and to be an Excelsior Fellow.',
    quote:
      "When I started the Magic Money and Meaning course I had two visions I had been wanting to achieve to get a 4.0, attract 10,000, and to be an Excelsior Fellow. It is a fellowship program with the New York State government working on research and public policy. This past semester I got the 4.0, and earlier this month I was informed they picked people for interviews, but I wasn't one of those people. Last week, one day before the interview, I was selected but never received the e-mail about the location, my professor on the board e-mailed me and told me. Instead of worrying about making it to the interview I surrendered to the highest good, and a little later received an e-mail to reschedule. Turned out to be Tuesday the 11th (2/11) at 11am on the 2nd floor of the library on my campus. I had a great interview, and my professor informed me that when I left the room everyone had already decided I would fill the 7th and last slot and be an Excelsior Fellow, and this fellowship pays six times the amount I wanted to attract. I just feel so blessed.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'amy-belson',
    name: 'Amy Belson',
    isFullName: true,
    location: null,
    role: null,
    program: 'Softly Powerful',
    themes: ['spiritual-practice', 'self-image', 'business'],
    length: 'medium',
    pullQuote: 'Thank you so much for putting so much time, love, and energy into the Softly Powerful Course.',
    quote:
      "Thank you so much for putting so much time, love, and energy into the Softly Powerful Course. I have completed the first three audios and already my reality is shifting beautifully. The story that you shared, Michael, about your experience with the boat tours and how after you shifted your thinking into giving everyone love and blessings rather than feeling insecure and money-goal oriented, it became easy and successful. What an inspiring story to share! I am an extremely loving person, but now I feel much more at peace just going about my day with the intention to send everyone love and blessings.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'angeli-awakened-leader',
    name: 'Angeli (Awakened Leader)',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'business', 'career-change', 'community'],
    length: 'medium',
    pullQuote: 'If you don\'t become an awakened leader, you\'ll slowly die from the inside because deep down you\'re not doing what you need to do.',
    quote:
      "If you don't become an awakened leader, you'll slowly die from the inside because deep down you're not doing what you need to do. The whole world gets worse, you won't get paid, you'll feel frustrated and burned out, and you'll have no reason to get up in the morning. People are calling to us for help. We are part of an elite group of souls who are here to change the world. Every little thing we do saves other people's lives. We are changing the world by giving people options and possibilities that they themselves couldn't see before.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'anonymous-student-shadow-work',
    name: 'Anonymous Student (Shadow Work)',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['self-image', 'spiritual-practice', 'healing'],
    length: 'medium',
    pullQuote: 'I found myself stuck at the threshold of the higher vision, unable to break through.',
    quote:
      "I found myself stuck at the threshold of the higher vision, unable to break through. But once I courageously dove into shadow work, accepted what I had long rejected, and gave myself the space to process, the resistances lifted. Suddenly, everything began weaving together, the lower and higher aspects integrating into wholeness. The meditations anchored me deeply, and I realized I could arrive at truth with ease and grace, not just with intense energy. Now, I show up for myself, welcome my deeper parts, and hold space for others with compassion. My life has improved drastically, and I REALLY love this program!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'carrie',
    name: 'Carrie',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['relationships', 'self-image', 'family'],
    length: 'medium',
    pullQuote: 'The thing that stood out the most about my timeline is the word \'connection\'.',
    quote:
      "The thing that stood out the most about my timeline is the word 'connection'. It is all I have ever wanted ever since I was a kid and I now understand why I stayed in so many painful friendships and relationships for too long in the past. I was craving the connection and intimacy that my childhood lacked. Now that I fully am aware of the importance of connection to me, I am able to start letting go of this need. I also remembered that Nature has been a huge part of my life ever since childhood and it still is.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'christina-pillar-1',
    name: 'Christina (Pillar 1)',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['family', 'dharma'],
    length: 'medium',
    pullQuote: 'I\'m on this planet to help others learn how to succeed to overcome their blocks by uniting their physical, emotional, spiritual, and mental selves to find their core self and live from that.',
    quote:
      "I'm on this planet to help others learn how to succeed to overcome their blocks by uniting their physical, emotional, spiritual, and mental selves to find their core self and live from that. My timeline showed me that it took until I was about 40 to truly see my path. My most stressful time taught me many things, probably the most important thing is the knowledge that raising my children has given me. It's an amazing feeling to be able as a parent to teach your children to trust their inner guidance and break free from societal conditioning.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'diane',
    name: 'Diane',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['healing', 'dharma'],
    length: 'medium',
    pullQuote: 'I am a soul who chose an extremely difficult path through this lifetime for the best possible growth for my soul path.',
    quote:
      "I discovered I am a survivor. I am a soul who chose an extremely difficult path through this lifetime for the best possible growth for my soul path. This journey has enabled me to be of the greatest service to those who are in need of empathy and compassion. I can offer this as I myself have experienced many of the experiences many will come to me for, with the hope I can offer them some relief from suffering.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'jessica-van-nice',
    name: 'Jessica Van Nice',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['meditation', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'What a beautiful module full of insights!',
    quote:
      "What a beautiful module full of insights! I liked all of it! The book is great, and I loved the \"Being the Moon\" audios. Those gave another way to step into that \"observer\" space, which was very helpful. I also enjoyed the interview with Sister Sharona - what a beautiful energy she has! It was great to learn about a different way to view and connect with the Divine. There were so many ah-ha's about how many layers the ego actually has. '3 Seconds to Being Your Higher Self' was a great book to read. I plan to integrate \"The Pulse\" meditation to my practice.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'johann',
    name: 'Johann',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['healing', 'dharma', 'self-image'],
    length: 'medium',
    pullQuote: 'The best thing about designing my timeline has been to be able to see and feel my inner strength behind the tough moments and phases of my life, in which I acquired resilience.',
    quote:
      "The best thing about designing my timeline has been to be able to see and feel my inner strength behind the tough moments and phases of my life, in which I acquired resilience. Before I designed my timeline with the peaks and the lower phases, I used to see my struggles as weaknesses. But now that I have gained such clarity, I can only relate to them as my biggest treasure of Wisdom to help me to help others.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'john',
    name: 'John',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['community'],
    length: 'medium',
    pullQuote: 'I appreciate your fast response and I\'m also very appreciative of you.',
    quote:
      "I appreciate your fast response and I'm also very appreciative of you. I know most owners of their programs wouldn't write to their customers personally. I'm very grateful that you do that and stand out above the rest. I feel like I'm talking to a good friend who is down to earth with high vibration and consciousness. Very spiritual and loving. You are an amazing man and soul.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'jrgen',
    name: 'Jürgen',
    isFullName: false,
    location: 'Germany',
    role: null,
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'I really did enjoy the course and the deep feelings & love for life & the source, even if I couldn\'t make it with full commitment and filling out all papers everyday.',
    quote:
      "I really did enjoy the course and the deep feelings & love for life & the source, even if I couldn't make it with full commitment and filling out all papers everyday. I was first for now concentrating on the audios and meditations. Anyway it is a process for lifetimes and so no need to rush - I need my own pace. I already feel much more liberated. The course is a powerful, exciting and fun process of getting clear about how anyone wants to spend his precious time in the best way to serve life & be happy and charged by knowing his own values, visions and the things that don't serve him. The fact that we don't have to figure it out just by ourselves, instead we can ask god our divine companion to support us, and so we can always ask for divine guidance (which is very relieving).",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'katie',
    name: 'Katie',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'A few things I took away from this module is enjoying the now.',
    quote:
      "A few things I took away from this module is enjoying the now. It really spoke to me because I am always looking ahead and not living in the now as much as I should. I also realized how my intentions can always evolve during this journey and not to have such strict expectations on them. I can already feel my intentions shifting just from this first module. I AM willing to awaken all my power and create the life I desire.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'kyli',
    name: 'Kyli',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'confidence', 'business'],
    length: 'medium',
    pullQuote: 'I was having trouble with understanding my blueprint, my soul purpose, my dharma.',
    quote:
      "I was having trouble with understanding my blueprint, my soul purpose, my dharma. I was told I am meant to teach large group events. When I thought about this, I immediately felt resistance and fears around this, what am I supposed to teach, how do I teach in public when my fear is based around public speaking. Coaching one-on-one is one thing but teaching large groups is another. But after doing this module and the meditations, my answers came to me.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'lauralai',
    name: 'Lauralai',
    isFullName: false,
    location: null,
    role: null,
    program: 'Softly Powerful',
    themes: ['dharma', 'self-image', 'confidence'],
    length: 'medium',
    pullQuote: 'The introvert program blew my mind.',
    quote:
      "The introvert program blew my mind. Within days I was on my path. To be a lightworker and clairvoyant. So much magic. You have given freely of yourself your knowledge and your time. Every single e-mail I receive these days including from personal friends is someone trying to sell something. Not one 'real' person asking how are you? What do you need? I love it when I see someone offering what spirit has given them to serve and help others.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'monique',
    name: 'Monique',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['healing', 'self-image', 'confidence'],
    length: 'medium',
    pullQuote: 'It is no wonder I am where I am today.',
    quote:
      "It is no wonder I am where I am today. Through immense reflection and gratitude, I am definitely able to understand where every turn on my path has led me. I have really overcome a lot of obstacles in life, like really really hard times! But I persevered. I got back up and kept moving forward. Every hardship was a great lesson. Although a lot of these hardships came with a great deal of pain, I grew so much strength. I am really proud of myself.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'paula',
    name: 'Paula',
    isFullName: false,
    location: null,
    role: 'Holistic Wellness degree',
    program: 'Meditations / Insight Timer',
    themes: ['spiritual-practice', 'healing', 'dharma'],
    length: 'medium',
    pullQuote: 'I did receive the meditation downloads and appreciate all you do for others.',
    quote:
      "I did receive the meditation downloads and appreciate all you do for others. When we become which we want to see and are able to radiate that to others everyone evolves. My field of study and degree is in 'Holistic Wellness.' After years of studying and practicing, being and allowing the amazing transformation that I have experience in my life from living the experience of holistic wellness has allowed me to be part of the solution, and your programs are allowing me to be elevated to the next level. Cutting edge expansion of consciousness, mindful and shared awareness and a life worth living is what you have allowed others to see that is possible in their own lives.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'veronika-pillar-1',
    name: 'Veronika (Pillar 1)',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'self-image'],
    length: 'medium',
    pullQuote: 'I really took time and sat with all these questions and it was so worth it!',
    quote:
      "Wow! What an amazing journey! I really took time and sat with all these questions and it was so worth it! The most exciting part about the whole process was discovering the common theme and that the things I'd happily do for 10+ years, enjoy it and doing it just for its own sake are the same. It felt so liberating. The feeling was beautiful. Something that I was looking for for all those years, doing all kinds of this discovery processes, and it never clicked the way it did right now. I'm feeling blissful and content.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'angelique',
    name: 'Angelique',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'community'],
    length: 'short',
    pullQuote: 'once again you speak to me in a way I understand!!',
    quote:
      "Michael...... once again you speak to me in a way I understand!! You get me and I am eternally grateful.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'anita-coffey',
    name: 'Anita Coffey',
    isFullName: true,
    location: null,
    role: null,
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'I have sooo enjoyed the guided meditations and what I love most is the calming effect and the natural ability you have in bringing awareness to the fact that we can think another way.',
    quote:
      "I have sooo enjoyed the guided meditations and what I love most is the calming effect and the natural ability you have in bringing awareness to the fact that we can think another way. We get in 'funks' that spiral us into confusion and doubt. But this that you brought to us people across the map with such ease and collectiveness is truly another great stepping stone in my life.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'anze',
    name: 'Anze',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'I love hearing Arielle and Michael speak, that\'s it.',
    quote:
      "I love hearing Arielle and Michael speak, that's it. It brightens my day. I can just feel more light tapping into their energy. My favorite was the spiritual practice and also the interview with Sharona Stillerman.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'barbara-b-hunter',
    name: 'Barbara (B Hunter)',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['community', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'I love this course, I look forward to learning more and more.',
    quote:
      "I love this course, I look forward to learning more and more. I dedicate the time and place and it quickly has become my magical time. I feel the smile fill my face when it is \"study time\". Grateful and feeling blessed!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'baylee-elwell',
    name: 'Baylee Elwell',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['family', 'self-image'],
    length: 'short',
    pullQuote: 'Where I put my time and energy has been a big one for me.',
    quote:
      "Where I put my time and energy has been a big one for me. It has brought more awareness to different things. I feel like my presence is getting much better. Being a busy mom it's pretty tricky sometimes to focus on my success, but I have come a very long way and I am being shown that a lot now. Super thankful for this course.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'brandee-walker',
    name: 'Brandee Walker',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'I Really Loved the meditations!',
    quote:
      "I Really Loved the meditations! These were Wonderful! I haven't done guided meditation in awhile. Sometimes they can be hard to connect and sink into but that was not the case with this week's practices. Michael and Arielle both do an Amazing job at producing beautiful space and energy.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'cheryl',
    name: 'Cheryl',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'I realized that I am happiest learning and teaching deeper meaning of spiritual awareness.',
    quote:
      "I realized that I am happiest learning and teaching deeper meaning of spiritual awareness. Also helping others find their power, their inner glow. My word is peacefulness.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'dodhi',
    name: 'Dodhi',
    isFullName: false,
    location: null,
    role: 'Sister in Divine',
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice', 'community'],
    length: 'short',
    pullQuote: 'I just wanted to take a moment to thank you so much for all the service you bring to the physical world.',
    quote:
      "I just wanted to take a moment to thank you so much for all the service you bring to the physical world. A Facebook message really does not do it justice. However I am so beyond grateful for your videos/audios I had to let you know. Thanks for getting out of the way and letting the light shine through so we can all remember who we really are. Thank God divine experiences led me to your audios!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'ed',
    name: 'Ed',
    isFullName: false,
    location: null,
    role: null,
    program: 'SuperHero Training',
    themes: ['dharma', 'confidence'],
    length: 'short',
    pullQuote: 'The training has been superb and helped me massively.',
    quote:
      "The training has been superb and helped me massively. I feel I have a lot to learn though I am much clearer on what I'm meant to be doing. I know what works for me and what doesn't and getting into that mindset consistently is going to make the difference. Am really excited about the future and in time hope to share lots of positive things.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'erica',
    name: 'Erica',
    isFullName: false,
    location: 'Cape Cod, MA',
    role: null,
    program: 'Certification',
    themes: ['dharma', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'I would be honored and blessed to work with either one of you.',
    quote:
      "I would be honored and blessed to work with either one of you. I can't possibly express enough gratitude to God for helping me find you and your teaching. It's been an amazing journey so far and I can only imagine what's next. I'm generally up at 5am, new habit thanks to Michael. With all my heart and soul, thank you for helping me see the Light!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'gloria-plourde',
    name: 'Gloria Plourde',
    isFullName: true,
    location: null,
    role: null,
    program: 'Meditations / Insight Timer',
    themes: ['meditation', 'spiritual-practice'],
    length: 'short',
    pullQuote: 'I absolutely love your healing energy.',
    quote:
      "I absolutely love your healing energy. I have bookmarked anything you have sent and enjoying.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'julee',
    name: 'Julee',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['spiritual-practice', 'community'],
    length: 'short',
    pullQuote: 'You have great wisdom and it is being received by us out there.',
    quote:
      "You have great wisdom and it is being received by us out there. I worked with you a couple years ago with one of your programs and what you shared was so powerful and worked for me. When people like you do this work on yourself, I believe it trickles into the collective experience, or 'morphic resonance,' paving the way for others to also receive what you have discovered.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'lee',
    name: 'Lee',
    isFullName: false,
    location: 'Germany',
    role: null,
    program: 'Certification',
    themes: ['self-image', 'community'],
    length: 'short',
    pullQuote: 'It seems you psychically know me already!',
    quote:
      "It seems you psychically know me already! ('Just read a book all day long if you want…' 'The time and space you need... some people will say you're selfish…') I have always since I can remember been a book worm. I thank you from the heart for all your own years of searching and untold efforts in following your dreams in entirely unique ways to make this world a more beautiful and integrous and dignified place. The true, gentle and heart-centred nature of your work reflects out.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'lei',
    name: 'Lei',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'healing'],
    length: 'short',
    pullQuote: 'This lesson has been absolutely instrumental for me.',
    quote:
      "This lesson has been absolutely instrumental for me. I have realized who my clients will be! Who I am best qualified to serve based on the many many past experiences and most importantly Victory of what could otherwise paralyze an individual in past generational trauma loops!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'madison-v',
    name: 'Madison V.',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['confidence', 'business'],
    length: 'short',
    pullQuote: 'Thank you again for the knowledge I have gained so far so beneficial I am thinking of going to college for business now!',
    quote:
      "Thank you again for the knowledge I have gained so far so beneficial I am thinking of going to college for business now! Much appreciated.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'mark-seminare',
    name: 'Mark Seminare',
    isFullName: true,
    location: null,
    role: null,
    program: 'Magic Money Course',
    themes: ['dharma'],
    length: 'short',
    pullQuote: 'I don\'t have any specific questions at this point, but wanted to send a thank you.',
    quote:
      "I don't have any specific questions at this point, but wanted to send a thank you. I really enjoy magic money meaning so far, and the eternal freedom course.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'nancy-hannigan',
    name: 'Nancy Hannigan',
    isFullName: true,
    location: null,
    role: null,
    program: 'SuperHero Training',
    themes: ['confidence', 'self-image'],
    length: 'short',
    pullQuote: 'I participated in the last Superhero training, to the best of my ability at the time.',
    quote:
      "I participated in the last Superhero training, to the best of my ability at the time. I had a lot of eye openers!",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'nico',
    name: 'Nico',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['dharma', 'career-change'],
    length: 'short',
    pullQuote: 'I knew that I wanted to do coaching but I never would have thought how passionate I really am to serving others and raising the vibration of the planet one person at a time.',
    quote:
      "I knew that I wanted to do coaching but I never would have thought how passionate I really am to serving others and raising the vibration of the planet one person at a time.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'steve-c',
    name: 'Steve C',
    isFullName: true,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'My \'Awakening\' to the Truth of my Divinity and Eternal Presence has occurred right on \'time\'.',
    quote:
      "My 'Awakening' to the Truth of my Divinity and Eternal Presence has occurred right on 'time'. In the Eternal Realm of Timelessness all is occurring just as it should. I Am That I Am. I Am the I Am Presence.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'susanne',
    name: 'Susanne',
    isFullName: false,
    location: null,
    role: null,
    program: 'Softly Powerful',
    themes: ['healing', 'self-image'],
    length: 'short',
    pullQuote: 'To truly thrive in this more extroverted culture support like this is really helpful.',
    quote:
      "To truly thrive in this more extroverted culture support like this is really helpful. I love your videos. What was really helpful in particular this audio was the advices on how really to thrive as sensitive. I am in a process of healing from some shocks. Every piece you create is a masterpiece, your audios and especially videos transform.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  {
    id: 'zuan-pillar-1',
    name: 'Zuan (Pillar 1)',
    isFullName: false,
    location: null,
    role: null,
    program: 'Certification',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'I have developed a relationship with God/Higher Power that is meaningful to me.',
    quote:
      "I have developed a relationship with God/Higher Power that is meaningful to me. I have a spiritual practice that works and I'm enjoying it and developing it. I can release and let go of negative emotions (I know how to do it). I'm ready to raise my level of consciousness.",
    photoSrc: null,
    source: '/Michael pasted 2026-05-19'
  },
  // NEW BATCH 2026-05-19-v3, from MASTER-TESTIMONIALS.xlsx · HTML entities decoded · roles normalized
  {
    id: 'theodore-vaughan',
    name: 'Theodore Vaughan',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['career-change', 'healing', 'relationships', 'family', 'meditation'],
    length: 'long',
    pullQuote: 'By apply what I\'ve learned from this lesson into my life I\'ve gained this invaluable wisdom I don\'t think I had before.',
    quote:
      "I do morning prayer and then 20-30 minutes of meditations. I also do extra meditation on Mon, Wed, Friday for 30 minutes at my Yoga studio before doing 1.5 hours of yoga on those days. I've also been doing yoga on my own, developing my own practice, exploring my breath and new asana's. I've incorporated the practice of visualizing God as my father, the Spiritual Sun in Golden Light above me while visualizing myself as light in a sea of lights bathing in the light of God. I do this visualization when I wake up in the morning. I also noticed that I turn a lot in my sleep and use this practice during those times. I share what I learn with my wife, kids, and family. This course so far has helped me with patience with my youngest, while doing homework with her - its actually helped me make this time fun. I've been really looking at life thru the lens as a Super Hero and its really amazing how fascinating life is and how its such a miracle. I try to follow my throughout the day and I'll do alternate nostril breathing if when I went to get more relaxed. My life has improved because I've been able to observe my patterns more affectively. It seems like its helping me organize my life. Below is the story I posted on Facebook: Hi All, I've been churning and digesting what I've learned regarding the lesson on the \"Hero's Journey\". This has been so fascinating to listen to - I think I've listened to this section 3-4 times already and I plan to listen to it several times more. Its even more interesting when you apply it to your life and really look at your life through this lens. I wanted to share a quick hero's journey that happened to me this weekend when I was taking my teenage daughter to work this Sunday morning. While driving her in, she negatively commented on how weird its been that I've been filling my days with too much spiritual practices. I was very hurt when she said this. I really couldn't believe that she would hurt me and say what she said. It didn't make any sense to me especially since she seemed to be really receptive and supportive when I announced to her that I was going to take this training and I already had several positive discussion with her on what I've learned in this program so far. After dropping her off at work I realized this was the challenge that was described in the \"Hero's Journey\" lesson. It came so unexpected and almost immediately following the first listen of the lesson. It was really amazing how this lesson helped me organize what had happened. I was able to identify that my daughter, who I that was supportive, shape shifted into the shadow. Her shadow was cast into me and it caused this anger and pain inside. For some reason I could NOT let this anger and pain go. I decided to investigate and face this anger and pain, the shadow, as the hero instead of the victim and really challenge myself to understand why I was angry with her. It was like taking a hero's journey within a hero's journey. I finally realized and was able to see the truth - that deep down inside she really did NOT or would NOT want to hurt me. She basically had a negative thought and expressed it with her speech. Looking back now it seems so simple. It was the weirdest thing though that it took all day to figure this out. I'm so glad I did though - instead of just trying to ignore the anger and pain and act like nothing happened. This gave me a deeper understanding that if we aren't mindful of our thoughts and speech we all can so easily cast shadows into others lives. We can so easily shape shift into different archetypal characters when we aren't mindful and awake. I'm sure I've been guilty of this before - probably many times (I'm also starting to realize think I've created some archetypal characters internally and externally). Anyhow, I also got a deeper understanding of finding forgiveness for others actions. By apply what I've learned from this lesson into my life I've gained this invaluable wisdom I don't think I had before. I plan to use this wisdom that i've learned in the future. I'm still fascinated as I write this. I have so much to learn and I realize I'm just beginning the bigger Hero's Journey.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'sarah-graham',
    name: 'Sarah Graham',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['family', 'addiction', 'meditation', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I learned to give myself to myself before i give to others anymore and i have felt the difference!',
    quote:
      "My current daily rituals are merely holding ymself accountable by doing things that make me operate in the way i want such as drinking plenty of water and making myself go out in nature and meditate atleast once a day even if its not for long i just have to continue to hold my self accountable because i feel good after! I have started by dedicating myself 15 minutes of everything like exercise, meditation, self care, self reflection, and 15 minutes of dedication to my spiritual work whether that be working with my divinity tools such as this program or my tarot readings!I also dedicate myself to help someone else in my life with advice or a reading or in any positive way that they need if my energy is balanced enough to do so! I learned to give myself to myself before i give to others anymore and i have felt the difference! I use the emergent video as a guideline of the ingredients i need to live my best life! I also read my intentions when i wake up in the morning and before i fall asleep! I have noticed improvement in my self worth and self awareness and my motivation and my people pleasing habits! I also have noticed improvement in my self discipline and learned self descernment! For example I used to start my days late and start with a energy drink and slug my way through the day with stress and unneccesary worry more days than i liked. After really absorbing alot of what i have learned i caught myself asking myslef questions like \" Is this helping me achieve my desired goals and feelings I want to experience?\" My favorite that stuck with me is\" Am I willing to feel good and have my life go well all of the time?\" So by asking myself those questions I have put it in the forefront of my mind of what can i do on my part to make that possible? So one morning I asked myself that again and chose a organic tea ober my energy drink i wake up a little earlier now and dont just lay in bed i take a shower and go outside and breath for a minute and ask myself what amazing experiences will i have today rather than what is going to go wrong today! so my mindset has changed which is helping change my habits! Even some old friends asked me to go out the other night to go drinking and partyng and used to i would go even tho it wasnt fun for me but now I do not spend my energy with drinking and partying because I believe I have no more lessons i need to learn from partaking with people i really have nothing in common with or dont see my worth. So instead of going with them I went with A genuine person that i had intellectual conversation and shared stories with. Instead I fed my soul rather than starving it with meaningless interactions. I listen to my feeling more if i do not feel like i can be my true authentic self i will not linger around for my energy to be depleted.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'tarelle-freeman',
    name: 'Tarelle Freeman',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['family', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'About 6 months ago I created a Pyramid my little sacred space within my home where I go to play my singing bowls, journal, mediate sage, etc\\....',
    quote:
      "When I realized I was on my spiritual journey and needed to make changes I relocated and I remember sitting with things making the decision if I should keep it or donate it. Well I donated 80% off my house and only took 20% with me. It felt so good to release all these things that I had been holding onto(energy). Now I'm conciously aware of making sure everything has a designated place in my home. About 6 months ago I created a Pyramid my little sacred space within my home where I go to play my singing bowls, journal, mediate sage, etc\\.... I feel more focus, free, at peace and happy without all the things and the titles. The Ahha moment I learned from this module is that classical music is high vibe and can have an effect on a low vibrational frequency.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'leah-bird',
    name: 'Leah Bird',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Awakened Life',
    themes: ['meditation', '21-day-challenge'],
    length: 'long',
    pullQuote: 'It takes around 31 days to break or make a habit.',
    quote:
      "It feels less stressful to try and get everything done because the time frame for each task is now accounted for in much more detail. It has helped me create balance in my life. Knowledge is NOT power, applied knowledge IS power. It takes around 31 days to break or make a habit. I started my meditation journey on a 21 day challenge and stopped for a while after it ended. I then completed a 44 day challenge and I kept that habit everyday ever since even at the same time every day so this makes sense but i didn't realise at the time that I was creating a habit or that the time frame was a cause of it. Very interesting.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'marijke-kapusta',
    name: 'Marijke Kapusta',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Coaching Masterclass',
    themes: ['money', 'family', 'self-image', 'confidence', 'business'],
    length: 'long',
    pullQuote: 'I have decided not to do practise sessions because I have been coaching people for the past 9 years in my guiding work.',
    quote:
      "I have decided not to do practise sessions because I have been coaching people for the past 9 years in my guiding work. The way I coached in my guiding work was different and now I have more tools to use from what I have learnt in the course. I am preparing everything to start coaching straight away. My coaching will focus more on transformation than on getting things done because I have realised that once the person has changed, it happens much more easily that they get done what they need to. I have moved the name away from spiritual coaching to transformational coaching. I have set up my German website now and am working on the contract for the coaching sessions. I have decided on my pricing and prepared a session on self care as I find it important for the client to look at how they are treating themselves. I have prepared the coaching tools document so I have it ready when I need it. In my every day life, I can see the clients already approaching me. People are interested in what I do and curious as well. They know I am writing a book and are already waiting for it to be released. The same with the coaching, I seem to encounter more and more people who are interested in my work. Listen carefully what is being said. Take notes and learn from the session. Learn from what works and doesn't. I've realised that I do no longer need to acquire knowledge and wait until I start coaching. Since I have worked without clients before, I feel it is time for me to start. I prepared the documents I need to have available as reminder of the tool I can use. My confidence has grown without me actually doing anything about it. It has just been a change in consciousness. I wrote on my website what I offer and am surprised that I feel confident to help people in this where a few weeks ago I was still feeling doubtful and nervous.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },


  {
    id: 'veronika-kovov',
    name: 'Veronika Kováčová',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['money', 'confidence', 'community'],
    length: 'long',
    pullQuote: '- Time with God - Awakened Academy - Money Mindset - Creation (write, art, other) I realized how much unorganized I was and that I was actually wasting my time all around and I couldn\'t stop it.',
    quote:
      "I am very grateful for finally implementing some supportive and more organized habits. I finally created my, even though still free and open, but supportive schedule supporting my new goals in much focused way. - Time with God - Awakened Academy - Money Mindset - Creation (write, art, other) I realized how much unorganized I was and that I was actually wasting my time all around and I couldn't stop it. It was because I didn't know how to create my own schedule to support me and eventually, I wasn't willing to follow any. But those times are history now and I finally made the commitment to do whatever it takes to succeed in my dreams and goals and I finally feel like I am willing to do the hard work and learn to take action - consciously pushing through resistance. As I mentioned above, I'm doing my best to implement all those new shifts and commitments into my daily life. I'm making the effort to work on my limiting beliefs and push through them. I created my schedule and I feel very motivated and happy to tick the boxes. I found it very supportive because I feel like I accomplished something. Before I did this simple act of ticking a box, I was actually doing a lot and working really hard but I always felt like it wasn't enough and it felt like I didn't do anything much. Ticking the boxes helps me see clearly what I actually did and so I started to praise myself and celebrate the tiny little things and it just brought so much more peace and joy. Also, I've been working on checking with my willingness to change and take action and to wholeheartedly commit to taking action and applying what I learnt. I still have not been able to take action in areas that matter the most to me but I'm working on changing and empowering my beliefs first. I am super happy about starting doing Earthing more regularly. In fact I decided to do it every day no matter what the weather would be. And I'm just so grateful for that because it truly calms my mind and brings so much peace and connection with all that is.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'kelli-mcginnis',
    name: 'Kelli McGinnis',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['career-change', 'money', 'relationships', 'family', 'confidence'],
    length: 'long',
    pullQuote: 'Though I was already aware of the 80/20 rule to some measure, the exercise of writing down my actions every 30 minutes was pretty eye opening\\...',
    quote:
      "I had an \"aha\" moment that, for me, equates to clarity and thus \"improvement\". Awakened Academy's process of looking within ourselves deeply has made me aware of something I didn't realize before. Michael and Arielle talk much about living the life you desire NOW. I realized that I already am living much of my intention even now! I am very happy! I have grown so much through the years! I have raised three daughters and am working on my 13 year old still. I have a very happy marriage. I am surrounded by friends. And I am CEO of my own non-profit organization that leads a group of fifty or more women each semester. I long to use my gifts, strengths, and personal growth to help and encourage others. And I have been longing for my husband to come home from his work and do it with me! This deep pondering and re-asking myself the same questions led me to realize that my intentions are for the freedom of my husband from his job. But my husband loves his job! He is happy there! It's like one of my focal points was trying to fix something that wasn't even broken! I wanted him to have what I have - freedom and flexibility. There is no pressure. Life is good\\... NOW! But I want to use my life for the blessing and good of others. And I want to create a business of coaching, etc. that produces income for me and brings life to others! Good to get a little clearer on the truth. Though I was already aware of the 80/20 rule to some measure, the exercise of writing down my actions every 30 minutes was pretty eye opening\\... and stressful, I might add. :) I found myself saying, \"hurry, hurry! It shouldn't take you that long to \\_\\_\\_\\_\\_\\_\\_\\_!\" I enjoy not \"pushing\", but rather rolling with the rhythms of life. Something about this exercise made me feel I was \"on the clock\". Needless to say, accurate journaling from sun up to sun down revealed a lot! The Mud, the Gold, and the Diamond is thought provoking. I am still trying to figure out exactly what my Gold and Diamond are. I spend a lot of time still taking care of my family and home. I intend to spend more time this weekend reviewing my action journal and thinking about my Mud, Gold, and Diamond. I have definitely detoxed, even prior to starting AA. I know I am being led on a new path and have already let go of some things prior to starting this journey. Forgiveness has always been important in my life, but I have definitely learned the practice of meditation since starting AA to help release the negative emotions that arise. This has helped amazingly! Interestingly, the talk about \"loose ends\" had me cleaning out my husband's and my closet while listening to the talk about making your home a heaven. I'm already a believer of this principle and live it strongly in my life. But hearing Michael and Arielle talk about getting rid of things just had me tossing things without hesitation!",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'adrianne-jones',
    name: 'Adrianne Jones',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Awakened Life',
    themes: ['career-change', 'family', 'business', 'spiritual-practice', 'community'],
    length: 'long',
    pullQuote: 'So, I love the daily rituals, love lists, love prioritizing and doing actions that support my goals (la-duh!) and I also love the flexibility to have a day where I walk with my daughter and just appreciate her and nature!',
    quote:
      "I have added to a full life, keep you posted! Since I already don't do all the static noise chaos actions, I don't really have much to cut out to make space for the new daily rituals & positive actions. I just rearranged and prioritized my business work first which should help. It keeps my business, which I say I want to grow and live on, as the priority it should be instead of always on the back burner. It is one of those la-duh moments where I know that I should work on it every day if I say it is a priority, but have not. No excuses! My first insight, which I actually do know but am on a repeat record of, is that I need to do actual work on my business EVERY DAY just as I do work at my job every day! I know it, but putting it on a daily list helps especially since the perfectionist kicks in and says that I can't begin work on my business until I know exactly what direction to go in and what to do! But, as mentioned in the last model, I am moving forward without a big dream since I do know what I want to do, perfecting it will come as I make progress and DO SOMETHING!! My daily personal rituals are great and have been doing for quite some time. I will say though, I allow for flexibility in my life for life to unfold and happen. I work from home and have for 8 years, I raise & home school my daughter, I am in various schools & certifications, AND I have my own business (along with those other pesky daily things like food, shopping, chores, household maintenance, reading, self-improvement, etc.!) so flexibility is a MUST! Without being flexible and recognizing that my life is full and rigidity would break me and probably everything around me, daily life would be challenging. So, I love the daily rituals, love lists, love prioritizing and doing actions that support my goals (la-duh!) and I also love the flexibility to have a day where I walk with my daughter and just appreciate her and nature!",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'julie-graham',
    name: 'Julie Graham',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Awakened Life',
    themes: ['money', 'family', 'confidence', 'business', 'meditation'],
    length: 'long',
    pullQuote: 'I look forward to learning all that Michael and Arielle are teaching us, so that I may practice it myself, then use that knowledge and wisdom for my own clients.',
    quote:
      "By creating and following my Daily Relaxation and Ascension Ritual, I realize I can accomplish much more than I ever have. I've cleared out the soup and focus on the 20%, leaving the 80% of yuck and waste behind. I make sure to play in the diamonds and gold through activities I love such as meditation, connecting with nature through hiking or yoga. I keep my mind lifted in the highest consciousness possible through my intentions and the thoughts I keep; as within, so without, as above so below; I never realized how true this was until my outer world was a reflection of my inner. I look forward to learning all that Michael and Arielle are teaching us, so that I may practice it myself, then use that knowledge and wisdom for my own clients. I'm so excited about where I'm going and know it's going to be even more magical that I could ever dream! I am most certainly in the flow instead of fighting the current. The Universe speaks to me and there are every day confirmation of this knowledge. I keep ascending to higher levels and my connection with guides, angels, and the Universe continues to grow and guide me to additional tools to help me along my journey. I am meant to be here in this moment. In this time. Helping humanity find their truth and raise their own vibration and consciousness which has a ripple effect as we are all ONE. While I have a business name, FB and webpage, these are not currently published. However, I enjoyed the section on, \"Your Business Success Ritual, and took avid notes. These morsels of insights can be later applied once I am working and will encourage further review to find the Gold and Diamond from a business perspective.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'mimi-stiles',
    name: 'Mimi Stiles',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Awakened Life',
    themes: ['business', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I learned that I have to have daily BUSINESS rituals on top of my \'self care\' daily rituals which is something I never really realized until I wrote it all out (i\'ve been fully working for myself for over 6 months now..',
    quote:
      "I already feel so much more relaxed because I feel as though I have a better plan of attack for my business that isn't so up in the air everyday where I will skip important tasks or push them off. ACCOUNTABILITY!! I learned that I multitask way too much and that I need to focus my energy on doing one thing at a time for optimal results. I learned that the two main focuses of my time should be relaxation & results. I learned that I have to have daily BUSINESS rituals on top of my 'self care' daily rituals which is something I never really realized until I wrote it all out (i've been fully working for myself for over 6 months now.. how the heck am I just starting this now?!)",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'julie-graham-2',
    name: 'Julie Graham',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['dharma', 'relationships', 'family', 'meditation', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I love to give but feel so awkward receiving.',
    quote:
      "Today (and every day really), I've been receiving beautiful blessings! I always notice these but today was different because I received a 'thanks' and appreciation from one of my students. As a matter of fact, this is happening more and more. The turning point here is that I stopped and felt how wonderful this receiving was; I then sent a big thank you of gratitude to the Universe for this gift I received. On my walk, the scent of my late grandma wafted in the air. I closed my eyes and smiled, thanking the Universe for the beautiful gift. The Universe speaks to me though feathers (biggest one!), repeating angel numbers, and coins. I found a penny and a beautiful feather from a Blue Jay today. Each time, I sent gratitude to the Universe for these precious gifts. I thoroughly enjoyed this lesson! I love to give but feel so awkward receiving. I knew this lesson held special value and insights for me. To let go and allow the Universe to do the heavy lifting make so much sense. We no longer have to worry or fret over the outcome. We can rest easy and be assured all will work out for the highest good for all involved. And if you think about it - that typically how things work out anyway. Sometimes what we perceive as \"bad\" turns out to be something really amazing, beyond what we could have created or imagined on our own. That's the magic of the Universe. I'm currently reading, The Light-Workers Companion, the following speaks to exactly what was shared in the Giving and Receiving module. \"You will get to a stage, if you haven't already, where you remember to stop and smell a rose or feel fresh ocean air. Many human incarnates rush through their days without realizing there have been thousands of priceless situations where they had an experience and yet barely noticed at all.\" We sometimes miss the very thing we've prayed for because we are not experiencing life. We're merely drudging though it, mindlessly without conscious thought to the wonder, bliss, and blessings all around us. Before my awakening, I barely noticed this stuff at all. However, through my current practice, combined with the tools and resources shared by Arielle and Michael, I can truly say, I notice small things. Unexpected kindness from a stranger, unexpected generosity, unexpected prosperity, or thoughtful gesture I was not expecting, The magic (and wonder) of it all has led me to a delicious place of genuine happiness and bliss! I have felt my connection with Divine grow exponentially which has led to my own personal and spiritual growth. I cannot wait to serve others; I want everyone (who is willing) to shed the stale and experience this fresh, exhilarating and peaceful life. Living their dharma, reaching the highest level of consciousness possible so they too an witness the magic, beauty, bliss and freedom of it all! It be only a small grasp away. In the past, I've been terrible at receiving, but that ENDS today! For some reason it feels awkward and weird to receive. So, I reflected upon this myth. As a child my father was a tough love dad; I did not hear many \"I love you,\" not was there a tremendous amount of affection. While my dad gave (roof over head, food, clothes, tradition support, how to stand on my own two feet), it was not the kind of giving you expect from a father or the receiving I witnessed from my girlfriends father. \"People like to give; allow them to give to you - allow yourself to receive.\" This was incredibly power for me. I never thought of giving in that way. I realized I've been denying those who love me the opportunity to truly give because I could not receive. I'm also very stubborn and have a 'I can do it myself' attitude which needs to be done away with. A whole new perspective! I am so grateful.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'alexandra-tlapa',
    name: 'Alexandra Tlapa',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Awakened Spirit',
    themes: ['healing', 'family', 'meditation', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I loved the book you wrote Arielle.',
    quote:
      "I have become more aware of my inner peace and able to sink deeper into the nothingness and silence. The phrase expand out, really hit me and so when I meditate now, I say those words and I feel myself melt instantly into the land of silence. I also understand that the land of silence is a place but also a place within us. A collective consciousness that we are all apart of and every day, more and more knowledge I take in. I feel like I am finally understanding who we all are. I loved the book you wrote Arielle. I know you and Baba wrote it together, but how magical :) I realized that I was doing the pulse without realizing it and then I read this book and gained so much more insight. I had a moment when reading- \" In the present moment is eternity. Within the present moment is forever. The present moment can be stretched out to be one endelss moment\\...\" I thought, oh wow, yes. WE ARE ETERNAL. How amazing to know that we are never really born. That everything is fixed and that each moment, we can step back, \" I the pure soul, and not this body.\" I feel like lately, I am really beginning to not just understand this as a concept, but experience it. I can become detached and its amazing how much this has changed my life!!!! I could right more and more about this :) Oh and the line about eternity being me! That blew my mind again!",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'carrie-thurman',
    name: 'Carrie Thurman',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['career-change', 'dharma', 'healing', 'family', 'manifestation'],
    length: 'long',
    pullQuote: 'Now I know the official label of the hero\'s journey and it makes so much sense to me and it is fantastic to finally understand why each day of my life for the past year or so has felt like another day in the adventure/mission of my life.',
    quote:
      "My daily health rituals involve stretching, drinking hot herbal tea once or twice a day, giving love to my cat, meditating on my dreams and goals while I am driving, giving thanks to God for providing me with everything I need, eating raw or cooked vegetables, drinking as much water as I can, going to work at the Garden Center that I am so blessed to work at, working on my awakened academy lessons, and working on my new book. These are the main most important rituals that keep me healthy and happy. :)) My life has improved after being educated on the hero's journey because before starting this academy, I had already begun to study my life and its messages and synchronicities and I had been referring to this experience as just that: studying my life. Now I know the official label of the hero's journey and it makes so much sense to me and it is fantastic to finally understand why each day of my life for the past year or so has felt like another day in the adventure/mission of my life. It helps me understand why certain betrayals must happen in life so that we can learn the gift of loss through shadow characters and tricksters. People have taught me that God does not just bless us by giving us what we want, He blesses us tremendously by removing things from our lives, such as shapeshifters, shadow people, and tricksters. They are all supporting characters in my hero's journey and they all did a job and taught lessons.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'jenna-xavier',
    name: 'Jenna Xavier',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['career-change', 'healing', 'mental-health', 'money', 'family'],
    length: 'long',
    pullQuote: 'I haven\'t had sugar in 2 weeks and I am feeling very good in my body.',
    quote:
      "I go to bed early/wake up early (5AM most days) and I have matcha tea, meditate, journal, read or study (intentional learning). I have a healthy breakfast and begin my day. Every day I get in movement (20 minutes of running or 30 minutes+ of walking in nature); I do yoga once a week or go to a forest preserve once a week (and have incorporated earthing). These rituals help me move forward in feeling good via taking care of my health (emotional, mental, physical, spiritual wellness) and doing an hour morning ritual sets the mindful tone for the day. I would say my life definitely has improved. I ask myself, \"Am I willing to prep my food to ensure I am eating clean and enjoying the benefits of healthy nutritious food?\" In response, I have said 'yes' and I have also said 'yes' to my willingness to change via drinking matcha tea, simplifying my recipes/food menu and planning out my clean eating meals. I haven't had sugar in 2 weeks and I am feeling very good in my body. No anxiety and I'm pretty sure all my chakras are clear! I've given myself the gift of spending time in nature, going to new walking trails and taking my time to enjoy them. I have even read my notes from the academy as I am walking in the woods instead of telling myself I needed to study inside and then go to the woods 'when I have time.' With my shoes off and odd stares, I know I'm evolving more :) I feel so alive, free, happy, safe, joyful. Everything I am learning, I am also applying with my counseling clients (utilizing my own spice blend/tailoring it to clts level of consciousness/needs/personality, etc.). I think writing out my old story (in 3rd person), recognizing truths, and writing a new story was very helpful. I discovered some upper limit problems in my own life and I think I have freed myself from them, with the help of this module :) I mapped out how I could increase my income over time and I now have bigger dreams that are in the making. I no longer have the same money scarcity mindset.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'erika-kelly',
    name: 'Erika Kelly',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['grief', 'healing', 'dharma', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I now KNOW my mission statement. You guys, it brings me so much joy I am vibrating throughout my whole body.',
    quote:
      "My dad took his own life at the start of this year. To say it shook me up would be an understatement. I have been processing, and integrating, only to process and integrate some more. Him leaving this world the way he chose to was the most eye opening experience for me, and it has turned out to be a profoundly positive transformation. It has led me to deeply question what matters most: questions like, why any of us are here, specifically why AM I HERE. I began to question what I believe to be true about everything.\n\nI now KNOW my mission statement. You guys, it brings me so much joy I am vibrating throughout my whole body. I have spent years wondering why I am here. I cannot quite explain the miraculous unraveling of how I got to this point right now as I sit here typing this.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'lovedreamlaugh8',
    name: 'LoveDreamLaugh8',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'long',
    pullQuote: 'Exactly what I needed to move forward!!!',
    quote:
      "This book was exactly what I needed to move forward with my business. I have all these great ideas and yet I find myself not getting everything done that I want to in order to be successful. Michael's book really motivated me to GET IT DONE! His writing is always excellent by uplifting you and helping you to understand what is holding you back. I highly recommend this to anyone struggling to stay on track! His words will not only uplift you, but will make you take a look at your life in a deeper way so that you will want to make the changes happen and be successful in everything you do. He gets right to it with giving you the tools you need to make it all happen and in only 21 days!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'luvinlife-get-it-done',
    name: 'LuvinLife (Get It Done)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'long',
    pullQuote: 'Very Realistic and Helpful. Not just another motivational book.',
    quote:
      "I really loved this book and how it was written. Michael is honest, realistic, and really made me feel like my goal of finishing a project within 21 days was reachable. I liked the action plans and how clear they were. He says to focus on one main goal at a time so that I don't get overwhelmed. I needed to hear that. This is a very good book for anyone that wants to accomplish anything that is important. The power of focus is huge and this book really helped me use that power that was already inside of me.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'nitzy-amaro',
    name: 'Nitzy Amaro',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'short',
    pullQuote: 'One of the best self improvement books out there!',
    quote:
      "Amazing book! This book has helped me stop procrastinating and not get stuck in wasting time! Get things done in 21 days!!!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'aria-rose',
    name: 'Aria Rose',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Awakened Life',
    themes: ['mental-health', 'money', 'family', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'Like now I am in a panic mode being 50K in debt and I have to start making income or I won\'t have a place to live and my family, for the first time, doesn\'t have a place for me to live now so I would be homeless.',
    quote:
      "I feel more organized. I feel like I have a list started and have more motivation to do the things on the list. It is challenging though with a medical condition in which I only sleep a couple hours at a time becuase I wake up exhausted and can barely move or think for a couple hours. So that is challenging when it comes to morning rituals. I really feel that the daily relaxation and ascension and writing daily rituals was very good and all the talk about how we can waste our life away by letting it go by because we don't have powerful rituals and tasks that bring us closer to our goals. I feel that I have done that for years and I can't keep doing that. Like now I am in a panic mode being 50K in debt and I have to start making income or I won't have a place to live and my family, for the first time, doesn't have a place for me to live now so I would be homeless. So it is a wakeup call how important these tasks and rituals are to get us closer to our goals, dreams, and financial goals.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'tina-marierusso-russo',
    name: 'Tina Marie-Russo Russo',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['dharma', 'healing', 'money', 'family', 'grief'],
    length: 'long',
    pullQuote: 'Since she was with me for those 17 years I just did for her as I would my children.',
    quote:
      "Everything has improved! Well other then money but that's coming! I have a purpose! I am writer! I know that Michael had mentioned on our call that I should think of myself as a writer. I think I giggled! Now I have to get cracking!!! I feel pretty awesome right now! Much of this module I have already completed. Since my move in June of last year I removed a good portion of people in my life. So I feel pretty fresh. I got my health on track and I am not currently working. My home is completely gone through and much was tossed or given away. Nothing was weighing me down. Until I was starting to self doubt this whole plan. I should have felt it coming but I didn't catch it. Just nothing felt right. I didn't want to paint or draw or do anything creative. I was starting to miss my clients and that one on one feeling when you help others. I started to worry that maybe I made a huge mistake and I should just go get my esthetician license. That seemed so easy though and nothing about it scared me. And I know if it doesn't scare you a bit it really isn't your calling. But I can't just not do anything. I realize now when I was writing my challenges I was pretty caught up in that mindset. And Arielle so lovingly gave me the next mission and reminded me not to give up. I got the very books she advised and went to tackle some of my lost childhood issues. Going through this was a gift for sure. Soon after this my 17 year dog tragically past away. It was just a horrible situation that I don't want to go into. It was gut wrenching and took me out for a bit. Since I was already releasing leftover bits of my childhood, this loss was a huge hit. I cried for days and days! I realized after I came out of it just how much time and energy I had spent on this little dog. Everyday was spent on making sure she was good. At her age she had been a handful. Since she was with me for those 17 years I just did for her as I would my children. Not realizing how much of my time was wrapped up in her until her not being there. I would have done again in heartbeat.But I have much more awareness about it now.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'karen-galvan',
    name: 'Karen Galvan',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['career-change', 'relationships', 'self-image', 'confidence', 'grief'],
    length: 'long',
    pullQuote: 'This year I divorced (9 hearings!) after 35 years of marriage, quit my job of 10 years, move to a new home.',
    quote:
      "In general a deeper feeling of relaxation with a growing feeling of confidence, peace, and expanded soul awareness. The regular affirming emails from raja yoga are very nice. And the Best Year of Year Life PDF practice(s) & resources are an amazing gift. Just opening that email I got blasted with Love. This Awakened Detox could not have come for me at a better time. I actually have gone through this section twice in the last year. This year I divorced (9 hearings!) after 35 years of marriage, quit my job of 10 years, move to a new home. I still have 30+ sealed & dated boxes in the garage that I will go through (or not). But my new space is an amazing place for recovering mentally, emotionally & physically from all the changes I went through this year. It is also an amazing space for creating. I think the biggest help in all this has been from the various insights I gained from your raja yoga course & the joy found in establishing an embodied relationship with the Divine through meditation, prayer & journaling & other practices. With it, I have felt a welding/integrating of all my spiritual studies. I love the simplicity and far-reaching benefits of the practice of remembrance. Thank you so much for offering this. Another ah-ha is realizing how much insightful information I missed the first time around in studying this material. I am now re-reading the Golden Life book with new eyes for a second time.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'jason-wilburn',
    name: 'Jason Wilburn',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['healing', 'money', 'meditation'],
    length: 'long',
    pullQuote: 'But now I realize that to love myself fully is the best first thing I can do, then I can fully love the ones that are most important to me.',
    quote:
      "Every morning before I do yoga, I do a breath technique by Wim Hof, then go right into a couple of back to back meditations on light and then abundance. It starts the day off with the right state of mind and with a body full of vital life force. Focusing on myself as #1 at first felt selfish. But now I realize that to love myself fully is the best first thing I can do, then I can fully love the ones that are most important to me. And that is happening. Also, insecurities that I've battled with for a very long time have fallen away.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'carrie-thurman-2',
    name: 'Carrie Thurman',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Awakened Life',
    themes: ['healing', 'family', 'manifestation', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'My energy is mine and I can tell that people sense the power that I have regained after cutting every last toxic energy-sucking person out of my life.',
    quote:
      "My life has improved because now that I have fully committed to my daily rituals, I feel so much closer to my dream reality. I can feel the energy of my dream life, every day. It feels like I am on the beach, listening to the waves and birds, with the sun beaming on my skin. Ever since I moved into this new place, I have been able to truly become who I need to be and live how I need to live. It makes me feel so much stronger and light physically. My energy is mine and I can tell that people sense the power that I have regained after cutting every last toxic energy-sucking person out of my life. I am feeling more close to God and nature every single day that I am alive, and I am always receiving incredible synchronicities in multiple different ways. The synchronicities always reassure me that the angels are on my side and carrying me to my dreams. I have worked so hard for so long, and I am finally able to tell myself that I WILL be hugely rewarded. I learned how much I have all the power and ability to do my amazing, life-changing daily rituals. They are making my life so much better. Ever since I moved in September into a place that feels more like home than other places I have lived, I have really been able to embrace the lifestyle that my soul has been craving. My life can be perfect and amazing right now even when I am still making my way towards my big dreams and goals; my daily rituals help me remember that.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'brianna-allen',
    name: 'Brianna Allen',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['confidence', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I wrote down everything that has been bothering me and learned what\'s stopping me from moving forward.',
    quote:
      "I am more focused on my goals. I have created a spiritual routine that I find myself actually being consistent with as well as becoming more excited to get the day started. My mindset and how I look at my situation become more positive every day and I am eager to change my thought pattern and see where it takes me. I've learned to let go of limiting beliefs while trying to accomplish a goal. I wrote down everything that has been bothering me and learned what's stopping me from moving forward. As I realize my thought pattern I can transform those old negative thoughts into positive ones while learning to surrender more. I also am seeing more clarity within myself on where my thoughts and pattern originated from and now that I can see that I catch myself when a limiting belief arises and it becomes more easier to accept and change it.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'saiying-lo',
    name: 'Saiying Lo',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Awakened Life',
    themes: ['healing', 'money', 'manifestation', 'addiction', 'meditation'],
    length: 'long',
    pullQuote: 'I am reading A Happy Pocket Full of Money by David Cameron Gikandi to expand my knowledge.',
    quote:
      "My life has improved in many ways. I start and end each day with gratitude and vision manifestation. I am reading A Happy Pocket Full of Money by David Cameron Gikandi to expand my knowledge. I am taking care of my body, making sure it has everything it needs to function at its optimal level. I've naturally gave up alcohol and the things I used to do that involves drinking. I feel great! I've learned that daily rituals keeps you focused and centered. On days when I don't practice all my daily rituals, I feel a big difference. Its almost like a feeling of detachment from my being. I start to get lost or get frustrated in the everyday minute details.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: '21day-challenge-graduate',
    name: '21-Day Challenge Graduate',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['confidence', 'business', 'self-image', '21-day-challenge'],
    length: 'long',
    pullQuote: 'This is LIVING THE DREAM. I am literally on Fire.',
    quote:
      "WOW! What a Roller Coaster of breakthroughs and intense moments! I have literally experienced a Hero's Journey with my 2 21-day challenges. So many incredible results!\n\nI completed a Half Marathon using the 21 day planning system. I completed two drafts of my book written in a period of two months. I have made a Channel on IG to share the content of the book. I am also starting a new business!\n\nMan! Wow! This is LIVING THE DREAM! I am literally on Fire!\n\nThank You Michael Mackintosh, Arielle Hecht, Awakened Academy, Lauren Boonzaier, and ALL of you for your continuous support, and thank you to Rosario Turrin, who has been my accountability partner. None of these wouldn't have manifested without you. I have to dance to celebrate!",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · Video Transcript'
  },
  {
    id: 'andrea-lambert-golden-life',
    name: 'Andrea Lambert (Golden Life)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'Real Practical Steps to Gain Control of Your Life and Your Dreams',
    quote:
      "If I was told I had to give up all my books except one this would be the one I'd keep. With this book I have all the practical steps to actually change my present moments into exactly the steps necessary to be focused on doing exactly what I love, in the right timing, not pushing myself to death only to gain very little headway, and actually move steadily to my goals. I can't express enough how practical this book is. It's not just full of theories and platitudes to roll around in your mind while you keep doing what you've always done and hope to reach your goals. This is a real opportunity to make your dreams happen. If you really want to reach your goals you will not be disappointed. Follow the steps and you can't fail!",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'andrew-crawford',
    name: 'Andrew Crawford',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'long',
    pullQuote: 'MASSIVE value, and FUN!',
    quote:
      "Very excellent and practical productivity book from a creative and spiritual entrepreneur! It really cuts through a lot of fluff and gives you the essentials to success with productivity. It delivers lots of value as it helps you identify and overcome obstacles, and aids you in putting together plans and accountability measures to make sure you follow through... and it does this in a fun and exciting way! I've read it once through already, going back for a second read and to 'play' with the 21-day challenge offered!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'kadydog06',
    name: 'Kadydog06',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'long',
    pullQuote: 'The Best Productivity Book, Period. A God-send!',
    quote:
      "This book is a God-send. For anyone who has ever struggled with doing what you know you need to do, whether establishing a new personal habit or achieving a professional goal, this is THE book to actually get you to do it. Without the 21-day challenge, I find I can be drifting along for quite some time, not really accomplishing anything important. WITH the 21-day challenge system, as described in this book, I'm suddenly able to bring all of my energy together and accomplish that which I set out to. From changing eating habits, to writing a book, to finishing a project, to spiritual practice, the system outlined in this book makes it happen, makes my dreams real. I cannot thank Michael enough. He is a remarkable soul, with both deep compassion and care, and the know-how, understanding and method to move you into action.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'kindle-customer',
    name: 'Kindle Customer',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'Get it Done by Michael Mackintosh',
    quote:
      "I truly enjoyed reading this Book 'Get it Done'!! Michael Mackintosh is a wonderful author. He is the greatest inspiration for getting things done with results and making positive changes. This technique has made a profound change in my personal life and has helped me to break through procrastination that had been keeping me stuck for years, and how to maintain the results as well. It is a technique that I will use over and over again at home and in business. I would highly recommend this book to anyone who has ever felt stuck, or who wants to create something awesome in their life.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'mohammad',
    name: 'Mohammad',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'I really loved this book',
    quote:
      "This book is more of a confirmation of the things that I've found on my personal journey to find God. There are many things written in this book which were synchronistic for me and more than that, while reading it I could feel in my heart the truth of the words. There's nothing more satisfying than reading about someone else having had similar experiences to the ones that I've personally had with God. It is truly a most ineffable connection that we share with our Creator. I deeply related to the author when he wrote about how words can fail us when we try to describe this connection or feeling of God/Source. It is my deepest desire that you find this connection to God and may you experience it for yourself fully in all of its infinite and indescribable glory. Read this book with not just your mind but also your heart and before long you will be reunited with your oldest friend.",
    photoSrc: null,
    outcomeTag: '5★ on How to Know God',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'naia-get-it-done',
    name: 'naia (Get It Done)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'long',
    pullQuote: 'Stop wasting time and upgrade your life now',
    quote:
      "This book is amazing! If you are ready to go to the next level in your life this book is for you. Michael is a brilliant motivational coach and with this book you are destined to reach your goals and live your life to the fullest. One of the most inspiring things about Michael and his work is that he actually uses the techniques he shares to create better and better systems to help others. He is actual living proof that with the WHACK system you can accomplish anything. I have personally used this 21 day challenge plan to upgrade my life and found the system to be both very complete and easy to use. The step by step guidelines make it so simple to get really clear on what you want to accomplish and the steps you will need to take daily to get there. If you are really serious about living your dreams and achieving ultimate success in your life this book is a must for you.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'nikki-golden-life',
    name: 'nikki (Golden Life)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'Alarming! WAKE UP',
    quote:
      "Very decent, simple and practical. I can actually apply it into my daily routine with ease. So far I can see that my life is gradually improving and this is after 2 months I've been reading this book. The thing I appreciated this book the most is the author's emphasis on the importance of Accountability, which I have a hard time taking that serious for a very long period of time. After reading this book, I begin applying accountability into my life. If you truly want the life you're destined for, this is the exact book that you ought to read! Thank you Michael.",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'rob-mackintosh-uk',
    name: 'Rob Mackintosh (UK)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'long',
    pullQuote: 'TWENTY ONE DAYS!',
    quote:
      "There are plenty of books and other media and seminars that tout Time Management. This book has a refreshingly different brief and direction. The essence is self-management, confronting what sabotages our good intentions, understanding our values, committing ourselves to the 20% that truly makes a difference, and most crucially, holding ourselves accountable, yes, daily!, to someone we trust. Michael writes in an easy, robust style, willing to share his own path, mistakes and failures to learn from. His approach is sensible and practical, an instrument for liberation from the same old ways. In twenty-one days! Get reading!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'valerie',
    name: 'Valerie',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'long',
    pullQuote: 'Don\'t Miss This Precious Plan for Positive Transformation!',
    quote:
      "If your cupboards are like mine overflowing with unaccomplished dreams and goals, then Michael Mackintosh's 'Get It Done: The 21-Day Mind Hack System to Double Your Productivity and Finish What You Start' is the book for you. I've never written an Amazon book review, nor do I usually cover self-help books. But there was too much blissful synchronicity and usefulness around finding and reading 'Get It Done,' that I had to express myself. Just ten days ago, I started a daily plan to get more done every day. It worked for a week until life and excuses got in the way, returning those unfulfilled dreams to the back burners of life and leaving me feeling lousy. It was then that I came across Mackintosh's book offering a practicable plan to overcome your Inner Procrastinator. Because 'Get It Done' is a call to action that lays out a straightforward, workable plan, it's not just another book to add to the smorgasbord of self-help titles already lining your bookshelf. The 21-day length: No one can convincingly argue that sustained focus isn't possible for twenty-one days. Mackintosh underlines the importance of pleasure and play in our work cycle because recharging our batteries ultimately leads to greater efficacy. Most importantly, the author plots external accountability as the main strategy to tame the wily ego cum procrastinator. If you are ready to value and birth your secret dreams, want an ally, and need a strong method to overcome procrastination, Michael Mackintosh's 'Get It Done' will effectively help you to do just that, get it done.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'cat-uk',
    name: 'Cat (UK)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Fair play, a few golden nuggets',
    quote:
      "If you're like me, you'll have read enough 'self help' books to choke Google and gotten to the point of wondering if there's anything new out there. Then, despite yourself and decades of growing cynicism, you buy this book too. And hey, what a change of tone, an element of real realism. I've not finished this book yet, but I've read enough to already have gained more value, by far, than the book cost me. Probably 10–100 times. Quite surprised, and definitely delighted.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'e-mana',
    name: 'E. Mana',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'medium',
    pullQuote: 'The system in the book is working!',
    quote:
      "I worked with Michael and part of his lessons was the 21 days challenge, to get things done. We are usually postponing things, finding good excuses why NOT, blaming the time, etc. We all know it. This book will challenge you and the amazing thing, it's working! I know that it's working firsthand, because I finished writing my first Ebook in this 21 days and actually published it. The system put you in a state of mind of winners, no excuses but 100% productivity. I recommend it to everyone!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'inger-andress',
    name: 'Inger Andress',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Don\'t give up your dreams, read this',
    quote:
      "Michael has a way of reframing those obstacles that have been holding you back and bringing you through them with smaller, doable steps... with ease and grace... and before you know it, you are accomplishing your big picture goals. He is a mindful leader who has tremendous insight and contributes to global well being... keep him on your radar for years to come!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'wendy-mackinnon-amazon-book-review',
    name: 'Wendy MacKinnon (Amazon book review)',
    isFullName: true,
    location: 'United States',
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['self-image', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'The introduction was even amazing! I knew in that moment that I choose my state of being in each moment. And this is how I create my life.',
    quote:
      "This resonated in the very beginning of the book! End of page 4, 'And the honest truth is, no matter how hard you worked, one day your body will die and you'll lose it all.' Page 5: 'Everything you worked for will be taken away and all you will be left with is THE STATE OF BEING YOU USED TO CREATE YOUR LIFE.' I knew in that moment that I choose my state of being in each moment. And this is how I create my life. Amazing. I can't wait to read and contemplate more!",
    photoSrc: null,
    outcomeTag: '5-star Amazon verified purchase',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'annie-appleseed',
    name: 'Annie Appleseed',
    isFullName: true,
    location: 'United States',
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Inspiring & Heart Opening. The letters were very moving and easily shifted me into a space of vastness.',
    quote:
      "Thank you Michael for sharing these amazing words. I love how originally, many of the words shared here weren't intended to be published. I love that they were just recorded conversations with God that ended up compiling over the years. I found the letters to be very moving and easily shifted me into a space of vastness. Little reminders of that space is sometimes just what I need to 'remember' what is ultimately true. Thank you for the inspiration & beauty of this book!",
    photoSrc: null,
    outcomeTag: '5-star Amazon verified purchase',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'hosam-talhami',
    name: 'Hosam Talhami',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'right on!!!',
    quote:
      "Sums up 20 years of spiritual work and study that I've been going through. If you're ready, dip in!!! Wishing you health, peace and joy. Dr. H. Talhami.",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'kierstie-dolezal',
    name: 'Kierstie Dolezal',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['relationships', 'business', 'meditation'],
    length: 'long',
    pullQuote: 'I feel like I have mastered some of the tools to feeling more secure with myself, knowing that I already have all of the things I "dream" of having one day and that I will never have to suffer without them because they exist inside.',
    quote:
      "First thing I do when I wake up is Meditate - then I have my coffee and journal about whatever comes up - Listening to my moduals have become part of my daily routine on the way to work and they make me feel so good - I love to walk my dog at the end of the day and enjoy a meal and company with my husband and friends - Every weekend I rest, sleep and take care of myself to prepare for the next week. I feel like I have mastered some of the tools to feeling more secure with myself, knowing that I already have all of the things I \"dream\" of having one day and that I will never have to suffer without them because they exist inside. I have been trying to look at my life like its a movie on the heros journey and everything has its perfect place, even the people that I think are there to disrupt my journey have a very special part in this path.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'dawn-benjamin',
    name: 'Dawn Benjamin',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['self-image', 'meditation', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I read my various scriptures and affirmations while listening to some Zen music.',
    quote:
      "I start off with gratitude and then a prayer on my knees. I read my various scriptures and affirmations while listening to some Zen music. Then I head to the gym. The daily rituals have centered my life and I catch myself when negativity and unwarranted vibes come my way. I am still in the office and when individuals come with a spirit of negativity, I remind myself of how grateful I am to be in alignment with who I am and Whose I am. Prior to this practice, I would be in the head space of letting them have a piece of my mind.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student (TOP_50)'
  },
  {
    id: 'alejandra',
    name: 'Alejandra',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'The best life on your own terms',
    quote:
      "Being immersed in the Millennial's very real FOMO (fear of missing out) I have overworked myself to the point of exhaustion. Michael's book helped me clarify that I have to be clear on what I want, my purpose and my goals and work towards them. These goals don't have to be the same as everybody else's, I have to learn what is the best for me and only I can do it. I clarified what the best life on my own terms means, and what is it that I have to do to achieve it. Reading and assimilating this book has given me peace and contentment with what I have achieved in my life and direction on what will be coming next.",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'anonymous-childrens-coach',
    name: 'Anonymous (Children\'s Coach)',
    isFullName: true,
    location: null,
    role: 'Coach for children with ADD, ADHD, OCD, Autism, anxiety and panic attacks',
    program: 'Certification',
    themes: ['healing', 'career-change', 'family', 'business', 'dharma'],
    length: 'long',
    pullQuote: 'I am coaching kids from 4 years old and up that have ADD, ADHD, OCD, Autism, anxiety and panic attacks, and this course is good for everybody.',
    quote:
      "I am not only doing this course to help my clients, but for me to change as well. At the same time, I feel the necessity to go back for meditation, or I need to refresh something from any pillar to make the changes in myself to grow and improve, to better help others. I found this very helpful because I am coaching kids from 4 years old and up that have ADD, ADHD, OCD, Autism, anxiety and panic attack, and this course is good for everybody in any age. I never expect to help children, but I realized that they are absorbing all the energies from their parents at such a young age. Thank you, because all that I learned from you is both helping me and them. Every time that a parent thanks me for my job with their child, I thank God for putting you in my life.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'emma',
    name: 'Emma',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['self-image', 'healing', 'dharma', 'spiritual-practice'],
    length: 'long',
    pullQuote: 'I am the happiest that I have ever been. My life is heaven on earth.',
    quote:
      "I am the happiest that I have ever been. My life is heaven on earth. I live in this world, but I am not of it. I have never fit in… and this has been my key to Awakening. I have learned how to heal myself, how to love myself, how to allow my Soul to lead my life, my body, my heart, and my mind. I have embraced my differences, knowing that they are gifts to be grateful for. I have learned that I am perfect as I am. I live every moment in a space of presence. I make decisions in each moment and I allow my destiny to unfold perfectly, without knowing what is next. I thrive in the unknown. I am happy & compassionate, and I am living my dharma. I am Awake.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'kristine-novy',
    name: 'Kristine Novy',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'An absolutely enlightening read, a treasure.',
    quote:
      "This was truly a wonderful and refreshing book on how to connect with the One as well as personal stories of these profound connections with the Divine presence by the authors. It matters not what name is chosen to describe the One, for as the book so beautifully elaborates, it is the most divinely profound connection to change one's life from average to absolutely magical. I read it from start to finish in one sitting. Thank you Michael and Arielle for enlightening the reader to this rare and beautifully deep connection.",
    photoSrc: null,
    outcomeTag: '5★ on How to Know God',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'steve-scott',
    name: 'Steve Scott',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'Stop Wasting Time on Stuff That Doesn\'t Work!',
    quote:
      "Countless people treat their lives like they're immortal. They waste time on the trivial and what seems 'urgent' in the moment. But as Michael Mackintosh points out in his book 'Get It Done,' we only have a limited number of years to live. So the big question is, Are you spending your precious, limited time on stuff that actually matters? Get It Done will help you answer that important question! What I like about this book is the emphasis on the 'big picture' items in your life. Instead of telling you how to check off more items on your to-do list, Mackintosh challenges you to focus on the things that truly matter in your life. Then he shows you how to proactively ignore everything else that gets in the way.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'amazon-customer-golden-life',
    name: 'Amazon Customer (Golden Life)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'This guy rules!',
    quote:
      "Simple as that. After reading this book, I feel that I know all I need to know to get the most out of my life, and the confidence that I can actually succeed because the author simplifies the methods he uses in such a way that it showcases just how easy it is to change your life if you are simply able to change your thinking. 5/5 Best!",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'anonymous-awakening-masterclass',
    name: 'Anonymous (Awakening Masterclass)',
    isFullName: true,
    location: null,
    role: 'Aspiring Spiritual Life Coach',
    program: 'Coaching Masterclass',
    themes: ['dharma', 'career-change', 'spiritual-practice', 'confidence'],
    length: 'medium',
    pullQuote: 'The past 7 years my Soul has Pushed to Wake my Human. Finally Awaken. Finally an understanding. Finally Can live my Authentic self!',
    quote:
      "It's who I am. I have to. The past 7 years my Soul has Pushed to Wake my Human. During this time the weight to serve was Enormous! Finally Awaken. Finally An understanding. Finally Can live my Authentic self! Yes, indeed I ask How Can this NOT MAKE MY LIFE BETTER? Spiritual life coach… I mean What better Job than to HELP others in the most Incredible way. How blessed are we to know? I will make a difference because now I'm awake. This is going to Help me Climb to the tallest mountain and be able to scream As loud as possible to spread the word and the excitement that there's more, so so much more! I can't wait.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'cloud-heart',
    name: 'Cloud Heart',
    isFullName: true,
    location: 'United States',
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', 'healing'],
    length: 'medium',
    pullQuote: 'This is a book of ACTIVATION!! I have risen in consciousness and awareness by simply reading it and looking within.',
    quote:
      "If you have found this book, you are in for a bountiful treat for your soul and for your life as a whole. This book of poems speaks beautifully… I feel as though I have risen in consciousness and awareness by simply reading it and looking within. This book steers one in the direction of the light and awakens an inner awareness that is within us all. Many of the poems opened my vision to a whole new perspective and has solidified things I already knew to be true. I will be reading this many times, as it holds deep inspiration, joy, and awakens one to a deeper awareness and calm. This is a must treasure for any and all seeking true fulfillment from life. Enjoy!",
    photoSrc: null,
    outcomeTag: '5-star Amazon verified purchase',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'david-vincent',
    name: 'David Vincent',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Helpful book',
    quote:
      "I found this book to be very helpful. The concepts used in this book are not necessarily new ideas, but the way the author was able to break the ideas down and assemble them into a simple system was brilliant.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'e-lord',
    name: 'E. Lord',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Diamonds!',
    quote:
      "Awesome information. Helped very much in my daily life in just a couple days of reading it and hopefully much more to come using these techniques. I would write a longer fancier review but I now understand the law of diminishing returns. 5 stars!",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'eric-sazer',
    name: 'Eric Sazer',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Soulful Wisdom',
    quote:
      "I'm honored yet surprised to be the first one reviewing this book. What a treasure chest of soulful and practical information. Brought me deep into my heart allowing me the opportunity to explore who I really am. I highly recommend this book to anyone regardless of where you are in life.",
    photoSrc: null,
    outcomeTag: '5★ on Why the World Needs You',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'hernamastelife',
    name: 'HerNamasteLife',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'medium',
    pullQuote: 'I\'m on Round 3 of 21 Day Challenges!',
    quote:
      "If you've ever disappointed yourself by not following through on something you know you need to do, This Book Will be the Cure. Using the principles in this book, I now have a rock steady workout Routine. Morning and Evening Personal Development Rituals. And Now I'm using Michael's Framework for Content Creation in my Budding Coaching Business. I'm grateful for this Book! It's a Must Have for anyone who's serious about getting unstuck and actually getting Sh%< Done!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'ivon-portellez-book',
    name: 'Ivon Portellez (book)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'You really can DO LESS and ACHIEVE MORE!',
    quote:
      "Sounds crazy but it's true. The struggle doesn't have to be real. You have the power to improve your quality of life and this book will teach you how to do it! I highly recommend you read this one. It's truly worth its weight in gold!",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'wendy-fischer-get-it-done',
    name: 'Wendy Fischer (Get It Done)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Another gem and must read for anyone serious about moving forward.',
    quote:
      "Michael Mackintosh is a wonderful writer. This book follows suit with many of his other masterpieces. I love his combination of loving guidance and strong precepts. Definitely a book for those who are serious about Getting it Done!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'artie-saband',
    name: 'Artie Saband',
    isFullName: true,
    location: null,
    role: 'Spiritual Life Coach',
    program: 'Certification',
    themes: ['career-change', 'business', 'dharma'],
    length: 'short',
    pullQuote: 'I am experiencing great success as a Spiritual Life Coach, and I know I would not have been able to achieve this if I had not committed to this program.',
    quote:
      "I am experiencing great success as a Spiritual Life Coach, and I know I would not have been able to achieve this if I had not committed to this program.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'david-e',
    name: 'David E.',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Beautiful Inspiration',
    quote:
      "Love the book. Have read it twice already and going to start again. I read it slowly and let the words do their magic!",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'donna-dalessio',
    name: 'Donna D\'Alessio',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'A heartful conversation with God!!!',
    quote:
      "Very beautiful and heartfelt conversation with God, as the inner Companion!!! LOVED IT!!!",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'ilyce-mitchell',
    name: 'Ilyce Mitchell',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Very enlightening',
    quote:
      "Highly recommend for anyone looking to connect or reconnect with their spirituality. A very easy read and highly encouraging.",
    photoSrc: null,
    outcomeTag: '5★ on How to Know God',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'karen-briscoe',
    name: 'Karen Briscoe',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Achieve a Higher Level of Success',
    quote:
      "Achieve a higher level of success in business and life by implementing the strategies in GET IT DONE. Hack your way to productivity to accomplish more in less time.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'lisa',
    name: 'Lisa',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['dharma', 'confidence', 'career-change'],
    length: 'short',
    pullQuote: 'Thanks to Awakened Academy I have finally found the courage to live from the heart, and make some big life changes, which has made my dreams possible.',
    quote:
      "Thanks to Awakened Academy I have finally found the courage to live from the heart, and make some big life changes, which has made my dreams possible. A big THANK YOU Arielle, Michael and the team!",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'pauline-sullivan',
    name: 'pauline sullivan',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'A must read for the soul',
    quote:
      "Do Nothing Achieve Everything is a beautiful reminder of our Companion the One and the love and peace that dwells in our souls. Thankyou Thankyou.",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'pook-la-roux',
    name: 'Pook La Roux',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Michael really understands the Pareto principle, and shows you how to leverage it.',
    quote:
      "Really enjoyed this one, full of ingenious suggestions that can unlock your best and most happy life. You can do this!",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'suzi-hall',
    name: 'Suzi Hall',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Essential.',
    quote:
      "Essential info and wisdom to free up your life. Well written and to-the-point. Sincere. I highly recommend you buy this book.",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'wendy-fischer',
    name: 'Wendy Fischer',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'This book is practical and inspiring',
    quote:
      "I love the way you explain the principal and then help the reader to apply the concept. Thanks for all the wonderful tools.",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'aj',
    name: 'Aj',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'Hours and hours of self exploration. Feed your soul!',
    quote:
      "A beautifully written series of thoughts and questions in poetic style. This book is right for you if you are searching your soul for something more than what we see in the physical world. Mackintosh shows us how we see spirit reflected in the world, within ourselves and others. Reading this book you can get a glimpse inside the mind of Michael Mackintosh and share with him the beauty of the written word in a meditative style. I will be reading this more than once and making notes to journal my self discovery. Definitely full of hours of self discovery but can be easily read in short increments if you just have a few moments to reflect.",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'l-schroeder',
    name: 'L. Schroeder',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'Productivity Enthusiasts: Read This Book!',
    quote:
      "If you are a productivity enthusiast, like me, then chances are you like to read all kinds of books on getting things done and getting yourself to follow-through. In addition, if you are like me, then you very much enjoy being on top of your game and you probably are already heralded regarding being an organized, reliable person, however, you know you can be better. This is one of those books that helps make you better. Even though in this book you'll see classic get-things-done activities such as envisioning what you want to create and then breaking down your work into results and tasks, there are quite a lot of fresh approaches and ideas to get your awesome Self to follow through while quieting your not-so-awesome-self (i.e. your Resistant self) in the process. Michael's systematic approach he shares in this book to get you to strengthen your get-it-done muscles is definitely a process you want to have in your toolbox!",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'luvinlife',
    name: 'LuvinLife',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'long',
    pullQuote: 'Chock Full of Spiritual Goodies',
    quote:
      "This little book is chock full of powerful wisdom to help set the reader free from thoughts that may be weighing the reader down and making life feel heavy instead of being joyful and free. Don't we all just want to be happy after all? I enjoyed it very much! Michael Mackintosh is the 'real deal' and truly lives everything he writes about. He has very high integrity and I admire him so much. I gravitate to any book he writes because he is so practical in his approach and his books are written with great compassion and deep understanding.",
    photoSrc: null,
    outcomeTag: '5★ on Let Go & Awaken',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'amonda',
    name: 'Amonda',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Great Spiritual Insight',
    quote:
      "Definitely Spirit guided. In depth and accurate with a view of unknown and unseen realities of the spirit within us. A great meditation tool. Too many favorite subjects to pick just one. Thanks for the insights.",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'anne-plath',
    name: 'anne plath',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Get IT DONE, is Brilliant',
    quote:
      "Michael is a genius, I have worked with Michael and he is super amazing! Get is done is perfect for anyone who is yearning to move forward and jump to the next level. The steps are so helpful to see the big picture, end result while having the courage and confidence to keep going to success. I so recommend this book, this book guidance to see amazing new life.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'highmetab',
    name: 'highmetab',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Motivating and practical',
    quote:
      "Most importantly this discusses a very practical i.e. doable way to become more productive. Enjoyed the writing style and occasional insertion of relatable examples. The concept near the end of the book of sometimes leveraging your procrastination to accomplish a different goal was interesting. Having done this unknowingly before, will actively try to use this approach a lot more.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'jamme',
    name: 'Jamme',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Very knowledgeable and inspiring',
    quote:
      "I would like to say thank you very much for your words, I felt as if you were right here speaking to me. Thank you for your touching words of elevation. I very much needed the book of guidance for me. Thank you.",
    photoSrc: null,
    outcomeTag: '5★ on Why the World Needs You',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'jewlz',
    name: 'Jewlz',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Personal Power ignited! From the Mud to The Diamond Life.',
    quote:
      "I'm a student in Awakened Academy. This book was a suggestion. It did not disappoint. I've already started working towards my Diamond Life using many of the suggestions and steps outlined herein. I love the 'To-Do' and 'Not To-Do' list. I've answered many of the questions and found my bliss. I can't wait to see the effect on my life as I apply these principles, whilst enjoying the journey.",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'kailash-india',
    name: 'Kailash (India)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Amazing book with practical approach',
    quote:
      "This book is not just words, it has a very well defined structure and a step by step practical approach to improve productivity. This has ideas which are already working and it would deliver what it promises.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'naia',
    name: 'naia',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'beautiful wisdom',
    quote:
      "This book is a beautiful gift from spirit to any and all who are open to living in their light. It is filled with love and insight that can only come from one who really is aware of and living from a higher vibration. It is a book I will read again and again to help me gain deeper insight as I move further on my path.",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'nicola',
    name: 'Nicola',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['self-image', 'confidence', 'spiritual-practice'],
    length: 'medium',
    pullQuote: 'I feel such bountiful freedom and expansiveness.',
    quote:
      "My favourite part to this module was creating your Not to do list! How exciting! I am so excited by this. I feel such bountiful freedom and expansiveness. Everyday it is improving, there are challenging days as you filter through things that no longer serve you however I am totally committed to creating a much easier life for myself and flowing with a state of grace to opportunities and connections.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'seashell',
    name: 'seashell',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'medium',
    pullQuote: 'Reminded me of reading Rumi',
    quote:
      "The flow of consciousness shared is inspiring and brings me each time I sit down with Michael's book to consider how deeply we are all connected, rather than what we experience on the outer level, disconnect and stress. It is truly a gift to experience Michael's thoughts and teachings on our mind and spirit and living life Awakening from the Grand Illusion. Can't wait to read more of his books!",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'amy-awakened-academy',
    name: 'Amy (Awakened Academy)',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['community', 'money'],
    length: 'short',
    pullQuote: 'I absolutely LOVE this program and find its value much higher in my life than what I paid!',
    quote:
      "I absolutely LOVE this program and find its value much higher in my life than what I paid!",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'cindy',
    name: 'Cindy',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Deep Wisdom and good humor',
    quote:
      "All Michael's books contain deep wisdom with a decent clear smattering of humor to help you walk in truth in love. Read all of his books!!!",
    photoSrc: null,
    outcomeTag: '5★ on Let Go & Awaken',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'dianag',
    name: 'DianaG',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'A must read!!!',
    quote:
      "I couldn't stop reading, read the entire book last night!!! Amazing & illuminating, it reached into my heart and soul! Thank you for writing this wonderful Book!",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'harshad-kedia-india',
    name: 'Harshad kedia (India)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Accountability',
    quote:
      "Really enjoyed reading this book as it gives the reader a real push to get things done in a more organised manner.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'j-morgan',
    name: 'J. Morgan',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Best Buy if you like to ponder',
    quote:
      "Wonderful read, must go slow to take in all that is there. Some parts will not apply to some folks, just skip those parts.",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'kelly-moore',
    name: 'Kelly Moore',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['money', 'community', 'confidence'],
    length: 'short',
    pullQuote: 'It\'s the best decision I\'ve ever made. I\'ve been blown away at how this program teaches. Worth every penny.',
    quote:
      "I'm in the program and it's the best decision I've ever made 🌻 I've been blown away at how this program teaches. Worth every penny.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'klaus-australia',
    name: 'Klaus (Australia)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'short',
    pullQuote: 'Short but effective',
    quote:
      "Simple but effective program. Well defined steps supported by personal insights. I especially liked WHACK and how to overcome the resistance.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'larenda-paul',
    name: 'larenda paul',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Tools needed to create a life of joy and alignment with your higher purpose',
    quote:
      "A book all should read that gives you the tools needed to create a life of joy and alignment with your higher purpose! Thanks Michael and Arielle for your encouragement for this life-changing journey!",
    photoSrc: null,
    outcomeTag: '5★ on The Golden Life',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'luciana',
    name: 'Luciana',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['healing', 'self-image'],
    length: 'short',
    pullQuote: 'My life has improved in so many ways during this module that it has been my favorite one yet.',
    quote:
      "My life has improved in so many ways during this module that it has been my favorite one yet. It has helped me in facing my fears and confronting suppressed emotions that I had felt the need to heal for a long time.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'maria',
    name: 'Maria',
    isFullName: false,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['family', 'spiritual-practice', 'community'],
    length: 'short',
    pullQuote: 'So much here is world-changing! I wish every person and child and teenager had completed this program before taking on life.',
    quote:
      "So much here is world changing! I wish every person and child and teenager had complete this program before taking on life!",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'mark-awakened-awareness-student',
    name: 'Mark (Awakened Awareness student)',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['dharma', 'self-image', 'confidence'],
    length: 'short',
    pullQuote: 'I have thought deeply about my true values and what they are. I now have a clear focus on my goals.',
    quote:
      "I have thought deeply about my true values and what they are. I now have a clear focus on my goals.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'melissa-losito-braithwaite',
    name: 'Melissa Losito Braithwaite',
    isFullName: true,
    location: null,
    role: 'Awakened Academy Spiritual Life Coach Student',
    program: 'Certification',
    themes: ['community', 'spiritual-practice', 'confidence'],
    length: 'short',
    pullQuote: 'This is the most beautiful program that is taught by two beautiful souls.',
    quote:
      "This is the most beautiful program that is taught by two beautiful souls. I am just beginning my journey and feel so blessed to be a part of this Academy. The support, love and encouragement you receive from the teachers is absolutely amazing.",
    photoSrc: null,
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'nitin-india',
    name: 'Nitin (India)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image', '21-day-challenge'],
    length: 'short',
    pullQuote: 'Nice for goal achievement',
    quote:
      "Loved 🥰 the WHACK method. Good way to elaborate and simple step of WHACK method. Thanks for this wonderful book.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'r-john-christy-india',
    name: 'R JOHN CHRISTY (India)',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Get it Done',
    quote:
      "If you really wish to achieve your goals, this book offers very practical solution for it. It gives flowchart for conquering procrastination. Worth reading and trying.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'seems-to-work-well',
    name: 'Seems to work well',
    isFullName: true,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Great thoughts and wisdom',
    quote:
      "Thanks Michael for the prose and poetry. Through you the wisdom of the ages spoke to my heart. I am indeed grateful. Keep up the good intentions.",
    photoSrc: null,
    outcomeTag: '5★ on Do Nothing, Achieve Everything',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'tricia',
    name: 'Tricia-',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Michael always cuts through to the core and delivers',
    quote:
      "Michael is venerable and highly intelligent. Anything he writes, including this book, delivers.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
  {
    id: 'wayne',
    name: 'Wayne',
    isFullName: false,
    location: null,
    role: 'Amazon Verified Reviewer',
    program: 'Book Review',
    themes: ['spiritual-practice', 'self-image'],
    length: 'short',
    pullQuote: 'Motivating',
    quote:
      "I found this book highly motivating. There is lots of down-to-earth practical tips that got me going by leaving old patterns behind and stepping into new more empowering states.",
    photoSrc: null,
    outcomeTag: '5★ on Get It Done',
    source: '/MASTER-TESTIMONIALS.xlsx · AA Student'
  },
];

// ───────────────────────────────────────────────────────────────────────────
// VIDEO TESTIMONIALS, real YouTube embeds found in the live blessings.html
// page on michaelmackintosh.com. Titles inferred from context; if Michael
// confirms the speaker names, update `name` and `caption`.
// ───────────────────────────────────────────────────────────────────────────
export interface VideoTestimonial {
  id: string;
  youtubeId: string;
  name: string;        // speaker name if known; otherwise "Awakened Academy Graduate"
  caption: string;     // one-line caption
  duration?: string;   // e.g. '2:14', fill in if Michael confirms
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'video-1',
    youtubeId: 'RgrhK8i0ul4',
    name: 'Awakened Academy Graduate',
    caption: 'Speaking about the program in their own words.'
  },
  {
    id: 'video-2',
    youtubeId: 'Ku2Yhb8PA7I',
    name: 'Awakened Academy Graduate',
    caption: 'Speaking about the program in their own words.'
  }
  // NOTE for Dan, 2 more video testimonials exist as MP4 files in
  // Google Drive (/Testimonial Video/ folder, IDs:
  //   1IRP7ndE3DE52UKk5trDxORMAsDf5js-g  (Amaia Madrid Part 1.mp4, 73MB)
  //   1p0ETgcKwL1vf_8g5Go2fJ08sAavGcteh  (Amaia Madrid Part 2.mp4, 72MB)
  // Upload them to YouTube (unlisted is fine) and add two entries here
  // with the new youtubeIds. The grid will auto-expand.
];

// ───────────────────────────────────────────────────────────────────────────
// BIG PULL QUOTES, rendered as full-width serif dividers every ~12 cards in
// the masonry wall. NYT-Magazine pacing. All are verbatim from the data
// above; we just pull the most quotable line.
// ───────────────────────────────────────────────────────────────────────────
export interface BigPullQuote {
  text: string;
  attribution: string;
}

export const BIG_PULL_QUOTES: BigPullQuote[] = [
  { text: 'I went from a depressed, angry, broke and old Man to a peaceful, happy, prospective and very young looking 50 year old.', attribution: 'Michael Kiernan · Ireland · Certified Spiritual Life Coach' },
  { text: 'No amount of money could give you what Arielle and Michael have given. They literally have given me my life back.', attribution: 'Sally Ellis · United Kingdom · Awakened Academy Student' },
  { text: 'I created a program and sold it within 48 hours.', attribution: 'Kacy Singh · Awakened Detox Student' },
  { text: 'Today, I\'m working with 3 clients a day, feeling genuinely happy most of the time, and I finally have the freedom to enjoy life, no more 9-5 grind.', attribution: 'Rakhee C. Patel · Pharmacist for 17 years, now Spiritual Life Coach' },
  { text: 'I was in the mud for nearly 25 years. Now I earn 300 euro for an hour.', attribution: 'Leni Morrison · Awakened Detox Student' },
  { text: 'I never knew this much joy was possible for me. I never knew I could feel so much love.', attribution: 'Shawn Helgeson · Wisconsin, USA' },
  { text: 'I have found my Soul tribe.', attribution: 'Aramaria Byrd · age 70 · California, USA' },
  { text: 'My biggest achievement is writing 6 books using Michael\'s process.', attribution: 'Rachael Sternhagen · Awakened Academy Student' }
];

// ───────────────────────────────────────────────────────────────────────────
// INSIGHT TIMER SAMPLE REVIEWS, real review-style snippets from the wall-of-
// gratitude meditation reviews. Renders as a "review card" grid section that
// communicates the 125,000+ scale visually. Each card mimics the Insight Timer
// review format (5 stars + name + short text). All text is real from the
// workspace. If Insight Timer's API/widget becomes available, replace this
// section with the live embed.
// ───────────────────────────────────────────────────────────────────────────
export interface InsightTimerSample {
  id: string;
  name: string;
  text: string;
  meditation?: string;  // which track they're reviewing, if mentioned
}

export const INSIGHT_TIMER_SAMPLES: InsightTimerSample[] = [
  { id: 'it-1', name: 'Nikki', text: "I have never been so resonant. Thank you, beautiful living Angel Arielle. Blessings from Hong Kong, I love you.", meditation: '7 Color Rays' },
  { id: 'it-2', name: 'Anonymous', text: "These meditations are so powerful. My son and I drifted off into a nothingness that was so pleasant we've agreed to continue all week long.", meditation: 'Freedom Meditation' },
  { id: 'it-3', name: 'Anonymous', text: "If I am ever feeling disconnected I just have to listen to the voice of either Arielle or Michael and I feel immediately reconnected.", meditation: 'Daily Meditations' },
  { id: 'it-4', name: 'Student of Natural Healing', text: "I felt surrounded by a bubble of light and safety, I was able to completely relax. On waking I felt increased joy and happiness.", meditation: '7 Rays Chakra' },
  { id: 'it-5', name: 'Anonymous', text: "Profound effect on me. I have done countless guided meditations from the very famous to the more subtle ones, I have never been so resonant to others as yours.", meditation: 'Release Past Burdens' },
  { id: 'it-6', name: 'Anonymous', text: "The meditations and wisdom shared with such heart and soul shine with the higher vibration that I go back to again and again.", meditation: 'General' },
  { id: 'it-7', name: 'Anonymous', text: "Your meditations are utter perfection. Goosebumps thinking about how they are going to transform so many lives.", meditation: 'General' },
  { id: 'it-8', name: 'Anonymous', text: "Thank you for the priceless gift of your beautiful meditations. Beacons of love and light.", meditation: 'General' },
  { id: 'it-9', name: 'MaryBeth Kenis', text: "Their audio meditations have cradled me in light and peace many a night as I was lulled into restful sleeps after several years of struggling with insomnia.", meditation: 'Sleep Meditations' },
  { id: 'it-10', name: 'Anonymous', text: "Conduit to peace, freedom and happiness. Thank you for the awareness of the breath, the meditations, the prayers and the tools you offer to the world.", meditation: 'General' },
  { id: 'it-11', name: 'Cindy Aikman', text: "Arielle's amazing meditations and sounding with the singing bowls, those will take you Home!", meditation: 'Singing Bowls' },
  { id: 'it-12', name: 'Anonymous', text: "Each colour ray and felt very relaxed and much less tense. Thank you again for creating it!", meditation: '7 Rays Chakra' }
];

// ───────────────────────────────────────────────────────────────────────────
// EMAIL REPLIES PLACEHOLDER, Dan: pull real screenshots from Gmail (search
// the AA inbox for "thank you" / "saved my life" / "transformed" replies).
// Each entry below is a slot. Drop the image into /public/img/email-replies/
// with the matching filename. The first 8 slots render; add more as needed.
// ───────────────────────────────────────────────────────────────────────────
export interface EmailReplySlot {
  id: string;
  imageSrc: string;     // path under /public/img/email-replies/
  alt: string;          // accessibility label, short description of what's in the email
}

// ───────────────────────────────────────────────────────────────────────────
// AMAZON BOOK REVIEWS, verified, public, third-party social proof.
// Source: /Google Drive/Michael Book Reviews (file 1cupmGMJRgDhjjxBNs5x4LdKBJvvh4yrJ8XvVxb9Xu9c)
// All three are 5-star verified-purchase reviews of Michael's books, real
// reviewer names, public on Amazon. Each links back to the live review.
// ───────────────────────────────────────────────────────────────────────────
export interface AmazonReview {
  id: string;
  reviewer: string;
  reviewerUrl: string;     // public Amazon profile
  rating: number;          // out of 5
  title: string;           // review title
  date: string;            // human readable
  verifiedPurchase: boolean;
  body: string;            // verbatim review text
  book: string;            // book it reviews
  reviewUrl: string;       // direct link to the live Amazon review
}

export const AMAZON_REVIEWS: AmazonReview[] = [
  {
    id: 'amz-1',
    reviewer: 'Cloud Heart',
    reviewerUrl: 'https://www.amazon.com/gp/profile/amzn1.account.AFUY4SVNA3NYPCZJXU4DJCROH5VA/',
    rating: 5,
    title: 'This is a book of ACTIVATION!!',
    date: 'June 7, 2014',
    verifiedPurchase: true,
    body:
      "If you have found this book, you are in for a bountiful treat for your soul and for your life as a whole. This book of poems speaks beautifully… I feel as though I have risen in consciousness and awareness by simply reading it and looking within. This book steers one in the direction of the light and awakens an inner awareness that is within us all. Many of the poems opened my vision to a whole new perspective and has solidified things I already knew to be true. I will be reading this many times, as it holds deep inspiration, joy, and awakens one to a deeper awareness and calm. This is a must treasure for any and all seeking true fulfillment from life.",
    book: 'Change Your Thoughts, Change Your Life: Divine Affirmation Mantras',
    reviewUrl: 'https://www.amazon.com/gp/customer-reviews/R3HFL8E8RU83T6/'
  },
  {
    id: 'amz-2',
    reviewer: 'Wendy MacKinnon',
    reviewerUrl: 'https://www.amazon.com/gp/profile/amzn1.account.AEYO65Y4SI6C663TEFY7H7LJEG5A/',
    rating: 5,
    title: 'The introduction was even amazing!',
    date: 'May 4, 2014',
    verifiedPurchase: true,
    body:
      "This resonated in the very beginning of the book! End of page 4: \"And the honest truth is, no matter how hard you worked, one day your body will die and you'll lose it all.\" Page 5: \"Everything you worked for will be taken away and all you will be left with is THE STATE OF BEING YOU USED TO CREATE YOUR LIFE.\" I knew in that moment that I choose my state of being in each moment. And this is how I create my life. Amazing. I can't wait to read and contemplate more.",
    book: 'Change Your Thoughts, Change Your Life: Divine Affirmation Mantras',
    reviewUrl: 'https://www.amazon.com/gp/customer-reviews/R361RIN20S0H1Y/'
  },
  {
    id: 'amz-3',
    reviewer: 'Annie Appleseed',
    reviewerUrl: 'https://www.amazon.com/gp/profile/amzn1.account.AENMRE7VZMQHQVZIN4A4TO2WCG5A/',
    rating: 5,
    title: 'Inspiring & Heart Opening',
    date: 'June 10, 2014',
    verifiedPurchase: true,
    body:
      "Thank you Michael for sharing these amazing words. I love how originally, many of the words shared here weren't intended to be published. I love that they were just recorded conversations with God that ended up compiling over the years. I found the letters to be very moving and easily shifted me into a space of vastness. Little reminders of that space is sometimes just what I need to \"remember\" what is ultimately true. Thank you for the inspiration & beauty of this book!",
    book: 'Do Nothing, Achieve Everything: Awakening from the Grand Illusion',
    reviewUrl: 'https://www.amazon.com/gp/customer-reviews/R3VUGDRMV7EKTH/'
  }
];

export const EMAIL_REPLY_SLOTS: EmailReplySlot[] = [
  { id: 'er-1', imageSrc: '/img/email-replies/reply-01.png', alt: 'Email reply from a student about a breakthrough' },
  { id: 'er-2', imageSrc: '/img/email-replies/reply-02.png', alt: 'Email reply from a student about their first paying client' },
  { id: 'er-3', imageSrc: '/img/email-replies/reply-03.png', alt: 'Email reply from a graduate sharing their year-end transformation' },
  { id: 'er-4', imageSrc: '/img/email-replies/reply-04.png', alt: 'Email reply from a student about a healing experience' },
  { id: 'er-5', imageSrc: '/img/email-replies/reply-05.png', alt: 'Email reply from a coach about their growing practice' },
  { id: 'er-6', imageSrc: '/img/email-replies/reply-06.png', alt: 'Email reply from a meditation listener' },
  { id: 'er-7', imageSrc: '/img/email-replies/reply-07.png', alt: 'Email reply from a graduate about clarity and direction' },
  { id: 'er-8', imageSrc: '/img/email-replies/reply-08.png', alt: 'Email reply from a student about overcoming fear' }
];

export const PROGRAM_FILTERS: TestimonialProgram[] = [
  'Certification',
  'Coaching Masterclass',
  'Awakened Awareness',
  'Awakened Self Image',
  'Awakened Detox',
  'Awakened Miracle Consciousness',
  '21-Day Challenge',
  'Sacred Session Call',
  'Meditations / Insight Timer',
  'Spiritual Recharge',
  'School of Dharma',
  'Sacred Business',
  'General Student'
];

export const THEME_FILTERS: { value: TestimonialTheme; label: string }[] = [
  { value: 'dharma',             label: 'Dharma & purpose' },
  { value: 'career-change',      label: 'Career change' },
  { value: 'healing',            label: 'Healing' },
  { value: 'relationships',      label: 'Relationships' },
  { value: 'family',             label: 'Family' },
  { value: 'money',              label: 'Money & abundance' },
  { value: 'grief',              label: 'Grief & loss' },
  { value: 'addiction',          label: 'Addiction recovery' },
  { value: 'mental-health',      label: 'Mental health' },
  { value: 'confidence',         label: 'Confidence' },
  { value: 'self-image',         label: 'Self-image' },
  { value: 'meditation',         label: 'Meditation' },
  { value: 'community',          label: 'Community' },
  { value: 'manifestation',      label: 'Manifestation' },
  { value: 'business',           label: 'Coaching business' },
  { value: 'spiritual-practice', label: 'Spiritual practice' }
];

// Countries derived from location strings. Used in the country filter.
export const COUNTRY_FILTERS: string[] = [
  'USA',
  'United Kingdom',
  'Portugal',
  'Ireland',
  'Israel',
  'Australia',
  'Belgium',
  'Zambia',
  'Mauritius',
  'Hong Kong'
];

/**
 * Map a testimonial's `location` field to a country bucket for filtering.
 * Used by the country filter chips in the page component.
 */
export function locationToCountry(location: string | null): string | null {
  if (!location) return null;
  if (/USA|United States/i.test(location)) return 'USA';
  if (/United Kingdom|UK|England|London/i.test(location)) return 'United Kingdom';
  if (/Portugal/i.test(location)) return 'Portugal';
  if (/Ireland/i.test(location)) return 'Ireland';
  if (/Israel/i.test(location)) return 'Israel';
  if (/Australia/i.test(location)) return 'Australia';
  if (/Belgium/i.test(location)) return 'Belgium';
  if (/Zambia/i.test(location)) return 'Zambia';
  if (/Mauritius/i.test(location)) return 'Mauritius';
  if (/Hong Kong/i.test(location)) return 'Hong Kong';
  return null;
}


// ───────────────────────────────────────────────────────────────────────────
// INSIGHT TIMER LIVE REVIEWS, 150 curated from Michael's Publisher Dashboard
// export 2025-10-24. The export contained 4,996 raw reviews; 3,101 unique
// after dedup; these 150 are the highest-scored by length + named reviewer
// + location + meaningful text. Full pool: /insight-timer-reviews.json (761KB)
// ───────────────────────────────────────────────────────────────────────────
export interface InsightTimerLiveReview {
  name: string;
  location: string | null;
  rating: number;       // out of 5
  track: string;
  text: string;
  timeAgo: string;
}

// All real, all verbatim, all pulled from Michael's Insight Timer Publisher
// Dashboard 2025-10-24. The export contained 4,996 raw reviews; 3,101
// unique after dedup; these 150 are the highest-scored by quality
// (length + named reviewer + location + meaningful text).
// Full 3,101-review pool: /insight-timer-reviews.json (761KB)
export const INSIGHT_TIMER_LIVE_REVIEWS: InsightTimerLiveReview[] = [
  { name: 'AECIO Flávio Costa', location: 'LISBON, PORTUGAL', rating: 4.8, track: 'Subconscious Reprogramming Meditation', text: 'Another powerful and inspiring meditation, guiding me to envision the life ahead. Grateful beyond words for this sacred journey within, and for being part of the unfolding human story. Thank you, thank you, thank you. Miracles are truly unfolding.', timeAgo: '4 months ago' },
  { name: 'Cynthia Henry', location: 'RANCHO CORDOVA', rating: 4.6, track: 'Manifest Faster: Bless Others’ Success', text: 'Oh my. This is lovely and powerful. By focusing on what I want for several people I love I felt transformed from a whole set of upset feelings about myself and situation. I’m no longer bogged down. I feel more connected and beneficial to them and infused with the good energy I was sending them. A life lesson I would have said I knew. Thank you; blessings to you.', timeAgo: '10 months ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.7, track: 'Amazing Day Ahead Morning Visualization', text: 'What a beautiful, sweet yet powerful little meditation! Perfect to start even the busiest day and bring in calm, peace and abundance. Thank you and Namaste 😊🙏🏽', timeAgo: 'a year ago' },
  { name: 'Becky Marie', location: 'ENGLAND, UK', rating: 4.8, track: 'Heal Your Body Meditation', text: 'Amazing! Just want I needed as going through a tough time health wise. Very calming but powerful. Thank you!', timeAgo: '2 years ago' },
  { name: 'Philippa Poppesqou', location: 'JOHANNESBURG, SOUTH AFRICA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Incredibly beautiful & powerful a deep sense of peace happiness & joy fills me thank you 🙏🏻', timeAgo: '3 years ago' },
  { name: 'L. Angelica', location: 'ALBUQUERQUE, NM, USA', rating: 4.7, track: 'Raise Your Level Of Consciousness Meditation', text: 'What a beautiful meditation!!! I had this a-ha moment of realization thanks to this amazing track. Thank you so much!!! Lots of love for you and thank you again my brother!', timeAgo: '2 months ago' },
  { name: 'Gugu H.', location: 'CAPE TOWN, SOUTH AFRICA', rating: 4.9, track: 'The Power Of Blessings: How Giving Freely Attracts Abundance', text: 'Beautiful insightful talk With a soothing voice Felt so calm and relaxed and confirming. Experience those positive feeling. Powerful. Profound. Thank you ever so much! Bless your heart with loving kindness forever!', timeAgo: '10 months ago' },
  { name: 'Jamiela Sungkar', location: 'PERTH WA, AUSTRALIA', rating: 4.6, track: 'Completely Relaxed For Sleep', text: 'Incredibly soothing, love your voice and the pace of the meditation. Exactly the style I need to help me transition into a deep sleep. Thank you.', timeAgo: '10 months ago' },
  { name: 'Mary Sunshine', location: 'PENNSYLVANIA, USA', rating: 4.6, track: 'Stop Rushing (Poem)', text: 'Thank you. So peaceful. So beautiful. so calming. I have returned to this several times.', timeAgo: '2 years ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.8, track: 'Self Realization', text: 'Lovely meditation with a deep message - delivered beautifully in a very short time. Thank you and Namaste 🙏🏽😊', timeAgo: '2 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.8, track: 'Letting Go of the Past & Creating a New Future', text: 'Thank you for this calming practice which returned me to deeply refreshing sleep. Namaste', timeAgo: '2 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.8, track: '[Sleep] Advanced Law Of Attraction For Wealth & Abundance', text: 'Thank you for this journey into deeply refreshing sleep. This is an excellent sleep meditation and in the month since I have been doing it I have developed a different attitude to money and experienced much serendipity. Namaste', timeAgo: '2 years ago' },
  { name: 'Pamela Ransom', location: 'WAUCONDA, IL, USA', rating: 4.7, track: 'Connecting To A Higher Power', text: 'AWESOME! A POWERFUL, HEALING, PEACEFUL MEDITATION TO RECHARGE WITH OUR LOVE, LIGHT SOURCE 🥰💛💞✌️🙏 THANKS SO MUCH ❤️', timeAgo: '2 years ago' },
  { name: 'Sarah MMH', location: 'VICTORIA CANADA', rating: 4.7, track: 'Pain Relief Meditation', text: 'That was lovely. His voice was very calming and soothing. I was able to go below my pain into the constant state of peace. It is so good to get some respite. I will do this again. Thank you. 🦋', timeAgo: '2 years ago' },
  { name: 'Pamela Ransom', location: 'WAUCONDA, IL, USA', rating: 4.8, track: 'Heal Your Body Meditation', text: 'Absolutely INCREDIBLE 💯 The BEST HEALING MEDITATION I HAVE EVER HEARD! So Calming, Peaceful and BEAUTIFUL 😍 THANKS MICHAEL ❤️ 😊', timeAgo: '2 years ago' },
  { name: 'Crystal Winters', location: 'CHICAGO, IL, USA', rating: 4.6, track: 'Completely Relaxed For Sleep', text: 'Every night I listen to this meditation and almost immediately fall into a deep sleep. Very VERY good! This has been amazing for my overall mental health. ❤️', timeAgo: '3 years ago' },
  { name: 'Yada Yada', location: 'HOUSTON TX', rating: 4.8, track: 'Heal Your Body Meditation', text: 'So beautiful. I loved the part where you talk about my perfect soul being separate from my vessel. My body has a couple issues right now and it’s been a very trying 3 months and many days I’ve been fighting a feeling of fear and helplessness. That was exactly what I needed to hear today. I will come back to this as I go through the coming weeks of further treatments. As a Christian, I imagine my God as that healing light; and I like the way you leave it vague and open for each of us and our personal beliefs to fill that role of light. Thank you so much.', timeAgo: '3 years ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.7, track: 'Self Realization & Meditation with the Bhagavad Gita', text: 'Beautiful articulation of deep and immortal truths. Simple yet powerful, this meditation is highly recommended. Thank you and Namaste 🙏🏽', timeAgo: '3 years ago' },
  { name: 'Catherine Jimenez', location: 'APPLETON, WI, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Michael’s voice is soothing and allows me to feel safe in going to a much deeper level. He invokes a sense of calmness and success. I am truly grateful I found his work. I have no doubt that this meditation will change my life for the better.', timeAgo: '3 years ago' },
  { name: 'Steve Vann', location: 'CHEAP HILL, TN, USA', rating: 4.8, track: 'The Freedom Experience - Flying Back Home Into Eternal Peace', text: 'Thank you. Beautiful imagery of the bird trying to fly while clinging desperately to the branch. Wonderful description of "home" being "eternity" and eternity being "outside of time" rather than static and changeless. Wonderful encouragement to treat the time based daily life with respect for each precious moment. Thank you for the journey.', timeAgo: '3 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.8, track: 'Heal Your Body As You Sleep', text: 'Thank you for this healing pract. I didn\'t hear all of it as I fell asleep but I trust it will still leave it\'s impression. Namaste.', timeAgo: '3 years ago' },
  { name: 'Dianne Gerard', location: 'CHAGRIN FALLS, OH, USA', rating: 4.8, track: 'Heal Your Body As You Sleep', text: 'This healing meditation is a perfect way to help support healing. Your voice is kind and comforting and the background music feels like it is surrounding me with a blanket of warmth and goodness. Your words though are truly a healing salve for my body mind and spirit. Reminding me of my body’s amazing ability to heal itself with love. The early part does ask for participation and sometimes causes me to become more alert but I do think it is important for healing. ✨🙏🏼💜✨', timeAgo: '2 days ago' },
  { name: 'Leanne Crankshaw', location: 'ST HELENA VIC, AUSTRALIA', rating: 4.7, track: 'Expanded Consciousness Inner Journey', text: 'Love this, took me into a deep relaxation and beautiful connection to the universe 🙏', timeAgo: '19 days ago' },
  { name: 'Analea Hill', location: 'CANADA', rating: 4.8, track: 'Letting Go of the Past & Creating a New Future', text: 'Thank you for offering such a wonderful practice. I felt tension within my body and mind releasing, leaving me lighter feeling without holding so much that I’ve been for years. Love and light to you in your journey.', timeAgo: 'a month ago' },
  { name: 'Gugu H.', location: 'CAPE TOWN, SOUTH AFRICA', rating: 4.6, track: 'Stop Rushing (Poem)', text: 'Wow! Absolutely amazing and so needed and necessary And worthwhile and helpful and thoughtful It was refreshing and encouraging Thank you ever so much! Bless your heart with loving kindness forever! Love and light!', timeAgo: '2 months ago' },
  { name: 'Wisdom Seeker', location: 'RUSSELLVILLE, AR, USA', rating: 4.8, track: 'The Art Of Spiritual Living: 5 Keys To Maintaining A Higher', text: 'I really enjoyed this meditation because it brought together, in cohesion, the most important elements to work on for a feeling of “completion”. Thank you for this important, yet simple, instruction on what to focus on to get me to that desired place of calm and peace. 🙏🏻', timeAgo: '8 months ago' },
  { name: 'Ashley Bieker', location: 'GIG HARBOR, WA, USA', rating: 4.7, track: 'Pain Relief Meditation', text: 'I’m home with flu and overwhelmed with unbearable body aches (despite taking my annual flu vaccine!) so turned to this out of desperation when all I could do was lie in bed and moan in agony. It helped. IT ACTUALLY HELPED! Took the edge off that deep ache in my legs and back while I was listening. Amazing. Thank you 😍', timeAgo: '8 months ago' },
  { name: 'Christy LZ', location: 'ALASKA, USA', rating: 4.7, track: 'Let Go & Release: What’s Beyond Control', text: 'I listened to this as I was falling asleep and it was incredibly helpful for letting go of the extra baggage from the day that is out of my control. Very encouraging and grounding! Will go back and listen to it and take notes next time. Thank you 🙏', timeAgo: 'a year ago' },
  { name: 'Blu Jewel', location: 'NEW JERSEY, USA', rating: 4.6, track: 'Good Morning Meditation - Wake Up To A Brand New Day', text: 'This meditation truly soothed, and eased me into my morning. I was feeling a little overwhelmed; however, once I got into this, i immediately felt relaxed and falling deeply into your words. Thank you for this beautiful meditation and I will bookmark for future use. 💕', timeAgo: 'a year ago' },
  { name: 'Beverly Blaha Lanfear', location: 'TEXAS, USA', rating: 4.8, track: 'Heal Your Body Meditation', text: 'Thank you Michael so much for this absolutely phenomenal meditation! I have been searching for a body healing meditation that resonates deeply within in me. I finally found it! Thank you so much for your compassion in helping others! Many many blessings to you!', timeAgo: 'a year ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.7, track: 'Statement Of Divine Abundance', text: 'Amazing gem of a meditation. With easy affirmations, it beautifully combines knowledge of the eternal self with practical manifestation. Thank you and Namaste 🙏🏽😊', timeAgo: 'a year ago' },
  { name: 'Ann Satchell', location: 'BIRMINGHAM', rating: 4.7, track: 'The Gratitude Meditation', text: 'Beautiful meditation thank you. Felt so relaxing listening to gentle lapping of the sea, refocusing my thoughts onto things going well in my life. A great mantra, the world owes me nothing, everything is a bonus. 🙏', timeAgo: 'a year ago' },
  { name: 'Franny Matteson', location: 'DOVER, TN, USA', rating: 4.8, track: 'Inner Secrets Of Healing', text: '🙏🫂🐣Helpful, soothing and sweet. Thank you both for bringing this understanding and empathetic take on life to us. Blessings to you! Beautiful voices btw. 🤗💐🌅💖', timeAgo: 'a year ago' },
  { name: 'Carla E. Gonçalves', location: 'CAMBRIDGE, MA, USA', rating: 4.7, track: 'Return To Innocence Freedom from Guilt, Shame, Past Mistakes', text: 'Such a powerful yet gently led practice. For some reason, all my doubts, fears and concerns melted away the deeper I went into the mediation. My spirit felt connected to source and reminded me that I am much more than my physical body in this earthly existence. Thank you so much!', timeAgo: '2 years ago' },
  { name: 'Krystal Einarsson', location: 'SCHENECTADY, NY, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'This meditation took me on a journey I didn’t know I needed to go on. I will continue to listen often. Your voice is so soothing and the music pairs beautifully. Thank you for this beautiful practice.', timeAgo: '2 years ago' },
  { name: 'MaryAnn Pittsburgh, US', location: 'PITTSBURGH, PA, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Thank you for helping me see my highest self! I am grateful for all the opportunities in my life. Thank you universe❤️🙏', timeAgo: '2 years ago' },
  { name: 'Howard Wiley', location: 'BOISE, ID, USA', rating: 4.7, track: 'Let Go of Anxiety & Worry', text: 'Very calming and peaceful meditation. Love the visual of the hot air balloon basket filled with anxiety and fear being sent drifting off.', timeAgo: '2 years ago' },
  { name: 'Julie Markovitz', location: 'LA', rating: 4.8, track: 'Trust The Divine Timing Of Your Life (Daily Insight)', text: 'This is a beautifully guided meditation. I love the idea of planting seeds of that which we’d love to see manifest with seeds of patience, sprinkling it with gratitude and beaming positive thoughts upon it. Thank you. 💓', timeAgo: '2 years ago' },
  { name: 'Ruthi Cohen-Joyner', location: 'CHARLOTTE, NC, USA', rating: 4.9, track: 'World Peace Meditation', text: 'OMG!!!! I love this!! Thank you for creating a vehicle for us to send love and peace into our hearts 💕 and out into the world 🌎 Namaste 🙏🏼', timeAgo: '2 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.9, track: 'The Power Of Blessings: How Giving Freely Attracts Abundance', text: 'Thank you Michael for another resonant practice leading into deep sleep. Namaste', timeAgo: '2 years ago' },
  { name: 'Virginia Free', location: 'AUCKLAND, NEW ZEALAND', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'An incredibly powerful meditation. I loved every minute of the positive reinforcement. And will repeat for the 40 consecutive days as suggested. Thank you! Namaste', timeAgo: '2 years ago' },
  { name: 'Barbara Milton', location: '2303 JORDAN ROAD, LAS CRUCES, NM, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'This meditation took me to a space of peace, abundance and joy. I feel good, grateful and confident. Thank you 🙏🏼', timeAgo: '2 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.7, track: 'Expanded Consciousness Inner Journey', text: 'Thank you for this calming practice which soothed me back to sleep in the middle of the night. Namaste', timeAgo: '2 years ago' },
  { name: 'Lou Fearn', location: 'UNITED KINGDOM', rating: 4.8, track: '[Sleep] Advanced Law Of Attraction For Wealth & Abundance', text: 'This meditation really brought the link between abundance and intention to my attention which has been very useful in daily life since. It’s become one of my go-to falling asleep meditations. Thanks', timeAgo: '2 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.7, track: 'Infinite Success', text: 'Thank you Michael for this beautiful start for another wonderful day of blessed life. Namaste', timeAgo: '2 years ago' },
  { name: 'Sandy McLellan', location: 'HALIFAX REGIONAL MUNICIPALITY, CANADA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'I have done this medication a few times now, not repeated. I have been taking action and things are coming to me that I have set intentions for at the beginning of the year. I feel so good. At first it would come and go but the last week it has been constant. It feels amazing. Thank you for this beautiful 🧘‍♀️', timeAgo: '3 years ago' },
  { name: 'Mary Frost', location: 'LOUISIANA, USA', rating: 4.8, track: 'Heal Your Body Meditation', text: 'Thank you so much for this thoughtful script and guided helpful experience. I appreciate your inclusive multilevel focus. The pace is just right and I have to say I have drifted comfortably to sleep the three times I have listens to it, - that is most welcome because I know it’s going into the subconscious levels of my mind, and at the same time getting some very valuable, deep rest. 🌙🌟', timeAgo: '3 years ago' },
  { name: 'Coco Rico', location: 'CALIFORNIA, USA', rating: 4.7, track: 'The Gratitude Meditation', text: 'With gratitude, I felt deep abundance. Thank you for this beautiful message and meditation.', timeAgo: '3 years ago' },
  { name: 'Stacey Rae Gibbs', location: 'BRENTWOOD, (LOS ANGELES) USA', rating: 4.8, track: '#1 Habit For Happiness (The Banana Method)', text: 'A super powerful reminder, thank you!! We are could benefit from a little more love and kindness Indeedy! 🌸💕🌸', timeAgo: '3 years ago' },
  { name: 'Kimbrough Johnson', location: 'HOUSTON, TX, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Amazing! I am so grateful for this specific meditation it has opened me up to a deep awareness!! THANKYOU ❤️', timeAgo: '3 years ago' },
  { name: 'Caitlin Leigh', location: 'NOTHING, AZ, USA', rating: 4.6, track: 'The Higher Self Meditation', text: 'Loved this, such a beautiful meditation and reminder bringing back to I AM presence, higher self. Thank you for this gift, 🧘‍♀️🤩🥰🍄✨🙏💜☺️', timeAgo: '3 years ago' },
  { name: 'Catherine Lavelle', location: 'INVERNESS, UNITED KINGDOM', rating: 4.8, track: 'Inner Secrets Of Healing', text: 'Beautiful, I have some Heath issues that I’m trying to heal. The thing that came up was withholding from the self holding back, I have nerve pain in feet and hands so reaching out and moving forward, however I have been on this journey for several years', timeAgo: '3 years ago' },
  { name: 'LouAnn Bruck', location: 'SEDONA, AZ, USA', rating: 4.9, track: 'Serenity & Healing: Manmanabhav Mantra', text: 'Love this Sanskrit mantra for releasing too many thoughts and find myself in joy and bliss. Thank you. Namaste.', timeAgo: '11 days ago' },
  { name: 'LouAnn Bruck', location: 'SEDONA, AZ, USA', rating: 4.7, track: 'Raise Your Level Of Consciousness Meditation', text: 'Thank you for this! I love the removal of stacks of magazines or negativity images! Thank you!', timeAgo: '2 months ago' },
  { name: 'Leanne Crankshaw', location: 'ST HELENA VIC, AUSTRALIA', rating: 4.6, track: 'The Power of Silence', text: 'This meditation was so beautiful. You’re voice and words are so very soothing thank you 🙏', timeAgo: '4 months ago' },
  { name: 'Mary Doyle', location: 'NAPERVILL, IL', rating: 4.7, track: 'Raise Your Level Of Consciousness Meditation', text: 'Thank you for guiding me in the light and riding negative energy. What a beautiful way to begin the day.', timeAgo: '6 months ago' },
  { name: 'RuthAnn Greuling', location: 'SANTA FE, NM, UNITED STATES', rating: 4.8, track: 'Forgive Yourself', text: 'Such a beautiful message. I’m inspired to be kinder to my body because of this meditation. I realize I hadn’t forgiven myself for injuring my hip from dancing with great drive. Now I can see a way to reframe dance/movement from a place of self-compassion and self-acceptance. Thank you! 💖', timeAgo: '6 months ago' },
  { name: 'Margaret Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.8, track: 'Letting Go of the Past & Creating a New Future', text: 'Thank you for this calming and reassuring practice to move forward in an assured and direction. Namaste', timeAgo: '7 months ago' },
  { name: 'Liz Mc', location: 'FRESNO CA', rating: 4.8, track: '4 Minute Morning Affirmation Meditation', text: 'The most amazing meditation I have heard on this app. Thank you. I know I can complete my weekend with this', timeAgo: '7 months ago' },
  { name: 'Mary Sunshine', location: 'PENNSYLVANIA, USA', rating: 4.6, track: 'Inside Out Meditation', text: 'Very peaceful. Thank you so much. I needed this today. I appreciate your offerings.', timeAgo: '7 months ago' },
  { name: 'David Yorke', location: 'SEATTLE, WA, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Tremendously powerful. My favorite meditation so far. Perfectly scripted and beautifully spoken. I will repeat for the recommended 40 days.', timeAgo: '8 months ago' },
  { name: 'Susan Pelletier', location: 'TENNESSEE, USA', rating: 4.8, track: 'The No. 1 Secret To Real Success', text: 'Really enjoyed this session. I can really relate the message to where I am on my journey now. Everything made sense. Thank you for your work', timeAgo: '8 months ago' },
  { name: 'Zita Stark-Prior', location: 'SOUTH AUSTRALIA, AUSTRALIA', rating: 4.7, track: 'Completely Relaxed Meditation', text: 'Beautifully helpful, thank you! Words could be spoken maybe a bit more naturally? 🙏🌻', timeAgo: '8 months ago' },
  { name: 'Michael Mandel', location: 'NORTH YORK, ON, CANADA', rating: 4.7, track: 'Pain Relief Meditation', text: 'Phone died have way through but super enjoyed Thank you going to go at it again, major deep relaxation here', timeAgo: '9 months ago' },
  { name: 'Jessica Garrett', location: 'ROSEVILLE, CA, USA', rating: 4.8, track: 'Trust The Divine Timing Of Your Life (Daily Insight)', text: 'This meditation brought me so much peace. I listened while on a flight headed toward a 10 day work trip. I had been having some anxiety about the long jaunt and this message gave me a refreshed sense of hope and well being 🙏 Thank you', timeAgo: '9 months ago' },
  { name: 'Gugu H.', location: 'CAPE TOWN, SOUTH AFRICA', rating: 4.7, track: 'Freedom From The Past', text: 'It was much needed, letting go of the past and giving it to a Higher Power - beautiful, comforting, soothing, a relief, weight of my shoulders Thank you ever so much! Bless your heart with loving kindness forever!', timeAgo: '9 months ago' },
  { name: 'Steve Wagner', location: 'KERRVILLE, TX, USA', rating: 4.8, track: 'The Acceptance Meditation (Feel Good And Find The Benefit)', text: 'The more Dharma I am exposed to from your beautiful soul, the more I want. Thank you 🙏🏻 for sharing your experience. It is done!', timeAgo: '9 months ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.7, track: 'Raise Your Level Of Consciousness Meditation', text: 'A beautiful meditation - much like the many gifts from Michael. A \'go to\' for regular practice. Thank you and Namaste 😊🙏🏽', timeAgo: '10 months ago' },
  { name: 'Judy Kneisley', location: 'GEORGETOWN, TX, UNITED STATES', rating: 4.8, track: 'Sleep Meditation For Deep Restorative Sleep', text: 'Very effective. Thank you. The tone and pace were perfect for me. It is very calming', timeAgo: '10 months ago' },
  { name: 'Marie-michelle Chabanis', location: 'PERTH WA, AUSTRALIA', rating: 4.8, track: 'The Art Of Spiritual Living', text: 'I will definitely be adopting this way of living. Your voice is so calming and soothing.thank you 😌 🙏', timeAgo: 'a year ago' },
  { name: 'Jason Lindholm', location: 'AUSTRALIA', rating: 4.7, track: 'Pain Relief Meditation', text: 'I live with chronic pain and this meditation pulled me out of a dark place. I shared to to my health tracking group on facebook. This is very good and I will be listening again. Thank you!', timeAgo: 'a year ago' },
  { name: 'Opal Rowe', location: 'TORONTO, ON, CANADA', rating: 4.8, track: 'Trust The Divine Timing Of Your Life (Daily Insight)', text: 'Thank you. I needed this today. Loved the slow pace, in keeping with the theme of patience. I easily visualized how an oak grows slowly from a seed to a massive tree. 10 Nov 24', timeAgo: 'a year ago' },
  { name: 'Leslie Carrasquillo', location: 'MOUNTAINSIDE, NJ, UNITED STATES', rating: 4.8, track: 'Letting Go of the Past & Creating a New Future', text: 'Very powerful in helping me let go of unwanted, negative thoughts and feelings. Thank you. 🙏🏻', timeAgo: 'a year ago' },
  { name: 'Megan Whitney', location: 'CHICAGO, IL, UNITED STATES', rating: 4.8, track: '#1 Habit For Happiness (The Banana Method)', text: 'Fantastic, insightful talk and guidance. Really loved this and am excited to incorporate more blessings of self and others into my day. Thank you 😊', timeAgo: 'a year ago' },
  { name: 'Kathleen Williams', location: 'USA', rating: 4.7, track: 'Pain Relief Meditation', text: 'I’ll revisit this experience. My intention is to surrender, let go, and feel lighter effortlessly. This meditation is a wonderful start. My pain has significantly been alleviated. I do feel peaceful free of judgment. Thank you 🙏 Namaste', timeAgo: 'a year ago' },
  { name: 'Meg Bowers', location: 'MORPETH', rating: 4.7, track: 'Raise Your Level Of Consciousness Meditation', text: 'Wonderful. The mud analogy massively helped me let go off other peoples’ bad behaviour and unjust unkind actions and treatment, it helped me see it for what it is; their bad not mine. Then letting it burn away, releasing it from my mind body and soul, I feel the most mental peace for years. Thank you🙏🏼', timeAgo: 'a year ago' },
  { name: 'Alli Webster', location: 'NEW BRUNSWICK, CANADA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'First time doing this meditation I found the experience to be very powerful & energizing. ☯️☮️💟 I have bookmarked it to add it to my daily routine as suggested. 🙏🏼 Thank you!', timeAgo: 'a year ago' },
  { name: 'Arti Budiarti', location: 'CALIFORNIA, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'I listen this for long , its help me a lot to build a positive energy and felt lucky and brave ato face the reality in life, a positive energy become a beautiful 😘magnet , always meeting a wonderful people where ever i go🌷😊thx ,', timeAgo: 'a year ago' },
  { name: 'Angie Barker', location: 'GORING-BY-SEA, WORTHING, UK', rating: 4.8, track: 'Heal Your Body Meditation', text: 'After a very stressful week this meditation calmed me and grounded me, releasing much of the tension causing my chronic pain. Thank you, I will return.', timeAgo: 'a year ago' },
  { name: 'Samira Ali', location: 'MALÉ, MALDIVES', rating: 4.7, track: 'Completely Relaxed Meditation', text: 'Heavenly. I wonder if i would feel this relaxed and calm each time. One precious gem. I will certainly be returning. Thank you..thank you 🙏😘🌴', timeAgo: '2 years ago' },
  { name: 'Margot Yorke', location: 'MONA VALE, AUSTRALIA', rating: 4.7, track: 'The Gratitude Meditation', text: 'Thank you for this meditation. The sound of the ocean is very calming as is your voice. Namaste 🙏🙏', timeAgo: '2 years ago' },
  { name: 'Lara Thompson', location: 'AUCKLAND, NEW ZEALAND', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'This was a powerful meditation I listened at night may do during day next time as feeling great and very awake! Looking forward to the next 40 days. Thank you', timeAgo: '2 years ago' },
  { name: 'Ingrid Krecko', location: 'PENNSYLVANIA, USA', rating: 4.6, track: 'Good Morning Meditation - Wake Up To A Brand New Day', text: 'I found myself feeling increasingly happier, more excited, and grateful throughout this meditation! Thank you! Great way to start the day.', timeAgo: '2 years ago' },
  { name: 'Julie Cowles', location: 'BERKELEY, CA', rating: 4.7, track: 'Pain Relief Meditation', text: 'This was super helpful and so soothing. It reduced my pain, brought me peace and a new way to manage pain. Thank you!', timeAgo: '2 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.7, track: 'Higher Consciousness Inner Smile Meditation', text: 'Thank you for this beautiful start for the day. A smile is an infectious and uplifting state. Namaste', timeAgo: '2 years ago' },
  { name: 'Glenda Kelly', location: 'NSW, AUSTRALIA', rating: 4.6, track: 'Good Morning Meditation - Wake Up To A Brand New Day', text: 'Such an inspiring and fulfilling way to look forward to another day enjoying happiness znd life\'s joyous moments. Thank you 😊🦋🙏', timeAgo: '2 years ago' },
  { name: 'Julie-Anne Ouimet', location: 'POINTE-CLAIRE, CANADA', rating: 4.6, track: 'Good Morning Meditation - Wake Up To A Brand New Day', text: 'What an amazing way to start my day. Living with illness, being limited by it, you have brought me back to when I was free, serene and happy. I haven\'t had this feeling in a long time. Thank you! I will make this meditation a regular and share it. 💜', timeAgo: '2 years ago' },
  { name: 'Leslie Carrasquillo', location: 'MOUNTAINSIDE, NJ, UNITED STATES', rating: 4.7, track: 'The Gratitude Meditation', text: 'I love this one and all of Michael’s meditations. They are so positive and uplifting. I always feel better after doing one. Thank you, thank you, thank you!', timeAgo: '2 years ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.8, track: 'Rediscovering Intrinsic Qualities', text: 'Beautiful, blissful meditation. If you have time for only one meditation to start your day, go with this one to set it up beautifully. Thank you and Namaste 🙏🏽😊', timeAgo: '2 years ago' },
  { name: 'Kirsty Miller', location: 'BINGLEY, UK', rating: 4.7, track: 'The Gratitude Meditation', text: 'I have been doing this track several times a week for a couple of months now and absolutely love it! It always leaves me feeling so light and content. Thank you', timeAgo: '2 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.8, track: 'Heal Your Body Meditation', text: 'Thank you for this beautiful and affirming practice to start a day when not feeling completely on form. Namaste', timeAgo: '2 years ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.7, track: 'Spiritual Hero Meditation', text: 'Deep and grounding message delivered in a very short time. Highly recommended 👍🏽 Thank you and Namaste 🙏🏽😊', timeAgo: '2 years ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.5, track: 'Awakening Conscience', text: 'Profound and deep, this meditation might trigger processes to awaken the ethical compass for some. Those not familiar with the concept of the eternal soul might need to contemplate and do this meditationa few times. Great contribution by Michael in a world where an awakened conscience is much needed. Thank you and Namaste 🙏🏽', timeAgo: '2 years ago' },
  { name: 'Gavin Morris', location: 'SWANSEA, UNITED KINGDOM', rating: 4.8, track: 'Letting Go of the Past & Creating a New Future', text: 'Wow that was truly amazing, after replacing my dark with light, I wanted to be and was a beacon of energy and burnt away my family’s negative energy crusts with hugs and touches they were amazed to be existing in the light, free and full of positive energy like me! Long time since I experienced that, thank you x', timeAgo: '2 years ago' },
  { name: 'Stephanie Maslanka', location: 'SCHENECTADY, NY, USA', rating: 4.5, track: 'Blissful Morning Mediation - Bathe in Light', text: 'Thank you. I happen to have taken my meditation practice outside to a dock on- serene open lake in the mountains and found you. Your voice, these words this ocean of peace and light 🙏🏼', timeAgo: '2 years ago' },
  { name: 'Cheryl Adams', location: 'VICTORIA, BC, CANADA', rating: 4.7, track: 'Trusting the Perfection Of Life. Stop Arguing with Reality', text: 'A timely and beautiful reminder; resistance to what is = pain….and there is another choice. Thank you Michael 🙏🏼🕊️🧘‍♀️', timeAgo: '2 years ago' },
  { name: 'Holly Young', location: 'SANTA ROSA, CALIFORNIA, USA', rating: 4.8, track: 'Miracle Series 3: Moving From Achievement To Vibrations', text: 'This was a fabulous talk that deeply resonates. So much truth to this subject as well as describing our human process. The internal growth and discovery brings so much more joy as well as resonate movement forward. Thank you so very much for this!💗💗', timeAgo: '2 years ago' },
  { name: 'Shirley Kubiak', location: 'GREELEY, CO, USA', rating: 4.7, track: 'Pain Relief Meditation', text: 'Somehow I was able to fall asleep with this meditation, even in major pain in my back and knee. Really needed that relaxation', timeAgo: '2 years ago' },
  { name: 'Brenda Blackmon', location: 'TULSA, OK 74144', rating: 4.8, track: 'Heal Your Body Meditation', text: 'Thank you for bringing me back into remembrance that I hold the power within to heal my body, mind, and relationships ❤️🙏🏾', timeAgo: '2 years ago' },
  { name: 'Ashok Nayak', location: 'MELBOURNE', rating: 4.7, track: 'Completely Relaxed Meditation', text: 'Amazing and blissful. Very handy at any time during the day including while travelling on flights. Thank you and Namaste 🙏🏽😊', timeAgo: '2 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.8, track: 'Healing Your Mind With Manmanabhav', text: 'Thank you for this calming and uplifting practice to relieve us of our worldly woes. Namaste.', timeAgo: '2 years ago' },
  { name: 'Jonathan Troper', location: 'CULVER CITY, CA', rating: 4.4, track: 'How To Overcome Negative Thinking', text: 'Argues that you can and should consciously choose your thoughts. Very lightly addresses the negative repercussions of trying to suppress negative thoughts. Does a lot of talking, but doesn\'t provide actionable steps beyond simple nostrums such as thinking to yourself, "powerful, powerful" and "peaceful, peaceful" or a vague call to deal with what underlies the negative thoughts.', timeAgo: '3 years ago' },
  { name: 'Claire Jones', location: 'PHUKET, MUEANG PHUKET DISTRICT, PHUKET, THAILAND', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Excellent! What a beautiful, strong reassuring voice you have. Will definitely challenge myself to listen to this for the next 40 days. Thank you 🙏', timeAgo: '3 years ago' },
  { name: 'Victoria Gallagher', location: 'PHOENIX, AZ, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Best law of attraction meditation I’ve ever heard on this app! Thank you. I love your approach.', timeAgo: '3 years ago' },
  { name: 'Ka’ua Taylor-Fulton', location: 'WAIANAE, HI, USA', rating: 4.8, track: 'Letting Go of the Past & Creating a New Future', text: 'The bags that old my face down have been lifted, the shadows that drowned my eyes creating deep dark shadows have fallen. Light holding me refueling my candle. That was the experience I needed today thank you mahalo sir & aloha.', timeAgo: '3 years ago' },
  { name: 'Jocelyne Paul', location: 'OTTAWA, CANADA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Wow - what a powerful start to the day! Thank you so much for your guidance. I have bookmarked this meditation 🙏🏼', timeAgo: '3 years ago' },
  { name: 'Catherine Krause', location: 'GUANAJUATO, MEXICO', rating: 4.8, track: 'Trust The Divine Timing Of Your Life (Daily Insight)', text: 'Perfect for some new things I am working on, rembering to be patient and that everything is happening as it should. I feel much more calm. Thank you', timeAgo: '3 years ago' },
  { name: 'Philippa Poppesqou', location: 'JOHANNESBURG, SOUTH AFRICA', rating: 4.7, track: 'Connecting To A Higher Power', text: 'Such a beautiful tingling sensation feeling the light enter my heart & soul 🙏🏻 thank you', timeAgo: '3 years ago' },
  { name: 'Ronny Wasch', location: 'BERGEN, NORWAY', rating: 4.8, track: 'Letting Go of the Past & Creating a New Future', text: 'Quite powerful, haven\'t had that experience before, strange feeling on my scalp on top. Thank you very much.', timeAgo: '3 years ago' },
  { name: 'Joni Reeves', location: 'INDIANAPOLIS, IN, UNITED STATES', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Listening to this meditation for the first time brought me peace, gratitude, and inspiration. My goal now is to listen to it daily for 40 days. Powerful!', timeAgo: '3 years ago' },
  { name: 'Kd Ud', location: 'UYO, AKWA IBOM, NIGERIA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Thank you. This is my second or third time of doing this meditation and in the course of it, my mind was open to a whole new perspective concerning an aspect of my life. And that perspective clarifies everything, making my goals, hopes and life feel complete and full!! 🤗😀', timeAgo: '3 years ago' },
  { name: 'Nikia Thomas', location: 'SOUTH CAROLINA, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'As I embrace my journey listening to the affirmation and applying it to my daily is life 🫶🏽 namaste', timeAgo: '3 years ago' },
  { name: 'Beth Willard', location: 'CLARKSVILLE, TN, USA', rating: 4.8, track: 'Trust The Divine Timing Of Your Life (Daily Insight)', text: 'I needed this. I’m feeling very impatient with how my life is going currently and needing to trust that things will happen when they are supposed to. Thank you for helping to remind me that patience is key to manifesting the life of my dreams.', timeAgo: '3 years ago' },
  { name: 'Casey Wholohan', location: 'NEWCASTLE NSW, AUSTRALIA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: '🙏🏼thank you so much for this meditation 🧘🏼‍♀️ I will be sure to continue to listen 🙏🏼 that was lovely & I really felt the shift', timeAgo: '3 years ago' },
  { name: 'Lily Olsen', location: 'AUCKLAND, NEW ZEALAND', rating: 4.8, track: 'Heal Your Body Meditation', text: 'This was just what I needed! All of the wording and music is perfect. I really felt connected to being able to heal myself. Saved to come back to! Thank you 🙏', timeAgo: '3 years ago' },
  { name: 'Andrea Denton', location: 'VIRGINIA BEACH, VA, USA', rating: 4.8, track: 'Forgive Yourself', text: 'I have been stuck on not forgiving myself. This was wonderful. I can see myself listening to this many more times. It brought me so much peace. Thank you!!!', timeAgo: '3 years ago' },
  { name: 'Gwendolyn LaSalle', location: 'ARKANSAS', rating: 4.6, track: 'Good Morning Meditation - Wake Up To A Brand New Day', text: 'That was just what I needed! There were times in my life when I was happy and excited to get up in the morning, and you’ve helped me remember that feeling so that I can get back to it. Thank you!', timeAgo: '3 years ago' },
  { name: 'Delia Johnson', location: 'PHOENIX, AZ, USA', rating: 4.7, track: 'Completely Relaxed Meditation', text: 'Effortlessly took me to that deep meditative stage that’s not always easy to reach, thank you!!', timeAgo: '3 years ago' },
  { name: 'Stefania Baldassarri', location: 'ROME, ITALY', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'One of the best meditation ever! I keep coming back to it, year after year, as it is so powerful and complete. Thank you Michael for your guidance and your wonderful voice. Many blessings to you 😊', timeAgo: '3 years ago' },
  { name: 'Beryl Forrest', location: 'PRINCES RISBOROUGH, UNITED KINGDOM', rating: 4.7, track: 'Surrender All Worry, Anxiety & Experience Deep Freedom', text: 'Interesting, I recently had the privilege to hold space for a very loved family member who passed and the overwhelming feeling of peace was wonderful! I so wish I was able to keep hold of it. I get what you were saying about feeling that you\'ve already achieved all that you need to, but I have a hard job to get to that peace again. Great meditation, many thanks. 🙏💕🌹', timeAgo: '3 years ago' },
  { name: 'Margaret Ann Moore', location: 'PIRIES VICTORIA, AUSTRALIA', rating: 4.6, track: 'Completely Relaxed For Sleep', text: 'Thank you for this practice which led me into a night of rich and exotic vivid dreams of a past life. It was most enjoyable and low cost travel! Namaste', timeAgo: '3 years ago' },
  { name: 'Hope Adams', location: 'SUWANEE, GA, USA', rating: 4.7, track: 'Freedom From The Past', text: 'This is so helpful in the most practical way. I am finally able to forgive myself for not registering for college 36 years ago. Today I was able to at last, surrender this and recognize that this part of my past that I have felt such shame about was and is actually wonderful and was an unfolding of my intended path. Thank you very deeply', timeAgo: '3 years ago' },
  { name: 'Ilona Ross', location: 'LAS VEGAS', rating: 4.8, track: 'Heal Your Body Meditation', text: 'First time participating in this meditation and feeling grateful and inspired to be more consistent. Thank you 😊', timeAgo: '3 years ago' },
  { name: 'Kraig Meyer', location: 'SAN FRANCISCO, CA, UNITED STATES', rating: 4.8, track: 'The Acceptance Meditation (Feel Good And Find The Benefit)', text: 'I loved this recording, so insightful and one that I will play multiple times again. It did seem more like a talk than a meditation though.', timeAgo: '16 days ago' },
  { name: 'Tara Chantal Hopkins', location: 'AYVALIK, BALIKESIR, TÜRKIYE', rating: 4.7, track: 'Raise Your Level Of Consciousness Meditation', text: 'With so much that is so wrong these days, I find it more and more difficult not to be negative or depressed - thank you very much for this meditation to help me focus on myself and what I can do and to be positive! 🙏🏼', timeAgo: 'a month ago' },
  { name: 'Stephanie Steigerwaldt', location: 'MADISON, WISCONSIN, UNITED STATES', rating: 4.8, track: 'Subconscious Reprogramming Meditation', text: 'I am so grateful for you, Michael, and your guided meditations! What a blessing. 💫', timeAgo: '2 months ago' },
  { name: 'Alison Taylor', location: 'FLORIDA, USA', rating: 4.7, track: 'Raise Your Level Of Consciousness Meditation', text: 'Really enjoyed the exercise. I had trouble hearing his words clearly when the music volume surged. Otherwise, quite beneficial. Thank you', timeAgo: '2 months ago' },
  { name: 'Shai Levi', location: 'KFAR SABA, ISRAEL', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'That was brilliant! I really laughed out loud and even cried from feeling happiness and joy! Thank you very much for that 🙏🏼 Truly wonderful!', timeAgo: '4 months ago' },
  { name: 'Susan Rivest', location: 'PRINCE ALBERT, SK, CANADA', rating: 4.8, track: 'Subconscious Reprogramming Meditation', text: 'Thank you for this creation. Do you suggest moving through 1 program or belief at a time , then shifting the next priority?', timeAgo: '4 months ago' },
  { name: 'Ann Satchell', location: 'BIRMINGHAM', rating: 4.8, track: '3 Wins Daily: Uplift Mood & Productivity', text: 'A reminder to celebrate precious wins, no matter how small they feel. Thank you 🙏👏👏', timeAgo: '4 months ago' },
  { name: 'Stacey Rae Gibbs', location: 'BRENTWOOD, (LOS ANGELES) USA', rating: 4.6, track: 'Good Morning Meditation - Wake Up To A Brand New Day', text: 'Thanks, Mikal. This is a wonderful beginning to the day. I found it helpful to shift me out of my off, feeling from my dreams that the night before. Smiling brings a shift into my body and mind and brings joy into my life. 💖', timeAgo: '5 months ago' },
  { name: 'Jules Alpern', location: 'HOLLYWOOD, FL', rating: 4.8, track: '#1 Habit For Happiness (The Banana Method)', text: 'This was exceptional and a great reminder to accept everything as it is even if I don’t like it, but I find a reason to send blessings and love it for now! I deserve to be happy and so does the world!', timeAgo: '5 months ago' },
  { name: 'Phil Moody', location: 'NASHVILLE, TN, USA', rating: 4.8, track: 'Your Future Self Manifestation Meditation', text: 'Very calming and inspiring. Helps to focus the mind on what you value and realize that the imagination can bring truth.', timeAgo: '7 months ago' },
  { name: 'Shireen Chada', location: 'FLORIDA, USA', rating: 5.0, track: 'Already Whole: A Journey From Lack To Fullness', text: 'This course has been transformative for me in ways I never expected. It was a genuine moment of pause. Michael’s soothing guidance created a safe space where I could just be and reflect. For me, what sets this course apart is how practical it is despite it’s meditative nature. For anyone feeling overwhelmed by achievement culture or struggling with perfectionism, this course offers the perfect solution.', timeAgo: '7 months ago' },
  { name: 'Dave Gindele', location: 'UNION, KY, USA', rating: 4.8, track: '#1 Habit For Happiness (The Banana Method)', text: 'Enlightening. Thanks for sharing your experience. I’m in to give it a go. So Love is the answer after all Namaste 🙏', timeAgo: '8 months ago' },
  { name: 'Irene McKnight', location: 'PARKER, COLORADO', rating: 4.9, track: 'How Do You Want To Feel?', text: 'This takes me back to my basics. When I’m choosing something to wear in the morning, it has to do with how as I want to make Me feel. Thank you, Michael for sharing with me this morning.👍🙏🥰', timeAgo: '9 months ago' },
  { name: 'Dr Les Carlos', location: 'CASTRO VALLEY, CA, USA', rating: 4.7, track: 'Letting Go Of Negative Emotions', text: 'I found this very helpful and helping me to let go and relax thank you. I enjoyed the long pauses with no music.', timeAgo: 'a year ago' },
  { name: 'Angela Sirola', location: 'CANBERRA, AUSTRALIA', rating: 4.8, track: 'Trust The Divine Timing Of Your Life (Daily Insight)', text: 'Wonderful reminder, everything is working out for me. Perfect timing and lovely simple message, slowed me right down to nature\'s pace', timeAgo: 'a year ago' },
  { name: 'Megan Whitney', location: 'CHICAGO, IL, UNITED STATES', rating: 4.8, track: 'Raise Your Frequency & Increase Your Vibration', text: 'Loved this talk - got me thinking and feeling into what I choose to consume and how that affects my energy. Looking forward to connecting more with higher vibrations. I appreciate both of your wisdom so much!', timeAgo: 'a year ago' },
  { name: 'Bettina Odeh', location: 'GERMANY', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'Dear Michael, that was very good. And yes, it is good to remember that we attract what we think or what we want and say and it is very good to hear your loving, warm and gentle voice, you have so much power and there is a lot of inner resonance and I feel balanced after your meditation and am happy that I have a right to be happy. Yes, that is exactly what it is. Thank you very much.', timeAgo: 'a year ago' },
  { name: 'Jacob Craig', location: 'INDIANAPOLIS, IN, USA', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'This has been a very useful meditation for me, and you have my gratitude 🙏🏼. However, I would love a version with less explanation that hones in on the subject of the meditation. After listening numerous times, the preface becomes unnecessary. Otherwise very good.', timeAgo: 'a year ago' },
  { name: 'Megan Whitney', location: 'CHICAGO, IL, UNITED STATES', rating: 4.8, track: 'Your Future Self Manifestation Meditation', text: 'Thank you for this wonderful meditation 🧘‍♀️ feeling hopeful and more positive and inspired! 💛🙏', timeAgo: 'a year ago' },
  { name: 'Claire Bagness', location: 'BERWICK-UPON-TWEED, UNITED KINGDOM', rating: 4.6, track: 'Good Morning Meditation - Wake Up To A Brand New Day', text: 'Many thanks Michael for this positive uplifting meditation. Lovely to get in touch with carefree happy childhood feelings. Today will be a good day. Blessings to you 🙏', timeAgo: 'a year ago' },
  { name: 'Brandi DeCarli', location: 'BROOKLYN, NY, USA', rating: 4.9, track: 'The Surrender Series: Let Go And Let God', text: 'beautiful! it was a gift that the live didn’t happen as planned because it allowed listeners like me to hear this ❤️', timeAgo: 'a year ago' },
  { name: 'Jennifer Jones', location: 'BRIDGETOWN, SAINT MICHAEL, BARBADOS', rating: 4.8, track: 'Advanced Law Of Attraction Meditation For Abundance', text: 'This is one of my favourite meditations. I’ve lost track of how many days I’ve done it. Thank you!', timeAgo: 'a year ago' },
  { name: 'Tara Sowers', location: 'MESA, AZ, USA', rating: 4.7, track: 'Overcoming Disappointment & Finding The Secret Benefit', text: 'Absolutely brilliant! This meditation was exactly what I needed this morning. Thank you so much!', timeAgo: 'a year ago' },
  { name: 'John Coble', location: 'KINGMAN, AZ, USA', rating: 4.8, track: 'Raise Your Frequency & Increase Your Vibration', text: 'Absolutely Awesome. Thank you 🙏 . Wonderful expression of raising our vibration.', timeAgo: 'a year ago' },
  { name: 'Faye Emmerson', location: 'RANDBURG, SOUTH AFRICA', rating: 4.8, track: 'Letting Go of the Past & Creating a New Future', text: 'I\'ve been listening to this recording for a few weeks and it\'s had a positive influence on my life. I\'ve been going through a tough time but I have found strength within myself. So much so that it has surprised those around me.', timeAgo: 'a year ago' },
  { name: 'Deborah Kruger', location: 'CHAPALA, JALISCO, MEXICO', rating: 4.7, track: 'The Gratitude Meditation', text: 'This would have been more effective for me if there was less talking so that I could hear my own gratitudes. Thank you 🙏🏼', timeAgo: 'a year ago' },
  { name: 'Sarah Mason', location: 'HAGLEY, UK', rating: 4.8, track: 'Forgive Yourself', text: 'I loved this and felt so different at the end. I’ll definitely be coming back to use it again 🙏🏻❤️', timeAgo: '2 years ago' },
];

// ───────────────────────────────────────────────────────────────────────────
// EXTRA GRADUATE FACES, graduates from the live AA reviews page with
// photos but whose long-form testimonial text didn't make it into the main
// TESTIMONIALS array. Used to fill out the Faces of the Community mosaic.
// ───────────────────────────────────────────────────────────────────────────
// Names + photo mappings verified against the live WP reviews source page
// at https://4ea5621ec44199858a125ea2f02cc024.wpxtemp.com/awakened-academy-reviews/
//, May 2026 audit. Spellings match what the graduates submitted themselves.
export const EXTRA_GRADUATE_FACES: { name: string; photoSrc: string }[] = [
  { name: 'Veronika',              photoSrc: '/img/testimonials/Veronika.jpg' },
  { name: 'Lee Schaefer',          photoSrc: '/img/testimonials/Lee-schaefer.jpg' },
  { name: 'Kristal Novi',          photoSrc: '/img/testimonials/Kristal-Novy.jpg' },
  { name: 'Vanessa Hernandez',     photoSrc: '/img/testimonials/Vanessa-Hernandez.jpg' },
  { name: 'Jean-Yves Durisch',     photoSrc: '/img/testimonials/Jean-Yves.jpg' },
  { name: 'Kerstin Åkesson',       photoSrc: '/img/testimonials/Kerstin-Akesson.jpg' },
  { name: 'Pargash Giorgo',        photoSrc: '/img/testimonials/Pargash.jpg' },
  { name: 'Jade',                  photoSrc: '/img/testimonials/Jade.jpg' },
  { name: 'Joy Blythe',            photoSrc: '/img/testimonials/Joy-2.jpg' },
  { name: 'Taja Devi',             photoSrc: '/img/testimonials/Taja.jpg' },
  { name: 'Nicolle Jones',         photoSrc: '/img/testimonials/Nicolle.jpg' },
  { name: 'Roelien Steenkamp',     photoSrc: '/img/testimonials/Rolien.jpg' },
  { name: 'Bonnie Wegel',          photoSrc: '/img/testimonials/Bonnie.jpg' },
  { name: 'Benni Sack',            photoSrc: '/img/testimonials/Benni-Sack.jpg' },
  { name: 'Michelle Brind',        photoSrc: '/img/testimonials/Michelle_Brind.jpg' },
  { name: 'Dodee Schmitt',         photoSrc: '/img/testimonials/Dodee_Schmitt.jpg' },
  { name: 'Jurgen Muller',         photoSrc: '/img/testimonials/Jurgen_Muller.jpg' },
  { name: 'Rachel Joy Olsen',      photoSrc: '/img/testimonials/Rachel_Joy_Olsen.jpg' },
  { name: 'Rachel Sturman',        photoSrc: '/img/testimonials/Rachel-Sturman.jpg' },
  { name: 'Rachel',                photoSrc: '/img/testimonials/Rachel-1.jpg' },
  { name: 'Shelley Hanna',         photoSrc: '/img/testimonials/mewedding11.jpg' },
  { name: 'Kathy Sherwood',        photoSrc: '/img/testimonials/Screen-Shot-optimized.png' },
  { name: 'Jennifer Henry',        photoSrc: '/img/testimonials/Screen-Shot-2014-10-28-at-4.04.40-PM-optimized.png' },
  { name: 'MaryBeth Kenis',        photoSrc: '/img/testimonials/Screen-Shot-2015-01-13-at-10.43.51-AM-optimized.png' },
  { name: 'Christina Sullivan',    photoSrc: '/img/testimonials/Screen-Shot-2014-10-22-at-4.18.06-PM-optimized.png' },
  { name: 'Lauralai Eliza',        photoSrc: '/img/testimonials/10369604_684056758328809_5493192153290171906_n.jpg' },
  { name: 'Elvira Mana',           photoSrc: '/img/testimonials/Elvira-optimized.jpg' },
  { name: 'Matt LaGanza',          photoSrc: '/img/testimonials/photo-31.png' },
  { name: 'Kaleb Kosanke',         photoSrc: '/img/testimonials/Screen-Shot-2015-01-02-at-7.39.21-PM-optimized.png' },
  { name: 'Beatrice Trezevant',    photoSrc: '/img/testimonials/Beatrice.jpg' },
  { name: 'Lily Diaz',             photoSrc: '/img/testimonials/IMG_20210301_071306388-rotated.jpg' },
  { name: 'Grace Sinnapen',        photoSrc: '/img/testimonials/IMG_20211130_173809-scaled.jpg' },
  { name: 'Kenitra Beauford',      photoSrc: '/img/testimonials/IMG_4495-1.jpg' },
  { name: 'Cait Stanley',          photoSrc: '/img/testimonials/image_6487327.jpg' },
  { name: 'Niki Humm',             photoSrc: '/img/testimonials/Nikki.jpg' },
  { name: 'Nikki Niknak Sin',      photoSrc: '/img/testimonials/Niiki-optimized.jpg' }
];

// ─── GRADUATE BOOKS, books authored by AA graduates (concrete outcomes) ───
export interface GraduateBook {
  id: string;
  author: string;
  location: string | null;
  title: string;
  status: string | null;
  themes: TestimonialTheme[];
  notes: string | null;
  url: string | null;
}

export const GRADUATE_BOOKS: GraduateBook[] = [
  {
    id: 'barb-bailey-heart-whispers',
    author: 'Barb Bailey',
    location: 'Canada',
    title: 'Heart Whispers',
    status: '#1 Amazon Bestseller',
    themes: ['healing', 'self-image'],
    notes: 'Book celebrates #1 Amazon Bestseller status. URL: HEARTWHISPERSBOOK.COM',
    url: 'https://heartwhispersbook.com'
  },
  {
    id: 'barb-bailey-resentment--how-to-let-go-of-bitternes',
    author: 'Barb Bailey',
    location: 'Canada',
    title: 'Resentment: How to Let Go of Bitterness in an Empowering Way',
    status: 'Published, 21 reviews ~3.5★',
    themes: ['healing', 'self-image'],
    notes: null,
    url: null
  },
  {
    id: 'barb-bailey-how-to-detach-from-negative-people-whi',
    author: 'Barb Bailey',
    location: 'Canada',
    title: 'How to Detach from Negative People While Maintaining Compassion',
    status: 'Published, 27 reviews ~4★',
    themes: ['relationships', 'self-image'],
    notes: null,
    url: null
  },
  {
    id: 'barb-bailey-remote-energy--how-to-send-healing-ene',
    author: 'Barb Bailey',
    location: 'Canada',
    title: 'Remote Energy: How to Send Healing Energy to Others',
    status: 'Published, 25 reviews ~3.5★',
    themes: ['healing', 'spiritual-practice'],
    notes: null,
    url: null
  },
  {
    id: 'barb-bailey-serving-up-shame--freedom-from-the-emo',
    author: 'Barb Bailey',
    location: 'Canada',
    title: 'Serving Up Shame: Freedom from the Emotions that Once Held Us Captive',
    status: 'Published, 9 reviews ~4★',
    themes: ['healing', 'self-image'],
    notes: null,
    url: null
  },
  {
    id: 'barb-bailey-how-to-stop-being-a-bitch-by-being-tru',
    author: 'Barb Bailey',
    location: 'Canada',
    title: 'How to Stop Being a Bitch by Being Truthful with Yourself',
    status: 'Published, 15 reviews ~3★',
    themes: ['self-image', 'confidence'],
    notes: null,
    url: null
  },
  {
    id: 'barb-bailey-only-those-who-dare-truly-awaken--a-gu',
    author: 'Barb Bailey',
    location: 'Canada',
    title: 'Only Those Who Dare Truly Awaken: A Guidebook to...',
    status: 'Published, 12 reviews ~4★',
    themes: ['spiritual-practice', 'dharma'],
    notes: null,
    url: null
  },
  {
    id: 'barb-bailey-strolling-thru-the-crossroads-of-self',
    author: 'Barb Bailey',
    location: 'Canada',
    title: 'Strolling Thru the Crossroads of Self-Doubt: A Unique...',
    status: 'Published, 8 reviews ~5★',
    themes: ['self-image', 'confidence'],
    notes: null,
    url: null
  },
  {
    id: 'elvira-mana-following-your-heart--parenting-guide',
    author: 'Elvira Mana',
    location: 'Allentown, Pennsylvania, USA',
    title: 'Following Your Heart: Parenting Guide Using Your Intuition in Raising Kids',
    status: 'Published',
    themes: ['family', 'spiritual-practice'],
    notes: null,
    url: null
  },
  {
    id: 'thomas-m--wurm-six-minutes-for-excellence--leaders',
    author: 'Thomas M. Wurm',
    location: 'Hamilton, Montana, USA',
    title: 'Six Minutes for Excellence: Leadership, Peak Performance',
    status: 'Published, 10 reviews ~5★',
    themes: ['business', 'confidence'],
    notes: null,
    url: null
  },
  {
    id: 'thomas-m--wurm-awakened-by-heart-fire--wildland-fi',
    author: 'Thomas M. Wurm',
    location: 'Hamilton, Montana, USA',
    title: 'Awakened by Heart-Fire: Wildland Fire Stories',
    status: 'Published, 15 reviews ~4.5★',
    themes: ['dharma', 'spiritual-practice'],
    notes: null,
    url: null
  },
  {
    id: 'thomas-m--wurm-why-science-likes-you--understandin',
    author: 'Thomas M. Wurm',
    location: 'Hamilton, Montana, USA',
    title: 'Why Science Likes You: Understanding...',
    status: 'Published, 4 reviews ~4.5★',
    themes: ['self-image', 'spiritual-practice'],
    notes: null,
    url: null
  },
  {
    id: 'thomas-m--wurm-overcome-anxiety-like-a-hero--maste',
    author: 'Thomas M. Wurm',
    location: 'Hamilton, Montana, USA',
    title: 'Overcome Anxiety Like a Hero: Master Your Health, Confidence',
    status: 'Published, 13 reviews ~5★',
    themes: ['mental-health', 'healing', 'confidence'],
    notes: null,
    url: null
  },
  {
    id: 'nikki-autism-superheroes',
    author: 'Nikki',
    location: null,
    title: 'Autism Superheroes',
    status: 'Published with traditional publishing deal, 42 days idea to deal',
    themes: ['family', 'healing'],
    notes: 'Used 21-Day Challenge method to write the book; second 21-day challenge to secure publishing deal.',
    url: null
  },
  {
    id: 'rita-andorinho-the-experiencer',
    author: 'Rita Andorinho',
    location: 'Évora, Portugal',
    title: 'The Experiencer',
    status: 'Written (per Rita\'s testimonial, not yet published)',
    themes: ['dharma', 'self-image'],
    notes: null,
    url: null
  },
];
