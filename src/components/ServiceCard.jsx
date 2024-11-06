import Service from "../assets/img/service1.png"

const ServiceCard = ({ title, image, className = '' }) => (
  <div className={`relative overflow-hidden w-80 group cursor-pointer ${className}`}>
    {/* Image container with gradient overlay */}
    <div className="relative h-[390px] w-full  overflow-hidden">
      <img 
        src={Service} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-900/90" />
    </div>
    
    {/* Title */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-white text-2xl font-medium leading-tight">
        {title}
      </h3>
    </div>
  </div>
);

const ServiceCards = () => {
  const services = [
    {
      title: 'Communications Advisory & Change Management',
    //   image: '../assets/img/service1.png',
    },
    {
      title: 'Sustainability Strategy',
    //   image: '/Users/user/Documents/Codes/zenera/src/assets/img/service1.png',
    },
    {
      title: 'Stakeholder and Community Engagement',
    //   image: '/Users/user/Documents/Codes/zenera/src/assets/img/service1.png',
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