import React from 'react';
import Image from "next/image";
import Link from "next/link";

import categoryList from "@/components/StaticData/CourseList";
import freeCategoryList from '../StaticData/FreeCousrseList';

const CategoryListCard = ({type}) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-10 py-10">
        {type == 'free' ? (
        freeCategoryList.map((category) => (
          <div key={category.id} className="flex justify-center items-center text-center">
            <Link href={`/free_category/by_id/${category.id}`}>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image width={50} height={50} src={category.image} alt={category.name} />
                </div>
                <div>
                  <h3>{category.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        categoryList.map((category) => (
          <div key={category.id} className="flex justify-center items-center text-center">
            <Link href={`/category/by_id/${category.id}`}>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image width={50} height={50} src={category.image} alt={category.name} />
                </div>
                <div>
                  <h3>{category.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default CategoryListCard