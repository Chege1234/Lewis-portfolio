import Portfolio from "@/pages/Portfolio";

export const metadata = {
  title: "Lewis Chege — Software Developer",
  description:
    "Lewis Chege is a software developer based in Nairobi, building elegant, high-performance web applications.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <Portfolio />;
}
