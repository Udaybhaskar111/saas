import styles from './Lower.module.scss'

export const Lowerbody=()=>{
  return (
    <div className={styles.container}>
        <div className={styles.headingContainer}>
            <h1 className={styles.heading}>
            Speakers at SaaSmosphere    
            </h1>
        </div>
        <div className={styles.imgTextContainer}>
            <div className={styles.cardContainer}>
                <img src="https://saasmosphere.com/Images/raja1.svg"></img>
                <div className={styles.imageContent}>
                    <h1 className={styles.presonName}>Raj N Phani</h1>
                    <p className={styles.personDesgnation}>Founder & Chairman, Zaggle</p>
                </div>
            </div>
            <div className={styles.paragraphContent}>
                <p className={styles.pargraphText}>Raj N is a versatile entrepreneur with over 25 years of experience across various sectors including financial services, retail, and fintech. As the Founder and Chairman of Zaggle, he has significantly contributed to digitizing company expenses and payment processes. A five-time startup founder and an active angel investor, he has supported over 34 companies and has most recently taken Zaggle to IPO. Raj is also a prominent figure in the startup ecosystem, having authored a book on Hyderabad's entrepreneurs and being involved in entrepreneurial programs and initiatives.</p>
            </div>
        </div>
        <div className={styles.imgTextContainer}>
            <div className={styles.paragraphContent1}>
                <p className={styles.pargraphText}>Vijay Rayapati, a seasoned serial entrepreneur, began his journey with Amnigos Technologies and progressed to leading roles at Giza Network and Kuliza Technologies. He co-founded Minjar Cloud Solutions, known for its pioneering cloud technology, which was acquired by Nutanix Inc for around $50 million. Currently, he is the CEO of Atomicwork and an active investor and advisor in the B2B tech startup space. His philanthropic efforts focus on education and elderly care in his hometown.</p>
            </div>
            <div className={styles.cardContainer}>
                <img src="https://saasmosphere.com/Images/vijay.svg"></img>
                <div className={styles.imageContent}>
                <h1 className={styles.presonName}>Vijay Rayapati</h1>
                <p className={styles.personDesgnation}>CEO, Atomic Work</p>
                </div>
            </div>
        </div>
        <div className={styles.imgTextContainer}>
            <div className={styles.cardContainer}>
                <img src="https://saasmosphere.com/Images/ashok1.svg"></img>
                <div className={styles.imageContent}>
                <h1 className={styles.presonName}>Ashok Gudibandla</h1>
                <p className={styles.personDesgnation}>Founder & CEO, Automate.io</p>
                </div>
            </div>
            <div className={styles.paragraphContent}>
                <p className={styles.pargraphText}>Ashok is an innovative product strategist who founded Automate.io, scaling it to 40,000 active customers before its acquisition by Notion. With over a decade in entrepreneurship, he emphasizes creating cutting-edge products with distinct branding. His journey is marked by significant learnings in product development and brand positioning, and he is passionate about embarking on new ventures with like-minded professionals.</p>
            </div>
        </div>
        <div className={styles.registerContainer}>
            <h1>Register with us! Click below</h1>
            <p className={styles.registrParagraph}>On Sat, 06 Jan 2024, from 4 to 8:30 PM at T-Hub, Hyderabad</p>
            <button>register now</button>
        </div>
    </div>
  )
}
