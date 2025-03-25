import overviewStyles from "../useCaseGenerics/overview.module.css";

const overviewTextP1= "In recent years, inflation has eroded many people's financial futures, while Bitcoin investors saw returns above 800%. Yet 82% of Americans have never invested in cryptocurrency.";

const overviewTextP4 = <>Canopy is designed to bridge this gap. Using behavioral science, and intuitive design, Canopy <span className={overviewStyles.emphasis}>empowers everyday people to invest in crypto</span> and confidently achieve their financial goals.
</>

export const text = <>{overviewTextP1} <br/><br/> {overviewTextP4}</>;


export const takeaways = [
    <div><span className={`emphasis`}>Write what you know. </span>I derived immense satisfaction from designing something that I could use as a developer. I relish applying the knowledge I've acquired from years of coding to create better and more intuitive dev tools. I'm eager to continue this work in the future!</div>,

    <div><span className={`emphasis`}>Refine focus. </span> When adding additional features, I would love to add more features with git newbies in mind. These features could include tooltips to guide first-time users through branching strategies. Tool tips could also help them develop a stronger understanding of key concepts, such as the difference between 'local' and 'remote', and other aspects that beginners find challenging.</div>,

    // <div><span className={`emphasis`}>User walk throughs. </span>To add further rigor to my design process, conducting follow up meetings with users to watch them step through prototypes, could give me insight into any current friction in the design.</div>,

    <div><span className={`emphasis`}>I wore multiple hats. </span>Deciding on a feature set is an slightly separate skill from UI and UX design. Upon reflection, I understand that typically this responsibility may fall to the product manager. That said, to have a additionally robust mental model of standard user workflows and use cases is a major advantage when designing holistically.</div>,

    <div><span className={`emphasis`}>Look to the horizon. </span> I would love to integrate 'nice to have' features that were initially excluded from the MVP, which I believe would benefit both new and power git users. These include AI-generated suggestions for commit messages and branch names, integrations with ticketing platforms, and even a merge conflict resolution tool directly within the application. </div>,
  ];

   