import { FaWhatsapp } from "react-icons/fa";

function GetInTouch() {
  return (
    <div className="fixed right-5 bottom-10 z-90">
      <div className="bg-white rounded-full hover:scale-90">
        <a
          href="https://wa.me/447848930217"
          target="_blank"
          className="p-2 flex items-center justify-center"
        >
          <svg width="40" height="40" viewBox="0 0 16 16">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6DBE45" />
                <stop offset="50%" stopColor="#3A9D23" />
                <stop offset="100%" stopColor="#1E7A1E" />
              </linearGradient>
            </defs>
            <FaWhatsapp
              width={24}
              height={24}
              style={{ fill: "url(#gradient)" }}
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default GetInTouch;
