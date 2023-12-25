import { motion, useTransform, useScroll } from "framer-motion";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import Achievements from "../Achievements";
import Portfolio from "../Portfolio";
import SkillIcon from "./SkillIcon";
import Service from "../Service";
import Div from "../common/Div";
import { cn } from "@/lib/utils";

// Images
import sk1 from "/public/sk-1.png";
import sk2 from "/public/sk-2.png";
import sk3 from "/public/sk-3.png";
import sk4 from "/public/sk-4.png";
import sk5 from "/public/sk-5.png";
import sk6 from "/public/sk-6.png";
import sk7 from "/public/sk-7.png";
import sk8 from "/public/sk-8.png";
import sk9 from "/public/sk-9.png";
import sk10 from "/public/sk-10.png";
import sk11 from "/public/sk-11.png";
import pattern from "/public/heading-pattern.png";
import pe1 from "/public/sec-3-p-e-1.png";
import pe2 from "/public/sec-3-p-e-2.png";
import pe3 from "/public/sec-3-p-e-3.png";

export default function Skills() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
  const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
  return (
    <div
      id="skills"
      className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
    >
      <div className="sec-3-bg-gradient-1" />
      <div className="sec-3-bg-gradient-2" />
      <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1.src} />
      <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2.src} />
      <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3.src} />
      <MaxWidthWrapper>
        <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
          <SkillIcon path={sk1.src} />
          <SkillIcon path={sk2.src} />
          <SkillIcon path={sk3.src} />
          <SkillIcon path={sk4.src} />
          <SkillIcon path={sk5.src} />
          <SkillIcon path={sk6.src} />
          <SkillIcon path={sk7.src} />
          <SkillIcon path={sk8.src} />
          <SkillIcon path={sk9.src} />
          <SkillIcon path={sk10.src} />
          <SkillIcon path={sk11.src} />
        </Div>

        <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
          <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
            <Service
              num="1"
              title="Ui/Ux Design"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={[
                "Prototype",
                "Wireframe",
                "User Experience",
                "Prototype",
                "Prototype",
              ]}
            />
            <Service
              num="2"
              title="Graphic Designing"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={[
                "Prototype",
                "Wireframe",
                "User Experience",
                "Prototype",
                "Prototype",
              ]}
            />
            <Service
              num="3"
              title="Frontend Development"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={[
                "Prototype",
                "Wireframe",
                "User Experience",
                "Prototype",
                "Prototype",
              ]}
            />
            <Service
              num="4"
              title="Wordpress Development"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
              data={[
                "Prototype",
                "Wireframe",
                "User Experience",
                "Prototype",
                "Prototype",
              ]}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
            <span>Solving</span>
            <span>Problems</span>
            <span className="flex items-center gap-2">
              Through
              <img
                src={pattern.src}
                className="block md:hidden w-[80px] mt-1"
              />
            </span>
            <span className="flex items-center gap-4">
              Good{" "}
              <img
                src={pattern.src}
                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
              />
            </span>
            <span>Services</span>
          </div>
        </div>

        <Portfolio />
        <Achievements />
      </MaxWidthWrapper>
    </div>
  );
}
