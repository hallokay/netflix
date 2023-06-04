// icons
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
export {
  IoPlayCircleSharp,
  AiOutlinePlus,
  RiThumbUpFill,
  RiThumbDownFill,
  BiChevronDown,
  BsCheck,
};

// navLink
export const navLinks = [
  { name: "Home", link: "/home" },
  { name: "TV Shows", link: "/tv" },
  { name: "Movies", link: "/movies" },
  { name: "My List", link: "/mylist" },
];
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3/'