import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./CatCard.module.css";

export const CatCard = () => {
  const [catImg, setCatImg] = useState("");
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);

  const checkboxHandler = () => {
    setIsAutoRefresh((prev) => !prev);
  };

  useEffect(() => {
    let intervalId;

    if (isAutoRefresh) {
      intervalId = setInterval(fetchCat, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoRefresh]);

  const fetchCat = async () => {
    try {
      const url = "https://api.thecatapi.com/v1/images/search";
      const API_KEY = "live_8I2NTU4ad6atVc73YIc3uNOvQ0VVIRDmD3xHQDsDHm3Tt6lYC8uGFh479MMt8wze";

      const response = await fetch(url, {
        headers: {
          "x-api-key": API_KEY,
        },
      });

      const data = await response.json();
      const catImg = data[0].url;

      setCatImg(catImg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.controlElements}>
        <Checkbox name="Enabled" id="Enabled" />
        <Checkbox
          name="Auto refresh every 5 sec"
          id="refresh"
          handler={checkboxHandler}
        />
        <Button name="Get cat" handleClick={fetchCat} />
      </div>
      {catImg && <img src={catImg} className={styles.img} alt="catImg" />}
    </div>
  );
};
