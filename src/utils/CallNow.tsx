import { FaPhoneAlt } from "react-icons/fa";

function CallNow() {
  return (
    <div className="fixed right-5 bottom-30 z-90">
      <div className="bg-white rounded-full shadow-lg hover:scale-90 transition duration-300">
        <a
          href="tel:+447848930217"
          className="p-3 flex items-center justify-center"
        >
          <svg width="30" height="30" viewBox="0 0 16 16">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6DBE45" />
                <stop offset="50%" stopColor="#3A9D23" />
                <stop offset="100%" stopColor="#1E7A1E" />
              </linearGradient>
            </defs>
            <FaPhoneAlt
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

export default CallNow;
