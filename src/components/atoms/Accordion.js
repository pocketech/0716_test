import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "../../assets/fancy-example.css";
import Iframe from "react-iframe";

export default function Example() {
  const [fortune, setFortune] = useState(null);
  const handleFortune = () => {
    const fortuneArray = ["大吉", "中吉", "吉", "凶", "大凶"];
    const randomNumber = Math.floor(Math.random() * 5);
    setFortune(fortuneArray[randomNumber]);
  };

  const [todayInfo, setTodayInfo] = useState({});
  const handleTodayInfo = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    const day = week[today.getDay()];
    setTodayInfo({ year, month, date, day });
  };

  return (
    <Accordion
      allowZeroExpanded={true}
      className="accordionContainer"
      onChange={(uuids) => {
        uuids[0] === "no1"
          ? handleTodayInfo()
          : uuids[0] === "no2"
            ? handleFortune()
            : console.log("no3");
      }}
    >
      <AccordionItem uuid="no1">
        <AccordionItemHeading>
          <AccordionItemButton>今日の日付</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            今日は{todayInfo.year}年{todayInfo.month}月{todayInfo.date}日
            {todayInfo.day}曜日です。
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="no2">
        <AccordionItemHeading>
          <AccordionItemButton>今日の運勢</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel
          className={
            "accordion__panel " + (fortune === "大吉" ? "luckystyle" : "")
          }
        >
          <p>{fortune}</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="no3">
        <AccordionItemHeading>
          <AccordionItemButton>GoogleMap</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.010996507231!2d139.7116861151059!3d35.72594808018392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6b8b0de7dd%3A0xd184e022fc8bf0e6!2z5qCq5byP5Lya56S-44OV44Kh44Km44Oz44OH44O844K344On44Oz44OV44Kn44Oq44KrVEE!5e0!3m2!1sja!2sjp!4v1602127130137!5m2!1sja!2sjp" width="100%" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" />

          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
