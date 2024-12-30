import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      description:
        "Construct Quest has been a reliable partner in our growth. The quality and specificity of the leads they provide have been instrumental in landing projects that align with our sustainability goals. Their platform is a must-have for any contractor looking to expand their business.",
      name: "Sarah Johnson",
      post: "Chief Engineer at EcoBuild Solutions",
    },
    {
      description:
        "We've tried several lead generation services, but Construct Quest stands out. Their tailored leads and comprehensive project information have not only increased our bid success rate but also allowed us to build stronger relationships with clients. It's an invaluable resource for our team.",
      name: "David Miller",
      post: "Founder and CEO of Apex Constructions",
    },
    {
      description:
        "Using Construct Quest has been a game-changer for us. The targeted leads have allowed us to focus our efforts on high-potential opportunities, and the support they provide is top-notch. We've seen a notable increase in project wins.",
      name: "Robert Green",
      post: "Senior Estimator at FutureBuilders LLC",
    },
    {
      description:
        "Construct Quest has become an essential part of our business strategy. Their platform is user-friendly, and the leads are highly relevant to our expertise. We've built strong client relationships and expanded our project portfolio thanks to them.",
      name: "Emily White",
      post: "Director of Business Development at SafeBuild Co",
    },
    {
      description:
        "The quality of leads provided by Construct Quest is unmatched. We appreciate their thorough vetting process and the valuable insights they offer. Our bidding success rate has significantly improved since we started using their services.",
      name: "Michael Brown",
      post: "Operations Manager at BuildRight Inc",
    },
    {
      description:
        "We have been using Construct Quest for over a year, and the results are outstanding. The exclusive leads are precisely what we need, and the one-window solution makes the entire process seamless. Highly recommended!",
      name: "Jane Smith",
      post: "CEO of Yates Constructions",
    },
  ];

  return (
  <>
      <div className="testimonialtop testimonialtop-img">
        <div className="color-gradient-testimonialtop">
          <h2>Testimonial</h2>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial item ">
            <div className="pic">
              <img
                className="quote-icon"
                src="./images/quote.png" 
                alt="quote-icon"
              />
            </div>
            <p className="description">{testimonial.description}</p>
            <h3 className="title">{testimonial.name}</h3>
            <small className="post">{testimonial.post}</small>
          </div>
        ))}
      </Slider>
      </div>
      </>
  );
};

export default Testimonials;
