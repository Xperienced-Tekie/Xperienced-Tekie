import Link from "next/link";

const Button = ({ name, svg, link }) => {
  const params =
    "rounded-xl bg-pink-200 border-blue-900 text-black border-4 pl-2 mt-5";
  return (
    <Link href={link}>
      <button className={params}>
        <b> {name} </b>
        {svg}
      </button>
    </Link>
  );
};

export default Button;
