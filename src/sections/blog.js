/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';

const chef1 = 'Guy Fieri';
const chef2 = 'Gordon Ramsay';
const chef3 = 'Rachael Ray';

const data = [
  {
    id: 1,
    slug: '#how-to',
    thumbnail: thumb1,
    showDescription: true,
    title: `Andriy Vlasyuk about ${chef1}`,
    description: `Yesterday I was so exhausted that I couldn't even manage to cook a dinner for myself. Fortunately, I've stumbled on this platform and now my fridge is cracking at the seams! There's never been so much tasty food in my house!`,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: thumb2,
    showDescription: true,
    title: `Olena Buryak about ${chef2}`,
    description: `I've gone on a diet recently but I'm kinda the worst person at cooking in the world! The chief I've found here rescued my weight struggles. Delicious and healthy meals help me not to give up. What I like the most about it is that I waste neither energy nor time on cooking.`,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: thumb3,
    showDescription: true,
    title: `Sergiy Senkiv about ${chef3}`,
    description: `I wanted to surprise my wife with her favorite Italian cuisine on her birthday. Due to the quarantine, all restaurants were closed, so a home-cook solved this dilemma. Fresh from the oven and in a cozy house atmosphere, the meal tasted incredibly delicious!`,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Latest newsfeed"
          title="Our feedbacks"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  chef1: {
    color: '#f46036'
  },
  section: {
    pt: [6, null, null, 9, null, 13],
    pb: [8, null, null, 9, null, 17],
    position: 'relative',
  },
  heading: {
    mb: [6, null, null, 9],
  },
};
