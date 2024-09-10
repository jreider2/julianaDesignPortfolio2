import overviewStyles from "../useCaseGenerics/overview.module.css";

const overviewTextP1= "Freelance copywriters often find themselves producing high volumes of content on uninspiring topics, diverting time from more meaningful projects.";
const overviewTextP2= <>In response to this disconnect, I led the design of Thoughtfilter. This tool streamlines content marketing workflows through advanced AI and optimized content editing techniques.</>;
const overviewTextP3= <>I designed the application, from ideation to the development of final prototypes. Thoughtfilter is now in development, poised to transform the daily routines of content marketers.</>

export const text = <>{overviewTextP1} <br/><br/> {overviewTextP2} <br/><br/> {overviewTextP3}</>;


export const takeaways = [
    <div><span className={`emphasis`}>Collaborative Synergy: </span>Reflecting on the continuous back-and-forth with the development team, I've come to appreciate how vital it is to sync design thinking with technical possibilities from the get-go. This collaboration wasn't just about making things easier; it was crucial in order to bring the design vision to life in a practical, functional way.</div>,

    <div><span className={`emphasis`}>Deep Dives into User Needs: </span>The extensive user interviews deepened my understanding of what content marketers truly need, guiding the tool’s design from the start to better suit their daily challenges. It was a reminder of how pivotal user research and domain knowledge is to crafting solutions that genuinely resonate.</div>,

    <div><span className={`emphasis`}>Evolving with Feedback: </span>The journey from initial concept to final design was filled with pivotal decisions, especially about aesthetics and user interface simplicity. Adapting our approach based on user feedback really highlighted the fluid nature of design, where you start with a design language that evolves, sometimes drastically, to meet real-world needs and preferences.</div>,
  ];