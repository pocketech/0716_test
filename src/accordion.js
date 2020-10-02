import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "./fancy-example.css";

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
            In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
            nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
            duis nulla non.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
