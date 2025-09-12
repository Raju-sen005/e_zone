import React from 'react';

const teamMembers = [
  {
    name: 'Javena Melo',
    role: 'Founder, Director',
    image: `${process.env.PUBLIC_URL}/assets/img/team/1.jpg`,
  },
  {
    name: 'Paul Honson',
    role: 'Head Technician',
    image: `${process.env.PUBLIC_URL}/assets/img/team/2.jpg`,
  },
  {
    name: 'Devon Lane',
    role: 'Technician',
    image: `${process.env.PUBLIC_URL}/assets/img/team/3.jpg`,
  },
  {
    name: 'Jalen Davies',
    role: 'Marketing Manager',
    image: `${process.env.PUBLIC_URL}/assets/img/team/4.jpg`,
  },
  {
    name: 'Kylee Danford',
    role: 'Sales Manager',
    image: `${process.env.PUBLIC_URL}/assets/img/team/5.jpg`,
  },
  {
    name: 'Luisa Wilson',
    role: 'Support Assistant',
    image: `${process.env.PUBLIC_URL}/assets/img/team/6.jpg`,
  },
];

const TeamSection = () => {
  return (
    <div className="team-section mt-100" data-aos="fade-up" data-aos-duration="700">
      <div className="team-section-wrapper">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-heading">Meet our Team</h2>
          </div>
          <div className="team-wrapper">
            <div className="row">
              {teamMembers.map((member, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div className="team-item">
                    <img src={member.image} alt={member.name} />
                    <div className="member-absolute">
                      <div className="member-details text-center">
                        <h4 className="member-name">{member.name}</h4>
                        <p className="member-desig">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
