import Styles from "./WeatherMainInfo.module.css" 

export default function WeatherMainInfo({ weather }) {
    return (
      <div className={Styles.mainInfo}>
        <div className={Styles.city}>{weather?.location.name}</div>
        <div className={Styles.country}>{weather?.location.country}</div>
        <div className={Styles.row}>
          <div>
            <img
              src={`http:${weather?.current.condition.icon}`}
              width="128"
              alt={weather?.current.condition.text}
            />
          </div>
          <div className={Styles.weatherConditions}>
            <div className={Styles.condition}>{weather?.current.condition.text}</div>
            <div className={Styles.current}>{weather?.current.temp_c}º</div>
          </div>
        </div>
        <iframe 
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14468692.480013153!2d${weather?.location.lon}84!3d${weather?.location.lat}3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1682633083038!5m2!1ses!2sar`}
        width="100%" 
        height="450" 
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">    
        </iframe>
      </div>
    );
  }
  