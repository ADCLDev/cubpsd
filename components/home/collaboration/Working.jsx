import Image from "next/image";

const Working = () => {

    const logo = [
        '/logo/ICT division logo.png',
        '/logo/A2i Logo.png',
        '/logo/bangladesh parliament logo.png',
        '/logo/Bangladesh Computer Council (BCC) Logo.png',
        '/logo/Technical Board Logo.png',
        '/logo/DMP logo.png',
        '/logo/dncc logo.png',
        '/logo/aiub logo.png',
        '/logo/BDHPA logo.png',
        '/logo/BPDB logo.png',
        '/logo/Islami Bank Logo.png',
        '/logo/Dhaka Polytechnic Logo.png',
        '/logo/DIU logo.png',
        '/logo/Canadian University of Bangladesh.png',
        '/logo/EWU logo.png',
        '/logo/north-south-university-seeklogo.png',
        '/logo/NU logo.png',
        '/logo/ULAB logo.png',
        
    ]
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3">
        
        {logo.map((imageUrl, index) => (
                    <div key={index} className="w-[50px] flex flex-col justify-center w-1/2 lg:w-full mx-auto h-44">
                        <Image width={150} height={150} src={imageUrl} alt={`Logo ${index}`} className="mx-auto" />
                    </div>
                ))}
            </div>
            );
};

export default Working;