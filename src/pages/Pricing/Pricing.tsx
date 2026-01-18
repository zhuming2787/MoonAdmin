import Title from "antd/es/typography/Title";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.pricingContainer}>
      <Title level={3}>定价</Title>

      {/* 三列卡片布局 */}
      <main className={styles.pricingGrid}>
        {/* Basic 卡片 */}
        <div className={styles.Card}>
          <div className={styles.planName}>Basic</div>
          <div className={styles.planSubtitle}>Monthly Charge</div>
          <div className={styles.price}>$14.99</div>
          <hr className={styles.divider} />
          <div className={styles.featureList}>
            <div className={styles.featureAvailable}>Free Setup</div>
            <div className={styles.featureAvailable}>Bandwidth Limit 10 GB</div>
            <div className={styles.featureAvailable}>20 User Connection</div>
            <div className={styles.featureUnavailable}>Analytics Report</div>
            <div className={styles.featureUnavailable}>Public API Access</div>
            <div className={styles.featureUnavailable}>Plugins Integration</div>
            <div className={styles.featureUnavailable}>
              Custom Content Management
            </div>
          </div>
          <hr className={styles.divider} />
          <button className={styles.getStartedButton}>Get Started</button>
          <div className={styles.freeTrialLink}>
            Start Your 30 Day Free Trial
          </div>
        </div>

        {/* Standard 卡片（结构可复用 Basic） */}
        <div className={styles.Card}>
          <div className={styles.planName}>Standard</div>
          <div className={styles.planSubtitle}>Monthly Charge</div>
          <div className={styles.price}>$49.99</div>
          <hr className={styles.divider} />
          <div className={styles.featureList}>
            <div className={styles.featureAvailable}>Free Setup</div>
            <div className={styles.featureAvailable}>Bandwidth Limit 10 GB</div>
            <div className={styles.featureAvailable}>20 User Connection</div>
            <div className={styles.featureAvailable}>Analytics Report</div>
            <div className={styles.featureAvailable}>Public API Access</div>
            <div className={styles.featureUnavailable}>Plugins Integration</div>
            <div className={styles.featureUnavailable}>
              Custom Content Management
            </div>
          </div>
          <hr className={styles.divider} />
          <button className={styles.getStartedButton}>Get Started</button>
          <div className={styles.freeTrialLink}>
            Start Your 30 Day Free Trial
          </div>
        </div>

        {/* Premium 卡片（结构可复用 Basic） */}
        <div className={styles.Card}>
          <div className={styles.planName}>Premium</div>
          <div className={styles.planSubtitle}>Monthly Charge</div>
          <div className={styles.price}>$89.99</div>
          <hr className={styles.divider} />
          <div className={styles.featureList}>
            <div className={styles.featureAvailable}>Free Setup</div>
            <div className={styles.featureAvailable}>Bandwidth Limit 10 GB</div>
            <div className={styles.featureAvailable}>20 User Connection</div>
            <div className={styles.featureAvailable}>Analytics Report</div>
            <div className={styles.featureAvailable}>Public API Access</div>
            <div className={styles.featureAvailable}>Plugins Integration</div>
            <div className={styles.featureAvailable}>
              Custom Content Management
            </div>
          </div>
          <hr className={styles.divider} />
          <button className={styles.getStartedButton}>Get Started</button>
          <div className={styles.freeTrialLink}>
            Start Your 30 Day Free Trial
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
