import overviewStyles from "../useCaseGenerics/overview.module.css";

const overviewTextP1 = "Mentra is a seed-stage, YC-backed startup building MentraOS, the app store for smart glasses. The platform allows users to discover, install, manage, and control apps on their smart glasses, while also providing comprehensive device settings management.";

const overviewTextP4 = <>As the designer for this end-to-end product overhaul, I worked closely with the founding team to <span className={overviewStyles.emphasis}>create the first comprehensive smart glasses app ecosystem</span> that makes managing wearable technology intuitive and powerful.
</>

export const text = <>{overviewTextP1} <br/><br/> {overviewTextP4}</>;

export const takeaways = [
    <div><span className={`emphasis`}>Wearable UX challenges. </span>Designing for smart glasses introduced unique challenges around limited screen real estate, and interaction paradigms.</div>,

    <div><span className={`emphasis`}>App ecosystem design. </span>Creating an app store for smart glasses meant designing both the discovery experience and the management interface. This required understanding how users browse, install, and control apps in a wearable context.</div>,

    <div><span className={`emphasis`}>Device integration complexity. </span>Working with smart glasses hardware meant considering how the app store connects to device settings, permissions, and system-level controls. This required deep collaboration with engineering teams.</div>,

    <div><span className={`emphasis`}>Emerging technology UX. </span>Smart glasses represent a new computing platform, so there were few established patterns to follow. This required extensive user research and iterative design to create intuitive experiences.</div>,

    <div><span className={`emphasis`}>Cross-platform considerations. </span>The app store needed to work across different smart glasses brands and operating systems, requiring flexible design patterns that could adapt to various hardware capabilities.</div>,
]; 