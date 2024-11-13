import PageHeader from '../components/common/PageHeader';
import Container from '../components/common/Container';
import teamImage from '../assets/image/team.jpg';
import FaqComponent from '../components/faq/FaqComponent';
import TitleMarquee from '../components/home/TitleMarquee';

const FaqPage = () => {
  return (
    <>
      <PageHeader title="FAQ" path="/" breadcrumbPath="FAQ" />
      <Container className="py-32 flex md:flex-row justify-between items-center">     
        <div>
          <img src={teamImage} alt="team" className="w-full h-full object-cover rounded-lg" />
        </div>
        <FaqComponent />
      </Container>
      <TitleMarquee title="* Digital Marketing Agency * Development * Design * Creative * Innovative"  className="pb-16"/>
    </>
  );
};

export default FaqPage