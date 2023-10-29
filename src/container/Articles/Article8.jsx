import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import {
  Navbar,
  Footer,
  Side,
  Slideshow,
  Section,
  NextArticles,
} from "../../components";

const Article8 = () => {
  const currentArticleId = "8";

  const slides = [images.eight10, images.eight11, images.eight12];
  const dots = Array(slides.length).fill(null);

  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <div>
            <Link to={`/articles#${currentArticleId}`}>
              <div className="div-back">
                <p className="allNewsLetters">
                  <i className="fa-solid fa-arrow-left"></i>Back to Newsletters
                </p>
              </div>
            </Link>
          </div>
          <div className="article" id={currentArticleId}>
            <Section
              header="Empowering The Kibera Community"
              day="26"
              month="May"
              year="2023"
              description={
                <>
                  The Kibera community is a place of resilience, filled with
                  wonderful and kind-hearted people who hold onto hope for a
                  better and brighter future. Every day, our library welcomes
                  more children through its doors, and we have witnessed an
                  increase in the number of those accessing and using our space.
                  We pray and hope that we may continue to grow to serve a
                  larger population of the community.
                </>
              }
              img={images.eight1}
            />

            <Section
              description={
                <>
                  Our goal remains the same: To transform and positively change
                  the lives of many children by giving them access to books that
                  would broaden their knowledge and inspire them to achieve
                  their dreams. We understand the struggles the children go
                  through on a daily basis, and we take immense pride and joy in
                  facilitating a safe and welcoming space where children can
                  engage in reading and learning, knowing that they are loved
                  and cared for.
                </>
              }
              img={images.eight2}
            />

            <Section
              title="Raised Through Hardship"
              description={
                <>
                  There is a child who wakes up every morning to face a tough
                  reality. Some go to school without having any meal because
                  they cannot afford it, and they are forced to wait until lunch
                  hour when the school provides lunch. Even with the hardships
                  they experience, the children continue to work hard in their
                  academics. As a library space, we have taken it upon ourselves
                  to advocate and be a support system that provides each and
                  every one of them with a space to showcase their greatness.
                </>
              }
              img={images.eight3}
            />

            <Section
              description={
                <>
                  We understand that living in a busy and crowded community like
                  Kibera can often be overwhelming and exhausting for young
                  minds trying to make sense of everything around them. We are
                  privileged to have caring and supportive children within our
                  community, children who understand the value of living as
                  brothers and sisters, supporting and looking out for one
                  another.
                </>
              }
              img={images.eight4}
            />

            <Section
              title="Schooling In Kibera"
              description={
                <>
                  Many of our regular kids attend public schools in Kibera. The
                  classrooms are overcrowded, exceeding their capacity. One of
                  the biggest schools in Kibera, where many of our kids go to
                  school, has a population of more than 5,000 students and over
                  100 pupils per class. Shared facilities, like toilets, often
                  have to accommodate a ratio of well over 1:100 children.
                </>
              }
              img={images.eight5}
            />

            <Section
              title="No Learning Materials"
              description={
                <>
                  Additionally, many students lack essential learning materials,
                  such as textbooks and writing tools, right from the start of
                  their educational journey. As a result, a large number of
                  children struggle to study or keep up with their classmates,
                  and often achieve lower academic grades, which sometimes leads
                  some to drop out of school.
                </>
              }
              img={images.eight6}
            />

            <Section
              title="We Are The Change We Want"
              description={
                <>
                  In response to these challenges, our library has taken it upon
                  itself to bring about positive change. We have been requesting
                  and collecting school textbooks from our friends, which we
                  have made available for both primary and secondary pupils to
                  use. Now, children can come in and complete their assignments
                  and schoolwork without worrying about where to find the
                  necessary textbooks for reference.
                </>
              }
              img={images.eight7}
            />

            <Section
              description={
                <>
                  We continue to provide them with basic stationery items needed
                  to support their learning, such as pencils and other writing
                  materials. We are reminded by the great icon Malala Yousafzai
                  that "One child, one teacher, one book, one pen can change the
                  world." We firmly believe that any small act of kindness can
                  make a big difference. Together, we can bring change to these
                  children.
                </>
              }
              img={images.eight8}
            />

            <Section
              title="It Is Possible, It Can Happen"
              description={
                <>
                  It is important for us to empathize with these children and
                  acknowledge the difficulties they face. Together, we can work
                  to bring about positive change, advocate for better
                  opportunities, and strive for a world where every child,
                  regardless of their background, can thrive and fulfill their
                  potential. We, at The Watoto Library, firmly believe that this
                  is possible. Join us today and support our efforts to continue
                  impacting the lives of many vulnerable children.
                </>
              }
              img={images.eight9}
            />

            <Slideshow slides={slides} dots={dots} />
          </div>
          <NextArticles currentArticleId={currentArticleId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article8;
