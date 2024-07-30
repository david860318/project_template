import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function Ee() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])
  return (
    <>
      <div className="wrapper">
        <p className="title-of-discount">
          限時活動優惠。<span>現在就來看看有哪些優惠露營區。</span>
        </p>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .wrapper {
            margin-block: 32px;
          }
          .title-of-discount {
            font-family: 'Noto Sans TC';
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 48px;
            span {
              color: #8f8e93;
            }
          }
          .embla {
            overflow: hidden;
          }
          .embla__container {
            display: flex;
          }
          .embla__slide {
            flex: 0 0 100%;
            min-width: 0;
          }
        `}
      </style>
    </>
  )
}
