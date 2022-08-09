import Link from "./Link";

export default function Header() {
  return (
    <div className="bg-teal-400 flex justify-between py-1 px-2 sm:px-4">
      <div className="text-white py-2 font-medium text-xl px-1">
        Keiwords Tools
      </div>
      <div className="flex">
        <Link icon="fab fa-facebook" />
        <Link icon="fab fa-twitter" />
        <Link icon="fab fa-linkedin-in" />
        <Link icon="fab fa-instagram" />
      </div>
    </div>
  );
}
