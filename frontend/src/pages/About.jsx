import React from 'react'
import { Sparkles, ScanSearch, Cpu, Compass, Leaf, Target } from 'lucide-react'

const process = [
  { title: 'Upload an Image', desc: 'Users can upload an image containing an animal through the website.' },
  { title: 'Image Processing', desc: 'The uploaded image is processed and prepared for analysis by the classification system.' },
  { title: 'Animal Detection & Classification', desc: 'The machine learning model analyzes the visual characteristics of the image and predicts the animal category.' },
  { title: 'Prediction Result', desc: 'The identified animal is displayed to the user along with the available prediction information.' },
  { title: 'Explore the Result', desc: 'Users can use the identified animal as a starting point to learn more about different species and wildlife.' },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="eyebrow-icon"><Sparkles size={16} /></span>
        <h1>Welcome to Wildlife Vision</h1>
        <p>
          Wildlife Vision is an image-based animal detection and classification platform
          developed to make animal identification simple, accessible, and engaging. Our
          platform uses machine learning and related techniques to analyze animal images
          and identify the animal present in the uploaded image.
        </p>
        <p>
          With just a simple image upload, users can interact with the system and receive
          a predicted animal identification. The platform is designed with a user-friendly
          interface so that users can easily upload an image, view the prediction, and
          explore information related to the identified animal.
        </p>
      </section>

      <section className="about-block">
        <div className="about-block-icon"><ScanSearch size={22} /></div>
        <div>
          <h2>Our Purpose</h2>
          <p>
            Identifying animals from images can be useful in many different situations,
            including wildlife education, research, biodiversity studies, and general
            learning. However, manually identifying an unfamiliar animal can sometimes be
            difficult, especially when the animal is seen only in a photograph.
          </p>
          <p>
            Our platform aims to simplify this process by bringing image classification
            technology and wildlife identification together in one place. Instead of
            relying only on manual identification, users can use our system to obtain a
            machine-learning-based prediction from an uploaded image.
          </p>
        </div>
      </section>

      <section className="about-process">
        <h2>How Our System Works</h2>
        <p className="process-lead">Our platform follows a simple and straightforward process.</p>
        <div className="process-list">
          {process.map((step, i) => (
            <div className="process-item" key={step.title}>
              <span className="process-number">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-block">
        <div className="about-block-icon"><Cpu size={22} /></div>
        <div>
          <h2>Our Technology</h2>
          <p>
            The project combines machine learning and web technologies to create an
            interactive animal identification experience. The classification system is
            designed to learn visual patterns from animal images and use those patterns
            to make predictions on new images.
          </p>
          <p>
            The website provides the interface through which users can interact with the
            system, upload images, view results, and explore animal-related information.
          </p>
        </div>
      </section>

      <section className="about-block reverse">
        <div className="about-block-icon"><Compass size={22} /></div>
        <div>
          <h2>Our Vision</h2>
          <p>
            Our vision is to build a technology-driven platform that makes animal
            identification easier while encouraging curiosity and awareness about
            wildlife.
          </p>
          <p>
            We believe that technology can play an important role in making
            wildlife-related information more accessible. By combining modern machine
            learning techniques with an easy-to-use website, we aim to create a platform
            that can be useful for students, wildlife enthusiasts, educators, researchers,
            and anyone interested in animals.
          </p>
        </div>
      </section>

      <section className="about-block">
        <div className="about-block-icon"><Leaf size={22} /></div>
        <div>
          <h2>Why Animal Identification Matters</h2>
          <p>
            Animals play an important role in maintaining ecosystems and biodiversity.
            Learning to recognize different species can help people develop a better
            understanding of the natural world.
          </p>
          <p>
            Image-based identification can also provide an interesting way for users to
            interact with wildlife information. Our platform focuses on making this
            interaction simple — upload an image, let the system analyze it, and discover
            the animal present in the image.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-block-icon"><Target size={22} /></div>
        <h2>Our Mission</h2>
        <p>
          Our mission is to develop a simple, interactive, and technology-driven animal
          identification platform that demonstrates how machine learning can be applied
          to real-world wildlife-related problems.
        </p>
        <p>
          We aim to continuously improve the system, expand the range of animals it can
          recognize, and provide users with a better and more informative experience.
        </p>
      </section>
    </div>
  )
}
