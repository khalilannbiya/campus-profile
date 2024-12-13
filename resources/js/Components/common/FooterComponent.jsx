import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from 'flowbite-react';

export default function FooterComponent() {
    return (
        <Footer className="w-full bg-primary">
            <div className="mx-auto w-full max-w-7xl p-4 py-10">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FooterBrand
                            href="https://flowbite.com"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            name="Flowbite"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FooterTitle className="text-white" title="about" />
                            <FooterLinkGroup className="text-white" col>
                                <FooterLink href="#">Flowbite</FooterLink>
                                <FooterLink href="#">Tailwind CSS</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle
                                className="text-white"
                                title="Follow us"
                            />
                            <FooterLinkGroup className="text-white" col>
                                <FooterLink href="#">Github</FooterLink>
                                <FooterLink href="#">Discord</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-white" title="Legal" />
                            <FooterLinkGroup className="text-white" col>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                                <FooterLink href="#">
                                    Terms &amp; Conditions
                                </FooterLink>
                            </FooterLinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider className="text-white" />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright
                        className="text-white"
                        href="#"
                        by="Flowbite™"
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
                </div>
            </div>
        </Footer>
    );
}
