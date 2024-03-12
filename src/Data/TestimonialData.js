import User1 from '../assets/images/user-1.jpg'
import User2 from '../assets/images/user2.jpg'
import User3 from "../assets/images/user3.jpg";
import { Rate } from "antd";

export const testimonail_data = [
  {
    id: 1,
    user: User1,
    user_name: "James",
    title: "Customer",
    ratings: <Rate allowHalf defaultValue={2.5} />,
    desc: "The data visualizations created by the team were incredibly helpful in understanding complex data trends. Their use of big data technologies allowed us to efficiently process and analyze large volumes of data, leading to actionable recommendations that had a significant impact on our business.",
  },
  {
    id: 2,
    user: User2,
    user_name: "Willaim",
    title: "Customer",
    ratings: <Rate allowHalf defaultValue={2.5} />,
    desc: "Working with the data science and analytics team was a game-changer for our organization. Their business acumen and ability to translate data insights into actionable strategies were invaluable. We highly recommend their services to any organization looking to leverage data for strategic decision-making.",
  },
  {
    id: 3,
    user: User3,
    user_name: "Alex",
    title: "Customer",
    ratings: <Rate allowHalf defaultValue={2.5} />,
    desc: "Overall, our experience with the data science and analytics team was exceptional. They are true experts in their field and were instrumental in helping us achieve our business goals through data-driven insights. We look forward to continuing our partnership with them in the future.",
  },
];