import React from 'react';

const beforeAfterData = [
  {
    id: 'home',
    label: 'Auto correct',
    before: `${process.env.PUBLIC_URL}/assets/img/before/pic-1.jpg`,
    after: `${process.env.PUBLIC_URL}/assets/img/after/pic-1.jpg`
  },
  {
    id: 'profile',
    label: 'Hue Saturation',
    before: `${process.env.PUBLIC_URL}/assets/img/before/hue-bef.jpg`,
    after: `${process.env.PUBLIC_URL}/assets/img/after/hue-after.jpg`
  },
  {
    id: 'messages',
    label: 'Blending Mode',
    before: `${process.env.PUBLIC_URL}/assets/img/before/blend-bef.jpg`,
    after: `${process.env.PUBLIC_URL}/assets/img/after/blend-After.jpg`
  },
  // ...continue for all tabs up to tab-14
  {
    id: 'tab-14',
    label: 'Water Color Effect',
    before: `${process.env.PUBLIC_URL}/assets/img/before/pic-17.jpg`,
    after: `${process.env.PUBLIC_URL}/assets/img/after/pic-17.jpg`
  }
];

const BeforeAfterTab = () => {
  return (
    <section className="pt-5 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              {beforeAfterData.map((item, index) => (
                <button
                  key={item.id}
                  className={`nav-link mb-3 ${index === 0 ? 'active' : ''}`}
                  id={`v-pills-${item.id}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#v-pills-${item.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`v-pills-${item.id}`}
                  aria-selected={index === 0 ? 'true' : 'false'}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-8">
            <div className="tab-content" id="v-pills-tabContent">
              {beforeAfterData.map((item, index) => (
                <div
                  key={item.id}
                  className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                  id={`v-pills-${item.id}`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-${item.id}-tab`}
                  tabIndex="0"
                >
                  <div className="slider-wrapper">
                    <div className="before-after-container" id={`slider-${index + 1}`}>
                      <img src={item.after} className="after-img" alt="After" />
                      <img src={item.before} className="before-img" alt="Before" />
                      <div className="slider"></div>
                      <span className="overlay-text before-text">Before</span>
                      <span className="overlay-text after-text">After</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterTab;
