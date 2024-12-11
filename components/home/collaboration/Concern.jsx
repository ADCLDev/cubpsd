'use client';
import Image from "next/image";
import Link from "next/link";
import { fetchCompanies } from "../../../utils/api";
import { useEffect, useState } from "react";

const Concern = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCompanies("concern");
      console.log('data:', data);
      setCompanies(data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3">
      {companies.map((company) => (
        <div
          key={company.id}
          className="flex flex-col justify-center w-1/2 lg:w-full mx-auto h-44"
        >
          <Link href={company.website_link} target="_blank">
            <Image
              width={200}
              height={200}
              src={company.logo_image_url}
              alt={company.name}
              className="mx-auto cursor-pointer"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Concern;