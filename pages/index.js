import React, { useState } from "react";
import BrowseCategory from "../components/elements/BrowseCategory";
import TopCollection from "../components/elements/TopCollection";
import LayoutFront from "../components/layout/LayoutFront";
import 'react-modal-video/css/modal-video.css';
import dynamic from "next/dynamic";

import Link from "next/link"
import Header from "../components/home/Header";
import About from "../components/home/About";
import Raffle from "../components/home/Raffle";
import TopReffles from "../components/home/TopReffles";
import Promo from "../components/home/Promo";

const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

const Index = () => {
    const [isOpen, setOpen] = useState(false);
    function handleOpenVideo(item) {
        setOpen(item)
    }
    return (
        <>
            <LayoutFront
                pageClass={"front"}
            >

                <Header />

                <About />

                <Raffle />

                <TopReffles />

                <Promo setOpen={(item) => handleOpenVideo(item)} />

                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="sf9kp9MLGMI"
                    onClose={() => setOpen(false)}
                />

            </LayoutFront>
        </>
    );
};

export default Index;
