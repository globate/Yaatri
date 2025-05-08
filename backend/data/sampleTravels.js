const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Travel = require('../models/Travel');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const sampleData = [
  {
    title: "Everest Camp Trek",
    description: "One of the most renowned travel destinations in the world.",
    image: "img/img1.jfif",
    category: "event"
  },
  {
    title: "Walking Holidays",
    description: "Small group walks or luxury private guided treks.",
    image: "img/img2.jfif",
    category: "event"
  },
  {
    title: "Andaman Beaches",
    description: "Rich coral reef ecosystem and diving opportunities.",
    image: "img/img2.jfif",
    category: "event"
  },
  {
    title: "Trinidad North Coast Experience",
    description: "Scenic coastline tours and cultural discovery.",
    image: "img/img3.png",
    category: "tour"
  },
  {
    title: "Gasparee Caves Tour",
    description: "Explore hidden caves and local attractions.",
    image: "img/img4.png",
    category: "tour"
  }
];

const importData = async () => {
  try {
    await Travel.deleteMany();
    await Travel.insertMany(sampleData);
    console.log('Sample data inserted');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
