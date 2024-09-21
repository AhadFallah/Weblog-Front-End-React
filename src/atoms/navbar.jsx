import { atom } from "recoil";

const NavbarAtom = atom({
  key: 'navbar', // unique ID (with respect to other atoms/selectors)
  default: {'homeActive':true,'categoryActive':false,'tagActive':false,'contactUsActive':false,'Login':false,'title':'روزمره بلاگ'}, // default value (aka initial value)
});
export default NavbarAtom;