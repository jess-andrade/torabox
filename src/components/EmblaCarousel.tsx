import React from 'react'
import Image from 'next/image'

import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Paper } from '@mui/material'
import PaperProjects from './PaperProjects'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

// -- Images
import cat from '../../public/cat.jpg'
import otter from '../../public/otter.png'
import bolsa from '../../public/bolsa.png'
import festa from '../../public/festa.jpg'

const images = {
  1: <Image src={cat} alt='cat' width={400} height={300} />,
  2: <Image src={bolsa} alt='bolsa' width={400} height={300} />,
  3: <Image src={otter} alt='otter' width={400} height={300} />,
  4: <Image src={festa} alt='otter' width={400} height={300} />
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              {/* <div className="embla__slide__number">{index + 1} </div> */}

              {/* --- image */}
              <PaperProjects img={images[index + 1]} />

            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              color='primary'
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel