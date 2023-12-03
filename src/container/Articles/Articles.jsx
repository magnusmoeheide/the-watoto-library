import React from "react";
import { images } from "../../constants";
import { Navbar, Footer, Section, MyLink } from "../../components";
import { SelectArticle } from "../../components";
import Locationscroll from "../../components/Locationscroll/Locationscroll";

export const articles = [
  {
    id: 12,
    status: "Published",
    day: "3",
    month: "December",
    year: "2023",
    title: "Extraordinary Exam Results",
    img: images.twelve12,
    description: (
      <>
        We have a beautiful announcement to make: Our Class Eight pupils have
        done very well in their final national primary school examination,
        producing wonderful and amazing results. These results play a very
        important role in the high schools the children get selected to join for
        their future studies.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Beating The Odds",
        section_image: images.twelve7,
        section_description: (
          <>
            A child from Kibera is faced with severe disadvantages from early
            childhood. Unfortunately, less than 15% of students who graduate
            from Grade 8 have the opportunity to attend high school. Despite
            these daunting statistics, our collective efforts over the past year
            have created a beacon of hope. We have worked tirelessly with the
            children, fostering a spirit of mutual encouragement and support.
          </>
        ),
      },
      {
        section_id: 2,
        section_title: "100% Success Rate",
        section_image: images.twelve6,
        section_description: (
          <>
            We are happy to report that with the marks they have attained, all
            our children will be able to attend high school. We are very proud
            and happy to witness a 100% success rate, with all of our children
            having the opportunity to transit to high school thanks to their
            academic success. We are very proud of the marks that each and every
            one of them attained. We value the work they had to put in, together
            with our staff members who ensured they receive guidance, support,
            and mentorship.
          </>
        ),
      },
      {
        section_id: 3,
        section_title: "John Messi",
        section_image: images.twelve2,
        section_description: (
          <>
            "I thank The Watoto Library very much for supporting my education."
            Messi is one of our children who has improved the most in his
            studies. When he first joined us, he was academically weak, scoring
            only 215 marks. After receiving our continuous support, he scored
            349 marks in his national primary school examination — an increase
            of more than 60% in less than a year. He attributes this achievement
            to our motivation and support.
          </>
        ),
      },
      {
        section_id: 4,
        section_title: "Blessing Atieno",
        section_image: images.twelve1,
        section_description: (
          <>
            "The Watoto Library has helped me excel in my examinations. I was
            getting 314 out of 500 marks, but scored 352 in my primary school
            national exams thanks to the library. I now know things that I did
            not know before. All The Watoto library members are like my brothers
            and sisters. I will always remember you all and thank my library
            teacher for motivating and teaching me."
          </>
        ),
      },
      {
        section_id: 5,
        section_title: "Justin Omondi",
        section_image: images.twelve8,
        section_description: (
          <>
            Justin spends most of his time teaching, revising, setting exams for
            the children, and marking their papers. He shares with us his kind
            thoughts: "I want to thank The Watoto Library for everything it has
            done for the benefit and well-being of every child it welcomes. I
            pray that it may continue to be a loving place for children to
            always feel at home. I love the library very much, and I hope to
            continue serving these children selflessly with my whole heart."
          </>
        ),
      },
      {
        section_id: 6,
        section_title: "Jamila Isendi",
        section_image: images.twelve3,
        section_description: (
          <>
            Jamila, one of the girls who uses our library space very frequently,
            reminds us that together we stand, divided we fall. She calls on
            humanity to stand together and support one another. A true leader of
            her time, she mentions that The Watoto Library has been one of the
            places where she finds refuge and has helped her in getting
            impeccable results in her studies. She was able to top her class,
            with a score of 361/500 marks. Marks that she had worked hard the
            entire year to achieve.
          </>
        ),
      },
      {
        section_id: 7,
        section_title: "Brian Obama",
        section_image: images.twelve4,
        section_description: (
          <>
            Brian is an ever-present and very dedicated, committed 14-year-old
            boy who frequently utilizes our library space. He has improved his
            grades from scoring 260, to securing 310 marks in his national
            primary school exams — an incredible achievement. Here is what he
            has to say: “The Watoto Library is one of the greatest libraries.
            When I first started using the library, I was weak in mathematics
            and sciences, but with the help of my library teacher, I improved
            and became a good mathematics student. Justin, my teacher, is
            understanding; he has helped me very much, and now I know how to
            answer exam questions without getting scared. I want to be the most
            improved person in my life. I thank The Watoto Library for being so
            gracious in my life."
          </>
        ),
      },
      {
        section_id: 8,
        section_title: "Nicholas Chakua Ondiere",
        section_image: images.twelve5,
        section_description: (
          <>
            Nicholas, who scored 320/500 marks in his final primary school
            examination, says the library, together with its members,
            contributed to his grades, and he shares with us his dreams and
            aspirations: "I am 14 years old. I live in Kibera at a place known
            as Kianda. I was born in 2009. I studied in Olympic Primary School
            and recieved my Kenya Certificate of Primary Education in 2023. I am
            a footballer at a club known as Wale Wale Slum Soccer and my hobby
            is to draw. During my free time, I go to a library called The Watoto
            Library to do my studies. I have three main goals. The first one is
            to play professional football as my career. The second is to help
            children who did not have what I have when I was a child. The last
            one is to leave the streets and go settle in a nice place along with
            my family. I know to succeed in these goals, I must put God first."
          </>
        ),
      },
      {
        section_id: 9,
        section_title: "Extended Opening Hours",
        section_image: images.twelve10,
        section_description: (
          <>
            Now that the children are home for a two-month holiday that began in
            early November, we have been prompted to increase our programs as we
            strive to transform and reach out to many of the children through
            our activities. The library's working hours have extended from as
            early as eight o'clock to around ten in the evening.
          </>
        ),
      },
      {
        section_id: 10,
        section_title: "Join Our Efforts",
        section_image: images.twelve11,
        section_description: (
          <>
            We are reaching out to our friends, calling on you to come and
            support us in our efforts to continue transforming the lives of
            these children by providing them with access to education. Your
            donation goes a long way in enabling us to continue our programs and
            enables us to impact and reach out to more children, women, and
            youths in Kibera. Kindly refer to our{" "}
            <MyLink to="/donate">
              <u>Donate</u>
            </MyLink>{" "}
            page for the different options. Thank you very much.
          </>
        ),
      },
    ],
  },
  {
    id: 11,
    status: "Published",
    day: "6",
    month: "November",
    year: "2023",
    title: "Our Progress and Achievements",
    img: images.eleven5,
    slides: [
      images.eleven12,
      images.eleven14,
      images.eleven8,
      images.eleven9,
      images.eleven10,
    ],
    description: (
      <>
        More than a year ago, The Watoto Library was introduced to the Kibera
        community, a community facing numerous challenges but remaining
        resilient and hopeful for better and brighter days. The Watoto Library
        had only one agenda at that moment: To provide a safe and conducive
        environment for the children in the community to learn and study
        together in a child-friendly space.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Surpassing Our Goals",
        section_image: images.eleven4,
        section_description: (
          <>
            Today, dear friends, we are not only proud to say that we have
            achieved our goals, but we have also surpassed them through our
            programs. In our library, the children feel loved, respected, and
            appreciated. We have created a place for them to foster new
            beginnings and form lasting friendships.
          </>
        ),
      },
      {
        section_id: 2,
        section_title: "Consistent Assistance",
        section_image: images.eleven7,
        section_description: (
          <>
            At the start of this year, we hired our full-time librarian Justin,
            to consistently support the children with their revisions, studies,
            and homework assignments. This decision has been highly beneficial,
            especially considering that these children do not receive as much
            attention as they would like in school due to overcrowded
            classrooms, with over 100 pupils per class and only one class
            teacher. Having someone dedicated to tracking their academic
            progress has significantly increased their commitment to studying,
            resulting in more and more children spending time in the library and
            showing improvement in school.
          </>
        ),
        // " At the start of this year, we hired our full-time librarian Justin, to consistently support the children with their revisions, studies, and homework assignments. This decision has been highly beneficial, especially considering that these children do not receive as much attention as they would like in school due to overcrowded classrooms, with over 100 pupils per class and only one class teacher. Having someone dedicated to tracking their academic progress has significantly increased their commitment to studying, resulting in more and more children spending time in the library and showing improvement in school.",
      },
      {
        section_id: 3,
        section_title: "Extending Our Dance Classes",
        section_image: images.eleven13,
        section_description: (
          <>
            Our journey continues to have a profound impact on the lives of
            these children. During weekends, we actively involve them in games
            and dance classes, emphasizing their right to enjoy childhood and
            play with each other. A considerable number of children participate
            in our programs, with more than 200 children engaging with us on a
            daily basis. Due to the overwhelming response, our dance group
            expanded its sessions to include both Saturday and Sunday
            afternoons. Our dedicated dance instructor consistently empowers
            children of all ages, encouraging them to embrace the joy of
            movement.
          </>
        ),
      },
      {
        section_id: 4,
        section_title: "Digital Success",
        section_image: images.eleven2,
        section_description: (
          <>
            Our digital hub continues to draw in more children eager to join our
            computer classes, and many of them now possess a clear understanding
            of what computers are all about. Our computer tutor Evans, holding a
            degree in computer science, has taken it upon himself to impart the
            best IT skills to these children.
          </>
        ),
      },
      {
        section_id: 5,
        section_image: images.eleven1,
        section_description: (
          <>
            Today, these children have a much-improved understanding of
            Microsoft packages, particularly Microsoft Word, and how to use it
            effectively. Their typing skills have shown significant improvement,
            especially considering that many of them had never used a computer
            before. They have harnessed creativity and innovation and have even
            embarked on the journey of creating a website and have started by
            learning programming languages such as HTML. We have high hopes for
            their continued progress.
          </>
        ),
      },
      {
        section_id: 6,
        section_title: "River Cleanup",
        section_image: images.eleven3,
        section_description: (
          <>
            We take immense pride and joy in serving our beloved Kibera
            community. Our dedicated program, the{" "}
            <MyLink to="/programs/klwf">
              <u>Kibera Local Water Forum</u>
            </MyLink>
            , comprising children, women, youths, and other community
            volunteers, has been actively advocating for improved water quality
            for our community. Our program has adopted and conducts regular
            river clean-up activities Nairobi River, which is full of plastic
            and all sorts of garbage, including human waste. This river plays a
            very essential role in our community's health. Together with our
            children, their parents, and other devoted community volunteers, we
            have collectively committed over 30 hours every month to this
            mission.
          </>
        ),
      },
      {
        section_id: 7,
        section_title: "Thank You",
        section_image: images.eleven11,
        section_description: (
          <>
            We extend an open invitation to our friends to join and support us
            in our dedicated efforts to bring about a significant, meaningful,
            and essential transformation for our community. Your contributions
            make a big difference in helping us continue our work. We say THANK
            YOU VERY MUCH.
          </>
        ),
      },
    ],
  },
  {
    id: 10,
    status: "Published",
    day: "27",
    month: "July",
    year: "2023",
    title: "Building Bonds of Joy and Hope",
    img: images.ten10,
    slides: [images.ten8],
    description: (
      <>
        Our best gifts come from our library children. The gifts of joy and
        hope, as we shower them with lots of love and care. They have taught us
        to be good listeners as they share their life stories with us. We are
        grateful to them for the trust they have placed in our devoted staff. We
        are walking a beautiful journey with the children, reminding each other
        that we are here for one another.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "A Safe Space",
        section_image: images.ten7,
        section_description: (
          <>
            We have created an environment where the children are not only
            encouraged to learn, laugh, play, and engage in debates, but also
            forge friendships with one another. At The Watoto Library, we
            provide a safe space for our children to express themselves,
            enabling them to grow in harmony with their true selves, discovering
            their potentials, and embarking on their unique life journeys. It is
            within these library walls that the children confide in us, sharing
            their struggles, opinions, and, often, their dreams and aspirations.
          </>
        ),
      },
      {
        section_id: 2,
        section_title: "The Story of a Resilient 15-Year-Old Boy",
        section_image: images.ten1,
        section_description: (
          <>
            Allow me to share with all of you the story of Stephen Kalonzo, a
            15-year-old boy whose life has been transformed, all thanks to the
            support of our library through a generous friend who has agreed to
            support his high school education. We listened to his story and took
            the needed action by sharing it out. He had given up hope of ever
            stepping into a classroom again. We are happy to report that he has
            joined a boarding high school facility that will be able to cater to
            his academic and well-being needs.
          </>
        ),
      },
      {
        section_id: 3,
        section_image: images.ten6,
        section_description: (
          <>
            He will receive quality education, nutritious meals, and a bed to
            sleep on. A place for him to foster new beginnings as he strives to
            become a doctor in the days ahead. He is a child with so much to
            offer, a child who only needed a listening ear. Stephen comes from a
            very humble background, one that possesses much less for survival.
            The mother got married to a different family and couldn’t come with
            her children, leaving Stephen with his alcoholic father who he
            rarely sees. Last year, in 2022, Stephen sat for his primary school
            national examination alongside his classmates who started high
            school in January of this year, 2023. Sadly, due to challenging
            circumstances within his family's home, he was unable to make the
            transition to high school.
          </>
        ),
      },
      {
        section_id: 4,
        section_image: images.ten4,
        section_description: (
          <>
            We can't hide our joy to know that we have been able to get him to
            school even though he has had to stay home for months, and not just
            him alone, but also four others who, thanks to different partners,
            we have been able to provide with small bits to keep them in school.
            We are committed to ensuring that their educational needs are met.
            These are children who have shown and proven that they are willing
            but unable to provide for themselves the opportunity to have an
            education.
          </>
        ),
      },
      {
        section_id: 5,
        section_title: "Thank You",
        section_image: images.ten10,
        section_description: (
          <>
            With your continued support, we can create an even more profound
            impact on the lives of children like Stephen. Together, let's build
            a brighter future, empowering these young minds to reach their full
            potential and achieve greatness in their lives. Your kindness and
            generosity make all the difference. Thank you for being a part of
            this beautiful journey!
          </>
        ),
      },
    ],
  },
  {
    id: 9,
    status: "Published",
    day: "29",
    month: "June",
    year: "2023",
    img: images.nine4,
    title: "Serving The Community",
    slides: [images.nine8],
    description: (
      <>
        This month of June has provided an opportunity for our children, along
        with their parents and our staff, to join forces. We have embarked on a
        mission to make a difference for our community. We have joined hands
        with the Kibera Local Water Forum, which is also headed by our own
        director Brandon Okoth.
      </>
    ),

    sections: [
      {
        section_id: 1,
        section_title: "A River in Need of Rescue",
        section_image: images.nine6,
        section_description: (
          <>
            It is important for the children, together with their parents, to be
            included in this movement of rescuing a dying river that has been
            turned into a dumping site. The Nairobi River, once a vibrant river
            abundant with fish, now faces a sad reality. The river is heavily
            polluted, burdened with all kinds of garbage, ranging from plastic
            waste to human waste. The river finds itself in a critical
            situation, demanding immediate attention and action.
            <br />
            <br />
            Earlier this year, we made plans to do{" "}
            <MyLink to="/articles/4" target="_blank">
              cleanups around Kibera
            </MyLink>{" "}
            to improve the water quality of the community. We are thrilled to
            see these plans being implemented, and we are proud to share that
            our children and staff are actively volunteering and devoting their
            time to community service activities.
          </>
        ),
      },
      {
        section_id: 2,
        section_title: "Our Participation in The River Cleanup",
        section_image: images.nine5,
        section_description: (
          <>
            An active participation in the river clean-up has been witnessed by
            our children and staff members. The children's involvement is
            crucial in achieving sustainable change. Over the past three
            Saturdays, they have actively taken part in the river clean-up,
            assisting in collecting and sorting garbage in and around the river
            area.
            <br />
            <br />
            Their participation is highly valued as we recognize their potential
            to make a significant impact on their environment and the Kibera
            community. We aim to provide the children with opportunities to
            observe, learn, and actively participate, nurturing them to become
            the future leaders who genuinely understand the necessary actions
            for a better tomorrow.
          </>
        ),
      },
      {
        section_id: 3,
        section_title: "Connecting Communities and Sharing Solutions",
        section_image: images.nine3,
        section_description: (
          <>
            The struggles of our community are similar to those of the Korogocho
            community. Twenty of our children had the privilege to visit and
            interact with the team from KombGreens Solutions in Korogocho Slums.
            Their remarkable efforts have transformed a once-dumping site into a
            beautiful park, where the residents of Korogocho can now relax, hold
            meetings, or even read a book under the shade of the trees they have
            planted.
          </>
        ),
      },
      {
        section_id: 4,
        section_title: "Introducing Chess To The Korogocho Slums",
        section_image: images.nine1,
        section_description: (
          <>
            Our library children shared their knowledge and played chess with
            the children at KombGreens Solutions, bringing immense joy to our
            hearts. Witnessing our children introduce, teach, and play chess
            with the children in Korogocho, who were encountering the game for
            the first time, was a heartwarming and remarkable experience.
          </>
        ),
      },
      {
        section_id: 5,
        section_image: images.nine2,
        section_description: (
          <>
            The children were deeply impressed and expressed their aspirations
            to have similar green spaces in Kibera, where they can enjoy and
            connect with nature. The children had a wonderful opportunity to
            explore and learn about vegetable farming, witnessing firsthand the
            remarkable transformation that has taken place in Korogocho.
          </>
        ),
      },
      {
        section_id: 6,
        section_image: images.nine7,
        section_description: (
          <>
            We aspire for our library children to become ambassadors of change,
            leading by example. We all have a role to play in supporting and
            encouraging them to maintain their passion and dedication towards
            their community. Let us engage and support the children by placing
            our trust in them and providing opportunities for them to showcase
            their abilities.
          </>
        ),
      },
    ],
  },
  {
    id: 8,
    status: "Published",
    day: "26",
    month: "May",
    year: "2023",
    img: images.eight1,
    title: "Empowering the Kibera Community",
    slides: [images.eight10, images.eight11, images.eight12],
    description: (
      <>
        The Kibera community is a place of resilience, filled with wonderful and
        kind-hearted people who hold onto hope for a better and brighter future.
        Every day, our library welcomes more children through its doors, and we
        have witnessed an increase in the number of those accessing and using
        our space. We pray and hope that we may continue to grow to serve a
        larger population of the community.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_description: (
          <>
            Our goal remains the same: To transform and positively change the
            lives of many children by giving them access to books that would
            broaden their knowledge and inspire them to achieve their dreams. We
            understand the struggles the children go through on a daily basis,
            and we take immense pride and joy in facilitating a safe and
            welcoming space where children can engage in reading and learning,
            knowing that they are loved and cared for.
          </>
        ),
        section_image: images.eight2,
      },
      {
        section_id: 2,
        section_title: "Raised Through Hardship",
        section_description: (
          <>
            There is a child who wakes up every morning to face a tough reality.
            Some go to school without having any meal because they cannot afford
            it, and they are forced to wait until lunch hour when the school
            provides lunch. Even with the hardships they experience, the
            children continue to work hard in their academics. As a library
            space, we have taken it upon ourselves to advocate and be a support
            system that provides each and every one of them with a space to
            showcase their greatness.
          </>
        ),
        section_image: images.eight3,
      },
      {
        section_id: 3,
        section_description: (
          <>
            We understand that living in a busy and crowded community like
            Kibera can often be overwhelming and exhausting for young minds
            trying to make sense of everything around them. We are privileged to
            have caring and supportive children within our community, children
            who understand the value of living as brothers and sisters,
            supporting and looking out for one another.
          </>
        ),
        section_image: images.eight4,
      },
      {
        section_id: 4,
        section_title: "Schooling In Kibera",
        section_description: (
          <>
            Many of our regular kids attend public schools in Kibera. The
            classrooms are overcrowded, exceeding their capacity. One of the
            biggest schools in Kibera, where many of our kids go to school, has
            a population of more than 5,000 students and over 100 pupils per
            class. Shared facilities, like toilets, often have to accommodate a
            ratio of well over 1:100 children.
          </>
        ),
        section_image: images.eight5,
      },
      {
        section_id: 5,
        section_title: "No Learning Materials",
        section_description: (
          <>
            Additionally, many students lack essential learning materials, such
            as textbooks and writing tools, right from the start of their
            educational journey. As a result, a large number of children
            struggle to study or keep up with their classmates, and often
            achieve lower academic grades, which sometimes leads some to drop
            out of school.
          </>
        ),
        section_image: images.eight6,
      },
      {
        section_id: 6,
        section_title: "We Are The Change We Want",
        section_description: (
          <>
            In response to these challenges, our library has taken it upon
            itself to bring about positive change. We have been requesting and
            collecting school textbooks from our friends, which we have made
            available for both primary and secondary pupils to use. Now,
            children can come in and complete their assignments and schoolwork
            without worrying about where to find the necessary textbooks for
            reference.
          </>
        ),
        section_image: images.eight7,
      },
      {
        section_id: 7,
        section_description: (
          <>
            We continue to provide them with basic stationery items needed to
            support their learning, such as pencils and other writing materials.
            We are reminded by the great icon Malala Yousafzai that "One child,
            one teacher, one book, one pen can change the world." We firmly
            believe that any small act of kindness can make a big difference.
            Together, we can bring change to these children.
          </>
        ),
        section_image: images.eight8,
      },
      {
        section_id: 8,
        section_title: "It Is Possible, It Can Happen",
        section_description: (
          <>
            It is important for us to empathize with these children and
            acknowledge the difficulties they face. Together, we can work to
            bring about positive change, advocate for better opportunities, and
            strive for a world where every child, regardless of their
            background, can thrive and fulfill their potential. We, at The
            Watoto Library, firmly believe that this is possible. Join us today
            and support our efforts to continue impacting the lives of many
            vulnerable children.
          </>
        ),
        section_image: images.eight9,
      },
    ],
  },
  {
    id: 7,
    status: "Published",
    day: "19",
    month: "March",
    year: "2023",
    img: images.seven3,
    title: "Nurturing The Academic Growth Of Children",
    slides: [images.seven5, images.seven1, images.seven2, images.seven6],
    description: (
      <>
        Justin Omondi, our library keeper, has been in the frontline
        encouraging, supporting and sharing his mathematic skills with our
        library children for the past three months. Twenty grade eight pupils,
        who will be sitting for their national primary school exams in November,
        have taken advantage of his commitment to help them improve in their
        grades.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Making Good Use Of The Library",
        section_description: (
          <>
            Together they have maintained a routine of doing academic revisions
            both individually and as a team every single day after school. The
            children have continuously showcased their determination,
            commitment, focus and a great sense of desire to improve and achieve
            better grades. They have been using the library as an important
            accessible and available space to as late as 10:00 pm in the
            evenings.
          </>
        ),
        section_image: images.seven8,
      },
      {
        section_id: 2,
        section_title: "Parents Supporting Their Children",
        section_description: (
          <>
            Parents are appreciating their children's sacrifices and have been
            supporting them to have enough time at the library. This has been
            seen when parents have taken upon themselves to do some of the house
            chores to allow the children the opportunity to be at the library.
            The children can now fully focus and work extra hard in their
            academics. We have truly been able to provide the children with a
            safe learning space, revision and study materials and a conducive
            environment for them to achieve academic excellence.
          </>
        ),
        section_image: images.seven4,
      },
      {
        section_id: 3,
        section_title: "Remarkable and Improved Results",
        section_description: (
          <>
            A week ago, the children sat for their mid-term exams at their
            respective schools. We are happy to share some good news on how they
            performed. We had six children who were able to score more than 80%
            percent in their mathematics test, and the highest was a young girl
            who scored over 90%. It is important for us to mention their
            achievements and to take pride in these results because we
            understand the difficulties and challenges the children go through
            to achieve such grades. We hope that in the coming weeks, we shall
            be able to bring in teachers from different schools to come and
            tutor the children in different subjects.
          </>
        ),
        section_image: images.seven7,
      },
    ],
  },
  {
    id: 6,
    status: "Published",
    day: "1",
    month: "February",
    year: "2023",
    img: images.six7,
    title: "Expanding The Library",
    slides: [images.six1, images.six2, images.six3, images.six4, images.six5],
    description: (
      <>
        The Watoto Library has since its very beginning been a popular place for
        the kids in the comminity. Recently we have seen an increased growth in
        kids wanting to engage in our activities, and generous Christmas
        donations that have come in to the library.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "A Computer Room",
        section_image: images.six8,
        section_description: (
          <>
            Because of these donations, we were able to acquire a second room
            nearby, to be used specifically for computer classes. Computers in
            Kibera are scarce, and many of the kids have not engaged with one
            before. It is therefore of great interest to all the kids when we
            have the computers in the library. However, that is not always
            beneficial for the ones who want to learn how to use it. We
            therefore saw it important that we separate the main library from
            the computer classes.
            <br />
            Read about the computer classes{" "}
            <MyLink to="/programs/computerclass">
              <u>here</u>
            </MyLink>
            .
          </>
        ),
      },
      {
        section_id: 2,
        section_title: "Remodelling",
        section_description: (
          <>
            The room, however, was in a state of disrepair when it was first
            acquired, with holes in the floor and walls. But the library keepers
            and volunteers were determined to make the space functional and
            inviting. The first step was to lay a new floor, which involved
            removing the broken tiles and laying a cement floor. After the new
            floor was in place, we set to work, cleaning the room from top to
            bottom. Once the room was sparkling clean, we were ready to add some
            furniture.
          </>
        ),
        section_image: images.six6,
      },
      {
        section_id: 3,
        section_title: "Furniture",
        section_description: (
          <>
            We got four desks and benches made in Kibera to accommodate our
            computers, and arranged them in a way that would be functional and
            comfortable for computer classes. We saw that a 3 and 3
            configuration would be beneficial so that the kids easily could work
            together and help each other along the way. Now, The Watoto
            Library's computer room and classes are serving their purposes in
            the community.
          </>
        ),
        section_image: images.six9,
      },
    ],
  },
  {
    id: 5,
    status: "Published",
    day: "10",
    month: "January",
    year: "2023",
    img: images.five5,
    title: "Sharing Is Caring",
    slides: [
      images.five1,
      images.five2,
      images.five3,
      images.five4,
      images.five9,
    ],
    description: (
      <>
        During the month of December, The Watoto Library received many
        contributions to our New Year's dinner, and an individual donation of
        360 kilograms of ugali flour. We are very grateful for these donations
        that have enabled us to give many kids a nutritious meal.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Sharing a Meal with Our Kids",
        section_description: (
          <>
            On January 7th we cooked for over 100 Kibera kids. We made rice,
            beef and potato stew, and shared with the kids in the neighbourhood.
            We also gave juice and the kids got some candy to enjoy. We wanted
            to welcome everyone in the community to get together and enjoy a
            warm meal to celebrate the new year, no matter if they had engaged
            with the library before or not.
          </>
        ),
        section_image: images.five6,
      },
      {
        section_id: 2,
        section_title: "Everyone Contributing",
        section_description: (
          <>
            The kids were happy to help prepare the food, which included peeling
            potatoes and chopping tomatoes and onions. They took the
            responsibility to organize and make sure everything was going as
            planned. The younger kids were served by the older kids, reminding
            us of the ubuntu philosophy, 'I am because we are'.
          </>
        ),
        section_image: images.five7,
      },
      {
        section_id: 3,
        section_title: "Food Distribution during Christmas",
        section_description: (
          <>
            During the Christmas season, a good friend of the library was kind
            enough to donate more than 360 kgs of food, which included ugali
            flour and sugar. This was distributed among 60 families. Ugali is
            the most commonly eaten food in Kenya and is made from grinded corn,
            stirred in boiling water, and serves as a nutritious meal. We really
            appreciate the donation from this individual.
          </>
        ),
        section_image: images.five10,
      },
      {
        section_id: 4,
        section_title: "Thank You!",
        section_description: (
          <>
            We are very grateful for the generous donations received. We are
            committed to continue to serve the community in the best way
            possible. The response to the food donation was overwhelmingly
            appreciated, with many families expressing gratitude for the love
            and kindness shown during this Christmas time. For many, the donated
            food provided a crucial source of sustenance during a time of
            economic uncertainty and food insecurity.
          </>
        ),
        section_image: images.five8,
      },
    ],
  },
  {
    id: 4,
    status: "Published",
    day: "5",
    month: "November",
    img: images.four9,
    year: "2022",
    title: "Partnering With The WWQA",
    slides: [
      images.four4,
      images.four5,
      images.four6,
      images.four7,
      images.four8,
    ],
    description: (
      <>
        The Watoto Library has started a partnership with the World Water
        Quality Alliance, a sub-division of the United Nations Environment
        Programme. The goal of the partnership is to do cleanups around Kibera
        with the aim of improving the water quality of the community.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Kibera River",
        section_description: (
          <>
            Kibera suffers from a lack of access to basic needs, such as clean
            water and a sewage system. The Kibera river is a source of water for
            the community living near it, but unfortunately, it has faced
            numerous challenges that have affected its quality and availability.
            Over time, the river has become polluted due to human waste being
            dumped into it, which has led to cholera development and health
            problems for those who rely on it.
          </>
        ),
        section_image: images.four3,
      },
      {
        section_id: 2,
        section_title: "WWQA Conference",
        section_description: (
          <>
            Brandon was invited to attend the annual WWQA conference in
            Konstanz, Germany as a sponsored participant, where he shared his
            expertise on the water and river challenges facing the Kibera
            community. Here, he outlined the issues and proposed potential
            solutions. The conference attendees, which included industry leaders
            and experts in the field, were deeply saddened by the current state
            of the Kibera river and began discussing ways to take action and
            improve the water situation. Brandon appreciated the opportunity to
            raise awareness about the challenges facing his community and we
            look forward to changing it.
          </>
        ),
        section_image: images.four2,
      },
    ],
  },
  {
    id: 3,
    status: "Published",
    day: "8",
    month: "October",
    year: "2022",
    img: images.three7,
    title: "Painting The Library",
    slides: [images.three9, images.three1, images.three10],
    description: (
      <>
        Today when you walk into the library, you will find drawings done on the
        wall by the kids of our project. When we first moved into the place, the
        walls had the original cement color lacking warmth to the space. After
        consultation with the kids we decided to make the walls more playful and
        fun.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "Sharing and Creating",
        section_description: (
          <>
            The kids were able to make the space to be vibrant and welcoming for
            every child. They shared the paints and brushes among themselves
            giving everyone a chance to participate. The wall has come out
            naturally and showcases the diversity of the children’s minds, as
            they come from different backgrounds and upbringings. These
            different backgrounds result in different personalities.
          </>
        ),
        section_image: images.three8,
      },
      {
        section_id: 2,
        section_title: "Everyone deserves a High Five",
        section_description: (
          <>
            When you pay attention to the wall, you will find lots of love/heart
            drawings. As your eyes continue reading the wall, you will spot many
            hand-prints made by the kids using paint. I believe this is to
            remind us that we all deserve a high five. We are all loved and
            appreciated just the way we are.
          </>
        ),
        section_image: images.three2,
      },
      {
        section_id: 3,
        section_title: "Finding Courage",
        section_description: (
          <>
            They have shared with one another their vulnerabilities, and found
            the courage to come together to laugh, learn and play. One of our
            kids, Shadrack Odongo aka Babji tells of his experience after
            painting the wall. He says he got a chance to tell others about
            himself and was able to make new friends.
          </>
        ),
        section_image: images.three5,
      },
    ],
  },
  {
    id: 1,
    status: "Published",
    day: "1",
    month: "July",
    year: "2022",
    img: images.one6,
    title: "How The Watoto Library Started",
    description: (
      <>
        - As I was walking around my neighbourhood in Kibera, I came to a stand
        stop when I spotted one school moving their books out of their library.
        They had been renting the space as their own for several years.
      </>
    ),
    sections: [
      {
        section_id: 1,
        section_title: "No Public Libraries",
        section_description: (
          <>
            I had always wished that they would allow anyone from the community
            to use the space, but since it was a private school library, it only
            belonged to the students of that school. You rarely spot a library
            in Kibera, and when you do so, most of the time it is owned or run
            by a private individual or organization, and only those associated
            with them are allowed to access.
          </>
        ),
        section_image: images.one4,
      },
      {
        section_id: 2,
        section_title: "What I saw vs what I imagined",
        section_description: (
          <>
            The space itself was not that well maintained. The electric wires
            were hanging on the ceiling and it was clear that it was damaged by
            the movers as they were un-attaching the bookshelves. The floor was
            rough and the walls had remains of glued papers that looked like
            picture charts. The room was dark filled with dust and dirt.
          </>
        ),
        section_image: images.one7,
      },
      {
        section_id: 3,
        section_title: "Planning and Finding Solutions",
        section_description: (
          <>
            All this time as I was taking note of the space, in my imagination I
            was seeing it in a completely different way. I saw the place
            renovated, kids from different backgrounds and homes within Kibera
            using the space filled with joy. I imaged the place colourful and
            welcoming. Kids coming in to read books, to do their school
            assignments, and to get free academic assistance and materials.
          </>
        ),
        section_image: images.one3,
      },
      {
        section_id: 4,
        section_title: "Turning a Vision into an Action",
        section_description: (
          <>
            I had visioned the place to accommodate young minds that needed to
            be actively involved in things that would later help them become
            better version of themselves. I have lived in Kibera my entire
            childhood. I believe I know and understand some of the challenges
            the kids face.
          </>
        ),
        section_image: images.one1,
      },
      {
        section_id: 5,
        section_title: "A Place of Opportunity",
        section_description: (
          <>
            I decided to look for the owner of the place to negotiate for it.
            After we came to an understanding, I started the process of
            transforming the empty space into becoming what it is today. I
            borrowed some of my grandma's old furniture, painted and brought
            them into the space. Without noticing, kids started coming in one by
            one. I had seen an opportunity for them, one that I was not going to
            let go, and out of commitment and determination, The Watoto Library
            is serving its purpose in our community.
          </>
        ),
        section_image: images.one5,
      },
    ],
  },
];

const Articles = ({ isAdmin }) => {
  const years = ["2023", "2022"];

  return (
    <div>
      <Locationscroll />
      <Navbar />
      <div className="row" id="flex">
        <div className="main">
          <div class="row">
            <div class="page">
              <div>
                <MyLink to="/programs">
                  <div className="div-back">
                    <p className="allNewsLetters">
                      <i className="fa-solid fa-arrow-left"></i>Back to Programs
                    </p>
                  </div>
                </MyLink>
              </div>

              <div
                className="article newsletters"
                style={{ cursor: "default" }}
              >
                <h2>Newsletters</h2>
                <SelectArticle />
                {/* <p>
                  Do you want to receive an email when a new newsletter is out?
                  Sign up here.
                  <form
                    class="newsletterForm"
                    action="https://submit-form.com/JNE0JVGT"
                  >
                    <input
                      type="hidden"
                      name="_redirect"
                      action="https://thewatotolibrary.org/newsletter-success.html"
                      method="get"
                      value="https://thewatotolibrary.org/newsletter-success.html"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required=""
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                    <button class="div-readmore" type="submit">
                      Sign up
                    </button>
                  </form>
                </p> */}
              </div>

              <div class="timeline">
                {years.map((year) => (
                  <div key={year} className="timeline__group">
                    <span className="timeline__year time" aria-hidden="true">
                      {year}
                    </span>
                    <div className="timeline__cards">
                      {articles
                        .filter((article) => article.year.includes(year))
                        .filter(
                          (article) => isAdmin || article.status === "Published"
                        )
                        .map((article) => (
                          <div
                            key={article.id}
                            className="timeline__card article-card"
                            id={article.id}
                          >
                            <Section
                              articleId={article.id}
                              header={article.title}
                              day={article.day}
                              month={article.month}
                              year={article.year}
                              description={article.description}
                              img={article.img}
                              readMore="Read more"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
