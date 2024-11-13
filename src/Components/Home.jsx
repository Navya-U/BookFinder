import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import "/src/styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div class="home-navbar">
        <header class="navbar-container">
          <header data-thq="thq-navbar" class="navbar-navbar-interactive">
            <img
              alt="Book Finder Logo"
              src="booklogo.jpg"
              class="navbar-image1"
            />
            <div data-thq="thq-navbar-nav" class="navbar-desktop-menu">
              <nav class="navbar-links">
                <span class="thq-link thq-body-small">
                  <Link to="/"> Home</Link>
                </span>
                <span class="thq-link thq-body-small">
                  <ScrollLink to="search-section" smooth={true} duration={500}>
                    Search
                  </ScrollLink>
                </span>
                <span class="thq-link thq-body-small">
                  <Link to="/genres">Genres</Link>
                </span>
                <span class="thq-link thq-body-small">
                  <ScrollLink to="about-section" smooth={true} duration={500}>
                    About
                  </ScrollLink>
                </span>
                <span class="thq-link thq-body-small">
                  <ScrollLink to="contact-section" smooth={true} duration={500}>
                    Contact
                  </ScrollLink>
                </span>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" class="navbar-burger-menu">
              <svg viewBox="0 0 1024 1024" class="navbar-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" class="navbar-mobile-menu">
              <div class="navbar-nav">
                <div class="navbar-top">
                  <img
                    alt="Book Finder Logo"
                    src="booklogo.jpg"
                    class="navbar-logo"
                  />
                  <div data-thq="thq-close-menu" class="navbar-close-menu">
                    <svg viewBox="0 0 1024 1024" class="navbar-icon2">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav class="navbar-links1">
                  <span class="thq-link thq-body-small">
                    <Link to="/"> Home</Link>
                  </span>
                  <span class="thq-link thq-body-small">
                    <ScrollLink
                      to="search-section"
                      smooth={true}
                      duration={500}
                    >
                      Search
                    </ScrollLink>
                  </span>
                  <span class="thq-link thq-body-small">
                    <Link to="/genres">Genres</Link>
                  </span>
                  <ScrollLink to="about-section" smooth={true} duration={500}>
                    <span class="thq-link thq-body-small">About</span>
                  </ScrollLink>
                  <ScrollLink to="contact-section" smooth={true} duration={500}>
                    <span class="thq-link thq-body-small">Contact</span>
                  </ScrollLink>
                </nav>
              </div>
            </div>
          </header>
        </header>
      </div>

      <div class="home-hero">
        <div class="hero-header78">
          <div class="hero-column thq-section-padding thq-section-max-width">
            <div class="hero-content">
              <h1 class="hero-text thq-heading-1">
                Find Your Next Favorite Book
              </h1>
              <p class="hero-text1 thq-body-large">
                Discover a wide selection of books from various genres and
                authors with our book finder tool.
              </p>
            </div>
            <div class="hero-actions">
              <Link style={{ textDecoration: "none" }} to="/genres">
                <button class="thq-button-filled hero-button">
                  <span class="thq-body-small">Get Started</span>
                </button>
              </Link>
              <ScrollLink
                style={{ cursor: "pointer" }}
                to="learnmore-section"
                smooth={true}
                duration={500}
              >
                <button class="thq-button-outline hero-button1">
                  <span class="thq-body-small">Learn More</span>
                </button>
              </ScrollLink>
            </div>
          </div>
          <div class="hero-content1">
            <div class="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
              <div class="thq-animated-group-horizontal">
                <img
                  alt="Hero Image"
                  src="image.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 2.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 3.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 4.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 5.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
              </div>
              <div class="thq-animated-group-horizontal">
                <img
                  alt="Hero Image"
                  src="image copy 6.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 7.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 8.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 9.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 10.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 11.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div class="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
              <div class="thq-animated-group-horizontal-reverse">
                <img
                  alt="Hero Image"
                  src="image copy 13.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 14.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 15.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 16.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 17.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 18.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
              </div>
              <div class="thq-animated-group-horizontal-reverse">
                <img
                  alt="Hero Image"
                  src="image copy 19.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 20.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 21.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 22.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 23.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
                <img
                  alt="Hero Image"
                  src="image copy 24.png"
                  class="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="hero-container1">
              <div style={{ display: "contents" }}></div>
            </div>
          </div>
        </div>
      </div>

      <Element name="search-section">
        <div class="home-features1">
          <div class="thq-section-padding">
            <div class="features1-container1 thq-section-max-width">
              <div class="features1-image-container">
                <img
                  alt="Search for Books"
                  src="discover.png"
                  class="features1-image thq-img-ratio-16-9"
                />
              </div>
              <div class="features1-tabs-menu">
                <div class="features1-tab-horizontal">
                  <div class="features1-divider-container">
                    <div class="features1-container2"></div>
                  </div>
                  <div class="features1-content">
                    <h2 class="thq-heading-2">Find Your Next Read</h2>
                    <span class="thq-body-small">
                      Easily search and find books that interest you
                    </span>
                  </div>
                </div>
                <div class="features1-tab-horizontal">
                  <div class="features1-divider-container"></div>
                  <div class="features1-content">
                    <h2 class="thq-heading-2">Explore Recommendations</h2>
                    <span class="thq-body-small">
                      Discover new genres and authors
                    </span>
                  </div>
                </div>
                <div class="features1-tab-horizontal">
                  <div class="features1-divider-container"></div>
                  <div class="features1-content">
                    <h2 class="thq-heading-2">Browse serach Results</h2>
                    <span class="thq-body-small">
                      Scroll through the search results that matches your
                      criteria
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <div class="home-cta">
        <div class="thq-section-padding">
          <div class="thq-section-max-width">
            <div class="cta-accent2-bg">
              <div class="cta-accent1-bg">
                <div class="cta-container1">
                  <div class="cta-content">
                    <span class="thq-heading-2">
                      Find Your Next Favorite Book
                    </span>
                    <p class="thq-body-large">
                      Discover a wide range of books tailored to your interests
                      and preferences.
                    </p>
                  </div>
                  <div class="cta-actions">
                    <Link style={{ textDecoration: "none" }} to="/genres">
                      <button
                        type="button"
                        class="thq-button-filled cta-button"
                      >
                        Start Browsing
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Element name="learnmore-section">
        <div class="home-features1">
          <div class="thq-section-padding">
            <div class="features1-container1 thq-section-max-width">
              <div class="features1-tabs-menu">
                <div class="features1-tab-horizontal">
                  <div class="features1-divider-container">
                    <div class="features1-container2"></div>
                  </div>
                  <div class="features1-content">
                    <h2 class="thq-heading-2">Advanced Search Options</h2>
                    <span class="thq-body-small">
                      Refine your search with advanced filters such as genre,
                      author, title, publication date, and more.
                    </span>
                  </div>
                </div>
                <div class="features1-tab-horizontal">
                  <div class="features1-divider-container"></div>
                  <div class="features1-content1">
                    <h2 class="thq-heading-2">Detailed Book Information</h2>
                    <span class="thq-body-small">
                      Each book entry includes summaries, author bios, and
                      publication details to help you make informed choices.
                    </span>
                  </div>
                </div>
                <div class="features1-tab-horizontal">
                  <div class="features1-divider-container"></div>
                  <div class="features1-content">
                    <h2 class="thq-heading-2">Ebook Access Options</h2>
                    <span class="thq-body-small">
                      Enjoy the flexibility of eBook access for select titles,
                      allowing you to read anytime, anywhere.
                    </span>
                  </div>
                </div>
              </div>
              <div class="features1-image-container">
                <img
                  alt="feature 1"
                  src="image copy 25.png"
                  class="features1-image thq-img-ratio-16-9"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="about-section">
        <div className="home-content">
          <h2 className="thq-heading-2">About Us</h2>
          <p class="contact-text2 thq-body-large">
            Book Finder is a simple app that allows you to search for books,
            explore different genres, and discover detailed book information.
          </p>
          <h3 className="thq-heading-3">How It Works</h3>
          <p class="contact-text2 thq-body-large">
            Simply enter a book title or genre, and our app will provide a list
            of relevant results with book details, such as author, rating, and
            first publication year.
          </p>
          <h3 className="thq-heading-3">Our Mission</h3>
          <p class="contact-text2 thq-body-large">
            We aim to make book discovery fun and accessible for everyone!
          </p>
          <h3 className="thq-heading-3">Technologies Used</h3>
          <ul>
            <span class="contact-text2 thq-body-large">React.js</span>
            <br />
            <span class="contact-text2 thq-body-large">OpenLibrary API</span>
            <br />
            <span class="contact-text2 thq-body-large">CSS for styling</span>
          </ul>
          <h3 className="thq-heading-3">Contact</h3>
          <p class="contact-text2 thq-body-large">
            If you have any questions or feedback, feel free to contact us
            through the details below.
          </p>
        </div>
      </Element>

      <Element name="contact-section">
        <div class="home-contact">
          <div class="contact-contact20 thq-section-padding">
            <div class="contact-max-width thq-section-max-width">
              <div class="contact-section-title">
                <span class="thq-body-small">Get in touch with us today!</span>
                <div class="contact-content">
                  <h2 class="thq-heading-2">Contact Us</h2>
                  <p class="contact-text2 thq-body-large">
                    We'd love to hear from you! If you have any questions,
                    feedback, or need assistance, feel free to reach out!
                  </p>
                </div>
              </div>
              <div class="contact-row">
                <div class="contact-content1">
                  <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <div class="contact-content">
                    <div class="contact-content2">
                      <h3 class="contact-text3 thq-heading-3">Email</h3>
                      <p class="contact-text4 thq-body-large">
                        For any inquiries, feel free to reach out to us via
                        email. We're always here to help with any questions or
                        feedback you may have.
                      </p>
                    </div>
                    <span class="contact-email thq-body-small">
                      udharanavya@gmail.com
                    </span>
                  </div>
                </div>
                <div class="contact-content1">
                  <svg viewBox="0 0 1024 1024" class="thq-icon-medium">
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                  <div class="contact-content">
                    <div class="contact-content2">
                      <h3 class="contact-text3 thq-heading-3">Phone</h3>
                      <p class="contact-text4 thq-body-large">
                        Need a more direct conversation? Phone support is
                        available if needed; simply reach out, and we’ll gladly
                        provide our contact number upon request.
                      </p>
                    </div>
                    <span class="contact-email thq-body-small">
                      Available upon request
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <div class="footer-credits">
        <div class="thq-divider-horizontal"></div>
        <div class="footer-row">
          <span class="thq-body-small">
            Find your next favorite book with Book Finder.
          </span>
          <span class="thq-body-small">
            © 2024 Book Finder. All Rights Reserved.
          </span>
          <div class="footer-footer-links2">
            <span class="thq-body-small">privacy-policy</span>
            <span class="thq-body-small">terms-of-use</span>
            <span class="thq-body-small">cookies-policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
