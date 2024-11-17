import { motion } from "framer-motion";

const P: React.FC<{ text: string }> = ({ text }) => {
  return <p className="opacity-90 lg:pr-8">{text}</p>;
};

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center p-14 lg:px-48 py-16 bg-accent-beige">
      <motion.div
        initial={{ x: -100, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-4 lg:w-1/2"
      >
        <h1 className="text-brand text-xl protest-riot-regular">
          Chilli Resturant
        </h1>
        <h2 className="text-5xl font-bold ">Welcome</h2>
        <P text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <P
          text=" Facere ea tempore ipsam? Officia, assumenda facere vitae atque velit
          reprehenderit."
        />
        <P
          text="Quasi consectetur fugit saepe sequi, cumque harum
          quisquam debitis numquam ea."
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, rotate: 0, opacity: 0.5 }}
        whileInView={{ y: 0, rotate: -4, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ cursor: "pointer" }}
        className="lg:w-1/2 p-4 h-fit bg-accent-beige border shadow-xl rounded-lg"
      >
        <div className="overflow-hidden rounded-lg">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-cover"
            src="/images/food2.png"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
