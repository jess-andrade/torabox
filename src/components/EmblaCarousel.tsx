import React from "react";
import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Paper } from "@mui/material";
import PaperProjects from "./PaperProjects";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

// ---------------------------- Images
import kuromi from "../../public/projects/1.png";
import dreamland from "../../public/projects/2.png";
import money from "../../public/projects/3.png";

import { useTranslations } from "next-intl";

const EmblaCarousel: React.FC<PropType> = (props) => {
  const t = useTranslations("Portfolio");

  //-------------------------- card content
  const content = [
    {
      img: <Image src={kuromi} alt="kuromi" />,
      title: t("firstProjectTitle"),
      text: t("firstProjectDescription"),
      sub: t("firstProjectCategory"),
    },
    {
      img: <Image src={dreamland} alt="dreamland" />,
      title: t("secondProjectTitle"),
      text: t("secondProjectDescription"),
      sub: t("secondProjectCategory"),
    },
    {
      img: <Image src={money} alt="money" />,
      title: t("thirdProjectTitle"),
      text: t("thirdProjectDescription"),
      sub: t("thirdProjectCategory"),
    },
  ];

  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {content.map((cont, index) => (
            <div className="embla__slide" key={index}>
              {/* <div className="embla__slide__number">{index + 1} </div> */}

              {/* --- content */}
              <PaperProjects
                img={cont.img}
                title={cont.title}
                text={cont.text}
                sub={cont.sub}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        {/* 

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              color="primary"
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected " : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
