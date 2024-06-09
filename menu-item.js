import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  return (
    <li className="mb-2">
      <div 
        className="flex items-center justify-between p-2 bg-gray-200 rounded cursor-pointer menu-item hover:bg-gray-300"
        onClick={() => handleToggleChildren(item.label)}
      >
        <p className="font-semibold text-gray-800">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span>
            {displayCurrentChildren[item.label] ? <FaMinus color="#000" size={20} /> : <FaPlus color="#000" size={20} />}
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <div className="ml-4">
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
}
