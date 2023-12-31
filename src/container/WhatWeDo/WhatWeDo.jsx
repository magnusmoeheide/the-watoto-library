import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side, Section } from "../../components";
import { images } from "../../constants";
import Locationscroll from "../../components/Locationscroll/Locationscroll";

export const whatwedo = [
  {
    id: 1,
    status: "Published",
    url: "computerclass",
    title: "Computer Class",
    instructor: "Evans",
    places: "20",
    openingHours: "Sat 8am - 12pm",
    img: images.computerClass2,
    icon: <i className="fa-solid fa-laptop"></i>,
    slides: [images.computerClass9],
    description: (
      <>
        The Watoto Library is excited to announce the launch of its new computer
        classes, made possible by a generous donation of computers from{" "}
        <a
          href="https://skullerud.osloskolen.no/"
          target="_blank"
          rel="noreferrer"
        >
          <u>
            Skullerud lower secondary school{" "}
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </u>
        </a>{" "}
        in Oslo, Norway. These classes will provide the Kibera children with
        valuable skills that will help them succeed in the digital age.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Expanding The Library",
        section_image: images.computerClass4,
        section_description: (
          <>
            To accommodate the computer classes, we have purchased and
            refurbished a room next to the library, creating a dedicated space
            for the children to learn and explore the world of technology. The
            room is equipped with desks and benches, computers and necessary
            equipment, ensuring that the children have access to the tools they
            need to succeed.
            <br />
            Read about the expansion{" "}
            <Link to="/article/6" target="_blank">
              <u>here</u>.
            </Link>
          </>
        ),
      },
      {
        section_id: 2,
        section_title: "Our Trainer",
        section_image: images.computerClass7,
        section_description: (
          <>
            Evans, holding a degree in Computer Science, will be leading the
            classes, teaching the children how to use the computer. Through the
            classes they will learn everything from how to operate a computer,
            to how to create graphic designs and work with Adobe programs. Evans
            will be working closely with the children, providing individualized
            instruction and support to help them achieve their goals.
          </>
        ),
      },
      {
        section_id: 3,
        section_title: "Building Skills",
        section_image: images.computerClass3,
        section_description: (
          <>
            The computer classes will not only provide the children with
            valuable technical skills, but they will also help to promote
            creativity, critical thinking, and problem-solving. These are all
            essential skills that will help the children succeed, and will give
            them the tools they need to make a better life for themselves and
            their families.
          </>
        ),
      },
      {
        section_id: 4,
        section_title: "Thank You",
        section_image: images.computerClass1,
        section_description: (
          <>
            The Watoto Library is committed to providing the children in the
            community with the resources and support they need to succeed. With
            the addition of computer classes, the library is expanding its
            offerings and providing the children with the opportunity to learn
            valuable skills that will help them thrive in the digital age. The
            kids are very grateful for and make sure to utalize this
            opportunity.
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    status: "Published",
    url: "chessclub",
    title: "Chess Club",
    instructor: "Brandon",
    places: "25",
    openingHours: "Weekends",
    img: images.chessClub2,
    icon: <i className="fa-solid fa-chess"></i>,
    slides: [images.chessClub4, images.chessClub5],
    description: (
      <>
        As part of The Watoto Library's many engagements, we have decided to
        invest in the game of chess. Chess is a brilliant game that challenges
        the mind, strategy, and gives rise to the children's confidence. As a
        library we are committed to supporting that more kids can come in and
        play the game with one another.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "The story of The Watoto Library and Chess",
        section_image: images.chessClub3,
        section_description: (
          <>
            It all begins with Messi and Chris. Two young and smart boys came
            in, saw a chess board, and wanted to play. They had interacted with
            the game in one of their school programs before, brought to them by
            an independent organisation. Unfortunately, when the organisation
            stopped coming, the boys gave up the hope of ever finding a place
            that would accommodate and give them space to learn, train and play
            the game.
          </>
        ),
      },
      {
        section_id: 2,
        section_title: "A Special Place",
        section_image: images.chessClub1,
        section_description: (
          <>
            This space is special for them and many others like them who have
            continued showing up each day to learn, train and challenge one
            another. Young kids who are determined and committed to teach other
            young kids how to play the game of chess. What makes this act to
            inspire us, is the fact that these kids are sharing what they have
            as they learn themselves.
          </>
        ),
      },
      {
        section_id: 3,
        section_title: "The Future",
        section_image: images.chessClub5, // Assuming this is the image you want to use here; replace with the correct one if needed.
        section_description: (
          <>
            Chess is not a popular board game in Kibera. Matter of fact, you
            find that the majority of the kids are not aware of its existence,
            leave alone its name. However, with the kids being introduced to
            such a brilliant game at a young age, the sky's the limit.
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    status: "Published",
    url: "studygroup",
    title: "Study Group",
    instructor: "Justin",
    places: "40",
    openingHours: "Opening hours",
    img: images.studyGroup4,
    icon: <i className="fa-solid fa-graduation-cap"></i>,
    slides: [
      images.studyGroup1,
      images.studyGroup2,
      images.studyGroup5,
      images.studyGroup9,
      images.studyGroup8,
    ],
    description: (
      <>
        One of The Watoto Library's most important engagements is our study
        group. The library is a safe place where kids can come in and do their
        school work in a safe and calm environment with no outside disctraction.
        We also provide books, access to light, power, computers and Internet.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Difficult to Study At Home",
        section_image: images.studyGroup3,
        section_description: (
          <>
            Many of the kids who visit our library come from a difficult home
            situation. You will often find that they live with several other
            people in one room, maybe without power and in many cases with no
            Internet. These are very difficult study conditions and many are not
            able to concentrate properly.
          </>
        ),
      },
      {
        section_id: 2,
        section_title: "Guidance and Assistance",
        section_image: images.studyGroup6,
        section_description: (
          <>
            Kids that come to the library will get free assistance from our
            library keepers who can help them with their school work. At home,
            it might be difficult to get assistance from family members because
            education is not often a priority and many suffer from lack of
            education. Therefore, they might not have the confidence to ask
            their parents for assistance. With our library, they can freely ask
            for help or work together with other kids.
          </>
        ),
      },
    ],
  },
  {
    id: 4,
    status: "Published",
    url: "dancegroup",
    title: "Dance Group",
    instructor: "Bernard",
    places: "25",
    openingHours: "Sat - Sun | 2pm - 6pm",
    img: images.danceGroup1,
    icon: <i className="fa-solid fa-child-reaching"></i>,
    description: (
      <>
        Every Saturday our dance teacher Bernard Chacha organizes a dancing
        class for the kids. He believes that dance is another form of discipline
        and one way to keep the youths of Kibera out of the street. It is also a
        brilliant way for them to learn preseverance and self-motivation.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Every Saturday",
        section_description: (
          <>
            On Saturday afternoon, the kids use the library to do their dance
            training. Young kids from 2:00 - 3:30pm and older kids from 4:00 -
            6:00pm, after which the library is turned back to the usual to allow
            Chess players to have time to play chess from 6:00 - 7:30pm. On
            Saturday mornings and Sundays, the kids are usually engaged with
            their studies, finishing assignments and doing revisions.
          </>
        ),
        section_image: images.danceGroup4,
      },
      {
        section_id: 2,
        section_title: "Why Learn Dancing?",
        section_description: (
          <>
            Dance doesn't just offer a chance for children to meet new friends
            and stay active. It is a brilliant way for them to learn
            perseverance and self-motivation. It encourages them to experiment
            and find their own ways to solve challenges. It also teaches them to
            be comfortable with trying and failing, and learning from that.
          </>
        ),
        section_image: images.danceGroup2,
      },
      {
        section_id: 3,
        section_title: "A Sense of Accomplishment",
        section_description: (
          <>
            The sense of success and accomplishment they experience after
            mastering a move will give them the courage to also try and fail in
            other aspects of life. These benefits are especially rewarding to a
            child who is shy, has low self-esteem, or has shown no interest in
            performing.
          </>
        ),
        section_image: images.danceGroup5,
      },
      {
        section_id: 4,
        section_title: "Growth",
        section_description: (
          <>
            <p>
              This can help them start to believe in themselves more. Over time
              their confidence will grow, and some might find out they enjoy
              performing in front of other people.
            </p>
            <p>
              Being active and dancing also stimulates the mind and helps with
              memory. Learning body movement and gestures help children absorb
              ideas better and enhances their creativity. We therefore encourage
              all the kids to actively participate, no matter their age or
              current level.
            </p>
          </>
        ),
        section_image: images.danceGroup3,
      },
    ],
  },
  {
    id: 5,
    status: "Published",
    url: "klwf",
    title: "River Cleanup",
    instructor: "Brandon",
    openingHours: "Fri - Sat | 8 - 12am",
    img: images.klwf13,
    icon: <i className="fa-solid fa-person-digging"></i>,
    slides: [images.klwf11, images.klwf8, images.klwf10, images.klwf7],
    description: (
      <>
        We have founded Kibera Local Water Forum, a program that is dedicated to
        restoring and beautifying a long section of the Nairobi River that flows
        through our community. In the past, this river played a crucial role in
        enhancing our community's well-being, serving as a source of clean water
        for drinking, bathing, and washing clothes.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_description: (
          <>
            However, as our community expanded, the increased population density
            placed immense pressure on our limited resources. Tragically, the
            river transformed from a lifeline into a dumping ground,
            accumulating all sorts of waste, including plastic and even human
            waste. The water has become so polluted that it can no longer
            support any form of life, and its appearance has drastically
            transformed, resembling sewage water more than ever before.
          </>
        ),
        section_image: images.klwf5,
      },
      {
        section_id: 2,
        section_title: "Stepping Up For Our Community",
        section_description: (
          <>
            To support our community, we made the decision to take care of a
            section of the river. Over the past six months and continuing, every
            Friday and Saturday morning, we have devoted six hours a week to
            community service. We have been conducting regular cleanup
            activities with the assistance of our library children, their
            parents, friends of the library, neighbours, and numerous other
            community volunteers.
          </>
        ),
        section_image: images.klwf6,
      },
      {
        section_id: 3,
        section_title: "Our Goal",
        section_description: (
          <>
            Our primary goal has been to improve the water by addressing the
            water quality of the river through the removal of accumulated
            garbage, which had reached a point of forming islands, a realization
            we had later on. We aim to restore the clean and healthy river that
            Kibera used to depend on.
          </>
        ),
        section_image: images.klwf9,
      },
      {
        section_id: 4,
        section_title: "Accomplishments So Far",
        section_description: (
          <>
            Our accomplishments so far remain dear to us, especially having
            witnessed the condition of the river before. When we began working
            on the river, the water wasn't flowing, and the garbage had blocked
            the river to the extent that one could walk right across it without
            realizing it was the river they were crossing. Fabric materials,
            plastics, and all sorts of trash had filled the river with years of
            accumulated garbage.
          </>
        ),
        section_image: images.klwf3,
      },
      {
        section_id: 5,
        section_description: (
          <>
            Today, the river is breathing again as we have successfully restored
            a section to maintain a continuous flow of water. This has motivated
            the locals to cease dumping into the river. They now dispose of
            their waste at a designated area we've established as a temporary
            dumping site. From there, we sort and recycle the materials and then
            coordinate and put pressure on government officials to come and
            collect non-recyclable waste.
          </>
        ),
        section_image: images.klwf12,
      },
      {
        section_id: 6,
        section_title: "Caring For Our Community",
        section_description: (
          <>
            We are a small organization doing great things. We believe in
            bringing dignity to our community, and we are achieving this by
            caring, loving, and respecting our community's children, providing
            them a space for better childhoods to grow into. We care for our
            environment, and that's why we remain very vocal and passionate
            about changing the water quality of the river, a river that
            continues to need our urgent intervention.
          </>
        ),
        section_image: images.klwf2,
      },
      {
        section_id: 7,
        section_title: "A Call For Action And Support",
        section_description: (
          <>
            We are calling upon our friends to join and support us so that we
            can continue to bring this positive change to our community. Your
            support will greatly assist us in acquiring more tools and materials
            to enable us to continue serving the children, women, and youth of
            our community. We strongly believe in UBUNTU - I Am because We are.
            Join us today and become a part of this change.
          </>
        ),
        section_image: images.klwf1,
      },
    ],
  },
  {
    id: 6,
    status: "Published",
    url: "thewatotoacademy",
    title: "The Watoto Academy",
    coming: "coming",
    img: images.twa1,
    icon: <i class="fa-solid fa-school"></i>,
    // slides: [images.klwf11, images.klwf8, images.klwf10, images.klwf7],
    description: (
      <>
        A journey of a thousand miles begins with a single step. The Watoto
        Library is expanding to make a greater impact on vulnerable children in
        the slums of Kibera. In the heart of Kibera, we are proud to introduce
        The Watoto Academy, a community school that will offer quality junior
        secondary education to at least 30 boys and girls in the first year, and
        will gradually welcome more students in the following years.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_description: (
          <>
            As Nelson Mandela once said, "Education is the most powerful weapon
            you can use to change the world." The Watoto Academy will, starting
            from 2024, admit 30 children aged 15 years to join Grade 7, where
            they will receive a better and higher quality education. This
            initiative is aimed at children from families who may not have the
            means to provide better education for their children, but who are
            eager and ready to receive a quality education for themselves and,
            in turn, use that education to serve their community.
          </>
        ),
        section_image: images.twa6,
      },
      {
        section_id: 1,
        section_title: "Our Scholarship",
        section_description: (
          <>
            The Watoto Academy will, therefore, provide a holistic junior
            secondary school to children and families that lack financial
            resources. Here, the children will have access to qualified teachers
            who will engage them in a child-friendly environment and cover with
            them a holistic curriculum that will enable them to be thinkers,
            achievers, and doers. Our students will receive a full scholarship
            and everything they need to successfully do their studies for free.
            This includes tuition fees covered, as well as school uniform,
            materials and nutritious meals.
          </>
        ),
        section_image: images.twa9,
      },
      {
        section_id: 1,
        section_description: (
          <>
            The Watoto Academy aspires to provide a comprehensive and
            exceptional educational program that nurtures holistic development,
            instills deep values of love and respect for one another, and
            upholds a strong commitment to serving the community. The children
            will be provided with school uniforms, textbooks, study, and writing
            materials that will enable them to showcase and utilize their
            creativity to make them innovative in solving some of the community
            challenges. The children will be fully sponsored, and they, together
            with their parents and relatives, will be engaged in community
            service activities.
          </>
        ),
        section_image: images.twa7,
      },
      {
        section_id: 1,
        section_title: "Why The Watoto Academy",
        section_description: (
          <>
            Through our ongoing engagement with the children in our community,
            we have recognized a pressing demand for an improved and more
            readily accessible junior secondary school. It has come to our
            attention that a significant number of our children encounter
            difficulties in accessing educational institutions, particularly
            after completing grade six and transitioning to junior secondary
            education in grade seven. Unfortunately, many of these children are
            forced to enroll in overcrowded public schools with severely limited
            resources.
          </>
        ),
        section_image: images.twa8,
      },
      {
        section_id: 2,
        section_title: "Renovating The Watoto Library",
        section_description: (
          <>
            We are excited to announce that we are undertaking a project to
            renovate our library space, transforming it into a state-of-the-art
            classroom for the benefit of our students. We have been actively
            seeking investors to partner with us on this endeavor, and we are
            grateful to have already secured the support of{" "}
            <a
              href="https://opsahlgruppen.no/"
              target="_blank"
              rel="noreferrer"
            >
              <u>Opsahlgruppen</u>
            </a>
            , who will be contributing to the renovation of our library space,
            ensuring our children have access to improved facilities.
          </>
        ),
        section_image: images.twa5,
      },
      {
        section_id: 4,
        section_title: "Financing The School",
        section_description: (
          <>
            Additionally, we are delighted to share that our friends from{" "}
            <a
              href="https://skullerud.osloskolen.no/"
              target="_blank"
              rel="noreferrer"
            >
              <u>Skullerud skole</u>
            </a>{" "}
            have shown their commitment to our cause. They will be mobilizing
            their students to raise funds for our initiative, further extending
            their support to children in less fortunate circumstances. It's
            worth noting that Skullerud skole has been a valuable partner in the
            past, having contributed to the development of our{" "}
            <Link to="/programs/computerclass" target="_blank">
              <u>computer classes</u>
            </Link>{" "}
            by providing laptops. Now, their students are dedicating their
            efforts to support our school, and we are deeply appreciative of
            their continued generosity.
          </>
        ),
        section_image: images.twa3,
      },
      {
        section_id: 3,
        section_title: "We Invite You",
        section_description: (
          <>
            By sharing our progress and collaborations, we aim to create a space
            for potential investors to join us in making a meaningful difference
            for our students. We welcome the opportunity to discuss how you can
            become a part of our mission. We are working towards getting a
            modern science lab for our children and a community kitchen for them
            to have nutritious meals. It is possible to make it happen.
            <br />
            <br />
            Our organization holds a deep understanding of the impact we bring
            to the Kibera community. We consider ourselves a grassroots movement
            where everyone's opinions and considerations are valued. The call
            for a school has come from the children themselves and their
            parents, and this is largely thanks to the support our community
            library has provided in aiding the children with their studies and
            academics.
          </>
        ),
        section_image: images.twa2,
      },
      {
        section_id: 5,
        section_description: (
          <>
            We call upon our true friends to come and support us in making
            impactful differences in the lives of these children. No amount is
            small, every bit counts and matters. Let's make The Watoto Academy a
            reality. It is possible. To make a contribution, kindly visit our{" "}
            <Link to="/donate" target="_blank">
              <u>Donate</u>
            </Link>{" "}
            page and add 'The Watoto Academy' in the description. Thank you,
            everyone, very much for your support.
          </>
        ),
        section_image: images.twa4,
      },
    ],
  },
];

const WhatWeDo = () => {
  return (
    <div>
      <Locationscroll />
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div className="article">
            <div className="flex-image-text">
              <div>
                <h2>Our Programs</h2>
                <div className="flex-container-2">
                  <div className="openhrs">
                    <div>
                      <p>Library opening hours</p>
                    </div>
                    <div className="flex-container-2">
                      <div className="when">
                        <i className="fa-regular fa-calendar"></i>Mon - Fri: 3pm
                        - 10pm
                      </div>
                      <div className="when">
                        <i className="fa-regular fa-calendar"></i>Sat - Sun: 8am
                        - 10pm
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  We inspire, empower and facilitate childhood growth in areas
                  faced with poverty and oppression. We do studying, dancing,
                  computer classes and chess regularly. You can read more about
                  our other engagements in our newsletters.
                </p>
                <Link to="/articles">
                  <div className="div-readmore">
                    <p className="allNewsLetters">
                      All newsletters{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </Link>
              </div>
              <img src={images.happyBoys} className="img" />
            </div>
          </div>
          <br />

          {whatwedo
            .filter((wwd) => wwd.status === "Published")
            .map((wwd) => (
              <div key={wwd.id}>
                <div className="article" id={wwd.url}>
                  <Section
                    wwdId={wwd.id}
                    wwdUrl={wwd.url}
                    header={wwd.header}
                    title={wwd.title}
                    coming={wwd.coming}
                    instructor={wwd.instructor}
                    places={wwd.places}
                    openingHours={wwd.openingHours}
                    description={wwd.description}
                    img={wwd.img}
                    readMore="Read more"
                    customReadMoreLink={`/programs/${wwd.url}`}
                  />
                </div>
                <br />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
