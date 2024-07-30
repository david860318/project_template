import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import DiscountCard from './discount-card'
import DiscountCardM from './discount-card-m'

export default function CustomCarousel() {
  return (
    <>
      <div className="wrapper">
        <p className="title-of-discount">
          限時活動優惠。<span>現在就來看看有哪些優惠露營區。</span>
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows
          //   autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          //   infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 1920,
                min: 920,
              },
              items: 3,
            },
            tablet: {
              breakpoint: {
                max: 920,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1, // optional, default to 1.
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          // showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <DiscountCard />
          {/* <DiscountCardM /> */}
        </Carousel>
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
        `}
      </style>
    </>
  )
}
