import { advantages } from "@/data/home";

export default function Advantages() {
  return (
    <section className="luna-section">
      <div className="luna-container">
        <div className="luna-advantages">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="luna-advantage-item">
                <span className="luna-advantage-icon">
                  <Icon size={22} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}