import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import classes from './slider.module.scss';
import Image from '../ArticleImage';
import { ImageSize } from '../../shared/enums';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';

const Slider = ({ images, className }: { images: string[], className?: string }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
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