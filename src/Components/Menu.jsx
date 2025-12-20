import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router'
// import Menu from '@mui/icons-material/Menu'

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="flex cursor-pointer items-center rounded-full bg-rose-700 p-1 text-2xl font-bold text-white">
        <IoMenu />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              to={'/featured'}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Featured Movies
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={'/new-arrival'}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              New Arrival
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Contact
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
