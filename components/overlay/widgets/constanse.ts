export type SOCIALType = {
  icon: "vk" | "max" | "tg";
  bg: string;
  link: string | undefined;
};
export const link_list: SOCIALType[] = [
  { icon: "tg", bg: "#0088cc", link: process.env.NEXT_PUBLIC_TG_LINK },
  { icon: "max", bg: "#6F2FD1", link: process.env.NEXT_PUBLIC_MAX_LINK },
  // { icon: "vk", bg: "#0077FF", link: process.env.NEXT_PUBLIC_VK_LINK },
];
