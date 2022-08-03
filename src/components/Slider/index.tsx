import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import classes from './slider.module.scss';
import Image from '../ArticleImage';
import { ImageSize } from '../../shared/enums';

const Slider = ({ images, className }: { images: string[], className?: string }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            className={className}
        >
            {
                images.map((each, i) => (
                    <SwiperSlide className={classes.slide} key={i}>
                        <Image src={each} size={ImageSize.DEFAULT} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Slider;