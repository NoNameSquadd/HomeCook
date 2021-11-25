/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import worldMap from 'assets/images/world-map.svg';

const WorldMap = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Yet, our plans are to spread across these borders over time."
          description="Our aim is to attract chefs from different parts of the world. Thus, everyone will get the opportunity
          to taste yummy meals without leaving their comfort place!"
        />
        <Box as="figure" sx={styles.illustration}>
          <Image width="500" height="300" src={worldMap} alt="worldMap" />
        </Box>
      </Container>
    </Box>
  );
};

export default WorldMap;

const styles = {
  section: {
    pt: [8, null, null, 8, null, null, 10],
    pb: [6, null, null, 8, null, null, 14],
  },
  heading: {
    mb: [2, null, null, 1],
  },
  illustration: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
