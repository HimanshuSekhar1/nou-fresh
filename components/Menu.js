import React from 'react'
import Link from 'next/link';
import { BsChevronDown } from "react-icons/bs" 

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Explore", subMenu: true },
  { id: 4, name: "Plans", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

function Menu({ showCatMenu, setshowCatMenu }) {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? 
              <li className='cursor-pointer flex items-center gap-2 relative'
                onMouseEnter={() => setshowCatMenu(true)}
                onMouseLeave={() => setshowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />
                {showCatMenu && (
                  <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg'>
                    {subMenuData.map((subMenu) => {
                      return (
                        <Link key={subMenu.id} href='/' onClick={() => setshowCatMenu(false)}>
                          <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
                            {subMenu.name}
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </li> : (
              <li className='cursor-pointer'>
                <Link href= {item?.url}>
                  {item.name}
                </Link>
              </li>
            )} 
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default Menu