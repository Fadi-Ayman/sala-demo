import { useNavigate } from "react-router-dom";

export type CardType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
};

function Card({ icon, title, description, href }: CardType) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => !!href && navigate(href)}
      className="group flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 "
    >
      <div className="text-logo">{icon}</div>

      {/* Applying hover effect to h3 */}
      <h3 className="mt-4 text-sm md:text-base text-gray-500/80 font-bold group-hover:text-green-500">
        {title}
      </h3>
      <p className="mt-2 text-center hidden md:block text-sm text-gray-400 px-2 ">{description}</p>
    </button>
  );
}

export default Card;
