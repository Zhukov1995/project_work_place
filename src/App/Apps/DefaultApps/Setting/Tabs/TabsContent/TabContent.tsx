import DisplaySection from "../TabsSections/DisplaySection/DisplaySection";
import AppsSection from "../TabsSections/AppsSection/AppsSection";
import ThemeSection from "../TabsSections/ThemeSection/ThemeSection";
import InfoSection from "../TabsSections/InfoSection/InfoSection";
import LanguageSection from "../TabsSections/LanguageSection/LanguageSection";

const TabContent = ({ selectedTab }: { selectedTab: number }) => {
    switch (selectedTab) {
        case 0:
            return <DisplaySection />;
        case 1:
            return <AppsSection />
        case 2:
            return <ThemeSection />;
        case 3:
            return <LanguageSection />;
        case 4:
            return <InfoSection />
        default:
            return <DisplaySection />;
    }
};

export default TabContent