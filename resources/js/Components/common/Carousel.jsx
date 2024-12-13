import { Carousel } from 'flowbite-react';

const FlowbiteCarousel = () => {
    return (
        <div className="my-10 h-64 sm:h-72 md:h-[646px]">
            <Carousel>
                <img
                    src="https://via.placeholder.com/800x400?text=Slide+1"
                    alt="Slide 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://via.placeholder.com/800x400?text=Slide+2"
                    alt="Slide 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://via.placeholder.com/800x400?text=Slide+3"
                    alt="Slide 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://via.placeholder.com/800x400?text=Slide+4"
                    alt="Slide 4"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    );
};

export default FlowbiteCarousel;
