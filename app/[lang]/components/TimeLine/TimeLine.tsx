import styles from "./TimeLine.module.css";

export default function TimeLine({data}: {data: any}){
    return (
        <div className={styles.timeline}>
            {data.map((item:any, index:any) => (
                <div className={styles.checkpoint} key={index}>
                    <div>
                        <h2>{item.date}</h2>
                        <p>{item.info}</p>
                    </div>
                </div>
            ))}
        </div>
        
    );
}