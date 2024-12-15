import PrimaryButton from '../PrimaryButton';

const AboutMe = () => {
    return (
        <div className="px-4 py-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2">
                {/* Image Section */}
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="About Us"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Tentang Kami
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </p>
                    <PrimaryButton>Selengkapnya</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
