/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import StatItem from 'components/cards/stat-item';
import icon1 from 'assets/images/services/clock.png';
import icon2 from 'assets/images/services/bibimbap.png';
import icon3 from 'assets/images/services/baker.png';
import icon4 from 'assets/images/services/wellness.png';
import icon5 from 'assets/images/services/thanksgiving.png';
import icon6 from 'assets/images/services/gift.png';

const data = {
  services: [
    {
      id: 1,
      icon: icon1,
      title: 'Time saving',
      desc: `You're totally out of time but the empty fridge keeps exacerbating the process? 
      Leave cooking to us and go about your business.`,
      link: '#',
    },
    {
      id: 2,
      icon: icon2,
      title: 'Delicious meals',
      desc: `Pamper yourself — savor the flavors of professional chef's culinary delights fresh from the oven.`,
      link: '#',
    },
    {
      id: 3,
      icon: icon3,
      title: 'Job hunting',
      desc: `If you are a cook who seeks a comfy workspace — our platform is a godsend for you! Freelance working 
      will make your life easier.`,
      link: '#',
    },
    {
      id: 4,
      icon: icon4,
      title: 'Health care',
      desc: `Visiting crowded restaurants is an unneccesary risk during quarantine. Care about your 
      health — stay at home and enjoy tasty food!`,
      link: '#',
    },
    {
      id: 5,
      icon: icon5,
      title: 'Get notifications',
      desc: `Subscribe us by adding your email address to get notified about our updates and interesting culinary events in your city.`,
      link: '#',
    },
    {
      id: 6,
      icon: icon6,
      title: 'Get a discount',
      desc: `And last but not least: we offer some discounts for our regular customers, so... Don't miss a chance!`,
      link: '#',
    },
  ],
  stats: [
    {
      id: 1,
      value: 1500,
      suffix: '',
      title: 'Food projects',
    },
    {
      id: 2,
      value: 30,
      suffix: '',
      title: 'Restaurants',
    },
    {
      id: 3,
      value: 150,
      suffix: 'K',
      title: 'Professional Cooks',
    },
    {
      id: 4,
      value: 300,
      suffix: '+',
      title: 'Satisfied Customers',
    },
  ],
};

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Service we work on"
          title="Why should you choose us?"
        />
        <Grid sx={styles.serviceGrid}>
          {data.services.map((item) => (
            <Service key={item.id} service={item} />
          ))}
        </Grid>
        <Grid sx={styles.statsGrid}>
          {data.stats.map((stat) => (
            <TrackVisibility key={stat.id} once>
              <StatItem stat={stat} />
            </TrackVisibility>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, 8, 10, null, 15],
    pb: [7, null, null, null, 10, null, 14],
  },
  serviceGrid: {
    backgroundColor: 'white',
    boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.04)',
    borderRadius: 10,
    gap: [8, null, null, '60px 40px', '50px 30px', '60px 40px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 250px)',
      null,
      null,
      'repeat(2, 260px)',
      'repeat(3, 258px)',
      'repeat(3, 300px)',
    ],
    pt: [8, null, null, 16],
    pb: [8, null, null, 15],
  },
  statsGrid: {
    gap: [6, null, null, '60px 30px', '60px 80px', '60px 110px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 120px)',
      null,
      null,
      'repeat(4, 130px)',
      'repeat(4, 150px)',
    ],
    mt: [10],
  },
};
