const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./config/db");
const Lead = require("./models/Lead");

connectDB();

const sources = [
  "Website",
  "LinkedIn",
  "Referral",
  "Facebook",
  "Instagram"
];

const statuses = [
  "New",
  "Contacted",
  "Converted"
];

const firstNames = [
  "Rahul","Priya","Arjun","Sneha","Kiran","Ananya","Vikram","Meera","Rohan","Pooja",
  "Neha","Aditya","Kavya","Amit","Deepika","Suresh","Nikhil","Aisha","Mohan","Keerthi",
  "Harsha","Divya","Akash","Shreya","Naveen","Lakshmi","Varun","Ishita","Abhishek","Tanya",
  "Rohit","Sai","Bhavana","Vivek","Nandini","Gautham","Pavan","Ritu","Harini","Yash",
  "Manasa","Charan","Swathi","Karthik","Akhil","Aditi","Tejaswini","Manoj","Niharika","Siddharth"
];

const lastNames = [
  "Sharma","Reddy","Patel","Nair","Kumar","Gupta","Singh","Joshi","Das","Verma",
  "Kapoor","Rao","Menon","Yadav","Iyer","Babu","Jain","Khan","Krishna","Mehta"
];

const notes = [
  "Interested in demo.",
  "Needs pricing details.",
  "Follow-up next week.",
  "Requested product brochure.",
  "Looking for enterprise plan.",
  "Waiting for callback.",
  "Interested in premium package.",
  "Meeting scheduled.",
  "Requested free trial.",
  "Potential long-term client."
];

const leads = [];

for (let i = 0; i < 50; i++) {
  const first = firstNames[i];
  const last = lastNames[i % lastNames.length];

  leads.push({
    name: `${first} ${last}`,
    email: `${first.toLowerCase()}.${last.toLowerCase()}${i + 1}@gmail.com`,
    source: sources[Math.floor(Math.random() * sources.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    notes: notes[Math.floor(Math.random() * notes.length)]
  });
}

const seedData = async () => {
  try {
    await Lead.deleteMany();

    await Lead.insertMany(leads);

    console.log("✅ 50 Leads Inserted Successfully!");

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

setTimeout(seedData, 1000);