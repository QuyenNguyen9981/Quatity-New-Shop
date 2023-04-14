import { IconEmail, IconFB, IconGit, IconLocation, IconPhone } from '@/assets/svg';
import { Container } from '@/component/common';
import Link from 'next/link';
import React from 'react';
const ListCategories = [
    {
        name: 'Electronics',
    },
    {
        name: 'Mobile Phone',
    },
    {
        name: 'Laptop',
    },
    {
        name: "Men's watches",
    },
    {
        name: "Women's watches",
    },
];

const ListLinks = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Search',
        url: '/products/search',
    },
    {
        name: 'Cart',
        url: '/cart',
    },
    {
        name: 'Profile',
        url: '/profile',
    },
    {
        name: 'Login',
        url: '/Login',
    },
];

const ListContact = [
    {
        name: 'District Tân Phú, Hồ Chí Minh City',
        icon: <IconLocation />,
    },
    {
        name: '0778885120',
        icon: <IconPhone />,
    },
    {
        name: 'nguyenducanhquyen9981@gmail.com',
        icon: <IconEmail />,
    },
];

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#202020] pt-[40px] lg:pt-[60px] pb-5 lg:pb-[30px] ">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-text_footer">
                    <div className="lg:col-span-2  w-full ">
                        <h3 className="text-lg lg:text-xl lg:text-center text-white font-semibold mb-6">QN-Shop</h3>
                        <p className="text-sm lg:text-base  leading-[30px]">
                            If you are looking for a website to buy and sell online then QN-Shop is a great choice for
                            you. QN-Shop is an e-commerce site that allows buyers and sellers to interact and exchange
                            information easily about the shop's products and promotions. Therefore, buying and selling
                            on Shopee becomes faster and simpler. You can chat directly with the seller to ask directly
                            about the item to buy. And if you want to buy genuine, reputable product lines.
                        </p>
                    </div>
                    <div className=" w-full text-text_footer">
                        <h3 className="text-lg lg:text-xl  text-white font-semibold mb-4">Top Categories</h3>
                        {ListCategories.map((item, index) => (
                            <p key={index} className="py-2">
                                {item.name}
                            </p>
                        ))}
                    </div>
                    <div className=" w-full text-text_footer">
                        <h3 className="text-lg lg:text-xl  text-white font-semibold mb-4">UseFul Links</h3>

                        {ListLinks.map((item, index) => (
                            <Link key={index} href={item.url}>
                                <p className=" text-sm lg:text-base py-2">{item.name}</p>
                            </Link>
                        ))}
                    </div>
                    <div className=" w-full text-text_footer">
                        <h3 className="text-lg lg:text-xl  text-white font-semibold mb-4">Contact</h3>
                        {ListContact.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span> {item.icon}</span>
                                <p className="text-sm lg:text-base py-2">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex  flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center text-text_footer mt-6">
                    <p className="text-sm lg:text-base ">
                        Copyright - {year}, website made by Quyền Nguyễn. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <p className="text-sm lg:text-base m-0">Follow:</p>
                        <span className="text-white bg-white rounded-full">
                            <a href="https://www.facebook.com/profile.php?id=100004341762482" target="_blank">
                                <IconFB />
                            </a>
                        </span>
                        <span className="bg-white rounded-full">
                            <a href="https://github.com/QuyenNguyen9981?tab=repositories" target="_blank">
                                <IconGit />
                            </a>
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
