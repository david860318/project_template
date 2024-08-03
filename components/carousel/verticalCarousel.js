import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

const VerticalCarousel = ({ slides, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [thumbViewportRef, emblaThumbsApi] = useEmblaCarousel(
    {
      containScroll: 'keepSnaps',
      axis: 'y',
      selectedClass: '',
      dragFree: true,
    },
    [ClassNames()]
  )

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbsApi) return
      embla.scrollTo(index)
    },
    [embla, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbsApi) return
    setSelectedIndex(embla.selectedScrollSnap())
    emblaThumbsApi.scrollTo(embla.selectedScrollSnap())
  }, [embla, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
  }, [embla, onSelect])

  return (
    <>
      <section className="carousels">
        <div className="carousels__carousel-main">
          <div className="carousel-main">
            <div className="carousel-main__viewport" ref={mainViewportRef}>
              <div className="carousel-main__container">
                {slides.map((index) => (
                  <div className="carousel-main__slide" key={index}>
                    <img
                      className="carousel-main__slide__img"
                      src={`/banner/chikawa${index}.jpg`}
                      alt="A cool cat."
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="carousels__carousel-thumb">
          <div className="carousel-thumb">
            <div className="carousel-thumb__viewport" ref={thumbViewportRef}>
              <div className="carousel-thumb__container">
                {slides.map((index) => (
                  <div
                    key={index}
                    className={`carousel-thumb__slide ${
                      index === selectedIndex ? 'selected' : ''
                    }`}
                  >
                    <button
                      className="carousel-thumb__slide__button"
                      onClick={() => onThumbClick(index)}
                      type="button"
                    >
                      <img
                        className="carousel-thumb__slide__img"
                        src={`/banner/chikawa${index}.jpg`}
                        alt="A cool cat."
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .carousels {
          background-color: #f7f7f7;
          max-width: 670px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          padding: 20px;
        }

        .carousels__carousel-thumb {
          flex: 0 0 100px;
        }

        .carousels__carousel-main {
          padding-right: 10px;
          flex: 1 0 0;
        }

        .carousel-main,
        .carousel-thumb {
          position: relative;
        }

        .carousel-main__viewport,
        .carousel-thumb__viewport {
          overflow: hidden;
          height: 300px;
        }

        .carousel-main__container,
        .carousel-thumb__container {
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .carousel-main__container {
          display: flex;
          height: 100%;
        }

        .carousel-thumb__container {
          display: block;
          height: 100%;
        }

        .carousel-main__slide {
          position: relative;
          flex: 0 0 100%;
          margin-left: 10px;
        }

        .carousel-main__slide__img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }

        .carousel-thumb__slide {
          height: 22.5%;
          width: 100%;
          margin-bottom: 10px;
        }

        .carousel-thumb__slide__img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          opacity: 0.2;
        }

        .carousel-thumb__slide__button {
          height: 100%;
          width: 100%;
          border: 0;
          outline: 0;
          margin: 0;
          padding: 0;
          display: flex;
          cursor: pointer;
          background-color: transparent;
          touch-action: manipulation;
          -webkit-appearance: none;
        }

        .carousel-thumb__slide.selected .carousel-thumb__slide__img {
          opacity: 1;
        }
      `}</style>
    </>
  )
}

export default VerticalCarousel
