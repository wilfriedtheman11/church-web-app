import React, { Component } from 'react';
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>


        <section className="intro">
            <h2>About Us</h2>
            <div>
             <p>We are a church embracing a multi-cultural approach in all aspects of the ministry.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                <p className="service-title">Schedule</p>
                  <div>
                    <p>Worship Service: Sunday 11 AM- 1PM</p>
                    <p>Bible Study:     Thursday 7PM-8:30PM</p>
                    <p>Prayer Meeting:  Saturday 9AM-11AM</p>
                  </div>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="fas fa-crop"></i></p>
                <p className="service-title">Upcoming events</p>
                <p>Yearly Christmas Dinner: December 21st form 7PM to 9PM.</p>
                  <div>
                  <p> come join us in a night full of worship, fun and food, as we celebrate the birth of our savior Jesus Christ</p>
                  </div>
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="fas fa-code"></i></p>
                <p className="service-title">Tithe.ly</p>
                <p> If you can't be with us in person and you want to give your offering and tithe, you can through our tithe.ly account</p>
                <p>Malachi 3:10</p>

          </div>
        </div>

            </div>



        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>

        </div>

        <section>
            <h2>Our Mission</h2>
            <div>
              <p>Our mission is to lead the people to not only a strong personal faith, but also to being a powerful impact in their families and communities. </p>
              </div>
        </section>


        <section>
            <h2>Contact Us</h2>
            <Form />

        </section>


      </main>
    );
  }
}

export default Main;
