import overviewStyles from "../useCaseGenerics/overview.module.css";

const overviewTextP1= "When programming, the last thing software engineers want to worry about is how to avoid mistakes when committing and versioning code.";
const overviewTextP2= <>
    <span className={overviewStyles.emphasis}> That’s where Comet comes in.</span>
</>;
const overviewTextP3= <> Comet is a source code management tool designed to replace the traditional git command line interface (CLI). It addresses typical challenges developers face when versioning. Comet makes versioning
    <span className={overviewStyles.emphasis}> faster, easier to learn, and less prone to errors</span>.
</>

export const text = <>{overviewTextP1} <br/><br/> {overviewTextP2} <br/><br/> {overviewTextP3}</>;


export const takeaways = [
    <div><span className={`emphasis`}>Write what you know. </span>I derived immense satisfaction from designing something that I could use as a developer. I relish applying the knowledge I've acquired from years of coding to create better and more intuitive dev tools. I'm eager to continue this work in the future!</div>,

    <div><span className={`emphasis`}>Refine focus. </span> When adding additional features, I could choose features with git newbies in mind. These features could include tooltips to guide first-time users through branching strategies. Tool tips could also help them develop a stronger understanding of key concepts, such as the difference between 'local' and 'remote' repositories, and other aspects that beginners find challenging.</div>,

    <div><span className={`emphasis`}>User walk throughs. </span>To add further rigor to my design process, conducting follow up meetings with users to watch them step through prototypes, could give me insight into any current friction in the design.</div>,

    <div><span className={`emphasis`}>I wore multiple hats. </span>Deciding on a feature set is an slightly separate skill from UI and UX design. Upon reflection, I understand that typically this responsibility may fall to the product manager. That said, to have a additionally robust mental model of standard user workflows and use cases is a major advantage when designing holistically.</div>,

    <div><span className={`emphasis`}>Look to the horizon. </span> I would love to integrate 'nice to have' features that were initially excluded from the MVP, which I believe would benefit both new and power git users. These include AI-generated suggestions for commit messages and branch names, integrations with ticketing platforms, and even a merge conflict resolution tool directly within the application. </div>,
  ];