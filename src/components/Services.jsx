import servicesData from '../data/servicesData';
import SectionsHead from '../pages/SectionsHead';
import "../styles/Services.css";
import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';


const iconMap = {
  FaShippingFast: <FaShippingFast />,
  FaShieldAlt: <FaShieldAlt />,
  FaTags: <FaTags />,
  FaCreditCard: <FaCreditCard />,
};


const Services = () => {
  return (
    <>
      <section id="services" className="section">
        <div className='p-3 max-w-screen-xl ml-auto mr-auto '>
          <SectionsHead heading="Our Advantages" />
          <div className="text-center sm:text-left grid grid-cols-2 sm:grid-cols-4 gap-2">
            {
              servicesData.map((item) => {
                const { id, icon, title, info } = item;

                return (
                  <div className="block sm:flex justify-center items-center gap-5 pb-10" key={id}>
                    <div className="flex justify-center sm:block services_icon"> {iconMap[icon]}</div>
                    <div className="services_details">
                      <h4 className='text-accent-content'>{title}</h4>
                      <p className='text-accent-content'>{info}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;