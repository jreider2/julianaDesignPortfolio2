import overviewStyles from "../useCaseGenerics/overview.module.css";
import styles from "../convoscope/useCase.module.css";
import boarderStyles from "../useCaseGenerics/boarder.module.css"
import Image from "next/image";

// constants/convoscopeConstants.js
export const takeaways = [
    <div><span className={`emphasis`}>Go slow to go fast. </span>For my next project, I resolve to use reusable components in Figma earlier in the design process. At the right moment, taking the time to create well chosen components will pay-off in spades later.</div>,

    <div><span className={`emphasis`}>Validate the feature set and challenge it when appropriate. </span>For example, Speaker Mode might add undesirable cognitive load to a speaker who is curating the ConvoScope content while simultaneously giving the lecture. Given more time, gathering more data around this, and other alternatives, could be fruitful to create a better product in the long run.</div>,

    <div><span className={`emphasis`}>Refine tooling. </span>I used Adobe After Effects to create the moving assets. It is a powerful tool but a bit clunky. Therefore, I might try X for more simple tooling in the future.</div>,

    <div><span className={`emphasis`}>I learned how to fish. </span>It was tricky to handoff the animation assets. Through a series of onerous experiments we discovered that gifs are too low quality, MP4s don't support transparency, Lottie files do not support blending modes or complex gradients, and animated svg doesn't support complex gradients. In the end we resorted to animated PNGs. In the future I would start there ;).</div>,

    <div><span className={`emphasis`}>Start with the essential. </span>For this project, I started by designing the desktop app. Next step will be to design the smart glasses app. In future, it could be better to begin with the more limited interface (e.g. the smart glasses) in order to discern what are the most essential features for the product. I suspect that it can be more straightforward to adapt from a limited interface to a more expansive one, rather than vice versa. </div>,
  ];
  

const overviewTextP1= "Students in the MIT Media Lab wanted more information at their fingertips when having conversations with peers, and when listening to research presentations.";
const overviewTextP2= <>I paired with researchers at MIT media lab to create a tool to aid in
    <span className={overviewStyles.emphasis}> seamlessly surfacing additional information during lab meetings.</span>
</>;
const overviewTextP3= <> I worked on the end-to-end design of the desktop application.<br/><br/> Our app was presented and used at MIT, 
    <span className={overviewStyles.emphasis}> meaningfully improved the quality of research conversations, </span>
    and is currently being adapted for use with AR by Team Open Smart Glasses.
</>

export const overviewTextFull= <>{overviewTextP1} <br/><br/> {overviewTextP2} <br/><br/> {overviewTextP3}</>;

import borderLinePng from '/public/images/line-8.png';

export const boarder = <div className={`${styles.borderSize} ${boarderStyles.boarderContainer}`}>
        <Image src={borderLinePng} fill sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "top" }} />
    </div>

export const boarder2 = <div className={`${styles.borderSize} ${boarderStyles.boarderContainer2}`}>
    <Image src={borderLinePng} fill sizes="100vw"
style={{ objectFit: "cover", objectPosition: "top" }} />
</div>