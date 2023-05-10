import React from "react";
import Navbar from "./Navbar";
import Footer from "../LandingPage/Footer";
import { Button } from "@mui/material";

function JobsPage(){

    return (
        <>
        <Navbar/>
        
        <div class="py-16 mt-10 bg-purple-200">  
    <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">Graphic Design</h3>
                    <h4 class="text-xl font-semibold text-blue-900">Full-Time</h4>
                    <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <button class="group rounded-xl h-12 w-40 bg-purple-900 font-bold text-lg text-white relative overflow-hidden">
        Apply</button>
                </div>
                <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">UI Design</h3>
                    <h4 class="text-xl font-semibold text-blue-900">Part-Time</h4>
                    <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <button class="group rounded-xl h-12 w-40 bg-purple-900 font-bold text-lg text-white relative overflow-hidden">
        Apply</button>
                </div>
                <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">UX Design</h3>
                    <h4 class="text-xl font-semibold text-blue-900">Part-Time</h4>
                    <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                    <button class="group rounded-xl h-12 w-40 bg-purple-900 font-bold text-lg text-white relative overflow-hidden">
        Apply</button>
                </div>
                <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
        </div>
    </div>
</div>
<Footer/>
        </>
    )
}

export default JobsPage