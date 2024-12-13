import { Carousel } from 'flowbite-react';

const Hero = () => {
    return (
        <div className="mt-16 h-[500px] w-full">
            <Carousel>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                    alt="Beautiful landscape"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://img.daisyui.com/images/stock/photo-1416339306562-f3d12fefd36f.webp"
                    alt="Sunset view"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://img.daisyui.com/images/stock/photo-1554797589-7241bb691973.webp"
                    alt="Mountain and lake"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://img.daisyui.com/images/stock/photo-1507525428034-b723cf961d3e.webp"
                    alt="Beach"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    );
};

export default Hero;
