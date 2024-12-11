'use client';
import React, { useState } from 'react';
import { FaFacebookMessenger, FaWhatsapp, FaFacebook } from 'react-icons/fa6';
import { IoChatbubbles } from 'react-icons/io5';

const MessageLinks = () => {
    const [showMessageLinks, setShowMessageLinks] = useState(false);

    const toggleMessageLinks = () => {
        setShowMessageLinks(!showMessageLinks);
    };

    return (
        <div className="fixed left-4 bottom-4 z-50">
            <div
                className="cursor-pointer"
                onClick={toggleMessageLinks}
            >
                <IoChatbubbles className="text-6xl" />
            </div>
            {showMessageLinks && (
                
                <div className="bg-white rounded-md shadow-md p-4 transition-all duration-300">
                    {/* <button onClick={setShowMessageLinks(false)}>X</button> */}
                    <a href="https://www.facebook.com/profile.php?id=61559255385386" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2">
                        <FaFacebook className="mr-2" />
                        Facebook
                    </a>
                    <a href="https://wa.me/+8801755557150" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2">
                        <FaWhatsapp className="mr-2" />
                        WhatsApp
                    </a>
                    <a href="https://m.me/61559255385386" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <FaFacebookMessenger className="mr-2" />
                        Messenger
                    </a>
                </div>
            )}
        </div>
    );
};

export default MessageLinks;