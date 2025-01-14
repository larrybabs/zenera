import Service1 from "../assets/img/cs1.png"
import Service2 from "../assets/img/cs2.png"
import Service3 from "../assets/img/cs3.png"

const ServiceCard = ({ title, image, className = '' }) => (
  <div className={`relative overflow-hidden md:w-80 group cursor-pointer ${className}`}>
    {/* Image container with gradient overlay */}
    <div className="relative h-[390px] w-full  overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-900/90" />
    </div>
    
    {/* Title */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-white text-xl font-medium leading-tight">
        {title}
      </h3>
    </div>
  </div>
);

const ServiceCards = () => {
  const services = [
    {
      title: 'Communications Advisory & Change Management',
      image: Service1
    },
    {
      title: 'Sustainable Brand Strategy',
      image: Service2
    },
    {
      title: 'Marketing and Consumer Activation',
      image: Service3
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;